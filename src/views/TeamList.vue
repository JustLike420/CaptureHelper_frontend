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
      <div @click="loadMoreTeams()" ref="observer" class="observer">Показать еще</div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "TeamList",
  data() {
    return {
      teamList: [],
      page: 1,
      total: 0,
      search_term: '',
    }
  },
  created() {
    this.loadListTeams()
  },
  methods: {
    async loadListTeams() {
      await axios
        .get(`${this.$store.getters.getServerUrl}/team/?page=${this.page}`)
        .then(response => {
          this.teamList = response.data.results
          this.page += 1
        })
        .catch(error => {
          console.log(error)
        })
    },
    goTo(id) {
      this.$router.push({name: 'TeamSingle', params: {id: id}})
    },
    async loadMoreTeams() {
      await axios
        .get(`${this.$store.getters.getServerUrl}/team/?page=${this.page}`)
        .then(response => {
          this.teamList = [...this.teamList, ...response.data.results]
          console.log(this.teamList)
          this.page += 1
        })
        .catch(error => {
          console.log(error)
        })

    }
  },
}
</script>

<style scoped>

</style>