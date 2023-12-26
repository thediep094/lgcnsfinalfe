<template>
  <div class="pt-7 pl-2 flex flex-col">
    <div class="mb-10">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <icon-container iconType="icon-search"></icon-container>
        </div>
        <input
          v-model="filters.name"
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          @click="getProducts"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </div>

    <h2 class="font-bold text-2xl title">List products</h2>
    <div class="mt-5 flex flex-col bg-white">
      <div class="product-list">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>

    <product-list-pagination
      :size="filters.size"
      :page="filters.page"
      @size-change="handleSizeChange"
      @page-change="handlePageChange"
    ></product-list-pagination>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import IconContainer from "@/components/IconContainer.vue";
import ProductListPagination from "./ProductListPagination.vue";
export default {
  data() {
    return {
      filters: {
        size: 8,
        page: 0,
        name: "",
      },
    };
  },
  components: {
    ProductItem,
    IconContainer,
    ProductListPagination,
  },
  computed: {
    products() {
      return this.$store.getters["productManager/productsList"];
    },
  },
  methods: {
    getProducts() {
      this.$store.dispatch("productManager/getProductsList", this.filters);
    },
    handleSizeChange(newSize) {
      this.filters.size = newSize;
      this.getProducts();
    },
    handlePageChange(newPage) {
      this.filters.page = newPage;
      this.getProducts();
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
}
</style>
