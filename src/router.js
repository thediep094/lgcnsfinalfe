import { createRouter, createWebHistory } from "vue-router";
import Register from "./pages/register/Register.vue";
import Login from "./pages/login/Login.vue";
import DashBoard from "./pages/dashboard/DashBoard.vue";
import InfoUser from "./pages/info/InfoUser.vue";
import NotFound from "./pages/NotFound.vue";
import UpdateUserVue from "./pages/updateUser/UpdateUser.vue";
import store from "./store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/register",
      component: Register,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters["user/isAuthenticated"];
        if (isAuthenticated) {
          next({ name: "dashboard" });
        } else {
          next();
        }
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters["user/isAuthenticated"];
        if (isAuthenticated) {
          next({ name: "dashboard" });
        } else {
          next();
        }
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashBoard,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters["user/isAuthenticated"];
        if (isAuthenticated) {
          next();
        } else {
          next({ name: "login" });
        }
      },
    },
    {
      path: "/info",
      name: "infoUser",
      component: InfoUser,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters["user/isAuthenticated"];
        if (isAuthenticated) {
          next();
        } else {
          next({ name: "login" });
        }
      },
    },
    {
      path: "/user/:userId",
      name: "updateUser",
      component: UpdateUserVue,
      props: true,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters["user/isAuthenticated"];
        const isAdmin = store.getters["user/userData"].role;
        if (isAuthenticated && isAdmin == "ADMIN") {
          next();
        } else {
          next({ name: "login" });
        }
      },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
