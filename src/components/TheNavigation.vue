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
          <li v-if="isAuthenticated && userData.role == 'ADMIN'">
            <router-link
              to="/dashboard"
              class="flex items-center p-2 text-gray-900 rounded-lg group"
            >
              <icon-container iconType="dashboard"> </icon-container>
              <span class="ms-3">Dashboard</span>
            </router-link>
          </li>
          <li v-if="isAuthenticated && userData.role == 'ADMIN'">
            <router-link
              to="/product-manager"
              class="flex items-center p-2 text-gray-900 rounded-lg group"
            >
              <icon-container iconType="dashboard"> </icon-container>
              <span class="ms-3">Product Manager</span>
            </router-link>
          </li>
          <li v-if="isAuthenticated">
            <router-link
              to="/products"
              class="flex items-center p-2 text-gray-900 rounded-lg group"
            >
              <icon-container iconType="icon-list"> </icon-container>
              <span class="ms-3">Products</span>
            </router-link>
          </li>
          <li v-if="isAuthenticated && userData.role == 'ADMIN'">
            <router-link
              to="/product-create"
              class="flex items-center p-2 text-gray-900 rounded-lg group"
            >
              <icon-container iconType="icon-create"> </icon-container>
              <span class="ms-3">Create product</span>
            </router-link>
          </li>
          <li v-if="isAuthenticated">
            <router-link
              to="/info"
              class="flex items-center p-2 text-gray-900 rounded-lg group"
            >
              <icon-container iconType="icon-user"> </icon-container>
              <span class="ms-3">Info</span>
            </router-link>
          </li>

          <li v-if="isAuthenticated">
            <router-link
              :to="'/change-password/' + userData?.userId"
              class="flex items-center p-2 text-gray-900 rounded-lg group"
            >
              <icon-container iconType="icon-password"> </icon-container>
              <span class="ms-3">Change password</span>
            </router-link>
          </li>

          <li v-if="!isAuthenticated">
            <router-link
              to="/login"
              class="flex items-center p-2 text-gray-900 rounded-lg group"
            >
              <icon-container iconType="icon-login"> </icon-container>
              <span class="ms-3">Login</span>
            </router-link>
          </li>

          <li v-if="!isAuthenticated">
            <router-link
              to="/register"
              class="flex items-center p-2 text-gray-900 rounded-lg group"
            >
              <icon-container iconType="icon-register"> </icon-container>
              <span class="ms-3">Register</span>
            </router-link>
          </li>

          <li v-if="isAuthenticated">
            <div
              class="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg group"
              @click="logOut"
            >
              <icon-container iconType="icon-register"> </icon-container>
              <span class="ms-3">Logout</span>
            </div>
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
  computed: {
    isAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    },
    userData() {
      return this.$store.getters["user/userData"];
    },
  },
  methods: {
    logOut() {
      this.$router.push({ name: "login" });

      return this.$store.dispatch("user/logout");
    },
  },
};
</script>
