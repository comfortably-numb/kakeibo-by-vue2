<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <Notes @update:value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import {Component, Watch} from "vue-property-decorator";
import {model} from "@/model";

localStorage.setItem("version", "0.0.1");
const recordList: RecordItem[] = model.fetch();
@Component({
  components: {Types, Notes, NumberPad, Tags}
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: RecordItem[] = recordList;
  record: RecordItem[] = {
    tags: [], notes: "", type: "-", amount: 0
  };

  onUpdateNotes(value: string): void {
    this.record.notes = value;
  }

  onUpdateTags(value: string[]): void {
    this.record.tags = value;
  }

  saveRecord(): void {
    let newRecord: RecordItem = JSON.parse(JSON.stringify(this.record));
    newRecord.createdDate = new Date();
    this.recordList.push(newRecord);
  }

  @Watch("recordList")
  onRecordListChange(): void {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">

.layout-content {
  display: flex;
  flex-direction: column-reverse
}
</style>
