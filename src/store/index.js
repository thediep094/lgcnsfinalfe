import { createStore } from "vuex";
import userModule from "./modules/user/index.js";
import dashboardModule from "./modules/dashboard/index.js";
import productManager from "./modules/productManager/index.js";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    user: userModule,
    dashboard: dashboardModule,
    productManager: productManager,
  },
  plugins: [createPersistedState()],
});

export default store;
