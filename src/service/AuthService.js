// services/authService.js
import axios from "axios";

const API_URL = "http://localhost:8081";

export default {
  async login(credentials) {
    try {
      const response = await axios.post(`${API_URL}/users/login`, credentials);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error.response ? error.response.data : { message: "Login failed" };
    }
  },

  async register(userData) {
    try {
      const response = await axios.post(`${API_URL}/users/create`, userData);
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error.response
        ? error.response.data
        : { message: "Registration failed" };
    }
  },

  // Additional methods as needed
};
