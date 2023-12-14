<template>
  <div>
    <aside
      id="drawer-navigation"
      class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white"
      aria-label="Sidebar"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <div class="h-full py-4 overflow-y-auto">
        <div class="logo">
          <icon-container iconType="logo"></icon-container>
        </div>
        <ul class="space-y-2 font-medium mt-10">
          <li>
            <router-link
              to="/dashboard"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <icon-container iconType="dashboard"> </icon-container>
              <span class="ms-3">Dashboard</span>
            </router-link>
          </li>

          <li>
            <router-link
              to="/login"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <icon-container iconType="icon-login"> </icon-container>
              <span class="ms-3">Login</span>
            </router-link>
          </li>

          <li>
            <router-link
              to="/register"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <icon-container iconType="icon-register"> </icon-container>
              <span class="ms-3">Register</span>
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
