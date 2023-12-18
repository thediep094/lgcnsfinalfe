// services/userService.js
import axios from "axios";

const API_URL = "http://localhost:8081";

export default {
  async getUsersFilter(filters) {
    try {
      const response = await axios.post(`${API_URL}/users/getUser`, null, {
        params: filters,
      });
      return response.data;
    } catch (error) {
      console.error("Get users failed:", error);
      throw error.response
        ? error.response.data
        : { message: "Get users failed" };
    }
  },

  async exportData(filters) {
    try {
      const response = await axios.post(
        `${API_URL}/users/exportToExcel`,
        null,
        {
          params: filters,
          responseType: "blob",
        }
      );
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "exported_data.xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Get users failed:", error);
      throw error.response
        ? error.response.data
        : { message: "Get users failed" };
    }
  },

  async updateDataUser(userId, data) {
    try {
      const response = await axios.put(
        `${API_URL}/users/update/${userId}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Get users failed:", error);
      throw error.response
        ? error.response.data
        : { message: "Get users failed" };
    }
  },

  async getUserData(userId, data) {
    try {
      const response = await axios.post(
        `${API_URL}/users/user/${userId}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Get users failed:", error);
      throw error.response
        ? error.response.data
        : { message: "Get users failed" };
    }
  },

  async deleteUser(deleteUserId, data) {
    try {
      const response = await axios.post(
        `${API_URL}/users/delete/${deleteUserId}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Get users failed:", error);
      throw error.response
        ? error.response.data
        : { message: "Get users failed" };
    }
  },
  // Additional methods as needed
};
