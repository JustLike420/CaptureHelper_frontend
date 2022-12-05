<template>
  <form @submit.prevent="setLogin">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="text" class="form-control" v-model="username">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" v-model="password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
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