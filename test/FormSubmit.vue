<template>
  <div>
    <form @submit.prevent="handleSubmitAsync">
      <input v-model="username" data-username>
      <input type="submit">
    </form>

    <div 
      class="message" 
      v-if="submitted"
    >
      {{ username }}さん、お問い合わせ、ありがとうございます。
    </div>
  </div>
</template>

<script>
  export default {
    name: "FormSubmit",
    data() {
      return {
        username: '',
        submitted: false
      }
    },
    methods: {
      handleSubmitAsync() {
        return this.$http.get('https://www.googleapis.com/books/v1/volumes?q=' + this.username)
          .then((response) => {
          // メッセージを表示するなど
          console.log(response);
          this.submitted = true;
          })
          .catch(() => {
          // エラーをハンドル
          })
      }
    }
  }
</script>