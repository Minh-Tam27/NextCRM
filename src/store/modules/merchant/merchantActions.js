import { MerchantService } from '../../../services/merchant.service'
import axios from 'axios'

const $axiosUpload = axios.create({
  baseURL: 'https://api-fnb.nextshop.dev/s3/',
  headers: { 'Content-Type': 'application/json/form-data' }
})

export default {
  calendars ({ commit }, params) {
    return MerchantService.getDataMerchant()
      .then(user => console.log('alo'))
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
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
