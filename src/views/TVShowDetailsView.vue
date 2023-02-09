<template>
  <DetailsComponent :data="data" />
</template>
<script lang="ts" setup>
import { computed, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

const route = useRoute();
const showId = ref<number>(-1);

onBeforeMount(() => {
  showId.value = Number(route.params.id);
  store.dispatch("fetchTVShowDetails", showId.value);
});

showId.value = Number(route.params.id);
const data = computed(() => store.state.showDetails);
</script>
