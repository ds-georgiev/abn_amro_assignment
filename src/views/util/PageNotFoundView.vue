<template>
  <div class="not-found-wrapper">
    <h1>404 Here</h1>
    <h3>Try the menu above &#128540;</h3>
  </div>
</template>
<script lang="ts" setup>
console.log("PageNotFoundView");
</script>
<style lang="scss" scoped>
.not-found-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
</style>
