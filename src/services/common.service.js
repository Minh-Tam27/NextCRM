import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import { GET_SYSTEM_CONFIG_URL, GET_SYSTEM_CONFIG_CCRP } from '../.env'
import { assert } from '@/core'
import storeHelper from '@/store/helper'
 
export class CommonService extends BaseService {
  static async getConfigSystem () {
    try {
      const response = await this.request({ auth: true }).post(GET_SYSTEM_CONFIG_URL)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getConfigCCRP () {
    try {
      const response = await this.request({ auth: true }).post(GET_SYSTEM_CONFIG_CCRP + '/cfg/city-list', {})
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getConfigRegion () {
    try {
      const response = await this.request({ auth: true }).post(GET_SYSTEM_CONFIG_CCRP + '/cfg/region-list', {})
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getConfigDistrict (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cfg.district-list'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getTypeSale (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.sur.user-get-type'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
  
  static async getAllRole (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cfg.role-all'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async uploadImg (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cfg.upload-image-s3'), params, {
        headers: { 'Content-Type': 'application/json/form-data' }
      })
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
