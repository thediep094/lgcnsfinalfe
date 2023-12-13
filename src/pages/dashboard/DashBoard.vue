<template>
  <div class="dashboard pt-7 pl-2 flex flex-col">
    <h2 class="font-bold text-2xl title">Users Dashboard</h2>
    <list-users></list-users>
  </div>
</template>

<script>
import ListUsers from "./ListUsers.vue";

export default {
  name: "DashBoardPage",
  components: {
    ListUsers,
  },
};
</script>

<style scoped>
.title {
  color: #4a85f6;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
