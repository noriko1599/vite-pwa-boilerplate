<script setup lang="ts">
import {
  NIcon,
  NDrawer,
  NDrawerContent,
  NTree,
  NInput,
  NButton,
} from "naive-ui";
import { Bars, Search } from "@vicons/fa";
import { ref } from "vue";
import { useRouter } from "vue-router";

const showDrawer = ref<boolean>(false);
const data = [
  { key: "sativa", label: "sativa", children: [{ label: "green crack" }] },
];

const router = useRouter();
</script>
<template>
  <nav class="sticky top-0 p-4 bg-[#e4f2e4] opacity-95 z-10 shadow-sm">
    <div class="max-w-[1440px] flex justify-between mx-auto items-center gap-6">
      <div class="uppercase text-xl">thai cannabis hub by ฟาร์มกัญชง เจเจ</div>
      <!-- <div class="hidden lg:block">
        <n-input round placeholder="search">
          <template #suffix>
            <n-icon :component="Search" />
          </template>
        </n-input>
      </div> -->
      <div
        class="hidden lg:flex gap-2 justify-end ml-auto"
      >
        <NButton
          class="rounded-[25px]"
          style="color: green"
          type="primary"
          @click="router.push('/')"
          >ผลตรวจทั้งหมด</NButton
        >
        <NButton
          class="rounded-[25px]"
          style="color: green"
          type="primary"
          @click="router.push('/search')"
          >ค้นหาผลตรวจ</NButton
        >
        <NButton
          class="rounded-[25px]"
          style="color: green"
          type="primary"
          @click="router.push('/send-to-lab')"
          >ส่งตรวจ</NButton
        >
      </div>
      <!-- <div class="text-xl capitalize">
        <NIcon class="lg:hidden" @click="showDrawer = !showDrawer">
          <Bars class="w-8 h-8"></Bars>
        </NIcon>
      </div> -->
    </div>
    <div class="lg:hidden mt-2">
      <!-- <n-input round placeholder="search">
        <template #suffix>
          <n-icon :component="Search" />
        </template>
      </n-input> -->
      <div class="flex flex-row gap-2 mt-2">
        <NButton
          class="rounded-[25px]"
          style="color: green"
          type="primary"
          @click="router.push('/')"
          >ผลตรวจทั้งหมด</NButton
        >
        <NButton
          class="rounded-[25px]"
          style="color: green"
          type="primary"
          @click="router.push('/search')"
          >ค้นหาผลตรวจ</NButton
        >
        <NButton
          class="rounded-[25px]"
          style="color: green"
          type="primary"
          @click="router.push('/send-to-lab')"
          >ส่งตรวจ</NButton
        >
      </div>
    </div>
  </nav>
  <n-drawer v-model:show="showDrawer" placement="left">
    <n-drawer-content title="">
      <div>
        <!-- <n-input round placeholder="search">
          <template #suffix>
            <n-icon :component="Search" />
          </template>
        </n-input> -->
        <n-tree :data="data" selectable />
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
