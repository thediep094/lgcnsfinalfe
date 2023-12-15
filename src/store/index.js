import { createStore } from "vuex";
import userModule from "./modules/user/index.js";
import dashboardModule from "./modules/dashboard/index.js";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    user: userModule,
    dashboard: dashboardModule,
  },
  plugins: [createPersistedState()],
});

export default store;
