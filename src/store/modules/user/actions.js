import AuthService from "@/service/AuthService";

export default {
  async login({ commit }, credentials) {
    try {
      commit("setLoading", true); // Bắt đầu loading
      // Thực hiện logic đăng nhập ở đây, ví dụ sử dụng API hoặc service
      const response = await AuthService.login(credentials);
      // Nếu đăng nhập thành công, lưu thông tin người dùng vào state userData
      const userData = response.data;
      console.log(userData);
      commit("setUserData", userData);
      commit("setIsAuthenticated", true);

      // Trả về dữ liệu (nếu cần thiết)
      return { success: true, message: "Login successful" };
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, message: "Login failed" };
    } finally {
      commit("setLoading", false); // Kết thúc loading
    }
  },
};
