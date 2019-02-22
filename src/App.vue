<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import chat from "./components/chat";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    chat
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,600");

html,
body {
  margin: 0;
  height: 100%;
}

body {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}

#app {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  background: #dddddd; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #dddddd 0%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #834cff 38%,
    #834cff 39%,
    #834cff 39%,
    #834cff 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #dddddd 0%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #834cff 38%,
    #834cff 39%,
    #834cff 39%,
    #834cff 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #dddddd 0%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 37%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #dddddd 38%,
    #834cff 38%,
    #834cff 39%,
    #834cff 39%,
    #834cff 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dddddd', endColorstr='#834cff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a {
  color: #42b983;
}

img {
  max-width: 100%;
}

* {
  box-sizing: border-box;
}

input {
  border: 1px solid transparent;
  width: 100%;
  padding: 10px;
  color: #fff;
  outline: none;
}
::-webkit-input-placeholder {
  font-style: italic;
}

.container {
  height: 80%;
  max-width: 980px;
  width: 95%;
}
</style>
