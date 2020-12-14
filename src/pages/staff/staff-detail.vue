<template>
  <div class="detail" v-if="dataStaff.id">
    <div class="breadcrumb-area pos-relative">
      <h1>
        <a href="/staff">Nhân viên</a> /
        <span>{{ dataStaff.name }}</span>
      </h1>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-0 b-t-1-869fb229">
      <div class="card-body p-10 b-t-1-869fb229">
        <div class="form-row">
          <div class="col-md-8 my-2">
            <span class="de-img">
              <img src="@/assets/img/user.svg" alt="img" />
            </span>
            <div class="de-info">
              <h3 class="de-name">{{ dataStaff.name }}</h3>
              <span
                v-if="dataStaff.companyPhase === 'PROBATION'"
                class="badge badge-pill badge-success"
                >Thử việc</span
              >
              <span
                v-if="dataStaff.companyPhase === 'OFFICIAL'"
                class="badge badge-pill badge-success"
                >Chính thức</span
              >
            </div>
            <div class="clearfix"></div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="tab01"
                  data-toggle="tab"
                  href="#tabct-1"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  >Thông tin chung</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="tab02"
                  data-toggle="tab"
                  href="#tabct-2"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  >KPI</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="tab03"
                  data-toggle="tab"
                  href="#tabct-3"
                  role="tab"
                  aria-controls="messages"
                  aria-selected="false"
                  >Hợp đồng</a
                >
              </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content">
              <div class="tab-pane active py-3" id="tabct-1" role="tabpanel">
                <form class="mb-4">
                  <h1 class="f16 pb-1">
                    <b>Thông tin liên hệ</b>
                  </h1>
                  <div class="form-group row mb-0">
                    <label class="col-sm-3 col-form-label f14">Ngày sinh</label>
                    <div class="col-sm-9 bdl-1">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext f14"
                        :value="dataStaff.dateOfBirth | formatDate"
                      />
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label class="col-sm-3 col-form-label f14">Giới tính</label>
                    <div class="col-sm-9 bdl-1">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext f14"
                        :value="dataStaff.gender"
                      />
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label class="col-sm-3 col-form-label f14"
                      >Số điện thoại</label
                    >
                    <div class="col-sm-9 bdl-1">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext f14"
                        :value="dataStaff.mobile"
                      />
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label class="col-sm-3 col-form-label f14">Địa chỉ</label>
                    <div class="col-sm-9 bdl-1">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext f14"
                        :value="dataStaff.address"
                      />
                    </div>
                  </div>
                </form>

                <form class="mb-4">
                  <h1 class="f16 pb-1">
                    <b>Vị trí</b>
                  </h1>
                  <div class="form-group row mb-0">
                    <label class="col-sm-3 col-form-label f14"
                      >Mã nhân viên</label
                    >
                    <div class="col-sm-9 bdl-1">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext f14"
                        :value="dataStaff.companyCode"
                      />
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label class="col-sm-3 col-form-label f14">Vị trí</label>
                    <div class="col-sm-9 bdl-1">
                      <input
                        v-if="dataStaff.companyPhase === 'PROBATION'"
                        type="text"
                        readonly
                        class="form-control-plaintext f14"
                        value="Thử việc"
                      />
                      <input
                        v-if="dataStaff.companyPhase === 'OFFICIAL'"
                        type="text"
                        readonly
                        class="form-control-plaintext f14"
                        value="Chính thức"
                      />
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label class="col-sm-3 col-form-label f14">Vai trò</label>
                    <div class="col-sm-9 bdl-1">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext f14"
                        :value="
                          dataStaff.typeSale | transfromData(dataListRole)
                        "
                      />
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label class="col-sm-3 col-form-label f14">Quản lý</label>
                    <div class="col-sm-9 bdl-1">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext f14"
                        :value="dataStaff.superiorName"
                      />
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label class="col-sm-3 col-form-label f14"
                      >Ngày vào công ty</label
                    >
                    <div class="col-sm-9 bdl-1">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext f14"
                        :value="dataStaff.companyDayIn | formatDate"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div
                class="tab-pane"
                id="tabct-2"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                KPI
              </div>
              <div
                class="tab-pane"
                id="tabct-3"
                role="tabpanel"
                aria-labelledby="messages-tab"
              >
                Hợp đồng
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <h1 class="tree-heading">Sơ đồ tổ chức</h1>
            <ul class="tree">
              <li>
                <a href="#" class="tree-block d-inline-block">
                  <span
                    ><img
                      src="@/assets/img/avatar1.png"
                      alt="user-img"
                      class="ci-img"
                  /></span>
                  <div class="tree-inner-block d-inline-block">
                    <p class="ci-name"><b>Phạm Đức Thành</b></p>
                    <p class="ci-title">Quản lý</p>
                  </div>
                </a>
                <ul>
                  <li>
                    <a href="#" class="tree-block d-inline-block">
                      <span
                        ><img
                          src="@/assets/img/avatar1.png"
                          alt="user-img"
                          class="ci-img"
                      /></span>
                      <div class="tree-inner-block d-inline-block">
                        <p class="ci-name"><b>Trần Đức Anh</b></p>
                        <p class="ci-title">Quản lý</p>
                      </div>
                    </a>
                    <ul>
                      <li>
                        <a href="#" class="tree-block d-inline-block">
                          <span
                            ><img
                              src="@/assets/img/avatar1.png"
                              alt="user-img"
                              class="ci-img"
                          /></span>
                          <div class="tree-inner-block d-inline-block">
                            <p class="ci-name"><b>Nguyễn Hải Phong</b></p>
                            <p class="ci-title">Nhân viên</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="tree-block d-inline-block">
                          <span
                            ><img
                              src="@/assets/img/avatar1.png"
                              alt="user-img"
                              class="ci-img"
                          /></span>
                          <div class="tree-inner-block d-inline-block">
                            <p class="ci-name"><b>Kiều Chí Công</b></p>
                            <p class="ci-title">Nhân viên</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="tree-block d-inline-block">
                          <span
                            ><img
                              src="@/assets/img/user.svg"
                              alt="user-img"
                              class="ci-img img-null"
                          /></span>
                          <div class="tree-inner-block d-inline-block">
                            <p class="ci-name"><b>Lưu Minh Phúc</b></p>
                            <p class="ci-title">Nhân viên</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Config from '../../thirdParty/config'
import { StaffService } from '@/services/staff.service'
// import Datepicker from 'vuejs-datepicker/dist/vuejs-datepicker.esm.js'
import { mapGetters } from 'vuex'
import { CommonService } from '@/services/common.service'
import { vi } from 'vuejs-datepicker/dist/locale'

export default {
  data () {
    return {
      validate: false,
      dataStaff: {},
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
    // Datepicker
  },

  filters: {
    transfromData (code, dataListRole) {
      const dataFilter = dataListRole.filter((e) => e.id === code)
      if (dataFilter.length === 0) {
        return ''
      }
      return dataFilter[0].text
    },

    formatDate (date) {
      return date.substring(0, 10)
    },

    formatDay (date) {
      return date.substring(10, 16)
    }
  },

  async created () {
    const userId = this.$route.params.id
    const dataQuery = await StaffService.getStaffById({
      userId: userId
    })
    console.log(dataQuery)
    if (dataQuery.success) {
      this.keyAdd = true
      this.dataStaff = dataQuery.data
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
      }
    },

    closeModal () {
      this.modalEdit = false
      window.history.back()
    }
  }
}
</script>

<style scope>
