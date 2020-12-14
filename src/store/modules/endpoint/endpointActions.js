import { EndpointService } from '@/services/endpoint.service'

export default {
  getEndpointConfig ({ commit }) {
    return EndpointService.getConfig()
      .then(endpoint => commit('SET_END_POINT_CONFIG', endpoint.data))
      .catch(error => console.error(error))
  }
}
