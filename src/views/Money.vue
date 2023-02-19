<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <div class="notes">
        <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
      </div>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import {Component, Watch} from "vue-property-decorator";
import {recordListModel} from "@/models/recordListModel";
import {tagListModel} from "@/models/tagListModel";

localStorage.setItem("version", "0.0.1");
const recordList = recordListModel.fetch();
tagListModel.fetch();
@Component({
  components: {Types, FormItem, NumberPad, Tags}
})
export default class Money extends Vue {
  tags = tagListModel.data;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [], notes: "", type: "-", amount: 0
  };

  onUpdateNotes(value: string): void {
    this.record.notes = value;
  }

  onUpdateTags(value: string[]): void {
    this.record.tags = value;
  }

  saveRecord(): void {
    let newRecord = recordListModel.clone(this.record);
    newRecord.createdDate = new Date();
    this.recordList.push(newRecord);
  }

  @Watch("recordList")
  onRecordListChange(): void {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">

.layout-content {
  display: flex;
  flex-direction: column-reverse
}
.notes{
  padding: 12px 0;
}
</style>
