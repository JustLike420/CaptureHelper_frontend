<template>
  <div class="container col-md-4">
    <form @submit.prevent="setLogin" class="">
      <h1 class="h3 mb-3 fw-normal text-center">Вход</h1>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" v-model="username">
        <label for="floatingInput">Почта</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" v-model="password">
        <label for="floatingPassword">Пароль</label>
      </div>
      <div class="form-group d-flex flex-column flex-sm-row flex-wrap justify-content-center
      justify-content-sm-between align-items-center" v-if="errors.length">
        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
      </div>
      <div class="form-group d-flex flex-column flex-sm-row flex-wrap justify-content-center
      justify-content-sm-between align-items-center">
        <button class="btn btn-lg btn-primary" type="submit">Войти</button>
        <router-link :to="{name: 'SignUp' }" type="button" class="btn btn-lg btn-danger">Регистрация</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: "",
      errors: []
    };
  },

  created() {
    if (this.$store.state.isAuthenticated) {
      this.$router.push('/');
    }
  },
  methods: {
    setLogin(e) {
      const formData = {
        username: this.username,
        password: this.password
      }

      axios.post('http://127.0.0.1:8000/auth/token/login/', formData)
          .then(response => {
            const token = response.data.auth_token

            this.$store.commit('setToken', token)
            localStorage.setItem("auth_token", token)
            // axios.defaults.headers.common["Authorization"] = "Token " + token
            axios
                .get("http://127.0.0.1:8000/auth/users/me/", {
                      headers: {
                        Authorization: `Token ${token}`
                      }
                    }
                )
                .then(response => {
                  this.$store.commit('setUsername', response.data.username)
                  localStorage.setItem('username', response.data.username)
                  this.$router.push({name: "home"})
                })
                .catch(error => {
                  if (error.response) {
                    for (const property in error.response.data) {
                      this.errors.push(`${property}: ${error.response.data[property]}`)
                    }
                  } else if (error.message) {
                    this.errors.push('something went wrong. Please try again!')
                  }
                })
          }).catch(error => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(`${property}: ${error.response.data[property]}`)
              }
            } else if (error.message) {
              this.errors.push('something went wrong. Please try again!')
            }
          })
    }
  }
}
</script>

<style scoped>
</style>