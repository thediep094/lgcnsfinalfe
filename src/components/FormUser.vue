<template>
  <div class="login__form w-full flex flex-col">
    <p class="text-center title">Welcome to LGCNS</p>

    <div class="navigation flex flex-row gap-2 mt-5 mb-5">
      <div
        class="navigation-item w-1/2 text-center z-10 text-white"
        @click="callChangeLogin"
      >
        Login
      </div>
      <div
        class="navigation-item w-1/2 text-center z-10 text-white"
        @click="callChangeRegister"
      >
        Register
      </div>
      <div
        class="effect"
        :class="{ login: !isRegister, register: isRegister }"
      ></div>
    </div>

    <p class="text-center mb-5">
      <span v-if="type == 'login'">
        If you already have an account, please log in here.
      </span>
      <span v-else> If you don't have an account, please register here. </span>
    </p>
    <transition name="fade" mode="out-in">
      <div class="form-login" v-if="!isRegister">
        <form-login></form-login>
      </div>

      <div class="form-register" v-else-if="isRegister">
        <form-register></form-register>
      </div>
    </transition>
  </div>
</template>

<script>
import FormLogin from "../pages/login/FormLogin.vue";
import FormRegister from "../pages/register/FormRegister.vue";

export default {
  props: {
    isRegister: {
      type: Boolean,
      default: false,
    },
    changeLogin: {
      type: Function,
      required: true,
    },
    changeRegister: {
      type: Function,
      required: true,
    },
  },
  methods: {
    callChangeLogin() {
      this.changeLogin();
      this.$store.dispatch("user/clearError");
    },

    callChangeRegister() {
      this.changeRegister();
      this.$store.dispatch("user/clearError");
    },
  },
  components: {
    FormLogin,
    FormRegister,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

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
  left: calc(50% + 10px);
}

.login__image-url {
  border-radius: 29px;
  width: 100%;
  max-height: 80vh;
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
