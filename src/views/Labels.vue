<template>
  <div>
    <Layout>
      <ol class="tags">
        <li><span>衣</span>
          <Icon name="right"></Icon>
        </li>
        <li><span>食</span>
          <Icon name="right"></Icon>
        </li>
        <li><span>住</span>
          <Icon name="right"></Icon>
        </li>
        <li><span>行</span>
          <Icon name="right"></Icon>
        </li>
      </ol>
      <div>
        <button>
          新建标签
        </button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Labels",
});
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
  }
}
</style>
