<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <div class="wrapper"> -->
  <NavigationComponent></NavigationComponent>
  <router-view />
  <!-- </div> -->
</template>

<style lang="scss">
@import "./assets/style/main.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
