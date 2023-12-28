<template>
  <div class="relative w-fit inline-block">
    <div
      class="icon w-4 h-4 flex justify-center items-center"
      @mouseover="showMessage = true"
      @mouseleave="showMessage = false"
    >
      ?
    </div>
    <transition>
      <div
        class="message-container"
        v-show="showMessage"
        :class="{ active: showMessage }"
        v-text="message"
      ></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showMessage: false,
    };
  },
};
</script>

<style scoped>
.icon {
  background: #ca1515;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease; /* Add transition effect for background color */
}

.message-container {
  position: absolute;
  left: 100%;
  bottom: 0;
  opacity: 0;
  background: #fff;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: 0.3s; /* Add transition effect for opacity */
  width: 20rem;
}

.message-container.active {
  opacity: 1;
}
</style>
