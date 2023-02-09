<template>
  <div class="search-wrapper">
    <div class="form">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search for a movie"
        class="form-input"
        @keyup.enter="submitForm()"
      />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="form-icon"
        @click="submitForm()"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
import { TVShow } from "@types";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const searchTerm = ref("");
const data = store.state.tvShows;
const searchResults = ref<TVShow[]>([]);

const submitForm = () => {
  if (searchTerm.value) {
    searchResults.value = data.filter((show: TVShow) =>
      show.title.toLowerCase().includes(searchTerm.value.toLocaleLowerCase())
    );

    if (searchResults.value.length === 1) {
      router.push({
        name: "ShowDetails",
        params: { id: searchResults.value[0].id },
      });
    } else {
      store.dispatch("setSearchedShows", searchResults.value);

      router.push({
        name: "Genre",
        params: { type: "search" },
      });
    }
    searchTerm.value = "";
  }
};
defineProps<{ data: TVShow }>();
</script>
