<script setup lang="ts">
import TestResultCard, {
  ITestResultCard,
} from "../components/TestResultCard.vue";
import { NIcon, NInput, NTree } from "naive-ui";
import { Search } from "@vicons/fa";
import { useRouter } from "vue-router";
import { TestResults } from "../mocks/test-results";

const router = useRouter();

const onSelected = (e: any) => {
  if (e.length) {
    router.push(`/product/${e}`);
  }
};
</script>

<template>
  <div class="min-h-[100vh]">
    <div class="flex flex-row max-w-[1440px] mx-auto gap-2 px-1">
      <div class="sm:w-5/6 text-black mx-auto">
        <div>
        </div>
        <div class="my-1 text-left pb-6">
          <div class="text-center">
            <p class="text-4xl my-4">ผลตรวจทั้งหมด</p>
          </div>
          <div
            class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center"
          >
            <TestResultCard v-for="x, i in TestResults" :data="x" class="w-full" :key="i"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
