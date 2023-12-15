<template>
  <div class="login flex md:flex-row flex-col mt-5">
    <div class="login__image w-full">
      <img
        class="object-cover login__image-url"
        src="https://www.lgcns.com/en/wp-content/uploads/sites/2/2023/01/02_1100x619.jpg"
        alt=""
      />
    </div>

    <form-user
      :isRegister="isRegister"
      :changeLogin="changeLogin"
      :changeRegister="changeRegister"
    >
    </form-user>
  </div>
</template>

<script>
// import IconContainer from "@/components/IconContainer.vue";
import FormUser from "@/components/FormUser.vue";
export default {
  name: "LoginPage",
  data() {
    return {
      isRegister: false,
    };
  },
  components: {
    // IconContainer,
    FormUser,
  },
  methods: {
    changeRegister() {
      this.isRegister = true;
      this.$store.dispatch("user/clearError");
    },

    changeLogin() {
      this.isRegister = false;
      this.$store.dispatch("user/clearError");
    },
  },
};
</script>

<style scoped>
.title {
  color: #4a85f6;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.navigation {
  position: relative;
  border-radius: 33px;
  background: #bdceec;
  padding: 13px 10px;
}

.navigation-item {
  cursor: pointer;
}

.effect {
  position: absolute;
  width: calc(50% - 21px);
  height: 40px;
  top: 5px;
  left: 10px;
  transition: 0.3s;
  border-radius: 33px;
  background: #4a85f6;
}

.effect.login {
  left: 10px;
}

.effect.register {
  left: calc(50% + 21px);
}

.login__image-url {
  border-radius: 29px;
  width: 100%;
  max-height: 90vh;
  aspect-ratio: 73/84;
  object-position: right;
}

@media screen and (min-width: 768px) {
  .login__image {
    width: 50%;
  }

  .login__form {
    width: 50%;
    padding: 50px 100px;
  }
}
</style>
