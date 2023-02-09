<template>
  <div class="home-container">
    <h1>ABN Amro Movie Base</h1>
    <div class="tile-container">
      <div class="tile" v-for="tile in data.tiles" :key="tile.title">
        <router-link
          :to="{
            name: tile.url,
            params: {
              type: tile?.option,
            },
          }"
        >
          <TileComponent :data="tile"></TileComponent>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import TileComponent from "@/components/TileComponent.vue";
import { RouterLink } from "vue-router";

const data = ref({
  tiles: [
    {
      title: "Comedy",
      url: "Genre",
      option: "comedy",
      image:
        "https://as2.ftcdn.net/v2/jpg/03/76/52/01/1000_F_376520100_Ks193I9tgvCWw3kO7918c5lgq3q3oEty.jpg",
    },
    {
      title: "Action",
      url: "Genre",
      option: "action",
      image:
        "https://as2.ftcdn.net/v2/jpg/03/76/38/65/1000_F_376386518_n0QqILbWZU8ZpfMGnMwoZmqGf7RhHplu.jpg",
    },
    {
      title: "Adventure",
      url: "Genre",
      option: "adventure",
      image:
        "https://as1.ftcdn.net/v2/jpg/03/92/42/06/1000_F_392420601_TYRH7k8Yo8AmpFF8L3gnKRq2WnSJUYPn.jpg",
    },
    {
      title: "Drama",
      url: "Genre",
      option: "drama",
      image:
        "https://as1.ftcdn.net/v2/jpg/03/76/42/30/1000_F_376423030_Ux9IxVbak1XA3x2qevrUKOpdr5unee9z.jpg",
    },
    {
      title: "All shows",
      url: "TVShows",
      image:
        "https://as2.ftcdn.net/v2/jpg/01/69/36/83/1000_F_169368359_tes7Q6D9FYaAtwGyvhSov47J0ZOGSxGC.jpg",
    },
  ],
});

const store = useStore();

store.dispatch("fetchTVShows");
</script>
<style lang="scss" scoped></style>
