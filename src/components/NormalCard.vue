<script setup lang="ts">
import { NTag, NButton, NTooltip } from "naive-ui";
import { onMounted, onUnmounted, ref, watchEffect } from "vue";

export interface ICardNormal {
  url?: string;
  tag?: string;
  productName: string;
  aka?: string;
  type: string;
  percentages: string[];
  effect: string;
  flavor: string;
}

const windowSize = ref<number>(0);

const onResize = (e: any) => {
  windowSize.value = e.target.innerWidth;
};

onMounted(() => {
  windowSize.value = window.innerWidth;
});

onUnmounted(() => {
  window.removeEventListener("resize", (e) => onResize(e));
});

watchEffect(() => {
  window.addEventListener("resize", (e) => onResize(e));
});
defineProps({ cardData: Object as () => ICardNormal });
</script>
<template>
  <div
    class="shadow-md bg-white flex md:flex-col rounded-[25px] w-full md:max-w-[20rem] glass"
  >
    <div class="relative">
      <n-tag
        :bordered="false"
        class="px-4 pt-1 rounded-r-md text-white mt-[1.2rem] bg-green-500 absolute capitalize"
      >
        {{ cardData?.tag }}
      </n-tag>
    </div>
    <div>
      <img
        :src="cardData?.url"
        alt=""
        class="max-w-[20rem] w-full h-[18rem] image-round"
      />
    </div>
    <div class="ml-2 md:ml-0 flex flex-wrap justify-between flex-col">
      <div class="p-2">
        <n-tag class="px-2 capitalize">
          {{ cardData?.type }}
        </n-tag>
      </div>
      <n-tooltip trigger="hover">
        <template #trigger>
          <p class="px-2">
            {{
              windowSize < 550 && cardData?.productName?.length > 14
                ? `${cardData?.productName?.substring(0, 14)}...`
                : cardData?.productName
            }}
          </p>
        </template>
        {{ cardData?.productName }}
      </n-tooltip>
      <!-- <p class="px-2 font-[10px]">{{ cardData?.productName }}</p> -->
      <small class="px-2 text-gray-400"> aka {{ cardData?.aka }}</small>
      <div class="flex flex-row mt-1">
        <p v-for="x in cardData?.percentages" class="px-2 text-xs">{{ x }}</p>
      </div>
      <div class="flex flex-row gap-2 px-2 my-2 capitalize">
        <n-tag size="tiny" class="px-2 capitalize" type="warning" round>
          {{ cardData?.effect }}
        </n-tag>
        <n-tag size="tiny" class="px-2 capitalize" type="warning" round>
          {{ cardData?.flavor }}
        </n-tag>
      </div>
      <NButton
        class="rounded-[25px] w-[90%] mx-auto mb-2 md:mt-0 mt-[3rem]"
        style="color: green"
        type="primary"
        @click="$router.push(`/product/${cardData?.productName}`)"
        >รายละเอียด</NButton
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.glass {
  background: rgba(255, 255, 255, 0.68);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.6px);
  -webkit-backdrop-filter: blur(1.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.image-round {
  border-radius: 25px 25px 0 0;

  @media only screen and (max-width: 767px) {
    border-radius: 25px 0 0 25px;
  }
}
</style>
