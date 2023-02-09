<template>
  <div class="tv-shows-wrapper">
    <div v-for="slider in slidersData" :key="slider.title">
      <SliderComponent :data="slider" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const comedyShows = ref(store.state.comedyShows);
const dramaShows = ref(store.state.dramaShows);
const actionShows = ref(store.state.actionShows);
const adventureShows = ref(store.state.adventureShows);

const slidersData = [
  {
    title: "Comedy",
    tvShows: comedyShows.value,
  },
  {
    title: "Drama",
    tvShows: dramaShows.value,
  },
  {
    title: "Action",
    tvShows: actionShows.value,
  },
  {
    title: "Adventure",
    tvShows: adventureShows.value,
  },
];
</script>

<style lang="scss" scoped>
.tv-shows-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
  max-width: -moz-available;
  height: 100%;
  text-align: start;
  overflow: auto;
}
</style>
