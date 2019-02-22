<template>
  <div class="chat-user">
    <div class="chat-user__photo-wrap">
      <div class="chat-user__photo">
        <img src="../assets/2.jpg" alt class="chat-user__img">
      </div>
    </div>
    <div class="chat-user__info">
      <h3 class="chat-user__name">{{user.name}}</h3>
      <span class="chat-user__last-message">{{user.lastMessage}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        user: Object
    }
};
</script>

<style lang="scss" scoped>
.chat-user {
  cursor: pointer;
  position: relative;
  display: flex;
  color: #fff;
  align-items: center;
  &__photo-wrap {
    position: relative;
    &::before {
      content: "";
      display: flex;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #00ff7f;
      position: absolute;
      bottom: 5px;
      right: 4px;
    }
  }
  &__photo {
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
  }
  &__info {
    margin-left: 20px;
    font-weight: 300;
  }
  &__name {
    font-size: 16px;
  }
}
</style>

