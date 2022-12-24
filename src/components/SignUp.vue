<template>
  <div class="container col-md-4">
    <form @submit.prevent="setLogup">
      <h1 class="h3 mb-3 fw-normal text-center">Регистрация</h1>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" v-model="username">
        <label for="floatingInput">Почта</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" v-model="password">
        <label for="floatingPassword">Пароль</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" v-model="re_password">
        <label for="floatingPassword">Повторите пароль</label>
        <div class="form-group d-flex flex-column flex-sm-row flex-wrap justify-content-center
      justify-content-sm-between align-items-center" v-if="errors.length">
          <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
        </div>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      re_password: "",
      errors: []
    };
  },
  methods: {
    setLogup() {
      this.errors = []
      const formData = {
        username: this.username,
        password: this.password,
        re_password: this.re_password
      }
      axios.post('http://127.0.0.1:8000/auth/users/', formData)
          .then(response => {
            console.log(response)
            this.$router.push('SignIn')
          }).catch(error => {
        if (error.response) {
          for (const property in error.response.data) {
            this.errors.push(`${property}: ${error.response.data[property]}`)
          }
        } else if (error.message) {
          this.errors.push('something went wrong. Please try again!')
        }
      })
    },
  }
}
</script>

<style scoped>

</style>