<template>
  <div class="mt-10">
    <div class="max-w-sm mx-auto">
      <div class="mb-5">
        <label
          for="oldPassword"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your old password</label
        >
        <input
          type="text"
          id="oldPassword"
          v-model="oldPassword"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Old password"
          required
        />
      </div>

      <div class="mb-5">
        <label
          for="newPassword"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your new password</label
        >
        <input
          type="text"
          id="newPassword"
          v-model="newPassword"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="New password"
          required
        />
      </div>

      <div class="mb-5">
        <label
          for="confirmPassword"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Confirm new password</label
        >
        <input
          type="text"
          id="confirmPassword"
          v-model="confirmPassword"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Confirm new password"
          required
        />
      </div>
      <div class="mb-6" v-if="status">
        <p class="mt-2 text-sm text-green-500 dark:text-red-500">
          Update password successful
        </p>
      </div>
      <div class="mb-6" v-if="error">
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ error?.message }}
        </p>
      </div>
      <button
        @click="submitChangePassword"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <span v-if="!loading">Update</span>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      status: false,
    };
  },
  computed: {
    error() {
      return this.$store.getters["user/error"];
    },
    userData() {
      return this.$store.getters["user/userData"];
    },
  },
  methods: {
    async submitChangePassword() {
      this.$store.dispatch("user/clearError");
      if (this.checkPassword()) {
        const res = await this.$store.dispatch("user/changePassword", {
          userId: this.$route.params.userId,
          data: {
            oldPassword: this.oldPassword,
            newPassword: this.newPassword,
            userId: this.userData.userId,
          },
        });
        if (res?.success) {
          this.status = true;
        } else {
          this.status = false;
        }
      } else {
        this.status = false;
      }
    },

    checkPassword() {
      const countCombinations = this.containCount(this.newPassword);
      const checkSpecialCharacters = /^[a-zA-Z0-9@#$%^&*]+$/;
      const consecutiveNumber = /.*\d{4,}.*/;

      if (this.confirmPassword != this.newPassword) {
        if (this.password.length < 8) {
          this.$store.commit("user/setError", {
            message: "Your confirm password not equal new password.",
          });
          return false;
        }
      }

      if (this.newPassword.length < 8) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Password must have at least 8 characters",
        });
        return false;
      }

      if (countCombinations < 2) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Password must have at least 2 combinations: letters, numbers, or special characters",
        });
        return false;
      }

      if (this.newPassword.length < 10 && countCombinations == 2) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Password must have at least 10 characters if 2 combinations: letters, numbers, or special characters",
        });
        return false;
      }

      if (this.newPassword.length < 8 && countCombinations == 3) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Password must have at least 8 characters if 3 combinations: letters, numbers, or special characters",
        });
        return false;
      }

      if (!checkSpecialCharacters.test(this.newPassword)) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Password can only contain letters, numbers, and the special characters @#$%^&*",
        });
        return false;
      }

      if (consecutiveNumber.test(this.newPassword)) {
        this.$store.commit("user/setError", {
          message:
            "Your password not formatted correctly: Consecutive numbers must not be more than 3 characters",
        });
        return false;
      } else {
        for (const s of this.newPassword) {
          if (Number(s)) {
            const indexOfS = this.newPassword.indexOf(s);
            const currentNumber = Number(s);
            const nextNumber = Number(this.newPassword[indexOfS + 1]) - 1;
            const nextNextNumber = Number(this.newPassword[indexOfS + 2]) - 2;
            if (
              currentNumber == nextNumber &&
              currentNumber == nextNextNumber
            ) {
              this.$store.commit("user/setError", {
                message:
                  "Your password not formatted correctly: Consecutive numbers are not that are 1 value greater than each other",
              });
              return false;
            }
          }
        }
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
  },
};
</script>
