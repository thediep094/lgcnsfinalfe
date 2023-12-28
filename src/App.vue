<template>
  <div class="flex flex-row h-screen main-page">
    <notifications position="bottom center" speed="1000" closeOnClick />
    <the-navigation></the-navigation>
    <div class="p-4 w-full h-full flex flex-col">
      <the-header></the-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import TheNavigation from "./components/TheNavigation.vue";
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheNavigation,
    TheHeader,
  },
};
</script>

<style scoped>
.main-page {
  background-color: #fffefc;
}
</style>
