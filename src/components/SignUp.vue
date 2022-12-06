<template>
  <form @submit.prevent="setLogup">
    <h1 class="h3 mb-3 fw-normal">Регистрация</h1>

    <div class="form-floating">
      <input type="text" class="form-control" v-model="username">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" v-model="password">
      <label for="floatingPassword">Password</label>
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
  </form>
</template>
<script>
import $ from "jquery";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    setLogup() {
      $.ajax({
        url: `http://127.0.0.1:8000/auth/users/`,
        type: "POST",
        data: {
          username: this.username,
          password: this.password,
          re_password: this.password

        },
        success: (response) => {
          console.log(response)
          this.$router.push('SignIn')
        },
      })
    },
  }
}
</script>

<style scoped>

</style>