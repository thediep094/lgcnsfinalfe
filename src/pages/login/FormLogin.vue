<template>
  <div class="mb-6">
    <label for="id" class="block mb-2 text-sm font-medium text-gray-900"
      >ID Account</label
    >
    <input
      type="text"
      id="id"
      v-model="id"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="Your ID"
      required
    />
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
      >Password</label
    >
    <div class="relative">
      <input
        :type="showPass ? 'text' : 'password'"
        v-model="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="•••••••••"
        required
        @keyup.enter="submitLogin"
      />
      <div
        class="absolute cursor-pointer right-2 top-0 bottom-0 flex items-center"
        @click="btnShowPass"
      >
        <icon-container
          v-if="!showPass"
          iconType="icon-password-display"
        ></icon-container>
        <icon-container v-else iconType="icon-password-hidden"></icon-container>
      </div>
    </div>
  </div>

  <div class="mb-6" v-if="error">
    <p class="mt-2 text-sm text-red-600">
      {{ error?.message }}
    </p>
  </div>

  <button
    @click="submitLogin"
    type="button"
    class="text-white transition-all w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    <span v-if="!loading">Login</span>
    <span v-else> Loading... </span>
  </button>
</template>

<script>
import IconContainer from "@/components/IconContainer.vue";
export default {
  components: {
    IconContainer,
  },
  data() {
    return {
      id: "",
      password: "",
      showPass: false,
    };
  },
  computed: {
    loading() {
      return this.$store.getters["user/loading"];
    },
    error() {
      return this.$store.getters["user/error"];
    },
  },
  methods: {
    async submitLogin() {
      try {
        // Dispatch the login action
        await this.$store.dispatch("user/login", {
          userId: this.id,
          password: this.password,
        });

        // If login is successful, navigate to the dashboard
        this.$router.push({ name: "dashboard" });
      } catch (error) {
        // Handle login failure, show error messages, etc.
        console.error("Login failed", error);
      }
    },
    btnShowPass() {
      this.showPass = !this.showPass;
    },
  },
};
</script>
