import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import { assert } from '@/core'
import storeHelper from '@/store/helper'
export class RoleService extends BaseService {
  static async getList (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cfg.role-list'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getListPermission (params = {}) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cfg.permission-all'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async addRole (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cfg.role-save'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getRoleById (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cfg.role-detail'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async deleted (params) {
    assert.object(params, { required: true })
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cfg.role-delete'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  //   static async getStaffById (params) {
  //     assert.object(params, { required: true })
  //     try {
  //       const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.sur.get-user-info-by-id'), params)
  //       return new ResponseWrapper(response, response.data.data)
  //     } catch (error) {
  //       const message = error.response.data ? error.response.data.error : error.response.statusText
  //       throw new ErrorWrapper(error, message)
  //     }
  //   }

  //   static async lockOfUnlockStaff (params) {
  //     assert.object(params, { required: true })
  //     try {
  //       const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.staff.set-status'), params)
  //       return new ResponseWrapper(response, response.data.data)
  //     } catch (error) {
  //       const message = error.response.data ? error.response.data.error : error.response.statusText
  //       throw new ErrorWrapper(error, message)
  //     }
  //   }

  //   static async getRegions () {
  //     try {
  //       const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.unit.get-list-region'), {})
  //       return new ResponseWrapper(response, response.data.data)
  //     } catch (error) {
  //       const message = error.response.data ? error.response.data.error : error.response.statusText
  //       throw new ErrorWrapper(error, message)
  //     }
  //   }

  //   static async resetPassword (params) {
  //     assert.object(params, { required: true })
  //     try {
  //       const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.staff.reset-password'), params)
  //       return new ResponseWrapper(response, response.data.data)
  //     } catch (error) {
  //       const message = error.response.data ? error.response.data.error : error.response.statusText
  //       throw new ErrorWrapper(error, message)
  //     }
  //   }

  //   static async deletedStaff (params) {
  //     assert.object(params, { required: true })
  //     try {
  //       const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.staff.delete-staff'), params)
  //       return new ResponseWrapper(response, response.data.data)
  //     } catch (error) {
  //       const message = error.response.data ? error.response.data.error : error.response.statusText
  //       throw new ErrorWrapper(error, message)
  //     }
  //   }

  //   static async getProvinceRegion (params) {
  //     assert.object(params, { required: true })
  //     try {
  //       const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.unit.get-list-province-by-region'), params)
  //       return new ResponseWrapper(response, response.data.data)
  //     } catch (error) {
  //       const message = error.response.data ? error.response.data.error : error.response.statusText
  //       throw new ErrorWrapper(error, message)
  //     }
  //   }

  //   static async getRoleList () {
  //     try {
  //       const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.cfg.role-list'), {})
  //       return new ResponseWrapper(response, response.data.data)
  //     } catch (error) {
  //       const message = error.response.data ? error.response.data.error : error.response.statusText
  //       throw new ErrorWrapper(error, message)
  //     }
  //   }

//   static async superiors () {
//     try {
//       const response = await this.request({ auth: true }).post(storeHelper.getUrl('cnps.staff.list-manager'), {})
//       return new ResponseWrapper(response, response.data.data)
//     } catch (error) {
//       const message = error.response.data ? error.response.data.error : error.response.statusText
//       throw new ErrorWrapper(error, message)
//     }
//   }
}
