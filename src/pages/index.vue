<script setup lang="ts">
import NormalCard, { ICardNormal } from "../components/NormalCard.vue";
import Promotion from "../layout/Promotion.vue";

const normalCardData: ICardNormal = {
  url: "https://nextui.org/images/shoes-1.png",
  tag: "new",
  productName: "test",
};
</script>

<template>
  <div class="min-h-[100vh]">
    <div class="flex flex-row max-w-[1440px] mx-auto gap-2 p-4 text-white">
      <div class="hidden lg:block lg:w-1/6 fixed h-screen bg-white text-black">
        <p>menu</p>
      </div>
      <div class="w-5/6 lg:ml-[23%] text-black mx-auto">
        <div>
          <Promotion />
        </div>
        <div class="bg-white my-4 text-left py-6">
          <p class="text-4xl">Explore</p>
          <div
            class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center"
          >
            <div v-for="x in 7">
              <NormalCard
                :card-data="{
                  ...normalCardData,
                  productName: normalCardData?.productName + x,
                }"
                @click="
                  $router.push(`/product/${normalCardData?.productName}${x}`)
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
