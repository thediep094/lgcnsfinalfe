import { createStore } from "vuex";
import userModule from "./modules/user/index.js";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    user: userModule,
  },
  plugins: [createPersistedState()],
});

export default store;
