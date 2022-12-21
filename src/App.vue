<template>
  <div>
    <router-view />
    <hr />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/helper.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  line-height: 1.5;
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #233;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
