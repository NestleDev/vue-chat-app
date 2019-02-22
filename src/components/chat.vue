<template>
  <div class="chat">
    <div class="chat__sidebar">
      <chat-users></chat-users>
    </div>
    <div class="chat__content">
        
    </div>
  </div>
</template>

<script>
import chatUsers from "./chatUsers";

export default {
  components: {
    chatUsers
  }
};
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  height: 100%;
  overflow: hidden;
  background-color: rgba(#f0f2f4, 0.95);
  border-radius: 10px;
  &__sidebar {
    display: flex;
    flex-direction: column;
    width: 35%;
    background-color: #282136;
  }
  &__content {
    width: 65%;
  }
}
</style>


