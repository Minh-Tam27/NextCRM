import { CommonService } from '@/services/common.service'
import axios from 'axios'

const $axiosUpload = axios.create({
  baseURL: 'http://dev3.fastgo.cloud:9801/cfg/upload-image-s3',
  headers: { 'Content-Type': 'application/json/form-data' }
})

export default {
  getConfigSystem ({ commit }) {
    return CommonService.getConfigSystem()
      .then(data => commit('SET_CONFIG_SYSTEM', data))
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  },

  getConfigCCRP ({ commit }) {
    return CommonService.getConfigCCRP()
      .then(data => commit('SET_CONFIG_CCRP', data))
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
      .catch(error => console.error(error))
  },

  getConfigRegion ({ commit }) {
    return CommonService.getConfigRegion()
      .then(data => commit('SET_CONFIG_REGION', data))
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
      .catch(error => console.error(error))
  },

  async uploadImg ({ commit }, params) {
    const dataGetUpload = await $axiosUpload.post(
        `image
        `,
        params
    )
    commit('RETURN_DATA_UPLOAD_IMG', dataGetUpload)
  }

}
