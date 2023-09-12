import { createStore } from 'vuex'
import persistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [
    persistedState({
      storage: window.localStorage
    })
  ],
  state: {
    loginToken: "",
    switchStatus: false,
    loginUserInfo: {
      userId: ''
    }
  },
  getters: {
    loginUserId(state) {
      return state.loginUserInfo.userId
    },
    bearer(state) {
      return "Bearer " + state.loginToken
    }
  },
  mutations: {
    setToken(state, token) {
      state.loginToken = token
    },
    setSwitch(state, s) {
      state.switchStatus = s
    },
    setUserInfo(state, userInfo) {
      state.loginUserInfo = userInfo
    }
  },
  actions: {
    logoutClear({ commit }) {
      commit("setToken", "")
      commit("setSwitch", "")
      commit("setUserInfo", {})
    }
  },
  modules: {}
})