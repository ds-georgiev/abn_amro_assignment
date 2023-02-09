<template>
  <div class="nav">
    <ul>
      <li v-for="url in urls" :key="url.title">
        <router-link :to="{ name: url.url, params: { type: url?.option } }">
          {{ url.title }}
        </router-link>
      </li>
    </ul>

    <SearchComponent></SearchComponent>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const urls = ref([
  {
    title: "Home",
    url: "Home",
  },
  {
    title: "Comedy",
    url: "Genre",
    option: "comedy",
  },
  {
    title: "Action",
    url: "Genre",
    option: "action",
  },
  {
    title: "Adventure",
    url: "Genre",
    option: "adventure",
  },
  {
    title: "Drama",
    url: "Genre",
    option: "drama",
  },
  {
    title: "All",
    url: "TVShows",
  },
]);
</script>
