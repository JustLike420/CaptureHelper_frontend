<template>
<div>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <a href="#""><h5 class="card-title">{{ team.name }}</h5></a>
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
  name: "TeamSingle",
  props: ['id'],
  data() {
    return{
      team: {}
    }
  },
  created() {
    this.loadTeam()
  },
  methods: {
    async loadTeam(){
      this.team = await fetch(
          `${this.$store.getters.getServerUrl}/team/${this.id}`
      ).then(response => response.json())
      console.log(this.team)
      console.log(this.id)
    }
  }
}
</script>

<style scoped>

</style>