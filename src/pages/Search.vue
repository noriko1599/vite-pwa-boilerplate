<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { Search } from "@vicons/fa";
import { NIcon, NInput } from "naive-ui";
import { TestResults } from "../mocks/test-results";
import TestResultCard, {
  ITestResultCard,
} from "../components/TestResultCard.vue";

export interface IHowToSendToLab {}
defineProps({ data: Object as () => IHowToSendToLab });

const content = ref(`
ท่านที่จะส่งดอกมาตรวจ รบกวนเตรียมตัวอย่างดังนี้ครับ
- ระบุสายพันธ์ให้ด้วยนะครับ จะได้กรอกใน certificate ให้
- ขอ ปลายดอกประมาณ 1 กรัม ที่แน่นสักหน่อยนะครับ จะได้แทงเข็ม แขวนได้ไม่ตกระหว่างเครื่องทำงาน
- ส่ง มาที่ :
- นายณัฐพงษ์ ชัยสุโข
- ที่อยู่ 133 หมู่ 6 ต.อาจสามารถ (ซอยเพลินรีสอร์ทหลังโรงเรียนกีฬา) อ.เมืองนครพนม จ.นครพนม 48000 โทร 0869839491
- ตัวอย่างละ 300 บาท
- ฟรี ตัวอย่างแรก
- สายพันธ์ที่บรีดเอง ตรวจฟรีครับ
`);
const displayResult = ref(false)

const onSearchInput = (input: string) => {
  if (input.length == 10 && /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm.test(input)) {
    displayResult.value = true
  } else {
    displayResult.value = false
  }
}
</script>

<template>
  <div class="min-h-[100vh]">
    <p class="text-4xl my-4">ค้นหาผลตรวจ</p>
    <n-input round placeholder="กรอกหมายเลขสมาชิก" @input="onSearchInput">
      <template #suffix>
        <n-icon :component="Search" />
      </template>
    </n-input>
    <div class="flex flex-row max-w-[1440px] mx-auto gap-2 p-1" v-if="displayResult">
      <div class="sm:w-5/6 text-black mx-auto">
        <div></div>
        <div class="my-1 text-left pb-6">
          <div class="text-center">
            <p class="text-4xl m-2">ผลการค้นหา</p>
          </div>
          <div
            class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center"
          >
            <TestResultCard
              v-for="(x, i) in TestResults"
              :data="x"
              class="w-full"
              :key="i"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
