<template>
  <div class="list-group w-auto align-items-center">
    <div v-for="(team, index) in teamList" :key="team.id" class="text-center list-group-item col-md-6"
         style="">
      <a @click="goTo(team.id)" class="row" style="text-decoration: none;color:black;">
        <h5 class="col-md-1 align-self-center">{{ index + 1 }}</h5>
        <h5 class="col-md-3 align-self-center">{{ team.name }}</h5>
        <div class="col-md-6"></div>
        <img :src="team.logo" class="col-md-6 rounded-circle" style="height: 90px; width: 90px">
      </a>
    </div>
    <div ref="observer" class="observer"></div>
  </div>
</template>

<script>
export default {
  name: "TeamList",
  data() {
    return {
      teamList: [],
      page: 2,
      total: 0
    }
  },
  created() {
    this.loadListTeams(this.page)
  },
  methods: {
    async loadListTeams() {
      this.teamList = await fetch(
          `${this.$store.getters.getServerUrl}/team?page=1`
      ).then(response => response.json())
          .then(response => {
            return response.results
          })
    },
    goTo(id) {
      this.$router.push({name: 'TeamSingle', params: {id: id}})
    },
    async loadMoreTeams(pageNumber) {
      await fetch(
          `${this.$store.getters.getServerUrl}/team?page=${pageNumber}`
      ).then((response) => {
        if (response.status === 404) {
          throw new Error("Bad response from server");
        }
        return response;
      }).then((returnedResponse) => returnedResponse.json())
          .then(response => {
                this.page += 1
                this.teamList = [...this.teamList, ...response.results]
                return response.results
              }
          )
    }
  },

  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        this.loadMoreTeams(this.page)
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  }
}
</script>

<style scoped>

</style>