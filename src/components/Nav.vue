<template>
  <div class="header">
    <header>
      <nav class="navbar navbar-expand-lg bg-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{name: 'TeamList' }" class="nav-link" href="#">Команды</router-link>
            <template v-if="auth">
              <button @click="logout" class="nav-link">Выход</button>
            </template>
            <template v-else>
              <router-link :to="{name: 'SignIn' }" class="nav-link">Вход</router-link>
              <router-link :to="{name: 'SignUp' }" class="nav-link">Регистрация</router-link>
            </template>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    auth() {
      if (sessionStorage.getItem("auth_token")) {
        return true
      }
    }
  },
  methods: {
    logout() {
      sessionStorage.removeItem("auth_token")
      window.location = '/'
    }
  }
}
</script>

<style scoped>

</style>