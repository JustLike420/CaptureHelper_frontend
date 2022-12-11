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

      <div class="form-group d-flex flex-column flex-sm-row flex-wrap justify-content-center justify-content-sm-between align-items-center">
      <button class="btn btn-lg btn-primary" type="submit">Войти</button>
        <router-link :to="{name: 'SignUp' }" type="button" class="btn btn-lg btn-danger">Регистрация</router-link>
</div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    setLogin() {
      $.ajax({
        url: `http://127.0.0.1:8000/auth/token/login`,
        type: "POST",
        data: {
          username: this.username,
          password: this.password
        },
        success: (response) => {
          console.log(response.auth_token)
          alert("Спасибо что Вы с нами")
          sessionStorage.setItem("auth_token", response.auth_token)
          //       // this.$router.push({name: "home"})
          //     },
        },
        error: (response) => {
          console.log(response)
          if (response.status === 400) {
            alert("Логин или пароль не верен")
          }
        }
      })
    },

    // setLogin(e) {
    //   const formData = {
    //     username: this.username,
    //     password: this.password
    //   }
    //   axios.post('http://127.0.0.1:8000/auth/token/login', formData)
    //       .then(response => {console.log(response)})
    //
    //
    // }
  }
}
</script>

<style scoped>
</style>