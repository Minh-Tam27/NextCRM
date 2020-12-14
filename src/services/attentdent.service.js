import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import { assert } from '@/core'
import storeHelper from '@/store/helper'
export class AttentdentService extends BaseService {
  static async getList (params = {}) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.attn.backend.attentdent-list'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getDetail (params = {}) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.attn.backend.attendance-detail'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
