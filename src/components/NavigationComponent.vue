<template>
  <!-- <div class="nav-wrapper"> -->
  <div class="nav">
    <div class="side-menu">
      <font-awesome-icon
        icon="fa-solid fa-bars"
        class="side-menu-icon"
        @click="toggleMenu()"
      />
    </div>
    <ul class="menu" :class="{ show: showMobileMenu }">
      <li v-for="url in urls" :key="url.title">
        <router-link :to="{ name: url.url, params: { type: url?.option } }">
          {{ url.title }}
        </router-link>
      </li>
    </ul>
    <SearchComponent></SearchComponent>
  </div>
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { ref } from "vue";
const showMobileMenu = ref(false);

function toggleMenu() {
  showMobileMenu.value = !showMobileMenu.value;
}
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
