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
        @focus="resetError"
      />
      <ul class="validation-errors">
        <li v-if="!validation.email.format">メールアドレスが不正です</li>
        <li v-if="!validation.email.required">
          メールアドレスが入力されていません
        </li>
      </ul>
    </div>
    <div class="form-item">
      <label for="password">パスワード</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="off"
        placeholder="例:・・・・・・"
        @focus="resetError"
      />
      <ul class="validation-errors">
        <li v-if="!validation.password.required">
          パスワードが入力されていません
        </li>
      </ul>
    </div>
    <div>
      <KbnButton :disabled="disableLoginAction" @click="handleClick"
        >ログイン</KbnButton
      >
      <p v-if="progress" class="login-progress">ログイン中・・・</p>
      <p v-if="error" class="login-error">{{ error }}</p>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Emit, PropSync, Vue } from 'vue-property-decorator';
import KbnButton from '@/components/atoms/KbnButton.vue';
import { Test, loginForm } from '../../type';

@Component({
  components: {
    KbnButton,
  },
})
export default class KbnLoginFrom extends Vue {
  REGEX_EMAIL = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

  @Prop({})
  onlogin!: (x: any) => any;

  email = '';
  password = '';
  progress = false;
  error = '';

  required = (val: any) => !!val.trim();

  get validation(): Test {
    return {
      email: {
        required: this.required(this.email),
        format: this.REGEX_EMAIL.test(this.email),
      },
      password: {
        required: this.required(this.password),
      },
    };
  }

  get valid() {
    const validations = this.validation;
    const fields = Object.keys(validations);
    let valid = true;
    for (const field of fields) {
      valid = (Object.keys(validations[field]) as (keyof loginForm)[]).every(
        key => validations[field][key]
      );
      if (!valid) {
        break;
      }
    }
    return valid;
  }

  get disableLoginAction() {
    return this.valid;
  }

  handleClick(ev: any) {}

  resetError(ev: any) {}
}
</script>

<style></style>
