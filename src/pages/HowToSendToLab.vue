<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Markdown from "vue3-markdown-it";

export interface IHowToSendToLab {}
defineProps({ data: Object as () => IHowToSendToLab });

const content = ref(`
### เตรียมตัวอย่างดังนี้และส่งมาที่เพจ  [ฟาร์มกัญชง เจเจ](https://www.facebook.com/profile.php?id=100076073563316)
> 1. ระบุสายพันธุ์
> 2. เบอร์โทรศัพท์ที่สามารถติดต่อได้
> 3. หลักฐานการโอน
> 4. ปลายดอกประมาณ 1 กรัม ที่แน่นสักหน่อยนะครับ จะได้แทงเข็มแขวนได้ ไม่ตกระหว่างเครื่องทำงาน

### ส่งดอกมาที่
> - นายณัฐพงษ์ ชัยสุโข
> - ที่อยู่ 133 หมู่ 6 ต.อาจสามารถ (ซอยเพลินรีสอร์ทหลังโรงเรียนกีฬา) อ.เมืองนครพนม จ.นครพนม 48000
> - โทร 0869839491

### ค่าใช้จ่าย
> 1. ตัวอย่างละ 300 บาท
> 2. ฟรี ตัวอย่างแรก
> 3. สายพันธ์ที่บรีดเอง ตรวจฟรีจนกว่าจะนิ่งครับ
`);
</script>

<template>
  <div class="max-w-[1440px] mx-auto px-4 prose ">
    <p class="text-4xl my-4">วิธีส่งตรวจ</p>
    <Markdown class="text-left" :source="content" />
  </div>
</template>
