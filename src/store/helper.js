import store from './index'

export default {
  getUrl (key) {
    return store.state.endpoint.endPointConfig[key]
  }
}
