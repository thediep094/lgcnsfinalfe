<template>
  <div class="mb-3">
    <label for="id" class="block mb-2 text-sm font-medium text-gray-900"
      >ID Account</label
    >
    <input
      type="text"
      id="id"
      v-model="id.value"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      :class="{ 'border-red-500': id.error }"
      placeholder="Your ID"
      required
    />
  </div>

  <div class="mb-3">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
      >Password</label
    >
    <div class="relative">
      <input
        :type="password.show ? 'text' : 'password'"
        id="password"
        v-model="password.value"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        :class="{ 'border-red-500': password.error }"
        placeholder="•••••••••"
        required
      />
      <div
        class="absolute cursor-pointer right-2 top-0 bottom-0 flex items-center"
        @click="btnShowPass"
      >
        <icon-container
          v-if="!password.show"
          iconType="icon-password-display"
        ></icon-container>
        <icon-container v-else iconType="icon-password-hidden"></icon-container>
      </div>
    </div>
  </div>
  <h2 class="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
    Password requirements:
  </h2>
  <ul
    class="max-w-md text-sm space-y-1 text-gray-500 list-disc list-inside mb-3"
  >
    <li>
      Only letters, numbers, and special and characters are entered for password
    </li>
    <li>
      At least 8 characters if password have 3 combinations and 10 characters if
      password have 2 combinations.
    </li>
    <li>Special characters are only @#$%^&* can be entered</li>
    <li>Consecutive numbers must not be more than 3 characters</li>
  </ul>
  <div class="mb-3">
    <label
      for="confirm-password"
      class="block mb-2 text-sm font-medium text-gray-900"
      >Confirm Password</label
    >
    <div class="relative">
      <input
        :type="confirmPassword.show ? 'text' : 'password'"
        v-model="confirmPassword.value"
        id="confirm-password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        :class="{ 'border-red-500': confirmPassword.error }"
        placeholder="•••••••••"
        required
      />
      <div
        class="absolute cursor-pointer right-2 top-0 bottom-0 flex items-center"
        @click="btnShowConfirmPass"
      >
        <icon-container
          v-if="!confirmPassword.show"
          iconType="icon-password-display"
        ></icon-container>
        <icon-container v-else iconType="icon-password-hidden"></icon-container>
      </div>
    </div>
  </div>
  <div class="mb-3 flex md:flex-row flex-col md:gap-2">
    <div class="flex-1">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
        >Email address</label
      >
      <input
        type="text"
        id="email"
        v-model="email.value"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Email@"
        :class="{ 'border-red-500': email.error }"
        required
      />
    </div>
    <div>
      <label for="domain" class="block mb-2 text-sm font-medium text-gray-900"
        >Domain</label
      >
      <select
        id="domain"
        v-model="domain"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option>naver.com</option>
        <option>daum.net</option>
        <option>gmail.com</option>
        <option>nate.com</option>
        <option>hotmail.com</option>
      </select>
    </div>
  </div>
  <div class="mb-3">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
      >Name</label
    >
    <input
      type="text"
      id="name"
      v-model="name.value"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      :class="{ 'border-red-500': name.error }"
      placeholder="Your fullname"
      required
    />
  </div>

  <div class="mb-6">
    <label
      for="mobilePhone"
      class="block mb-2 text-sm font-medium text-gray-900"
      >Mobile Phone</label
    >
    <input
      type="text"
      id="mobilePhone"
      v-model="mobilePhone.value"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      :class="{ 'border-red-500': mobilePhone.error }"
      placeholder="Your mobile phone"
      required
    />
  </div>

  <div class="mb-6" v-if="error">
    <p class="mt-2 text-sm text-red-600">
      {{ error?.message }}
    </p>
  </div>

  <button
    @click="submitRegister"
    type="button"
    class="text-white transition-all w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    <span v-if="!loading">Register</span>
    <span v-else>
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
      Loading...
    </span>
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
      id: {
        value: "",
        error: false,
      },
      password: {
        value: "",
        error: false,
        show: false,
      },
      email: {
        value: "",
        error: false,
      },
      mobilePhone: {
        value: "",
        error: false,
      },
      name: {
        value: "",
        error: false,
      },
      confirmPassword: {
        value: "",
        error: false,
        show: false,
      },
      domain: "naver.com",
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
    async submitRegister() {
      try {
        if (this.checkValidate() && this.checkPassword(this.password.value)) {
          this.$store.commit("user/setError", null);
          await this.$store.dispatch("user/register", {
            userId: this.id.value.trim(),
            password: this.password.value,
            name: this.name.value,
            mobilePhone: this.mobilePhone.value,
            email: this.email.value + "@" + this.domain,
          });
          // If login is successful, navigate to the dashboard and clear error
          this.$router.push({ name: "dashboard" });
        }
      } catch (error) {
        // Handle login failure, show error messages, etc.
        console.error("Login failed", error);
      }
    },

    checkValidate() {
      const regexId = /\d{4,}/;
      const regexName = /^[a-zA-Z ]+$/;
      const regexPhone = /^[0-9]+$/;

      if (!regexId.test(this.id.value)) {
        this.$store.commit("user/setError", {
          message: "ID must be at least 4 digits long.",
        });
        this.id.error = true;
        return false;
      } else {
        this.id.error = false;
      }

      if (!regexName.test(this.name.value)) {
        this.$store.commit("user/setError", {
          message: "The name is only entered in letters.",
        });
        this.name.error = true;
        return false;
      } else {
        this.name.error = false;
      }

      if (!regexPhone.test(this.mobilePhone.value)) {
        this.$store.commit("user/setError", {
          message: "Mobile phone number can only contain numbers.",
        });
        this.mobilePhone.error = true;
        return false;
      } else {
        this.mobilePhone.error = false;
      }

      this.$store.commit("user/setError", null);
      return true;
    },

    checkPassword() {
      const countCombinations = this.containCount(this.password.value);
      const checkSpecialCharacters = /^[a-zA-Z0-9@#$%^&*]+$/;
      const consecutiveNumber = /.*\d{4,}.*/;

      if (this.password.value != this.confirmPassword.value) {
        this.$store.commit("user/setError", {
          message: "Your password not equal your confirm password",
        });
        this.password.error = true;
        this.confirmPassword.error = true;
        return false;
      } else {
        this.password.error = false;
        this.confirmPassword.error = false;
      }

      if (this.password.value.length < 8) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Password must have at least 8 characters",
        });
        this.password.error = true;

        return false;
      } else {
        this.password.error = false;
      }

      if (countCombinations < 2) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Password must have at least 2 combinations: letters, numbers, or special characters",
        });
        this.password.error = true;
        return false;
      } else {
        this.password.error = false;
      }

      if (this.password.value.length < 10 && countCombinations == 2) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Password must have at least 10 characters if 2 combinations: letters, numbers, or special characters",
        });
        this.password.error = true;
        return false;
      } else {
        this.password.error = false;
      }

      if (this.password.value.length < 8 && countCombinations == 3) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Password must have at least 8 characters if 3 combinations: letters, numbers, or special characters",
        });
        this.password.error = true;
        return false;
      } else {
        this.password.error = false;
      }

      if (!checkSpecialCharacters.test(this.password.value)) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Password can only contain letters, numbers, and the special characters @#$%^&*",
        });
        this.password.error = true;
        return false;
      } else {
        this.password.error = false;
      }

      if (consecutiveNumber.test(this.password.value)) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Consecutive numbers must not be more than 3 characters",
        });
        this.password.error = true;

        return false;
      } else {
        for (const s of this.password.value) {
          if (Number(s)) {
            const indexOfS = this.password.value.indexOf(s);
            const currentNumber = Number(s);
            const nextNumber = Number(this.password.value[indexOfS + 1]) - 1;
            const nextNextNumber =
              Number(this.password.value[indexOfS + 2]) - 2;
            if (
              currentNumber == nextNumber &&
              currentNumber == nextNextNumber
            ) {
              this.$store.commit("user/setError", {
                message:
                  "Your password not formatted correctly: Consecutive numbers are not that are 1 value greater than each other",
              });
              this.password.error = true;

              return false;
            }
          }
        }
        this.password.error = false;
        this.$store.commit("user/setError", null);
        return true;
      }
    },

    containCount(password) {
      const regexLetters = /.*[a-zA-z].*/;
      const regexNumbers = /.*\\d.*/;
      const regexSpecialCharacters = /.*[^a-zA-Z0-9].*/;
      let count = 0;
      if (regexLetters.test(password)) {
        count += 1;
      }

      if (regexNumbers.test(password)) {
        count += 1;
      }

      if (regexSpecialCharacters.test(password)) {
        count += 1;
      }

      return count;
    },
    btnShowPass() {
      this.password.show = !this.password.show;
    },
    btnShowConfirmPass() {
      this.confirmPassword.show = !this.confirmPassword.show;
    },
  },
};
</script>
