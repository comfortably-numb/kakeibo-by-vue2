<template>
  <div>
    <router-view />
    <hr />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";

body {
  font-size: 16px;
  line-height: 1.5;
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #233;
}

</style>
