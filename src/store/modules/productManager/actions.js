import ProductService from "@/service/ProductService";

export default {
  async getProductsList({ commit }, filters) {
    try {
      // loading

      commit("setLoading", true);
      // Get data
      const response = await ProductService.getProductsFilter(filters);
      // If get success save into productsData
      const productsData = response.data;
      commit("setProductsList", productsData);
      return { success: true, message: "Get products successful" };
    } catch (error) {
      console.error("Get data failed:", error);
      commit("setError", error);
      return { success: false, message: "Get data failed" };
    } finally {
      commit("setLoading", false); // End loading
    }
  },
  async deleteProduct({ commit }, productId) {
    try {
      // loading
      commit("setLoading", true);
      // Delete product
      await ProductService.deleteProduct(productId);
      return { success: true, message: "Delete product successful" };
    } catch (error) {
      console.error("Delete product failed:", error);
      commit("setError", error);
      return { success: false, message: "Delete product failed" };
    } finally {
      commit("setLoading", false); // End loading
    }
  },

  async updateProduct({ commit }, { productId, updatedProductData }) {
    try {
      // loading
      commit("setLoading", true);
      // Update product
      await ProductService.updateProduct(productId, updatedProductData);
      return { success: true, message: "Update product successful" };
    } catch (error) {
      console.error("Update product failed:", error);
      commit("setError", error);
      return { success: false, message: "Update product failed" };
    } finally {
      commit("setLoading", false); // End loading
    }
  },

  async createProduct({ commit }, productData) {
    try {
      // loading
      commit("setLoading", true);
      // Create product
      await ProductService.createProduct(productData);
      return { success: true, message: "Create product successful" };
    } catch (error) {
      console.error("Create product failed:", error);
      commit("setError", error);
      return { success: false, message: "Create product failed" };
    } finally {
      commit("setLoading", false); // End loading
    }
  },
};
