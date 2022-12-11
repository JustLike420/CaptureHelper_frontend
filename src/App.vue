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

export default {
  components: {Nav, Footer}
}
</script>