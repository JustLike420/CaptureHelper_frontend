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
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      re_password: ""
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