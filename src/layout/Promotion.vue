<script setup lang="ts">
import Card, { ICard } from "../components/Card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};

const cardData: ICard = {
  url: "https://nextui.org/images/shoes-1.png",
};
</script>
<template>
  <div class="block lg:hidden max-h-[20rem] max-w-[1440px] h-full">
    <swiper
      autoplay
      navigation
      class="swiper h-[20rem]"
      :modules="[Pagination, Navigation]"
      :slides-per-view="1"
      :space-between="5"
      :pagination="{ type: 'fraction' }"
    >
      <swiper-slide class="slide">
        <Card class="h-full" :card-data="cardData" />
      </swiper-slide>
      <swiper-slide class="slide">Slide 2</swiper-slide>
      <swiper-slide class="slide">Slide 3</swiper-slide>
    </swiper>
  </div>
  <div class="hidden lg:flex flex-col lg:flex-row gap-4 max-h-[20rem]">
    <div class="w-full">
      <Card class="h-full" :card-data="cardData" />
    </div>
    <div class="grid lg:flex flex-row lg:flex-col gap-4 gap-y-4">
      <Card :card-data="cardData" />
      <Card :card-data="cardData" />
    </div>
  </div>
</template>
