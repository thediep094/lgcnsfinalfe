export default {
  setProductsList(state, productsList) {
    state.productsList = productsList;
  },

  setLoading(state, value) {
    state.loading = value;
  },

  setError(state, value) {
    state.error = value;
  },
};
