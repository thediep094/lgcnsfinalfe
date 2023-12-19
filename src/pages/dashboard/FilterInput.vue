<template>
  <div class="mt-7">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
          for="userId"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >ID</label
        >
        <input
          type="text"
          id="userId"
          v-model="userId"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ID"
          required
          @input="changeFilters('userId', userId)"
        />
        <div class="mb-6" v-if="messageId.length > 0">
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            {{ messageId }}
          </p>
        </div>
      </div>
      <div>
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Name</label
        >
        <input
          type="text"
          id="name"
          v-model="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          required
          @input="changeFilters('name', name)"
        />
        <div class="mb-6" v-if="messageName.length > 0">
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            {{ messageName }}
          </p>
        </div>
      </div>
      <div>
        <label
          for="mobilePhone"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Mobile phone</label
        >
        <input
          type="text"
          id="mobilePhone"
          v-model="mobilePhone"
          @input="changeFilters('mobilePhone', mobilePhone)"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Mobile phone"
          required
        />
      </div>
    </div>

    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
          for="fromDate"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Date</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </div>
          <input
            id="fromDate"
            datepicker
            @input="changeFilters('fromDate', fromDate)"
            datepicker-format="yyyy-mm-dd"
            v-model="fromDate"
            type="date"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          />
        </div>
      </div>
      <div>
        <label
          for="toDate"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >To Date</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </div>
          <input
            datepicker
            id="toDate"
            v-model="toDate"
            @input="changeFilters('toDate', toDate)"
            datepicker-format="yyyy-mm-dd"
            type="date"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-3">
      <button
        @click="getData"
        type="button"
        class="x-5 py-2.5 w-fit px-7 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <span v-if="!loading">Search</span>
        <span v-else>
          <icon-container iconType="icon-loading"></icon-container>
          Loading...
        </span>
      </button>
      <button
        @click="exportData"
        type="button"
        class="x-5 py-2.5 w-fit px-7 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <span v-if="!loading">Export</span>
        <span v-else>
          <icon-container iconType="icon-loading"></icon-container>
          Loading...
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import IconContainer from "@/components/IconContainer.vue";
export default {
  props: {
    filters: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userId: "",
      name: "",
      mobilePhone: "",
      fromDate: "",
      toDate: "",
      messageId: "",
      messageName: "",
    };
  },
  computed: {
    loading() {
      return this.$store.getters["dashboard/loading"];
    },
  },
  mounted() {
    // Calculate 1 year ago from now
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    // Set fromDate to 1 year ago
    this.fromDate = oneYearAgo.toISOString().split("T")[0];
    this.toDate = new Date().toISOString().split("T")[0];
    this.changeFilters("fromDate", this.fromDate);
    this.changeFilters("toDate", this.toDate);
  },
  components: {
    IconContainer,
  },
  methods: {
    changeFilters(key, value) {
      this.$emit("change-filters", key, value);
    },
    getData() {
      const regexId = /\d{3,}/;
      if (this.userId.length > 0 && !regexId.test(this.userId)) {
        this.messageId = "Enter at least 3 characters to be searched";
        return false;
      } else {
        this.messageId = "";
      }
      if (this.name.length < 2 && this.name.length > 0) {
        this.messageName = "Enter at least 2 characters to be searched";
        return false;
      } else {
        this.messageName = "";
      }

      this.$emit("get-data");
    },
    exportData() {
      this.$emit("export-data");
    },
  },
};
</script>
