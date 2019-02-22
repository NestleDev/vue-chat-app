<template>
  <div class="chat-user-settings">
    <div class="chat-user-settings__wrap">
      <div class="chat-user-settings__photo-wrap">
        <div class="chat-user-settings__photo">
          <img src="../assets/2.jpg" alt class="chat-user-settings__img">
        </div>
      </div>
      <div class="chat-user-settings__name">Alex Nesvit</div>
    </div>
    <i class="fas fa-cog"></i>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.chat-user-settings {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: #342b46;
  cursor: pointer;
  position: relative;
  display: flex;
  color: #fff;
  align-items: center;
  &__wrap {
    display: flex;
    align-items: center;
  }
  &__photo-wrap {
    position: relative;
    &::before {
      content: "";
      display: flex;
      height: 6px;
      width: 6px;
      border-radius: 50%;
      background-color: #00ff7f;
      position: absolute;
      bottom: 4px;
      right: 2px;
    }
  }
  &__photo {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
  }
  &__info {
    margin-left: 20px;
    font-weight: 300;
  }
  &__name {
    font-size: 12px;
    margin-left: 10px;
  }

  .fa-cog{
    font-size: 18px;
    opacity: .5;
  }
}
</style>


