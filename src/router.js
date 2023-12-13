import { createRouter, createWebHistory } from "vue-router";
import Register from "./pages/register/Register.vue";
import Login from "./pages/login/Login.vue";
import DashBoard from "./pages/dashboard/DashBoard.vue";
import User from "./pages/user/User.vue";
import NotFound from "./pages/NotFound.vue";

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
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/dashboard",
      component: DashBoard,
    },
    {
      path: "/user/:id",
      component: User,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
