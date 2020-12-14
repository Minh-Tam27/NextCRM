// import router from '@/router'

export default {
  namespaced: true,
  state: {
    accessTokenExpDate: '',
    token: ''
  },
  actions: {
    logout ({ commit }) {
      commit('LOGOUT')
    }
  },
  mutations: {
    SET_ATOKEN_EXP_DATE (state, expDate) {
      state.accessTokenExpDate = expDate
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    LOGOUT (state) {
      state.user = null
      state.token = null

      localStorage.removeItem('userData')
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}
