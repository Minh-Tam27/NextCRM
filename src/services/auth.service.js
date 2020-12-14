import axios from 'axios'
import { Http } from './http.init'
import { ResponseWrapper, ErrorWrapper } from './util'
import $store from '../store'
import $router from '../router'

import { API_URL } from '../.env'

export class AuthService {
  /**
   ******************************
   * @API
   ******************************
   */

  static async makeLogin ({ email, password }) {
    try {
      const response = await axios.post(`${API_URL}/login/backend`,
        { username: email, password })
      _setAuthData({
        accessToken: response.data.data.token,
        userData: response.data.data
      })
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }

  static async makeLogout () {
    try {
      const response = await new Http({ auth: true }).post('auth/logout', {}, { withCredentials: true })
      _resetAuthData()
      $router.push({ name: 'login' }).catch(() => {})
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }

  static async refreshTokens () {
    try {
      const response = await axios.post(`${API_URL}/auth/refresh-tokens`, {}, { withCredentials: true })

      _setAuthData({
        accessToken: response.data.data.accessToken,
        exp: _parseTokenData(response.data.data.accessToken).exp
      })
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      _resetAuthData()
      $router.push({ name: 'login' }).catch(() => {})
      throw new ErrorWrapper(error)
    }
  }

  static debounceRefreshTokens = this._debounce(() => {
    return this.refreshTokens()
  }, 100)

  /**
   ******************************
   * @METHODS
   ******************************
   */

  static isAccessTokenExpired () {
    const accessTokenExpDate = $store.state.auth.accessTokenExpDate - 10
    const nowTime = Math.floor(new Date().getTime() / 1000)

    return accessTokenExpDate <= nowTime
  }

  static hasRefreshToken () {
    return Boolean(localStorage.getItem('refreshToken'))
  }

  static setRefreshToken (status) {
    if (!['', 'true'].includes(status)) {
      throw new Error(`setRefreshToken: invalid value ${status}; Expect one of ['', 'true']`)
    }

    localStorage.setItem('refreshToken', status)
  }

  static getBearer () {
    return $store.state.auth.token
  }

  static setBearer (accessToken) {
    $store.commit('auth/SET_TOKEN', accessToken)
  }

  static hasToken () {
    return Boolean(localStorage.getItem('token'))
  }

  /**
   * https://stackoverflow.com/questions/35228052/debounce-function-implemented-with-promises
   * @param inner
   * @param ms
   * @returns {function(...[*]): Promise<unknown>}
   * @private
   */
  static _debounce (inner, ms = 0) {
    let timer = null
    let resolves = []

    return function () {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const result = inner()
        resolves.forEach(r => r(result))
        resolves = []
      }, ms)

      return new Promise(resolve => resolves.push(resolve))
    }
  }
}

/**
 ******************************
 * @private_methods
 ******************************
 */

function _parseTokenData (accessToken) {
  let payload = ''
  let tokenData = {}

  try {
    payload = accessToken.split('.')[1]
    tokenData = JSON.parse(atob(payload))
  } catch (error) {
    throw new Error(error)
  }

  return tokenData
}

function _resetAuthData () {
  // reset userData in store
  $store.commit('user/SET_CURRENT_USER', {})
  $store.commit('auth/SET_ATOKEN_EXP_DATE', null)
  $store.commit('auth/SET_TOKEN', null)
  // reset tokens
  // AuthService.setRefreshToken('')
  AuthService.setBearer('')
}

function _setAuthData ({ accessToken, userData } = {}) {
  // AuthService.setRefreshToken('true')
  localStorage.setItem('token', accessToken)
  localStorage.setItem('userData', JSON.stringify(userData))
  AuthService.setBearer(accessToken)
  $store.commit('user/SET_CURRENT_USER', userData)
}
