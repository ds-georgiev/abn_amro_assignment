<template>
  <div class="title-bar">
    <h2 class="title">{{ data.title }}</h2>
    <div class="navigation">
      <div class="chevron left">
        <font-awesome-icon icon="fa-solid fa-circle-left" @click="prev()" />
      </div>
      <div class="chevron right" @click="next()">
        <font-awesome-icon icon="fa-solid fa-circle-right" />
      </div>
    </div>
  </div>

  <Swiper
    :navigation="navElements"
    :breakpoints="breakpoints"
    @swiper="setSwiper"
  >
    <swiper-slide v-for="tile in data.tvShows" :key="tile.id">
      <router-link
        :to="{
          name: 'ShowDetails',
          params: {
            id: tile.id,
          },
        }"
      >
        <TileComponent :data="tile"></TileComponent>
      </router-link>
    </swiper-slide>
  </Swiper>
</template>

<script lang="ts" setup>
import "swiper/css";
import "swiper/css/navigation";
import { defineProps, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Slider } from "@types";

defineProps<{ data: Slider }>();

const navElements = {
  nextEl: ".chevron.right",
  prevEl: ".chevron.left",
} as any;

const swiper = ref();

const setSwiper = (swiperInstance: unknown) => {
  swiper.value = swiperInstance;
};

function next() {
  swiper.value.slideNext();
}

function prev() {
  swiper.value.slidePrev();
}

const breakpoints = {
  // when window width is >= 550px
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  // when window width is >= 550px
  // 400: {
  //   slidesPerView: 2,
  //   spaceBetween: 10,
  // },
  // when window width is >= 480px
  630: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  // when window width is >= 1000
  1000: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  // when window width is >= 1200
  1200: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  // when window width is >= 1400px
  1400: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
  // when window width is >= 1800px
  1900: {
    slidesPerView: 7,
    spaceBetween: 40,
  },
  // when window width is >= 2200px
  2700: {
    slidesPerView: 10,
    spaceBetween: 40,
  },
};
</script>
