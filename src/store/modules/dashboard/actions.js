import UserService from "@/service/UserService";
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();

export default {
  async getData({ commit }, filters) {
    try {
      commit("setLoading", true); // Start loading
      // Implement the login logic here
      const response = await UserService.getUsersFilter(filters);
      // If logged in successfully, save user information into state userData
      const userData = response.data;
      commit("setData", userData);

      return { success: true, message: "Get data successful" };
    } catch (error) {
      console.error("Get data failed:", error);
      commit("setError", error);
      return { success: false, message: "Get data failed" };
    } finally {
      commit("setLoading", false); // Finish loading
    }
  },

  async exportData({ commit }, filters) {
    try {
      commit("setLoading", true); // Start loading
      // Implement the login logic here
      await UserService.exportData(filters);
      return { success: true, message: "Export data successful" };
    } catch (error) {
      console.error("Get data failed:", error);
      commit("setError", error);
      return { success: false, message: "Export data failed" };
    } finally {
      commit("setLoading", false); // Finish loading
    }
  },

  async deleteUser({ commit }, data) {
    try {
      await UserService.deleteUser(data.deleteUserId, data.data);
      notify({
        title: "Delete success",
        text: `Delete user successfully!`,
      });
    } catch (error) {
      console.error("Delete data failed:", error);
      commit("setError", error);
      return { success: false, message: "Delete data failed" }; // Finish loading
    }
  },
};
