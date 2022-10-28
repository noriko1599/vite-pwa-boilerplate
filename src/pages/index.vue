<script setup lang="ts">
import NormalCard, { ICardNormal } from "../components/NormalCard.vue";
import { NIcon, NInput, NTree } from "naive-ui";
import { Search } from "@vicons/fa";
import Promotion from "../layout/Promotion.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const normalCardData: ICardNormal[] = [
  //   {
  //     url: "/images/w3.gif",
  //     tag: "new",
  //     productName: "green-crack",
  //     effect: "talkative",
  //     flavor: "lemonete",
  //     aka: "gorila blue",
  //     type: "hybrid",
  //     percentages: ["20%", "0%", "0%"],
  //   },
  {
    url: "/images/w1.jpg",
    tag: "มีผลแลป",
    productName: "GG4",
    effect: "talkative",
    flavor: "lemonete",
    aka: "gorila blue",
    type: "hybrid",
    percentages: ["THC 20%", "CBD 0%", "CBG 0%"],
  },
  {
    url: "/images/w4.jpg",
    tag: "มีผลแลป",
    productName: "OG Kush",
    effect: "talkative",
    flavor: "lemonete",
    aka: "gorila blue",
    type: "hybrid",
    percentages: ["THC 20%", "CBD 0%", "CBG 0%"],
  },
  {
    url: "/images/w5.jpg",
    tag: "มีผลแลป",
    productName: "Apex R1",
    effect: "talkative",
    flavor: "lemonete",
    aka: "gorila blue",
    type: "hybrid",
    percentages: ["THC 20%", "CBD 0%", "CBG 0%"],
  },
  {
    url: "/images/w6.jpg",
    tag: "มีผลแลป",
    productName: "Wedding Cake - Wedding Cake",
    effect: "talkative",
    flavor: "lemonete",
    aka: "gorila blue",
    type: "hybrid",
    percentages: ["THC 20%", "CBD 0%", "CBG 0%"],
  },
  {
    url: "/images/w7.jpg",
    tag: "มีผลแลป",
    productName: "Dream Cake",
    effect: "talkative",
    flavor: "lemonete",
    aka: "gorila blue",
    type: "hybrid",
    percentages: ["THC 20%", "CBD 0%", "CBG 0%"],
  },
  {
    url: "/images/w8.jpg",
    tag: "มีผลแลป",
    productName: "Las Vegas Purple Kush x Gorilla Glue 4",
    effect: "talkative",
    flavor: "lemonete",
    aka: "Green Crush, Mango Crack ",
    type: "hybrid",
    percentages: ["THC 20%", "CBD 0%", "CBG 0%"],
  },
];

const data = [
  {
    key: "sativa",
    label: "sativa",
    children: [{ key: "green crack", label: "green crack" }],
  },
];

const onSelected = (e: any) => {
  if (e.length) {
    router.push(`/product/${e}`);
  }
};
</script>

<template>
  <div class="min-h-[100vh]">
    <div class="flex flex-row max-w-[1440px] mx-auto gap-2 p-4">
      <div class="hidden lg:block lg:w-1/6 fixed h-screen text-black">
        <div class="text-white">
          <!-- <n-input round placeholder="search">
            <template #suffix>
              <n-icon :component="Search" />
            </template>
          </n-input> -->
          <n-tree
            selectable
            :data="data"
            style="color: white !important"
            @update-selected-keys="(e) => onSelected(e)"
          />
        </div>
      </div>
      <div class="sm:w-5/6 lg:ml-[23%] text-black mx-auto">
        <div>
          <!-- <Promotion /> -->
        </div>
        <div class="my-1 text-left pb-6">
          <!-- <p class="text-4xl mb-4">Explore</p> -->
          <div
            class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center"
          >
            <NormalCard
              v-for="x in normalCardData"
              :card-data="x"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
