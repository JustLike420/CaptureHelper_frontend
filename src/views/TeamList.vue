<template>
  <div>
    <div v-for="team in teamList" :key="team.id" class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <a href="#" @click="goTo(team.id)"><h5 class="card-title">{{ team.name }}</h5></a>
          </div>
        </div>
        <div class="col-md-4">
          <img :src="team.logo" class="img-fluid rounded-start logo" alt="...">
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "TeamList",
  data() {
    return {
      teamList: []
    }
  },
  created() {
    this.loadListTeams()
  },
  methods: {
    async loadListTeams() {
      this.teamList = await fetch(
          `${this.$store.getters.getServerUrl}/team`
      ).then(response => response.json())
    },
    goTo(id) {
      this.$router.push({ name: 'TeamSingle', params: {id:id} })
    }
  }
}
</script>

<style scoped>

</style>