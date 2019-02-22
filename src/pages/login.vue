<template>
  <div>
    <h1>login page</h1>
    <button @click="login">Войти</button>
  </div>
</template>

<script>
import VKApi from "../API.VK";
import router from "../routes";

export default {
  methods: {
    login() {
     VKApi.auth()
        .then(state => {
          router.push("/chat");
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    VKApi.login()
      .then(() => {
        router.push("/chat");
      })
      .catch(error => {
        console.log(error.message);
        next();
      });
  }
};
</script>

<style scoped>
</style>