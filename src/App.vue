<template>
  <div id="app">
    <Nav />
    <TeamList />
    <router-view/>
    <Footer />
  </div>
</template>

<style>
@import "assets/css/bootstrap.css";
</style>

<script>
  import Nav from "./components/Nav";
  import Footer from "./components/Footer"
  import TeamList from "@/components/TeamList";
  export default {
    components: {TeamList, Nav, Footer}
  }
</script>