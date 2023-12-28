<template>
  <filter-input
    :filters="filters"
    @change-filters="changeFilters"
    @get-data="getData"
    @export-data="exportData"
  ></filter-input>
  <div class="list-users mt-5 flex flex-col bg-white">
    <h3 class="px-6 py-5 title">List users</h3>

    <div class="relative overflow-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left relative">
        <div
          v-if="loading"
          role="status"
          class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
        >
          <icon-container iconType="icon-loading"></icon-container>
          <span class="sr-only">Loading...</span>
        </div>
        <thead class="text-xs thead">
          <tr>
            <th scope="col" class="px-6 py-5">ID</th>
            <th scope="col" class="px-6 py-5">Name</th>
            <th scope="col" class="px-6 py-5">Role</th>
            <th scope="col" class="px-6 py-5">Create date</th>
            <th scope="col" class="px-6 py-5">Phone</th>
            <th v-if="userData?.role == 'ADMIN'" scope="col" class="px-6 py-5">
              Action
            </th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr
            v-for="user in users?.users"
            :key="user?.userId"
            class="bg-white border-b row"
          >
            <td class="px-6 py-4">{{ user.userId }}</td>

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
            <td
              class="px-6 py-4 flex flex-row gap-2"
              v-if="userData?.role == 'ADMIN'"
            >
              <icon-container
                iconType="icon-edit"
                @click="editUser(user.userId)"
              ></icon-container>
              <icon-container
                iconType="icon-delete"
                @click="deleteUser(user.userId)"
              ></icon-container>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <list-pagination
    :size="filters.size"
    :page="filters.page"
    @size-change="handleSizeChange"
    @page-change="handlePageChange"
  ></list-pagination>
</template>
<script>
import IconContainer from "@/components/IconContainer.vue";
import ListPagination from "./ListPagination.vue";
import FilterInput from "./FilterInput.vue";

export default {
  data() {
    return {
      filters: {
        size: 5,
        page: 0,
      },
    };
  },
  computed: {
    userData() {
      return this.$store.getters["user/userData"];
    },
    users() {
      return this.$store.getters["dashboard/data"];
    },
    loading() {
      return this.$store.getters["dashboard/loading"];
    },
  },
  components: {
    IconContainer,
    ListPagination,
    FilterInput,
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleSizeChange(newSize) {
      this.filters.size = newSize;
      this.getData();
    },
    handlePageChange(newPage) {
      this.filters.page = newPage;
      this.getData();
    },
    getData() {
      this.$store.dispatch("dashboard/getData", this.filters);
    },
    changeFilters(key, value) {
      if (value == "") {
        delete this.filters[key];
      } else {
        this.filters[key] = value;
      }
    },
    exportData() {
      this.$store.dispatch("dashboard/exportData", this.filters);
    },
    editUser(userId) {
      this.$router.push({
        name: "updateUser",
        params: {
          userId: userId,
        },
      });
    },
    async deleteUser(userId) {
      await this.$store.dispatch("dashboard/deleteUser", {
        deleteUserId: userId,
        data: {
          userId: this.userData?.userId,
        },
      });

      await this.$store.dispatch("dashboard/getData", this.filters);
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
