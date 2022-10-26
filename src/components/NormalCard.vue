<script setup lang="ts">
export interface ICardNormal {
  url?: string;
  tag?: string;
  productName?: string;
}

defineProps({ cardData: Object as () => ICardNormal });
</script>
<template>
  <div class="shadow-md flex flex-col justify-end rounded-[35px] max-w-[20rem]">
    <div>
      <p class="px-4 pt-6">
        {{ cardData?.tag }}
      </p>
    </div>
    <div>
      <img :src="cardData?.url" alt="" />
    </div>
    <div class="p-4 text-center">
      {{ cardData?.productName }}
    </div>
  </div>
</template>
