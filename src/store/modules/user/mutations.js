export default {
  setIsAuthenticated(state, value) {
    state.isAuthenticated = value;
  },

  setUserData(state, userData) {
    state.userData = userData;
  },

  setLoading(state, value) {
    state.loading = value;
  },

  setError(state, value) {
    state.error = value;
  },
};
