import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      user: {
        id: 63200202,
        name: "nguyen the diep",
        mobilePhone: "0123456789",
        email: "diepnt@lgcns.com",
        role: "MEMBER",
        date: "2023-12-12",
      },
    };
  },
  mutations,
  actions,
  getters,
};
