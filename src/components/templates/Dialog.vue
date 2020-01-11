<template>
  <div>
    <ElButton @click="visible=!visible">起動</ElButton>
    <ElDialog append-to-body :visible.sync="visible">
      <template v-slot:footer>
        <ElButton>保存</ElButton>
      </template>
    </ElDialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, PropSync, Vue } from "vue-property-decorator";

@Component
export default class Dialog extends Vue {
  visible = false;
}
</script>
