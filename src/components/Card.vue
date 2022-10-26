<script setup lang="ts">
export interface ICard {
  url?: string;
}
defineProps({ cardData: Object as () => ICard });
</script>
<template>
  <div
    class="flex relative bg-white shadow-md pb-10 rounded-2xl"
    style="background: linear-gradient(60deg, #f05053, #e1eec3)"
  >
    <div class="min-w-[15rem] min-h-[5rem] h-full mx-4 rounded-2xl py-4">
      <div>
        <img
          :src="cardData?.url"
          alt=""
          class="absolute -top-12 mb-10 -left-16"
        />
      </div>
    </div>
    <div class="w-full mr-4">
      <p>asdasdl</p>
    </div>
  </div>
</template>
