<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Markdown from 'vue3-markdown-it';

export interface IHowToSendToLab {}
defineProps({ data: Object as () => IHowToSendToLab });

const content = ref(`
ท่านที่จะส่งดอกมาตรวจ รบกวนเตรียมตัวอย่างดังนี้ครับ
- ระบุสายพันธ์ให้ด้วยนะครับ จะได้กรอกใน certificate ให้
- ขอ ปลายดอกประมาณ 1 กรัม ที่แน่นสักหน่อยนะครับ จะได้แทงเข็ม แขวนได้ไม่ตกระหว่างเครื่องทำงาน
ส่ง มาที่ :
นายณัฐพงษ์ ชัยสุโข
ที่อยู่ 133 หมู่ 6 ต.อาจสามารถ (ซอยเพลินรีสอร์ทหลังโรงเรียนกีฬา) อ.เมืองนครพนม จ.นครพนม 48000 โทร 0869839491
ตัวอย่างละ 300 บาท
ฟรี ตัวอย่างแรก
สายพันธ์ที่บรีดเอง ตรวจฟรีครับ
`);
</script>

<template>
  <div class="max-w-[1440px] mx-auto p-4">
   <Markdown :source="content" />
  </div>
</template>
