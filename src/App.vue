<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import KbnLoginForm from "./components/molecules/KbnLoginForm.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    KbnLoginForm
  },
  mounted: () => {
    window.onfocus = () => {
      const onFocutElm = window.document.activeElement;
      if (onFocutElm.classList.contains("el-tooltip")) {
        (onFocutElm as HTMLElement).blur();
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
