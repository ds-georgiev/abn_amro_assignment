<template>
  <div class="tile-wrapper">
    <img
      v-if="data.image"
      :src="data.image"
      alt="tile-image"
      class="tile-image"
    />
    <p v-html="data.title" class="tile-title"></p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { Tile } from "@types";

defineProps<{ data: Tile }>();
</script>
