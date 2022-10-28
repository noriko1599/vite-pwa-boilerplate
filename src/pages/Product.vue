<script setup lang="ts">
import { onMounted, ref } from "vue";
import { IBudInfo } from "../types/bud-info.interface";
import { NProgress, NCard, NDivider, NButton } from "naive-ui";

const sampleData: IBudInfo = {
  name: "Green Crack",
  aka: "Green Crush, Mango Crack",
  family: "Sativa",
  thcPercent: 17,
  cbgPercent: 1,
  flavor: "mango",
  mostEffect: "enegertic",
  strainEffects: {
    feelings: ["energatic", "focused", "talkative"],
    negatives: ["paranoid", "anxios", "dry eyes"],
  },
  strainFalvors: ["mango", "citrus", "tropical"],
  helpWith: {
    anxiety: "28% of people say it helps with anxiety",
    depression: "29% of people say it helps with depression",
    stress: "35% of people say it helps with stress",
  },
  effectRate: 99,
  images: [
    "https://images.leafly.com/flower-images/green-crack.png?auto=compress,format&w=295&dpr=1",
    "https://leafly-public.imgix.net/strains/reviews/photos/green-crack__primary_ca60.jpg?auto=compress,format&w=295&dpr=1",
    "https://leafly-public.imgix.net/strains/reviews/photos/green-crack__primary_d341.jpg?auto=compress,format&w=295&dpr=1",
    "https://leafly-public.imgix.net/strains/reviews/photos/green-crack__primary_14a0.jpg?auto=compress,format&w=295&dpr=1",
  ],
  description:
    'also known as "Green Crush" and "Mango Crack," is a potent sativa marijuana strain made by crossing Skunk #1 with an unknown indica. This strain is beloved by many consumers for its energizing effects. But don’t let the name fool you: this is pure cannabis. Few strains compare to Green Crack’s sharp energy and focus as it induces an invigorating mental buzz that keeps you going throughout the day. With a tangy, fruity flavor redolent of mango, Green Crack is a great daytime strain that may help consumers fight fatigue, stress, and depression. Because the name "Green Crack" perpetuates a negative image of cannabis, some people have taken to calling this strain Cush (with a ‘C’) or Green Cush instead.',
};

const selectedPic = ref<string>("");
const selectedEffectType = ref("feelings");

onMounted(() => {
  if (sampleData?.images?.length) {
    selectedPic.value = sampleData?.images[0];
  }
});
</script>
<template>
  <div class="max-w-[1440px] mx-auto p-4">
    <div class="text-left" @click="$router.back()">
      <p class="cursor-pointer">Back</p>
    </div>
    <div class="grid sm:grid-cols-2 place-items-center sm:place-items-start">
      <div
        class="flex justify-center sm:justify-start flex-wrap mx-auto"
        v-if="sampleData?.images"
      >
        <img :src="selectedPic" alt="" class="w-[15rem] h-[15rem] mt-10 mb-3" />
        <div
          class="flex flex-row sm:flex-col w-full sm:w-auto justify-center md:justify-end pb-6 ml-0 sm:ml-6 gap-y-2 gap-2"
        >
          <img
            v-for="image in sampleData.images"
            :src="image"
            @click="selectedPic = image"
            class="w-20 h-16 hover:border border-lime-200"
          />
        </div>
      </div>
      <div class="">
        <div class="flex flex-row gap-6 uppercase">
          <div>thc {{ sampleData.thcPercent }} %</div>
          <div>cbg {{ sampleData.cbgPercent }} %</div>
        </div>
        <div>
          <div>
            <div class="flex justify-between">
              <p>low thc</p>
              <p>high thc</p>
            </div>
            <NProgress
              color="#909399"
              :percentage="sampleData?.thcPercent"
            ></NProgress>
          </div>
          <div>
            <div class="flex justify-between mt-4">
              <p>calming</p>
              <p>energizing</p>
            </div>
            <NProgress
              color="#909399"
              :percentage="100 - sampleData?.cbgPercent"
            ></NProgress>
          </div>
        </div>
        <div class="flex flex-row gap-6 my-6 justify-around">
          <div class="w-full">
            <div class="shadow-md rounded-md p-">
              <span>flavor & aroma</span>
              <p class="underline">{{ sampleData.flavor }}</p>
            </div>
          </div>
          <div class="w-full">
            <div class="shadow-md rounded-md p-">
              <span>top effect</span>
              <p class="underline">{{ sampleData.mostEffect }}</p>
            </div>
          </div>
        </div>
        <div class="text-justify">
          <p>{{ sampleData.name }}, {{ sampleData.description }}</p>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2">
      <div>
        <div class="w-full">
          <div class="w-full text-left mx-auto mt-6">
            <p class="text-2xl">Strain effects</p>
            <div class="lg:hidden mb-4 text-center">
              <div class="flex flex-row gap-5">
                <NButton
                  @click="selectedEffectType = 'feelings'"
                  class="text-black"
                  :type="
                    selectedEffectType === 'feelings' ? 'success' : 'default'
                  "
                  >feelings</NButton
                >

                <NButton
                  @click="selectedEffectType = 'negatives'"
                  class="text-black"
                  :type="
                    selectedEffectType !== 'feelings' ? 'primary' : 'default'
                  "
                  >negatives</NButton
                >
              </div>
              <div class="flex gap-4 my-4">
                <NCard
                  size="small"
                  class="shadow-md"
                  v-for="x in sampleData.strainEffects[selectedEffectType]"
                >
                  {{ x }}</NCard
                >
              </div>
            </div>
            <div class="hidden lg:block my-4 text-center">
              <p class="text-left">feelings</p>
              <div class="flex flex-row gap-3">
                <NCard
                  size="small"
                  class="shadow-md"
                  v-for="x in sampleData.strainEffects.feelings"
                >
                  {{ x }}</NCard
                >
              </div>
              <p class="mt-4 text-left">negatives</p>
              <div class="flex flex-row gap-3">
                <NCard
                  size="small"
                  class="shadow-md"
                  v-for="x in sampleData.strainEffects.feelings"
                >
                  {{ x }}</NCard
                >
              </div>
            </div>
          </div>
          <div class="w-full text-left mx-auto">
            <p class="text-2xl">Strain flavors</p>
            <div class="flex flex-row gap-4">
              <NCard
                size="small"
                class="shadow-md text-center"
                v-for="flavor in sampleData.strainFalvors"
              >
                <div>
                  <p>{{ flavor }}</p>
                </div>
              </NCard>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 text-left md:ml-4">
        <p class="text-2xl">{{ sampleData.name }} helps with</p>
        <div class="my-4">
          <p class="text-lg underline">Stress</p>
          <p>{{ sampleData.helpWith.stress }}</p>
        </div>
        <div class="my-4">
          <p class="text-lg underline">Depression</p>
          <p>{{ sampleData.helpWith.depression }}</p>
        </div>
        <div>
          <p class="text-lg underline">Anxiety</p>
          <p>{{ sampleData.helpWith.anxiety }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
