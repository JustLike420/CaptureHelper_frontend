<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
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
  export default {
    components: {Nav, Footer}
  }
</script>