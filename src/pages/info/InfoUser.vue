<template>
  <div>
    <div class="max-w-sm mx-auto">
      <img
        class="rounded w-36 h-36 mb-5 mt-5 m-auto object-cover"
        :src="avatarUrl"
        :alt="`${userData?.name}'s avatar`"
      />
      <form class="max-w-lg mx-auto mb-5">
        <label
          class="block mb-2 text-sm font-medium text-gray-900"
          for="user_avatar"
          >Upload file</label
        >
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
          ref="avatarInput"
          @change="changeAvatar"
          accept="image/*"
        />
        <div class="mt-1 text-sm text-gray-500" id="user_avatar_help">
          A profile picture is useful to confirm your are logged into your
          account
        </div>
      </form>
      <div class="mb-5">
        <label for="userId" class="block mb-2 text-sm font-medium text-gray-900"
          >Your ID</label
        >
        <input
          type="text"
          id="userId"
          :value="userData?.userId"
          class="shadow-sm cursor-not-allowed bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="UserId"
          disabled
          required
        />
      </div>
      <div class="mb-5 flex md:flex-row flex-col md:gap-2">
        <div class="flex-1">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Your email</label
          >
          <input
            type="email"
            id="email"
            v-model="user.email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@lgcns.com"
            required
          />
        </div>
        <div>
          <label
            for="domain"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Domain</label
          >
          <select
            id="domain"
            v-model="user.domain"
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
      <div class="mb-5">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
          >Your name</label
        >
        <input
          type="text"
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          v-model="user.name"
        />
      </div>
      <div class="mb-5">
        <label
          for="mobilePhone"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Your mobile phone</label
        >
        <input
          type="text"
          id="mobilePhone"
          v-model="user.mobilePhone"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <div class="mb-5">
        <label for="role" class="block mb-2 text-sm font-medium text-gray-900"
          >Your role</label
        >
        <input
          type="text"
          id="role"
          :value="userData?.role"
          class="shadow-sm cursor-not-allowed bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          disabled
        />
      </div>
      <div class="mb-6" v-if="status">
        <p class="mt-2 text-sm text-green-500">Update user successful</p>
      </div>
      <div class="mb-6" v-if="error">
        <p class="mt-2 text-sm text-red-600">
          {{ error?.message }}
        </p>
      </div>
      <button
        @click="updateData"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
      user: {
        email: "",
        mobilePhone: "",
        name: "",
        domain: "",
      },
      status: false,
    };
  },
  computed: {
    userData() {
      return this.$store.getters["user/userData"];
    },
    avatarUrl() {
      return "http://localhost:8081/avatar/images/" + this.userData?.avatar;
    },
    domainData() {
      return this.$store.getters["user/userData"].email.split("@")[1];
    },
    emailData() {
      return this.$store.getters["user/userData"].email.split("@")[0];
    },
    nameData() {
      return this.$store.getters["user/userData"].name;
    },
    mobilePhoneData() {
      return this.$store.getters["user/userData"].mobilePhone;
    },
    userId() {
      return this.$store.getters["user/userData"].userId;
    },
    roleData() {
      return this.$store.getters["user/userData"].role;
    },
    loading() {
      return this.$store.getters["user/loading"];
    },
  },
  mounted() {
    this.$store.dispatch("user/clearError");
    this.user.domain = this.domainData;
    this.user.email = this.emailData;
    this.user.mobilePhone = this.mobilePhoneData;
    this.user.name = this.nameData;
    this.avatar = this.avatarUrl;
  },

  methods: {
    async updateData() {
      try {
        const data = {};
        data.email = this.user.email + "@" + this.user.domain;
        data.mobilePhone = this.user.mobilePhone;
        data.name = this.user.name;
        data.role = this.roleData;
        data.userId = this.userId;
        const res = await this.$store.dispatch("user/update", {
          userId: this.userId,
          data: data,
        });

        if (res?.success) {
          this.status = true;
        } else {
          this.status = false;
        }
      } catch (error) {
        console.log(error);
        this.status = false;
      }
    },

    async changeAvatar(event) {
      try {
        const file = event.target.files[0];
        if (file) {
          const data = new FormData();
          data.append("file", file);
          await this.$store.dispatch("user/changeAvatar", {
            userId: this.userId,
            data: data,
          });
          this.$refs.avatarInput.value = "";
        }
      } catch (error) {
        console.error("Error uploading avatar:", error);
      }
    },
  },
};
</script>
