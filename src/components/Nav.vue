<template>
  <nav>
    <router-link to="/money" class="nav-item" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>
    <router-link to="/labels" class="nav-item" active-class="selected">
      <Icon name="labels" />
      标签
    </router-link>
    <router-link to="/statistics" class="nav-item" active-class="selected">
      <Icon name="statistics" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "@/components/Icon.vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;
  > .nav-item {
    padding: 2px 0;
    width: 33.3333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 30px;
      height: 30px;
    }
  }
  > .nav-item.selected {
    color: $color-highlight;
  }
}
</style>
