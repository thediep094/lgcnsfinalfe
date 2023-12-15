<template>
  <div class="list-users mt-5 flex flex-col bg-white">
    <h3 class="px-6 py-5 title">List users</h3>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left">
        <thead class="text-xs thead">
          <tr>
            <th scope="col" class="px-6 py-5">Name</th>
            <th scope="col" class="px-6 py-5">Role</th>
            <th scope="col" class="px-6 py-5">Create date</th>
            <th scope="col" class="px-6 py-5">Phone</th>
            <th scope="col" class="px-6 py-5">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users.users"
            :key="user.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="px-6 py-4 pl-10 flex flex-col">
              <p class="tb-name">{{ user.name }}</p>
              <p class="tb-email">{{ user.email }}</p>
            </td>
            <td class="px-6 py-4">
              <p
                class="tb-role"
                :class="{
                  'role-admin': user.role === 'ADMIN',
                  'role-member': user.role === 'MEMBER',
                }"
              >
                {{ user.role }}
              </p>
            </td>
            <td class="px-6 py-4">{{ user.date }}</td>
            <td class="px-6 py-4">{{ user.mobilePhone }}</td>
            <td class="px-6 py-4 flex flex-row gap-2">
              <icon-container iconType="icon-edit"></icon-container>
              <icon-container iconType="icon-delete"></icon-container>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <list-pagination
    :size="size"
    :page="page"
    @size-change="handleSizeChange"
    @page-change="handlePageChange"
  ></list-pagination>
</template>
<script>
import IconContainer from "@/components/IconContainer.vue";
import ListPagination from "./ListPagination.vue";

export default {
  data() {
    return {
      size: 5,
      page: 0,
    };
  },
  computed: {
    users() {
      return this.$store.getters["dashboard/data"];
    },
  },
  components: {
    IconContainer,
    ListPagination,
  },
  mounted() {
    this.$store.dispatch("dashboard/getData", {
      size: 5,
      page: 0,
    });
  },
  methods: {
    handleSizeChange(newSize) {
      this.size = newSize;
      this.$store.dispatch("dashboard/getData", {
        size: this.size,
        page: this.page,
      });
    },
    handlePageChange(newPage) {
      this.page = newPage;
      this.$store.dispatch("dashboard/getData", {
        size: this.size,
        page: this.page,
      });
    },
  },
};
</script>

<style scoped>
.title {
  color: #222b45;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
}
.list-users {
  border-radius: 16px;
}

.thead {
  background: #eff4fa;
  color: #8f9bb3;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
}

.tb-name {
  color: #222b45;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
}

.tb-email {
  color: #8f9bb3;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.role-admin {
  background: #0095ff;
  color: #fff;
}

.role-member {
  background: #eff4fa;
  color: #8f9bb3;
}

.tb-role {
  width: fit-content;
  border-radius: 8px;
  padding: 5px 15px;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
}
</style>
