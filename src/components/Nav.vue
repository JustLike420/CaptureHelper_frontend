<template>
  <div class="header">
    <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"><span
          class="fs-4">Capture helper</span>
      </a>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <router-link :to="{name: 'News' }" class="nav-link px-2 link-dark">Новости</router-link>
        </li>
        <li>
          <router-link :to="{name: 'TeamList' }" class="nav-link px-2 link-dark">Команды</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Top' }" class="nav-link px-2 link-dark">Топ</router-link>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <template v-if="$store.state.isAuthenticated">
          <!--                    <button @click="logout" type="button" class="btn btn-outline-primary me-2">ПРОФИЛЬ</button>-->
          <button type="button" class="btn btn-primary me-2 dropdown-toggle" data-bs-toggle="dropdown"
                  aria-expanded="false">ПРОФИЛЬ
            <font-awesome-icon icon="fa-solid fa-user"/>
          </button>
          <div class="dropdown-menu">
            <li><a class="dropdown-item" href="#">{{ this.$store.state.username }}</a></li>

            <div class="dropdown-divider"></div>
            <li><a class="dropdown-item" href="#">Мой профиль</a></li>
            <li><a class="dropdown-item" href="#">Моя команда</a></li>
            <li><a class="dropdown-item" href="#">Настройки</a></li>
            <li><a class="dropdown-item" @click="logout">Выход</a></li>
          </div>
        </template>
        <template v-else>
          <router-link :to="{name: 'SignIn' }" type="button" class="btn btn-outline-primary me-2">
            <font-awesome-icon icon="fa-solid fa-right-to-bracket"/>
          </router-link>
        </template>
      </div>
    </header>
  </div>
</template>

<script>
// font awesome icon login
import {library} from '@fortawesome/fontawesome-svg-core'
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

library.add(faRightToBracket, faUser)

export default {
  name: "Nav",
  computed: {
  },
  methods: {
    logout() {
      localStorage.removeItem("auth_token")
      localStorage.removeItem("username")
      window.location = '/'
    },
  }
}
</script>

<style scoped>

</style>