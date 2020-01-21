<template>
  <div id="app">
    <div>
      <router-link to="/dialog">dialog</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, PropSync, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import KbnLoginForm from "./components/molecules/KbnLoginForm.vue";

@Component({
  components: {
    HelloWorld,
    KbnLoginForm
  }
})
export default class App extends Vue {
  mounted() {
    window.addEventListener("focus", () => {
      const onFocutElm = window.document.activeElement;
      if (onFocutElm && onFocutElm.classList.contains("el-tooltip")) {
        const body = document.body;
        body.tabIndex = 0;
        body.focus();
      }
    });
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
