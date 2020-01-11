<template>
  <form novalidate>
    <div class="form-item">
      <label for="email">メールアドレス</label>
      <input 
       id="email"
       v-model="email"
       type="text"
       autocomplete="off"
       placeholder="例:kanaban@domain.com"
       @focus="resetError">
      <ul class="validation-errors">
        <li v-if="!validation.email.format"></li>
        <li v-if="!validation.email.required"></li>
      </ul>
    </div>
    <div class="form-item">
      <label for="password">パスワード</label>
      <input 
       id="password"
       v-model="email"
       type="password"
       autocomplete="off"
       placeholder="例:・・・・・・"
       @focus="resetError">
      <ul class="validation-errors">
        <li v-if="!validation.password.required"></li>
      </ul>
    </div>
    
  </form>
</template>

<script type="ts">
import { Component, Prop, Emit, PropSync, Vue } from 'vue-property-decorator';
import KbnButton from '@/components/atoms/KbnButton.vue';

@Component({
  componet: {
    KbnButton,
  },
})
export default class KbnLoginFrom extends Vue {
@Prop({})
onlogin!: (x: any) => any;

email = '';
password = '';
progress = false;
error = '';

get validation() {
  return {
    email: {
      required: required(this.email),
      format: REGEX_EMAIL.test(this.email),
    },
    password: {
      required: required(this.password),
    },
};

}
</script>

<style></style>