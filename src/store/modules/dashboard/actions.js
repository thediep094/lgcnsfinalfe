import UserService from "@/service/UserService";

export default {
  async getData({ commit }, filters) {
    try {
      commit("setLoading", true); // Bắt đầu loading
      // Thực hiện logic đăng nhập ở đây, ví dụ sử dụng API hoặc service
      const response = await UserService.getUsersFilter(filters);
      // Nếu đăng nhập thành công, lưu thông tin người dùng vào state userData
      const userData = response.data;
      commit("setData", userData);

      return { success: true, message: "Get data successful" };
    } catch (error) {
      console.error("Get data failed:", error);
      commit("setError", error);
      return { success: false, message: "Get data failed" };
    } finally {
      commit("setLoading", false); // Kết thúc loading
    }
  },
};
