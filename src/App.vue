<template>
  <ReloadPWA />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ReloadPWA from "./components/ReloadPWA.vue";
import Card, { ICard } from "./components/Card.vue";
import Layout from "./layout/Main.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    ReloadPWA,
    Card,
    Layout,
  },
  setup() {
    const cardData: ICard = {
      url: "https://nextui.org/images/shoes-1.png",
    };
    return {
      cardData,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
