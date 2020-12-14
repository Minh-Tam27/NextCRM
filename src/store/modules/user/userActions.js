import { UsersService } from '@/services/users.service'

export default {
  getCurrent ({ commit }) {
    return UsersService.getCurrent()
      .then()
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  },

  dataEditStaff ({ commit }, data) {
    commit('SET_DATA_EDITS_STAFF', data)
  },

  clear ({ commit }) {
    commit('CLEAR_DATA')
  }
  
}
