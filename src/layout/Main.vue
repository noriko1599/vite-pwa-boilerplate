<script setup lang="ts">
import NormalCard, { ICardNormal } from "../components/NormalCard.vue";
import Navbar from "./Navbar.vue";
import Promotion from "./Promotion.vue";

const normalCardData: ICardNormal = {
  productName: "test",
  tag: "new",
  url: "https://nextui.org/images/shoes-1.png",
};
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>
