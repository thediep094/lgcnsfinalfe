<template>
  <div class="pt-7 pl-2 flex flex-col">
    <div class="mb-10">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only"
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
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          @click="getProducts"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </div>

    <div class="list-users mt-5 flex flex-col bg-white">
      <h3 class="px-6 py-5 title">List products</h3>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
              <th scope="col" class="px-6 py-5">Price</th>
              <th
                v-if="userData?.role == 'ADMIN'"
                scope="col"
                class="px-6 py-5"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody class="tbody">
            <tr
              v-for="product in products"
              :key="product?.product.id"
              class="bg-white border-b hover:bg-gray-50"
            >
              <td class="px-6 py-4">{{ product.product.id }}</td>

              <td class="px-6 py-4 pl-10 flex flex-col">
                <p class="tb-name">{{ product.product.name }}</p>
              </td>
              <td class="px-6 py-4">{{ product.product.price }}</td>
              <td
                class="px-6 py-4 flex flex-row gap-2"
                v-if="userData?.role == 'ADMIN'"
              >
                <icon-container
                  iconType="icon-edit"
                  @click="editProduct(product.product.id)"
                ></icon-container>
                <icon-container
                  iconType="icon-delete"
                  @click="deleteProduct(product.product.id)"
                ></icon-container>
              </td>
            </tr>
          </tbody>
        </table>
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
import IconContainer from "@/components/IconContainer.vue";
import ProductListPagination from "../productList/ProductListPagination.vue";
export default {
  data() {
    return {
      filters: {
        size: 10,
        page: 0,
        name: "",
      },
    };
  },
  components: {
    IconContainer,
    ProductListPagination,
  },
  computed: {
    products() {
      return this.$store.getters["productManager/productsList"];
    },
    userData() {
      return this.$store.getters["user/userData"];
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
    editProduct(productId) {
      this.$router.push({
        name: "editProduct",
        params: {
          productId: productId,
        },
      });
    },
    async deleteProduct(productId) {
      await this.$store.dispatch("productManager/deleteProduct", {
        productId: productId,
      });

      this.getProducts();
    },
  },
  mounted() {
    this.getProducts();
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
.product-list {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
}
.thead {
  background: #eff4fa;
  color: #8f9bb3;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
}
</style>
