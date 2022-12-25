<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad/>
      <Types/>
      <Notes/>
      <Tags :data-source.sync="tags"/>
    </Layout>
  </div>
</template>

<script>
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue"
import Tags from "@/components/Money/Tags.vue"
import Notes from "@/components/Money/Notes.vue"
import Types from "@/components/Money/Types.vue"

export default Vue.extend({
  name: "Money",
  components: {Types, Notes, NumberPad, Tags},
  data(){
    return {
      tags:["衣","食","住","行"]
    }
  }
});
</script>

<style lang="scss">

.layout-content {
  border: 3px solid red;
  display: flex;
  flex-direction: column-reverse
}
</style>
