<template>
  <div class="dashboard">
    <div class="text-red-600">asdasdasd {{ user.id }}</div>
  </div>
</template>

<script>
export default {
  name: "DashBoardPage",
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
  },
};
</script>
