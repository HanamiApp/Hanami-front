import { createStore } from "vuex";

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
    login({ commit }) {
      commit("SET_TOKEN", "FAKEtoken");
      commit("SET_REFRESH_TOKEN", "lfknvvlk");
    }
  },
  modules: {}
});
