import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import storeHelper from '@/store/helper'
import { assert } from '@/core'
import FileDownload from 'js-file-download'
import moment from 'moment'

export class CalendarService extends BaseService {
  static async getCalendarByUser (body) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.wkcldr.get-list-task-by-userid'), body)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      console.log(error)
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async upsert (params = {}) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.wkcldr.upsert-wkcldr'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async export (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.wkcldr.export-excel-general'), params, {
        responseType: 'blob'
      })

      if (response.headers['content-type'] === 'application/json') {
        alert('Không có dữ liệu để tải xuống')
        return
      }
      FileDownload(response.data, 'Calendar-work' + ' ' + moment(new Date(new Date())).format('DD/MM/YYYY') + '.xlsx')
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      console.log(error)
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async exportExcel (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.wkcldr.export-excel-wkcldr'), params, {
        responseType: 'blob'
      })

      if (response.headers['content-type'] === 'application/json') {
        alert('Không có dữ liệu để tải xuống')
        return
      }
      FileDownload(response.data, 'Calendar-work' + ' ' + moment(new Date(new Date())).format('DD/MM/YYYY') + '.xlsx')
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      console.log(error)
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getById (params = {}) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.wkcldr.get-detail-task-by-id'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
