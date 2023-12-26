// services/ProductService.js

import axios from "axios";
const API_URL = "http://localhost:8081";

export default {
  // get product with filter by name, page, size
  async getProductsFilter(filters) {
    try {
      console.log(filters);
      const response = await axios.post(`${API_URL}/product/all`, null, {
        params: filters,
      });
      return response.data;
    } catch (error) {
      console.error("Get products failed:", error);
      throw error.response
        ? error.response.data
        : { message: "Get products failed" };
    }
  },
  // Create product
  async createProduct(productData) {
    try {
      const response = await axios.post(
        `${API_URL}/product/create`,
        productData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Create product failed:", error);
      throw error.response
        ? error.response.data
        : { message: "Create product failed" };
    }
  },
  // Delete product by Id
  async deleteProduct(productId) {
    try {
      const response = await axios.post(
        `${API_URL}/product/delete/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Delete product failed:", error);
      throw error.response
        ? error.response.data
        : { message: "Delete product failed" };
    }
  },

  //   Update product by id
  async updateProduct(productId, updatedProductData) {
    try {
      const response = await axios.put(
        `${API_URL}/product/update/${productId}`,
        updatedProductData
      );
      return response.data;
    } catch (error) {
      console.error("Update product failed:", error);
      throw error.response
        ? error.response.data
        : { message: "Update product failed" };
    }
  },
};
