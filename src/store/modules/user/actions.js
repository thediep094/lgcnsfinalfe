import AuthService from "@/service/AuthService";
import UserService from "@/service/UserService";
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
export default {
  async login({ commit }, credentials) {
    try {
      commit("setLoading", true); // Start loading
      // Implement login logic here, for example using an API or service
      const response = await AuthService.login(credentials);
      // If logged in successfully, save user information into state userData
      const userData = response.data;
      commit("setUserData", userData);
      commit("setIsAuthenticated", true);
      notify({
        title: "Login success",
        text: "You have been logged in!",
      });

      return { success: true, message: "Login successful" };
    } catch (error) {
      console.error("Login failed:", error);
      commit("setError", error);
      return { success: false, message: "Login failed" };
    } finally {
      commit("setLoading", false); // Finish loading
    }
  },

  logout({ commit }) {
    commit("setUserData", null);
    commit("setIsAuthenticated", false);
    commit("setError", null);
  },

  async register({ commit }, user) {
    try {
      commit("setLoading", true); // Start loading
      const response = await AuthService.register(user);
      const userData = response.data;
      commit("setUserData", userData);
      commit("setIsAuthenticated", true);
      notify({
        title: "Register success",
        text: "You have been logged in!",
      });
      return { success: true, message: "Register successful" };
    } catch (error) {
      console.error("Login failed:", error);
      commit("setError", error);
      return { success: false, message: "Register failed" };
    } finally {
      commit("setLoading", false); // Finish loading
    }
  },

  clearError({ commit }) {
    commit("setError", null);
  },

  async update({ commit }, data) {
    try {
      commit("setLoading", true); // Start loading
      const response = await UserService.updateDataUser(data.userId, data.data);
      const userData = response.data;
      commit("setUserData", userData);
      notify({
        title: "Update success",
        text: "Update user information succesfully!",
      });
      return { success: true, message: "Update successful" };
    } catch (error) {
      console.error("Login failed:", error);
      commit("setError", error);
      return { success: false, message: "Update failed" };
    } finally {
      commit("setLoading", false); //  Finish loading
    }
  },

  async adminUpdate({ commit }, data) {
    try {
      commit("setLoading", true); // Start loading
      await UserService.updateDataUser(data.userId, data.data);
      notify({
        title: "Update success",
        text: "Update user information succesfully!",
      });
      return { success: true, message: "Update successful" };
    } catch (error) {
      console.error("Update failed:", error);
      commit("setError", error);
      return { success: false, message: "Update failed" };
    } finally {
      commit("setLoading", false); //  Finish loading
    }
  },

  async changePassword({ commit }, data) {
    try {
      commit("setLoading", true); // Start loading
      await UserService.changePasswordUser(data.userId, data.data);
      notify({
        title: "Update success",
        text: "Change password succesfully!",
      });
      return { success: true, message: "Update successful" };
    } catch (error) {
      console.error("Change password failed:", error);
      commit("setError", error);
      return { success: false, message: "Change password  failed" };
    } finally {
      commit("setLoading", false); // Finish loading
    }
  },

  async changeAvatar({ commit }, data) {
    try {
      commit("setLoading", true); // Start loading
      const response = await UserService.changeAvatar(data.userId, data.data);
      const userData = response.data;
      commit("setUserData", userData);
      notify({
        title: "Update success",
        text: "Change avatar succesfully!",
      });
      return { success: true, message: "Update successful" };
    } catch (error) {
      console.error("Change avatar failed:", error);
      commit("setError", error);
      return { success: false, message: "Change password  failed" };
    } finally {
      commit("setLoading", false); // Finish loading
    }
  },
};
