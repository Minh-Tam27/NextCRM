import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import { assert } from '@/core'
import storeHelper from '@/store/helper'
import FileDownload from 'js-file-download'
import moment from 'moment'

export class MerchantService extends BaseService {
  static async getDataMerchant (body) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cstm.customer-get-list'), body)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      console.log(error)
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async insertMerchant (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cstm.customer-register'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async updateById (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cstm.customer-update-by-id'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async export (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cstm.customer-list-export'), params, {
        responseType: 'blob'
      })
      if (response.headers['content-type'] === 'application/json') {
        alert('Không có dữ liệu để tải xuống')
        return
      }
      FileDownload(response.data, 'Report-merchant' + ' ' + moment(new Date(new Date())).format('DD/MM/YYYY') + '.xlsx')
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async exportMerchant (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cstm.customer-get-excel'), params, {
        responseType: 'blob'
      })
      if (response.headers['content-type'] === 'application/json') {
        alert('Không có dữ liệu để tải xuống')
        return
      }
      FileDownload(response.data, 'Report-list-merchant' + ' ' + moment(new Date(new Date())).format('DD/MM/YYYY') + '.xlsx')
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
