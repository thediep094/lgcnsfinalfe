import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      isAuthenticated: false,
      userData: null, // Thêm state mới để lưu trữ dữ liệu người dùng
      loading: false,
      error: null,
    };
  },
  mutations,
  actions,
  getters,
};
