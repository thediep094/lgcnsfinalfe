<template>
  <div
    class="list-pagination mt-5 flex flex-row items-center justify-center mb-10"
  >
    <div class="flex flex-row items-center gap-7">
      <label for="number-input" class="whitespace-nowrap"
        >Items per page:</label
      >
      <input
        v-model="pageSize"
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        class="input p-0 focus:border-none focus:outline-none"
        placeholder="1"
        min="1"
        max="10"
        @input="handleSizeInput"
        required
      />

      <button class="prev flex items-center">
        <icon-container
          iconType="icon-arrow-prev"
          @click="decrementPage"
        ></icon-container>
      </button>
      <button class="next flex items-center">
        <icon-container
          iconType="icon-arrow-next"
          @click="incrementPage"
        ></icon-container>
      </button>
    </div>
  </div>
</template>
<script>
import IconContainer from "@/components/IconContainer.vue";

export default {
  props: {
    size: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pageSize: this.size,
      currentPage: this.page,
    };
  },
  watch: {
    size(newSize) {
      this.pageSize = newSize;
    },
    page(newPage) {
      this.currentPage = newPage;
    },
  },
  computed: {
    products() {
      return this.$store.getters["productManager/productsList"];
    },
  },
  components: {
    IconContainer,
  },
  methods: {
    handleSizeInput() {
      this.$emit("size-change", this.pageSize);
    },
    decrementPage() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
        this.$emit("page-change", this.currentPage);
      }
    },
    incrementPage() {
      if (this.products.length + 1 < this.pageSize) {
        alert("No more page!!");
      } else {
        this.currentPage += 1;
        this.$emit("page-change", this.currentPage);
      }
    },
  },
};
</script>

<style>
.input {
  width: 30px;
  appearance: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  outline: none !important;
  border-bottom: 1px solid black;
  color: #717171;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  --tw-ring-shadow: transparent !important;
}

.input::-webkit-inner-spin-button,
.input::-webkit-outer-spin-button {
  margin: 0;
}

.input:focus {
  border-bottom: 1px solid black;
  outline: none !important;
}

.list-pagination {
  color: #717171;
  font-size: 10.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
