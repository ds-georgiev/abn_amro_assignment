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

<style lang="scss" scoped>
.nav {
  background: #0d7963;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px 0;
  align-items: center;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 36px;
    line-height: 36px;
    font-size: 13px;

    li {
      border-right: 1px solid #189b80;
      float: left;
      &:hover {
        background: #086754;
      }
    }

    a {
      display: block;
      padding: 0 28px;
      color: #ccece6;
      text-decoration: none;
      &.router-link-active {
        background: #086754;
      }
    }
  }
}
</style>
