/**
 * import and init third party
 * components/validators and other dependencies
 */

import Vue from 'vue'

import Default from '../layout/Wrappers/defaultLayout.vue'
import Login from '../layout/Wrappers/loginLayout.vue'
import { BootstrapVue } from 'bootstrap-vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import Select2 from 'v-select2-component'
import Select2MultipleControl from 'v-select2-multiple-component'
import VueSweetalert2 from 'vue-sweetalert2'
import * as VueGoogleMaps from 'vue2-google-maps'
import * as rules from 'vee-validate/dist/rules'
import { GOOGLE_API_TOKEN } from '../.env'
// eslint-disable-next-line no-useless-escape
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const regexUsername = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹếẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/
const regexNumber = /^[0-9]+$/

// install rules
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

extend('required', value => {
  if (value) {
    return true
  }

  return '{_field_} là bắt buộc nhập'
})

extend('username', value => {
  const check = regexUsername.test(String(value).toLowerCase())
  if (!check) {
    return '{_field_} không đúng định dạng'
  }
  if (check) {
    return true
  }

  return '{_field_} là bắt buộc nhập'
})

extend('minMAxName', value => {
  if (value.length > 3 && value.length < 255) {
    return true
  }
  return '{_field_} Ký tự nhỏ nhất là 3 và lớn nhất 255 ký tự'
})

extend('mail', value => {
  if (value.length < 3 && value.length > 255) {
    return '{_field_} Ký tự nhỏ nhất là 3 và lớn nhất 255 ký tự'
  }
  const check = re.test(String(value).toLowerCase())
  if (!check) {
    return '{_field_} không đúng định dạng'
  }
  if (check) {
    return true
  }
})

extend('regexNumber', value => {
  const check = regexNumber.test(String(value).toLowerCase())
  if (!check) {
    return '{_field_} chỉ được nhập số'
  }
  if (check) {
    return true
  }
})

extend('phoneRex', value => {
  if (value.length > 50) {
    return '{_field_} Số điện thoại tối đa 50 kí tự'
  }
  if (value.length > 1 && value.length < 50) {
    return true
  }
  return '{_field_} là bắt buộc nhập'
})

extend('requiredDate', value => {
  if (value.startDate && value.endDate) {
    return true
  }

  return '{_field_} là bắt buộc nhập'
})

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('Select2', Select2)
Vue.component('Select2MultipleControl', Select2MultipleControl)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('default-layout', Default)
Vue.component('login-layout', Login)

Vue.use(VueGoogleMaps, {
  load: {
    key: GOOGLE_API_TOKEN,
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    /// / If you want to set the version, you can do so:
    // v: '3.26',
  }
 
  /// / If you intend to programmatically custom event listener code
  /// / (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  /// / instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  /// / you might need to turn this on.
  // autobindAllEvents: false,
 
  /// / If you want to manually install components, e.g.
  /// / import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  /// / Vue.component('GmapMarker', GmapMarker)
  /// / then disable the following:
  // installComponents: true,
})
