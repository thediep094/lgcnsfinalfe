<template>
  <filter-input
    :filters="filters"
    @change-filters="changeFilters"
    @get-data="getData"
    @export-data="exportData"
  ></filter-input>
  <div class="list-users mt-5 flex flex-col bg-white">
    <h3 class="px-6 py-5 title">
      List users
      <span class="ml-5" v-if="loading">
        <svg
          aria-hidden="true"
          role="status"
          class="inline w-4 h-4 me-3 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        Loading...</span
      >
    </h3>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left">
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
        <tbody>
          <tr
            v-for="user in users?.users"
            :key="user?.userId"
            class="bg-white border-b"
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
