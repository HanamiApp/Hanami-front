import { createStore } from "vuex";
import { login } from "@/services/auth.js";

export default createStore({
  state: {
    token: null,
    refreshToken: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_REFRESH_TOKEN(state, refreshToken) {
      state.refreshToken = refreshToken;
    }
  },
  actions: {
    login({ commit }, { data }) {
      login(data.email, data.password)
        .then(response => {
          commit("SET_TOKEN", response.data.token);
          commit("SET_REFRESH_TOKEN", response.data.refreshToken);
        })
        .catch(error => console.log(error));

      // login(data.email, data.password)
      //   .then(response => console.log(response.data))
      //   .catch(error => console.log(error));
      // commit("SET_TOKEN", "FAKEtoken");
      // commit("SET_REFRESH_TOKEN", "lfknvvlk");
    }
  },
  modules: {}
});
