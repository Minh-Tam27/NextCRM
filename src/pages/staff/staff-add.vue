<template>
  <div
    class="staff-edit"
    v-if="dataPermission && dataPermission.includes('CNPS_SUR_STAFF_UPSERT')"
  >
    <div class="breadcrumb-area pos-relative" style="width: 100%">
      <h1>Thêm mới nhân viên</h1>
      <div class style="float: right">
        <button
          :disabled="disabledAdd"
          class="f12 font-medium btn btn-primary rounded-pill btn-sm-fix btn-link"
          @click="submitInsert()"
        >
          <div><i class="bx bx-plus-circle"></i> Thêm mới</div>
        </button>
      </div>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-body px-20 row">
        <form class="col-md-6">
          <h4 class="form-inner-heading">Cá nhân</h4>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label">
              Họ và tên
              <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <input
                v-model="dataInsertStaff.name"
                type="email"
                class="form-control"
                id
                placeholder="Nhập họ và tên"
              />
              <p v-if="objectMesserr.name && validate" class="text-danger">
                {{ objectMesserr.name }}
              </p>
            </div>
          </div>

          <div class="form-group row">
            <label for class="col-sm-3 col-form-label">
              Tên đăng nhập
              <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <input
                v-model="dataInsertStaff.userName"
                type="email"
                class="form-control"
                id
                placeholder="Nhập email tài khoản"
              />
              <p v-if="objectMesserr.userName && validate" class="text-danger">
                {{ objectMesserr.userName }}
              </p>
            </div>
          </div>

          <div class="form-group row cr1">
            <label for class="col-sm-3 col-form-label">
              Ngày tháng năm sinh
              <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <datepicker
                :language="vi"
                v-model="dataInsertStaff.dateOfBirth"
                placeholder="Chọn ngày tháng năm sinh"
              ></datepicker>
              <p
                v-if="objectMesserr.dateOfBirth && validate"
                class="text-danger"
              >
                {{ objectMesserr.dateOfBirth }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label">
              Giới tính
              <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <select
                v-model="dataInsertStaff.gender"
                class="js-example-basic-single form-control"
              >
                <option value="MALE">Nam</option>
                <option value="FEMALE">Nữ</option>
              </select>
              <p v-if="objectMesserr.gender && validate" class="text-danger">
                {{ objectMesserr.gender }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label">
              Số điện thoại
              <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <input
                v-model="dataInsertStaff.mobile"
                type="text"
                class="form-control"
                id
                placeholder="Nhập số điện thoại"
              />
              <p v-if="objectMesserr.mobile && validate" class="text-danger">
                {{ objectMesserr.mobile }}
              </p>
            </div>
          </div>
          <div class="form-group row cr1">
            <label for class="col-sm-3 col-form-label">
              Địa chỉ
              <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <input
                type="email"
                class="form-control"
                v-model="dataInsertStaff.address"
                id
                placeholder="Nhập địa chỉ"
              />
              <p v-if="objectMesserr.address && validate" class="text-danger">
                {{ objectMesserr.address }}
              </p>
            </div>
          </div>
        </form>

        <form class="col-md-6">
          <h4 class="form-inner-heading">Công ty</h4>
          <div class="form-group row cr1">
            <label for class="col-sm-3 col-form-label">
              Ngày vào công ty
              <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <datepicker
                :language="vi"
                v-model="dataInsertStaff.companyDayIn"
                placeholder="Chọn ngày vào công ty"
              ></datepicker>
              <p
                v-if="objectMesserr.companyDayIn && validate"
                class="text-danger"
              >
                {{ objectMesserr.companyDayIn }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label">
              Mã nhân viên
              <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <input
                v-model="dataInsertStaff.companyCode"
                type="email"
                class="form-control"
                id
                placeholder="Nhập mã nhân viên"
              />
              <p
                v-if="objectMesserr.companyCode && validate"
                class="text-danger"
              >
                {{ objectMesserr.companyCode }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label">
              Vai trò
              <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <Select2
                v-model="dataInsertStaff.typeSale"
                :options="dataListRole"
              />
              <p v-if="objectMesserr.typeSale && validate" class="text-danger">
                {{ objectMesserr.typeSale }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label">
              Vị trí
              <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <select
                v-model="dataInsertStaff.companyPhase"
                class="js-example-basic-single form-control"
              >
                <option value="PROBATION">Thử việc</option>
                <option value="OFFICIAL">Chính thức</option>
              </select>
              <p
                v-if="objectMesserr.companyPhase && validate"
                class="text-danger"
              >
                {{ objectMesserr.companyPhase }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label">Người quản lý</label>
            <div class="col-sm-7">
              <select2
                v-model="dataInsertStaff.superior"
                :options="dataListManage"
              />
              <p v-if="objectMesserr.superiors && validate" class="text-danger">
                {{ objectMesserr.superiors }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label"
              >Vùng <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <select2-multiple-control
                @change="queryProvince($event)"
                v-model="dataInsertStaff.region"
                :options="dataConfigRegion"
              />
              <p v-if="objectMesserr.region && validate" class="text-danger">
                {{ objectMesserr.region }}
              </p>
            </div>
          </div>

          <div class="form-group row">
            <label for class="col-sm-3 col-form-label"
              >Tỉnh thành phố <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-7">
              <select2-multiple-control
                v-model="dataInsertStaff.province"
                :options="dataProvince"
              />
              <p v-if="objectMesserr.province && validate" class="text-danger">
                {{ objectMesserr.province }}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div id="app">
      <div v-if="showModal">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Thông báo
                    </h5>
                    <button
                      type="button"
                      @click="showModal = false"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-center">
                    <img src="@/assets/noti-success2.svg" alt="icon-successs" />
                    <h2 class="f18 py-3">Thêm mới thành công</h2>
                    <p class="text-center">
                      Nhân viên: {{ insertSuccess.name }}
                    </p>
                    <p class="text-center">
                      Email: {{ insertSuccess.userName }}
                    </p>
                    <p class="text-center">
                      Mật khẩu mới: {{ insertSuccess.password }}
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="closeModalAdd()"
                      data-dismiss="modal"
                    >
                      Đóng
                    </button>
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
import Config from '../../thirdParty/config'
import { StaffService } from '@/services/staff.service'
import Datepicker from 'vuejs-datepicker/dist/vuejs-datepicker.esm.js'
import { mapGetters } from 'vuex'
import { CommonService } from '@/services/common.service'
import { vi } from 'vuejs-datepicker/dist/locale'

export default {
  data () {
    return {
      validate: false,
      dataInsertStaff: {
        province: []
      },
      vi: vi,
      dataConfigGender: Config.configGender,
      dataConfigRegion: [],
      dataProvince: [],
      objectMesserr: {},
      disabledAdd: false,
      dataListManage: [],
      showModal: false,
      insertSuccess: {},
      dataListRole: []
    }
  },

  components: {
    Datepicker
  },

  computed: {
    ...mapGetters({
      dataEdit: 'user/dataEditStaff',
      dataPermission: 'role/dataPermission'
    })
  },

  async created () {
    this.superiors()
    if (this.dataEdit.name) {
      const dataQuery = await StaffService.getStaffById({
        userId: this.dataEdit.id
      })
      if (dataQuery.success) {
        this.dataInsertStaff = dataQuery.data
        this.dataInsertStaff.userName = this.dataInsertStaff.username
        this.queryProvince(this.dataInsertStaff.region)
      }
    }
    this.getRegion()
    this.getTypeSale()
  },

  methods: {
    async superiors () {
      try {
        const data = await StaffService.superiors()
        if (data.data.length > 0) {
          const datas = []
          data.data.map((e) => {
            const body = {
              id: e.userName,
              text: e.name
            }
            datas.push(body)
          })
          this.dataListManage = datas
          return
        }
        this.dataListManage = []
      } catch (error) {}
    },

    closeModalAdd () {
      this.showModal = false
      this.$router.push('/staff')
    },

    async submitInsert () {
      this.disabledAdd = true
      this.validate = true
      this.dataInsertStaff.companyDayIn = new Date(
        this.dataInsertStaff.companyDayIn
      ).getTime()
      this.dataInsertStaff.dateOfBirth = new Date(
        this.dataInsertStaff.dateOfBirth
      ).getTime()

      const data = await StaffService.addStaff(this.dataInsertStaff)
      if (data.success) {
        this.showModal = true
        this.insertSuccess.name = data.data.name
        this.insertSuccess.userName = data.data.userName
        this.insertSuccess.password = data.data.password
        this.validate = false
        this.disabledAdd = false
        return
      }
      if (data.message === 'Object invalid') {
        this.objectMesserr = data.data
      }
      if (data.message === 'User existed') {
        this.objectMesserr.userName = 'Thông tin tài khoản đã tốn tại'
      }
      if (data.message === 'Superior required with position sale') {
        this.objectMesserr.superiors = 'Người quản lý là bắt chọn'
      }
      if (data.code === 1013) {
        this.objectMesserr.region =
          'Vai trò là sale chỉ được chọn 1 vùng hoạt động'
      }
      this.disabledAdd = false
    },

    async queryProvince (e) {
      try {
        const data = await StaffService.getProvinceRegion({
          regionId: e
        })
        if (data.data.length > 0) {
          const dataProvince = []
          data.data.map((e) => {
            const body = {
              id: e.id,
              text: e.name
            }
            dataProvince.push(body)
          })
          this.dataProvince = dataProvince
          return
        }
        this.dataProvince = []
      } catch (error) {}
    },

    async getTypeSale () {
      try {
        const data = await CommonService.getTypeSale({})
        if (data.data.length > 0) {
          const datas = []
          data.data.map((e) => {
            const body = {
              id: e.code,
              text: e.name
            }
            datas.push(body)
          })
          this.dataListRole = datas
          return
        }
        this.dataListRole = []
      } catch (error) {}
    },

    async getRegion () {
      try {
        const data = await StaffService.getRegions()
        if (data.data.length > 0) {
          const dataRegion = []
          data.data.map((e) => {
            const body = {
              id: e.id,
              text: e.name
            }
            dataRegion.push(body)
          })
          this.dataConfigRegion = dataRegion
          return
        }
        this.dataConfigRegion = []
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.form-inner-heading {
  font-size: 16px;
  padding-bottom: 20px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
