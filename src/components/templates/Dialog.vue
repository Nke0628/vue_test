<template>
  <div>
    <ElTooltip
      effect="dark"
      content="Top Left prompts info"
      placement="top-start"
    >
      <ElButton @click="visible = !visible">??</ElButton>
    </ElTooltip>
    <ElDialog append-to-body :visible.sync="visible">
      <template v-slot:footer>
        <ElButton>??</ElButton>
      </template>
    </ElDialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, PropSync, Vue } from 'vue-property-decorator';

@Component
export default class Dialog extends Vue {
  visible = false;
}
</script>
