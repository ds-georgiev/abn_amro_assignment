<template>
  <div class="genre-wrapper">
    <div class="genre-title">
      <h1>{{ route.params.type }}</h1>
    </div>
    <div class="genre-content">
      <div v-for="show in data" :key="show.id" class="genre-show">
        <router-link
          :to="{
            name: 'ShowDetails',
            params: {
              id: show.id,
            },
          }"
        >
          <TileComponent :data="show" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const comedyShows = ref(store.state.comedyShows);
const dramaShows = ref(store.state.dramaShows);
const actionShows = ref(store.state.actionShows);
const adventureShows = ref(store.state.adventureShows);
const searchedShows = computed(() => store.state.searchedShows);

const data = computed(() => {
  switch (route.params.type) {
    case "comedy":
      return comedyShows.value;
    case "drama":
      return dramaShows.value;
    case "action":
      return actionShows.value;
    case "adventure":
      return adventureShows.value;
    case "search":
      return searchedShows.value;
    default:
      return [];
  }
});
</script>

<style lang="scss" scoped>
.genre-wrapper {
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 100%;
  align-items: center;
  .genre-content {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 650px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 910px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1210px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1510px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  .genre-title {
    text-transform: capitalize;
  }
}
</style>
