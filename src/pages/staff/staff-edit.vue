<template>
  <div
    class="staff-edit"
    v-if="dataPermission && dataPermission.includes('CNPS_SUR_STAFF_UPSERT')"
  >
    <div class="breadcrumb-area pos-relative" style="width: 100%">
      <h1>Chỉnh sửa nhân viên</h1>

      <div class style="float: right">
        <a
          href="#"
          @click="submitEdit()"
          class="f12 font-medium btn btn-primary rounded-pill btn-sm-fix btn-link"
          data-toggle="modal"
          data-target="#QL-EditSuccess"
        >
          <i class="bx bxs-save"></i> Sửa thông tin
        </a>
      </div>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-body px-20 row">
        <form class="col-md-6">
          <h1 class="form-inner-heading">Cá nhân</h1>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label"
              >Họ và tên<span class="ml-1" style="color: red">*</span></label
            >
            <div class="col-sm-7">
              <input
                v-model="dataEditStaff.name"
                type="email"
                class="form-control"
                id
              />
              <p v-if="objectMesserr.name && validate" class="text-danger">
                {{ objectMesserr.name }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label"
              >Tên đăng nhập<span class="ml-1" style="color: red"
                >*</span
              ></label
            >
            <div class="col-sm-7">
              <input
                v-model="dataEditStaff.userName"
                disabled
                type="text"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label"
              >Ngày tháng năm sinh
              <span class="ml-1" style="color: red">*</span></label
            >
            <div class="col-sm-7">
              <datepicker
                :language="vi"
                v-model="dataEditStaff.dateOfBirth"
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
            <label for class="col-sm-3 col-form-label"
              >Giới tính<span class="ml-1" style="color: red">*</span></label
            >
            <div class="col-sm-7">
              <select
                v-model="dataEditStaff.gender"
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
            <label for class="col-sm-3 col-form-label"
              >Số điện thoại<span class="ml-1" style="color: red"
                >*</span
              ></label
            >
            <div class="col-sm-7">
              <input
                type="email"
                class="form-control"
                v-model="dataEditStaff.mobile"
                id
                placeholder="Nhập số điện thoại"
              />
              <p v-if="objectMesserr.mobile && validate" class="text-danger">
                {{ objectMesserr.mobile }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label"
              >Địa chỉ<span class="ml-1" style="color: red">*</span></label
            >
            <div class="col-sm-7">
              <input
                type="email"
                class="form-control"
                v-model="dataEditStaff.address"
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
          <h1 class="form-inner-heading">Công ty</h1>
          <div class="form-group row">
            <label for class="col-sm-2 col-form-label"
              >Ngày vào công ty<span class="ml-1" style="color: red"
                >*</span
              ></label
            >
            <div class="col-sm-6">
              <datepicker
                :language="vi"
                v-model="dataEditStaff.companyDayIn"
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
            <label for class="col-sm-2 col-form-label"
              >Mã nhân viên<span class="ml-1" style="color: red">*</span></label
            >
            <div class="col-sm-6">
              <input
                v-model="dataEditStaff.companyCode"
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
            <label for class="col-sm-2 col-form-label"
              >Vai trò <span class="ml-1" style="color: red">*</span></label
            >
            <div class="col-sm-6">
              <Select2
                v-model="dataEditStaff.typeSale"
                :options="dataListRole"
              />
              <p v-if="objectMesserr.typeSale && validate" class="text-danger">
                {{ objectMesserr.typeSale }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-2 col-form-label"
              >Vị trí<span class="ml-1" style="color: red">*</span></label
            >
            <div class="col-sm-6">
              <select
                v-model="dataEditStaff.companyPhase"
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
            <label for class="col-sm-2 col-form-label">Người quản lý</label>
            <div class="col-sm-6">
              <select2
                v-model="dataEditStaff.superior"
                :options="dataListManage"
              />
              <p v-if="objectMesserr.superiors && validate" class="text-danger">
                {{ objectMesserr.superiors }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-2 col-form-label"
              >Vùng <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-6">
              <select2-multiple-control
                @change="queryProvince($event)"
                v-model="dataEditStaff.region"
                :options="dataConfigRegion"
              />
              <p v-if="objectMesserr.region && validate" class="text-danger">
                {{ objectMesserr.region }}
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-2 col-form-label"
              >Tỉnh / thành phố <span class="ml-1" style="color: red">*</span>
            </label>
            <div class="col-sm-6">
              <select2-multiple-control
                v-model="dataEditStaff.province"
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
      <div v-if="modalEdit">
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
                    <h2 class="f18 py-3">Sửa thông tin nhân viên thành công</h2>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="closeModal()"
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
      dataEditStaff: {},
      dataConfigGender: Config.configGender,
      dataConfigRegion: [],
      dataProvince: [],
      objectMesserr: {
        superiors: null
      },
      vi: vi,
      dataListManage: [],
      modalEdit: false,
      dataListRole: []
    }
  },

  components: {
    Datepicker
  },

  async created () {
    this.getRegion()
    this.superiors()
    if (this.dataEdit.name) {
      const dataQuery = await StaffService.getStaffById({
        userId: this.dataEdit.id
      })
      if (dataQuery.success) {
        this.keyAdd = true
        this.dataEditStaff = dataQuery.data
        // this.queryProvince(this.dataEditStaff.regionId)
        this.queryProvinceCreted(this.dataEditStaff.region)
      }
    }
    this.getTypeSale()
  },

  computed: {
    ...mapGetters({
      dataEdit: 'user/dataEditStaff',
      dataPermission: 'role/dataPermission'
    })
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

    async queryProvinceCreted (e) {
      try {
        const data = await StaffService.getProvinceRegion({ regionId: e })
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
      } catch (error) {
        console.log(error)
      }
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
    },

    async submitEdit () {
      this.validate = true
      this.dataEditStaff.companyDayIn = new Date(
        this.dataEditStaff.companyDayIn
      ).getTime()
      this.dataEditStaff.dateOfBirth = new Date(
        this.dataEditStaff.dateOfBirth
      ).getTime()
      const data = await StaffService.addStaff(this.dataEditStaff)
      if (data.message === 'Success') {
        this.modalEdit = true
        this.validate = false
      }
      if (data.message === 'Object invalid') {
        this.objectMesserr = data.data
        return
      }
      if (data.message === 'User existed') {
        this.objectMesserr.userName = 'Thông tin tài khoản đã tốn tại'
        return
      }

      if (data.message === 'Superior required with position sale') {
        this.objectMesserr.superiors = 'Người quản lý là bắt chọn'
        return
      }

      if (data.code === 1013) {
        this.objectMesserr.region =
          'Vai trò là sale chỉ được chọn 1 vùng hoạt động'
      }
    },

    closeModal () {
      this.modalEdit = false
      this.$router.push('/staff')
    }
  }
}
</script>

<style scope>
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
