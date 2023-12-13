<template>
  <div class="list-pagination mt-5 flex flex-row items-center justify-center">
    <div class="flex flex-row items-center gap-7">
      <label for="number-input" class="whitespace-nowrap"
        >Items per page:</label
      >
      <input
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        class="input p-0 focus:border-none focus:outline-none"
        placeholder="1"
        min="1"
        required
      />

      <span class="whitespace-nowrap">1-4 of 10</span>
      <button class="prev flex items-center">
        <icon-container iconType="icon-arrow-prev"></icon-container>
      </button>
      <button class="next flex items-center">
        <icon-container iconType="icon-arrow-next"></icon-container>
      </button>
    </div>
  </div>
</template>

<script>
import IconContainer from "@/components/IconContainer.vue";

export default {
  components: {
    IconContainer,
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
