// services/authService.js
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

  // Additional methods as needed
};
