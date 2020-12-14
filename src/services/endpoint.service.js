import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import { GET_ENDPOINT_URL } from '../.env'

export class EndpointService extends BaseService {
  static async getConfig () {
    try {
      const response = await this.request({ auth: true }).post(GET_ENDPOINT_URL)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
