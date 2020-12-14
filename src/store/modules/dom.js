/**
 * anything that relates to DOM
 */
export default {
  namespaced: true,
  state: {
    windowWidth: 0,
    /**
     * breakpoint constants
     */
    widthExtraSmall: 320,
    widthSmall: 640,
    widthTablet: 1024,
    isOpen: false,
    isOpenMobile: false
  },

  mutations: {
    SET_WINDOW_WIDTH (state, value) {
      state.windowWidth = value
    },
    SET_SIDEBAR_STATUS (state, value) {
      state.isOpen = value
    },
    SET_SIDEBAR_STATUS_MOBILE (state, value) {
      state.isOpenMobile = value
    }
  },

  getters: {
    isExtraSmall: (state) => state.windowWidth <= state.widthExtraSmall,
    isSmall: (state) => state.windowWidth <= state.widthSmall,
    isTablet: (state) => state.windowWidth <= state.widthTablet,
    isDesktop: (state) => state.windowWidth > state.widthTablet,
    isOpen: (state) => state.isOpen,
    isOpenMobile: (state) => state.isOpenMobile
  }
}
