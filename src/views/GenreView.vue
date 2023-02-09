<template>
  <div class="genre-details-wrapper">
    <div class="genre-title">
      <h1>{{ route.params.type }}</h1>
    </div>
    <div class="genre-content">
      <template v-if="data.length">
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
      </template>

      <template v-else-if="!data.length && route.params.type !== 'search'">
        <div class="no-shows">
          <h1>No shows found</h1>
        </div>
      </template>
    </div>
    <template v-if="!data.length && route.params.type === 'search'">
      <p>
        No results found for the search query! <br />Please try another search
        term!
      </p>
    </template>
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

<style lang="scss" scoped></style>
