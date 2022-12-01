<template>
  <div>
  <div v-for="team in teamList" :key="team.id" class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ team.name }}</h5>
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
    }
  }
}
</script>

<style scoped>
.logo {
  width: 50%;
}
</style>