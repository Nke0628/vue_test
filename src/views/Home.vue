<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import KbnButton from '@/components/atoms/KbnButton.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    KbnButton,
  },
};
</script>
