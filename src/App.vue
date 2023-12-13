<template>
  <div class="flex flex-row h-screen">
    <the-navigation></the-navigation>
    <div class="p-4 w-full h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import TheNavigation from "./components/TheNavigation.vue";
export default {
  components: {
    TheNavigation,
  },
};
</script>
