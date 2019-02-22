<template>
  <div>
    <h1>chat page</h1>
    <div class="user">
      <img :src="user.photo_100" :alt="user.first_name" class="user__photo">
      <div class="user__name">{{user.first_name}} {{user.last_name}}</div>
    </div>
    <div class="users">
      <h2 class="users__title">Количество соединений ({{this.users.length}})</h2>
      <ul class="users__list">
        <li class="users__item" v-for="user in users">
          <img :src="user.photo_100" alt class="users__photo">
          <div class="user__name">{{user.first_name}} {{user.last_name}}</div>
        </li>
      </ul>
    </div>
    <button @click="logout">Выйти</button>
  </div>
</template>

<script>
import VKApi from "../API.VK";
import router from "../routes";
export default {
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        photo_100: ""
      },
      socket: null,
      users: []
    };
  },
  methods: {
    logout() {
      VKApi.remoke(() => {
        this.socket.close();
        router.push("/");
      });
    },
    initWS() {
      this.socket = new WebSocket("ws://localhost:8081");

      this.socket.onopen = () => {
        console.log("Соединение установлено.");
        this.socket.send(
          JSON.stringify({ type: "user.post", user: this.user })
        );
      };

      this.socket.onclose = function(event) {
        console.log("close", event);
        if (event.wasClean) {
          console.log("Соединение закрыто чисто");
        } else {
          console.log("Обрыв соединения"); // например, "убит" процесс сервера
        }
      };

      this.socket.onmessage = ({ data }) => {
        data = JSON.parse(data);
        console.log(data);
        switch (data.type) {
          case "users.get":
            this.users = data.users;
            break;
          case "connect":
            this.users.push(data.user);
            break;
          case "disconnect":
            const index = this.users.findIndex(
              user => user.id === data.user.id
            );

            this.users.splice(index, 1);
            break;
        }
      };

      this.socket.onerror = function(error) {
        alert("Ошибка " + error.message);
      };
    }
  },
  mounted() {
    VKApi.callApi("users.get", { fields: "photo_100" }).then(response => {
      this.user = response[0];
      this.initWS();
    });
  },
  beforeRouteEnter(to, from, next) {
    VKApi.login()
      .then(() => {
        next();
      })
      .catch(error => {
        console.log(error.message);
        router.push("/");
      });
  }
};
</script>

<style scoped>
</style>