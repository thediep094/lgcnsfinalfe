import AuthService from "@/service/AuthService";

export default {
  async login({ commit }, credentials) {
    try {
      commit("setLoading", true); // Bắt đầu loading
      // Thực hiện logic đăng nhập ở đây, ví dụ sử dụng API hoặc service
      const response = await AuthService.login(credentials);
      // Nếu đăng nhập thành công, lưu thông tin người dùng vào state userData
      const userData = response.data;
      commit("setUserData", userData);
      commit("setIsAuthenticated", true);

      return { success: true, message: "Login successful" };
    } catch (error) {
      console.error("Login failed:", error);
      commit("setError", error);
      return { success: false, message: "Login failed" };
    } finally {
      commit("setLoading", false); // Kết thúc loading
    }
  },

  logout({ commit }) {
    commit("setUserData", null);
    commit("setIsAuthenticated", false);
    commit("setError", null);
  },

  async register({ commit }, user) {
    try {
      commit("setLoading", true); // Bắt đầu loading
      const response = await AuthService.register(user);
      const userData = response.data;
      commit("setUserData", userData);
      commit("setIsAuthenticated", true);
      return { success: true, message: "Register successful" };
    } catch (error) {
      console.error("Login failed:", error);
      commit("setError", error);
      return { success: false, message: "Register failed" };
    } finally {
      commit("setLoading", false); // Kết thúc loading
    }
  },

  clearError({ commit }) {
    commit("setError", null);
  },
};
