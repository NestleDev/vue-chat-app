<template>
  <div class="chat-filter">
    <input
      type="text"
      class="chat-filter__input"
      placeholder="Seach people"
      v-model="filter"
      @input="handlerInput"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: ""
    };
  },
  methods: {
    handlerInput() {
      console.log(this.filter);
      this.$emit('filterUsers', this.filter);
    }
  }
};
</script>

<style lang="scss">
.chat-filter {
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  &__input {
    border-radius: 5px;
    background-color: #342b46;
    font-weight: 300;
    &:focus {
      border: 1px solid #8d5cff;
    }
  }
}
</style>



