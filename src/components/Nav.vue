<template>
  <div class="nav">
    <router-link to="/money">记账</router-link>
    <svg>
      <use xlink:href="#money" />
    </svg>
    |
    <router-link to="/labels">标签</router-link>
    <svg>
      <use xlink:href="#labels" />
    </svg>

    |
    <router-link to="/statistics">统计</router-link>
    <svg>
      <use xlink:href="#statistics" />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>
