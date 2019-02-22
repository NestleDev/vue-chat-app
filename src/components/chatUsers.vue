<template>
  <div class="chat-users">
    <div class="chat-users__header">
      <chat-filter @filterUsers="setFilter"></chat-filter>
    </div>
    <div class="chat-users__category">Other contacts ({{countUsers}})</div>
    <ul class="chat-users__list">
      <li class="chat-users__item" v-for="user in filteredUsers">
        <chat-user :user="user"></chat-user>
      </li>
    </ul>
    <div class="chat-users__footer">
      <chat-user-settings></chat-user-settings>
    </div>
  </div>
</template>

<script>
import chatUser from "./chatUser";
import chatUserSettings from "./chatUserSettings";
import chatFilter from "./chatFilter";

export default {
  data() {
    return {
      filter: "",
      users: [
        {
          name: "Alexander Nesvit",
          lastMessage: "Hello, Nick"
        },
        {
          name: "Alexander Jonson",
          lastMessage: "Hello, Nick"
        },
        {
          name: "Nick Tello",
          lastMessage: "Hello, Nick"
        }
      ]
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => {
        return user.name.toLowerCase().includes(this.filter.toLowerCase());
      });
    },
    countUsers() {
      return this.filteredUsers.length;
    }
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
    }
  },
  components: {
    chatUser,
    chatUserSettings,
    chatFilter
  }
};
</script>

<style lang="scss" scoped>
.chat-users {
  flex: 1;
  display: flex;
  flex-direction: column;
  &__header {
    padding: 30px;
  }
  &__category {
    color: #989898;
    text-transform: uppercase;
    margin-left: 50px;
    margin-bottom: 20px;
  }
  &__list {
    flex: 1;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #8d5cff;
      border-radius: 5px;
    }
  }
  &__item {
    padding: 10px 10px 10px 40px;
  }
}
</style>



