<template>
  <div>
    <ElTooltip
      effect="dark"
      content="Top Left prompts info"
      placement="top-start"
      :enterable="false"
    >
      <ElButton @click="handleClick">??</ElButton>
    </ElTooltip>
    <ElDialog append-to-body :visible.sync="visible" :close-on-click-modal="false">
      <template v-slot:footer>
        <ElButton>??</ElButton>
      </template>
    </ElDialog>-->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, PropSync, Vue } from "vue-property-decorator";

@Component
export default class Dialog extends Vue {
  visible = false;

  mounted() {
    //console.log("子供コンポーネント");
  }

  handleClick() {
    //console.log(document.activeElement);
    this.visible = !this.visible;
    const onFOcus = document.getElementsByClassName("el-tooltip");
    (onFOcus.item(0) as HTMLElement).focus();
  }
}
</script>
