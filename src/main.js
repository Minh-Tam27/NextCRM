import Vue from 'vue'

import AppLayout from './layout/index.vue'
import router from './router'
import store from './store'
import './mixins'
import './plugins'
import './thirdParty'

import './assets/css/vendors.min.css'
import './assets/css/style.css'
import './assets/css/style_other.css'
import './assets/css/style_custom.css'
import './assets/css/style_content.css'
import './assets/css/tree.css'
import './assets/css/select2.css'
import './assets/css/responsive.css'
import '@/assets/global.css'

Vue.config.productionTip = false

new Vue({
  name: 'Root',
  router,
  store,
  created () {
    store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth)
    window.addEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth))
    window.addEventListener('storage', function (e) {
      if (e.isTrusted && (e.key === 'token' || e.key === 'userData')) {
        location.reload()
      }
    })
    store.dispatch('common/getConfigSystem')
  },

  beforeDestroy () {
    window.removeEventListener('resize', () => store.commit('dom/SE_TWINDOW_WIDTH', window.innerWidth))
  },
  render: h => h(AppLayout)
}).$mount('#app')
