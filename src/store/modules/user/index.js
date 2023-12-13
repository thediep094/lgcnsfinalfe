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
        avatar:
          "https://i.pinimg.com/736x/31/af/88/31af882efb16e3f8f589ccf0afa2354a.jpg",
      },
    };
  },
  mutations,
  actions,
  getters,
};
