<template>
  <header class="header">
    <div class="flex md:flex-row w-full md:justify-between">
      <button
        data-drawer-target="drawer-navigation"
        data-drawer-show="drawer-navigation"
        aria-controls="drawer-navigation"
        type="button"
        class="flex items-center flex-row gap-4"
      >
        <div class="logo px-3 flex items-center flex-row gap-4">
          <icon-container iconType="icon-sidebar"></icon-container>
          <icon-container
            iconType="logo"
            class="md:block hidden"
          ></icon-container>
        </div>
      </button>
      <div
        class="dashboard__user flex flex-row w-full md:justify-between justify-end items-center md:px-5"
      >
        <div class="dashboard__user-content md:mt-0 hidden md:flex flex-col">
          <p class="font-bold">Hello, {{ userData?.name }}</p>
          <p>Have a nice day!</p>
        </div>

        <div class="dashboard__user-actions flex flex-row items-center md:mt-0">
          <div class="dashboard__avatar">
            <img
              class="object-cover rounded-full"
              v-if="userData"
              :src="avatarUrl"
              :alt="`${userData?.name}'s avatar`"
            />
          </div>
          <div class="dashboard__user-info ml-5">
            <p class="font-bold text-lg uppercase">{{ userData?.name }}</p>
            <p class="text-xs">{{ userData?.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IconContainer from "@/components/IconContainer.vue";

export default {
  components: {
    IconContainer,
  },
  name: "DashBoardPage",
  computed: {
    userData() {
      return this.$store.getters["user/userData"];
    },
    avatarUrl() {
      return "http://localhost:8081/avatar/images/" + this.userData?.avatar;
    },
  },
};
</script>

<style>
.dashboard__avatar img {
  width: 45px;
  height: 45px;
}
.header {
  position: fixed;
  width: 98%;
  left: 1%;
  padding: 10px;
  border: 1px solid #8f9bb3;
  border-radius: 10px;
  background: #fff;
  z-index: 10;
}
</style>
