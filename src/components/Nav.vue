<template>
  <div class="header">
    <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{name: 'TeamList' }" class="nav-link" href="#">Команды</router-link>
        </li>
      </ul>
    </nav>
</header>
  </div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

</style>