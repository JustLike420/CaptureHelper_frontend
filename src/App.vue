<template>
  <div id="app" class="container">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
@import "assets/css/bootstrap.css";

.logo {
  width: 50%;
}

</style>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import './assets/js/bootstrap'
import axios from "axios";

export default {
  components: {Nav, Footer},
  beforeCreate() {
    this.$store.commit('initializeSite')
    const token = this.$store.state.token
    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  },
}
</script>