export default {
  SET_CURRENT_USER (state, currentUserData) {
    state.currentUser = currentUserData
  },

  SET_DATA_EDITS_STAFF (state, data) {
    state.dataEditStaff = data
  },

  CLEAR_DATA (state) {
    state.currentUser = {
      userId: '',
      username: '',
      mobile: '',
      name: '',
      companyCode: '',
      adminLocations: ''
    }
  }
}
