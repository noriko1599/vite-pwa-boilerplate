<script setup lang="ts">
import { NTag, NButton, NTooltip } from "naive-ui";
import { onMounted, onUnmounted, ref, watchEffect } from "vue";

export interface IStrainContent {
  thc: number;
  cbd: number;
  cbg: number;
}

export interface IStrainEffect {
  name: string;
  description: string;
  icon: string;
}

export interface IStrainFlavor {
  name: string;
  description: string;
  icon: string;
}

export interface IStrainAroma {
  name: string;
  description: string;
  icon: string;
}

export interface IStrainNegative {
  name: string;
  description: string;
  icon: string;
}

export type IStrainType = "sativa" | "indica" | "hybrid";

export interface IStrain {
  name: string;
  description: string;
  type: IStrainType;
  content: IStrainContent;
  effect?: IStrainEffect[];
  flavor?: IStrainFlavor[];
  aroma: IStrainAroma[];
  negative: IStrainNegative[];
}

export interface ITestResultCard {
  strain: IStrain;
  image?: string;
  testedBy: string;
  testedAt: Date;
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
defineProps({ data: Object as () => ITestResultCard });
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
        ตรวจแล้ว
      </n-tag>
    </div>
    <div>
      <img
        :src="data?.image"
        alt=""
        class="max-w-[20rem] w-full h-[15rem] sm:h-[18rem] image-round"
      />
    </div>
    <div class="ml-2 md:ml-0 flex flex-wrap justify-between flex-col">
      <n-tooltip trigger="hover">
        <template #trigger>
          <p class="px-2 pt-2 text-xl">
            {{
              windowSize < 550 && data?.strain.name?.length > 14
                ? `${data?.strain.name?.substring(0, 14)}...`
                : data?.strain.name
            }}
          </p>
        </template>
        {{ data?.strain.name }}
      </n-tooltip>

      <small class="px-2 text-gray-400">
        {{ data?.strain.description || "(ไม่มีข้อมูล)" }}</small
      >

      <div class="flex flex-row pt-1">
        <p
          v-for="(x, i) in Object.keys(data?.strain.content)"
          class="px-2 text-xs"
          :key="i"
        >
          <span class="font-bold">{{ x.toLocaleUpperCase() }}</span>
          {{ data.strain.content[x] }}%
        </p>
      </div>

      <div class="px-2 pt-1">
        <span class="font-bold">เครื่องตรวจ</span>: {{ data?.testedBy }}
      </div>

      <div class="px-2 pb-2 pt-1">
        <span class="font-bold">ตรวจเมื่อ</span>:
        {{ data?.testedAt.toLocaleDateString() }}
      </div>

      <NButton
        class="rounded-[25px] w-[90%] mx-auto mb-2 md:mt-0 mt-[3rem]"
        style="color: green"
        type="primary"
        @click="$router.push(`/product/${data?.strain.name}`)"
        >รายละเอียด</NButton
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.glass {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(89, 95, 89, 0.3);
}
.image-round {
  border-radius: 25px 25px 0 0;

  @media only screen and (max-width: 767px) {
    border-radius: 25px 0 0 25px;
  }
}
</style>
