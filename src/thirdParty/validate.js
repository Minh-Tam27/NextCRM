import Vue from 'vue'
export default new Vue({
  methods: {
    validateMinMax (string, min, max) {
      if (!string) return
      if (string.length < min && string.length > max) {
        return `Ký tự nhỏ nhất là ${min} và lớn nhất ${max} ký tự`
      }
    },

    success (messenger) {
      return this.$swal({
        position: 'center',
        icon: 'success',
        title: messenger,
        showConfirmButton: false,
        timer: 1000
      })
    },

    error (messenger) {
      return this.$swal({
        icon: 'error',
        title: messenger
      })
    },

    // async comfirm (text, confirmButtonText, cancelButtonText) {
    //   return await this.$swal({
    //     text: text,
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: confirmButtonText || 'Đồng ý',
    //     cancelButtonText: cancelButtonText || 'Không'
    //   })
    // },

    async noti (text) {
      await this.$swal({
        icon: 'info',
        title: text,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
})
