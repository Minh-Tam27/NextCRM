import { StaffService } from '@/services/staff.service'

export default {
  fillRoleByUser ({ commit }, params) {
    return StaffService.fillPermissionByUser()
      .then(user => {
        if (user.message === 'Success') {
          commit('SET_PERMISSION_BY_USER', user.data.permissionCodes)
        }
      })
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  }
}
