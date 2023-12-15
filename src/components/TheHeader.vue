<template>
  <header>
    <div class="flex flex-row w-full justify-between">
      <button
        data-drawer-target="drawer-navigation"
        data-drawer-show="drawer-navigation"
        aria-controls="drawer-navigation"
        type="button"
        class="flex items-center flex-row gap-4"
      >
        <div class="logo px-3 flex items-center flex-row gap-4">
          <icon-container iconType="icon-sidebar"></icon-container>
          <icon-container iconType="logo"></icon-container>
        </div>
      </button>
      <div class="dashboard__user flex flex-row w-full justify-between px-5">
        <div class="dashboard__user-content">
          <p class="font-bold">Hello, {{ userData?.name }}</p>
          <p>Have a nice day!</p>
        </div>

        <div class="dashboard__user-actions flex flex-row items-center">
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
</style>
