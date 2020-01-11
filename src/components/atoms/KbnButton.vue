<template>
  <button
    :class="classes"
    :disabled="disabled"
    :type="type"
    @click="handleClick"
  >
  <slot></slot>
  </button>
</template>

<script lang="ts">

import { Component, Prop, Emit, PropSync, Vue } from 'vue-property-decorator';

@Component
export default class KbnButton extends Vue {
@Prop({default: 'button'})
type!: 'text' | 'button';

@Prop({ default: false })
disabled!: boolean;

@Emit('click')
handleClick(event: any) {
  return event;
}

get classes(): string {
  const cls = this.type === 'text' ? ('-' + this.type) : '';
  return `kbn-button${cls}`;
}

}

</script>

<style scoped>
.kbn-button{
  padding: .6em 1.3em;
}

.kbn-button-text{
  border:none;
  padding-right: 0;
  padding-left: 0;
}


</style>