<template>
  <div class="flex w-64">
    <button
      data-drawer-target="drawer-navigation"
      data-drawer-show="drawer-navigation"
      aria-controls="drawer-navigation"
      type="button"
      class="flex"
    >
      <span class="sr-only">Open sidebar</span>
      <div class="logo px-3 py-4">
        <icon-container iconType="logo"></icon-container>
      </div>
    </button>

    <aside
      id="drawer-navigation"
      class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
      aria-label="Sidebar"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div class="logo">
          <icon-container iconType="logo"></icon-container>
        </div>
        <ul class="space-y-2 font-medium">
          <li>
            <router-link
              to="/dashboard"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <icon-container iconType="dashboard"> </icon-container>
              <span class="ms-3">Dashboard</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import IconContainer from "./IconContainer.vue";
export default {
  data() {
    return {};
  },
  components: {
    IconContainer,
  },
};
</script>

<style scoped>
.logo >>> img {
  width: 120px;
}
</style>
