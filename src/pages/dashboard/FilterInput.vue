<template>
  <div class="mt-7">
    <div class="grid max-w-5xl gap-6 mb-6 md:grid-cols-2">
      <div>
        <label for="userId" class="block mb-2 text-sm font-medium text-gray-900"
          >ID
          <guide-input
            :message="'Enter at least 3 characters to be searched'"
          ></guide-input>
        </label>
        <input
          type="text"
          id="userId"
          v-model="userId"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="ID"
          required
          @input="changeFilters('userId', userId)"
        />
        <div class="mb-6" v-if="messageId.length > 0">
          <p class="mt-2 text-sm text-red-600">
            {{ messageId }}
          </p>
        </div>
      </div>
      <div>
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
          >Name
          <guide-input
            :message="'Enter at least 2 characters to be searched'"
          ></guide-input>
        </label>
        <input
          type="text"
          id="name"
          v-model="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Name"
          required
          @input="changeFilters('name', name)"
        />
        <div class="mb-6" v-if="messageName.length > 0">
          <p class="mt-2 text-sm text-red-600">
            {{ messageName }}
          </p>
        </div>
      </div>
      <div>
        <label
          for="mobilePhone"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Mobile phone</label
        >
        <input
          type="text"
          id="mobilePhone"
          v-model="mobilePhone"
          @input="changeFilters('mobilePhone', mobilePhone)"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Mobile phone"
          required
        />
      </div>
    </div>

    <div class="grid max-w-5xl gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
          for="fromDate"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Date</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <icon-container iconType="icon-date"></icon-container>
          </div>
          <input
            id="fromDate"
            datepicker
            @input="changeFilters('fromDate', fromDate)"
            datepicker-format="yyyy-mm-dd"
            v-model="fromDate"
            type="date"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="Select date"
          />
        </div>
      </div>
      <div>
        <label for="toDate" class="block mb-2 text-sm font-medium text-gray-900"
          >To Date</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <icon-container iconType="icon-date"></icon-container>
          </div>
          <input
            datepicker
            id="toDate"
            v-model="toDate"
            @input="changeFilters('toDate', toDate)"
            datepicker-format="yyyy-mm-dd"
            type="date"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="Select date"
          />
        </div>
      </div>
    </div>
    <div class="flex max-w-5xl flex-row gap-3">
      <button
        @click="getData"
        type="button"
        class="x-5 py-2.5 w-fit px-7 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
      >
        <span>Search</span>
      </button>
      <button
        @click="exportData"
        type="button"
        class="x-5 py-2.5 w-fit px-7 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
      >
        <span>Export</span>
      </button>
    </div>
  </div>
</template>

<script>
import IconContainer from "@/components/IconContainer.vue";
import GuideInput from "@/components/GuideInput.vue";
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
    GuideInput,
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
