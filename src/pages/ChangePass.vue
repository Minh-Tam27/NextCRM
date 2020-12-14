<template>
  <div class="change-password">
    <!-- Start Login Area -->
    <div class="breadcrumb-area pos-relative w-100">
      <h1>Đổi mật khẩu</h1>

      <div class=" " style="float: right">
        <button @click="back()" class="btn btn-light">Hủy bỏ</button>
        <button
          @click="submitChangePassword()"
          class="btn btn-primary btn-primary ml-2"
        >
          Lưu
        </button>
      </div>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-body px-20 row">
        <form class="col-md-6" @keyup.enter="submitChangePassword()">
          <div class="form-group row">
            <label for="" class="col-sm-3 col-form-label"
              >Mật khẩu hiện tại:
            </label>
            <div class="col-sm-7">
              <input
                type="password"
                v-model="dataChangePassWord.oldPassword"
                class="form-control"
              />
              <p
                v-if="validateString.errPassOld && validate"
                class="text-danger"
              >
                {{ validateString.errPassOld }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-3 col-form-label">Mật khẩu mới:</label>
            <div class="col-sm-7">
              <input
                v-model="dataChangePassWord.newPassword"
                type="password"
                class="form-control"
              />
              <p
                v-if="validateString.errPassNew && validate"
                class="text-danger"
              >
                {{ validateString.errPassNew }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-3 col-form-label"
              >Nhập lại mật khẩu mới:</label
            >
            <div class="col-sm-7">
              <input
                v-model="dataChangePassWord.newPasswordComfirm"
                type="password"
                class="form-control"
              />
              <p
                v-if="validateString.errPassNewComfirm && validate"
                class="text-danger"
              >
                {{ validateString.errPassNewComfirm }}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Modal fogot-success -->
    <div id="app">
      <div v-if="showModalSuccess">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div
                        class="md-popup"
                        style="text-align: center !important"
                      >
                        <span
                          ><img
                            style="padding-bottom: 20px"
                            src="@/assets/img/thanhcong.png"
                            alt=""
                        /></span>
                        <h3 style="padding-bottom: 5px">
                          Đổi mật khẩu thành công
                        </h3>
                        <p style="text-align: center; padding-bottom: 15px">
                          Thay đổi mật khẩu thành công. Bạn vui lòng đăng nhập
                          lại
                        </p>
                        <button
                          @click="closeOpenModalSuccess()"
                          class="btn btn-success d-block width-100 height-combox"
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success d-block width-100">Đăng nhập</button>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div id="app">
      <div v-if="showModalFailed">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div
                        class="md-popup"
                        style="text-align: center !important"
                      >
                        <span
                          ><img
                            style="padding-bottom: 20px"
                            src="@/assets/img/thanhcong.png"
                            alt=""
                        /></span>
                        <h3 style="padding-bottom: 5px">
                          Đổi mật khẩu thất bại
                        </h3>
                        <p style="text-align: center; padding-bottom: 15px">
                          Thay đổi mật khẩu thất bại. Bạn vui lòng thử lại
                        </p>
                        <button
                          @click="showModalFailed = false"
                          class="btn btn-success d-block width-100 height-combox"
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success d-block width-100">Đăng nhập</button>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { StaffService } from '@/services/staff.service'

export default {
  data () {
    return {
      showModalSuccess: false,
      showModalFailed: false,
      dataChangePassWord: {},
      dataUser: JSON.parse(localStorage.getItem('userData')),
      validate: false,
      validateString: {
        errPassOld: '',
        errPassNewComfirm: '',
        errPassNew: ''
      }
    }
  },

  methods: {
    async submitChangePassword () {
      try {
        if (this.dataChangePassWord.newPasswordComfirm) { this.dataChangePassWord.newPasswordComfirm.trim() }
        this.validateString = {
          errPassOld: '',
          errPassNewComfirm: '',
          errPassNew: ''
        }
        this.validate = true
        this.dataChangePassWord.userId = this.dataUser.userId
        if (!this.dataChangePassWord.newPasswordComfirm) {
          this.validateString.errPassNewComfirm =
            'Nhập lại mật khẩu là bắt buộc'
        }
        if (
          this.dataChangePassWord.newPasswordComfirm !==
          this.dataChangePassWord.newPassword
        ) {
          this.validateString.errPassNewComfirm = 'Mật khẩu không trùng nhau'
          return
        }
        const data = await StaffService.changePassword(this.dataChangePassWord)
        if (data.code === 99980) {
          this.validateString.errPassOld = 'Mật khẩu cũ và mới phải khác nhau'
          this.validateString.errPassNew = 'Mật khẩu cũ và mới phải khác nhau'
        }
        if (data.message === 'Password not match') {
          this.validateString.errPassOld = 'Mật khẩu cũ không đúng'
        }
        if (data.code === 99998) {
          if (data.data.newPassword) {
            this.validateString.errPassNew = data.data.newPassword
          }
          if (data.data.oldPassword) {
            this.validateString.errPassOld = data.data.oldPassword
          }
        }
        if (data.code === 1000) {
          this.showModalSuccess = true
        }
      } catch (error) {
        this.showModalFailed = true
        console.log(error)
      }
    },

    closeOpenModalSuccess () {
      localStorage.clear()
      location.reload()
    },

    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
