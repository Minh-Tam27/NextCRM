<template>
  <div v-if="dataPermission">
    <PageTitle :heading="msg" />
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-header m-b-10">
        <form class="box-search" @submit="submitForm">
          <div class="form-group">
            <label for>Từ khóa</label>
            <input
              type="text"
              v-model="searchObject.keyWord"
              class="form-control f12 hc-37"
              placeholder="Từ khóa"
            />
          </div>
          <div class="form-group">
            <label for>Vị trí</label>
            <Select2
              v-model="searchObject.companyPhase"
              :options="optionComphase"
            />
          </div>
          <div class="form-group">
            <label for>Vai trò</label>
            <Select2 v-model="searchObject.typeSale" :options="dataListRole" />
          </div>
          <div class="form-group">
            <label for>Vùng</label>
            <Select2
              v-model="searchObject.region"
              :options="dataConfigRegion"
              @change="queryProvince($event)"
            />
          </div>
          <div class="form-group">
            <label for>Tỉnh / thành phố</label>
            <Select2 v-model="searchObject.province" :options="dataProvince" />
          </div>
          <div class="form-group">
            <label for>Người quản lý</label>
            <Select2
              v-model="searchObject.superior"
              :options="dataListManage"
            />
          </div>
          <div class="form-group">
            <label for>Trạng thái</label>
            <Select2
              v-model="searchObject.userStatus"
              :options="optionUserStatus"
            />
          </div>
          <div class="d-inline-block m-t-23">
            <button
              v-if="dataPermission.includes('CNPS_SUR_STAFF_LIST')"
              type="button"
              class="btn btn-primary hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Lọc"
              @click="submitForm"
            >
              <i class="bx bx-filter-alt"></i>
              <span class="ml-1"></span>Lọc
            </button>

            <button
              v-if="dataPermission.includes('CNPS_SUR_STAFF_LIST')"
              type="button"
              class="btn btn-outline-light hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Bỏ lọc"
              @click="clearSearch()"
            >
              <i class="bx bx-filter-alt"></i>
              <span class="ml-1"></span>Bỏ lọc
            </button>
            <!-- <button
              type="button"
              class="btn btn-info hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Nhập file"
              onclick="document.getElementById('file-input').click();"
            >
              <i class="bx bx-upload"></i>
              <span class="ml-1"></span>Nhập file
            </button>
            <input id="file-input" class="d-none" type="file" name="name" /> -->

            <button
              v-if="dataPermission.includes('CNPS_SUR_STAFF_EXPORT')"
              @click="exportExcel()"
              type="button"
              class="btn btn-info hc-37 mr-2 m-b-10 pt-2 file-input"
              data-toggle="tooltip"
              data-placement="top"
            >
              <i class="bx bx-download"></i>
              <span class="ml-1"></span>Xuất file
            </button>
            <button
              v-if="dataPermission.includes('CNPS_SUR_STAFF_UPSERT')"
              type="button"
              @click="openAdd()"
              class="btn btn-success hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Thêm mới"
            >
              <i class="bx bx-plus-circle"></i>
              <span class="ml-1"></span>Thêm mới
            </button>
          </div>
        </form>
      </div>
      <div class="card-body">
        <div class="tab-content" id="nav-tabContent">
          <div class="table-responsive">
            <table
              class="table table-hover table-bordered"
              id="tableScroll"
              v-if="dataPermission.includes('CNPS_SUR_STAFF_LIST')"
            >
              <thead class="thead-light">
                <tr>
                  <th scope="col" class="text-center">STT</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Email</th>
                  <th scope="col">Số điện thoại</th>
                  <th scope="col">Giới tính</th>
                  <th scope="col">Vai trò</th>
                  <th scope="col">Quản lý</th>
                  <th scope="col">Vị trí</th>
                  <th scope="col">Ngày bắt đầu làm việc</th>
                  <th scope="col">Tỉnh/ Thành phố</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="loading">
                  <td colspan="11" align="center">
                    <i class="bx bx-loader-circle bx-spin bx-rotate-90 f30"></i>
                  </td>
                </tr>
                <tr
                  v-else
                  class="table-row"
                  v-for="(staff, index) in staffs"
                  :key="index"
                >
                  <td class="text-center" style="width: 50px">
                    {{ pagination.size * (pagination.page - 1) + index + 1 }}
                  </td>
                  <td>
                    <b>{{ staff.name }}</b>
                    <br />
                    <p v-if="staff.userName">
                      <a
                        href="#"
                        @click="openModalDetail(staff)"
                        class="text-0A63AB"
                        >{{ staff.userName }}</a
                      >
                    </p>
                  </td>
                  <td>{{ staff.userName }}</td>
                  <td>{{ staff.mobile }}</td>
                  <td>
                    <p v-if="staff.gender === 'MALE'">Nam</p>
                    <p v-if="staff.gender === 'FEMALE'">Nữ</p>
                  </td>
                  <td>
                    <p>{{ staff.typeSale | transfromData(dataListRole) }}</p>
                  </td>
                  <td>
                    <p>{{ staff.superiorName }}</p>
                  </td>
                  <td>
                    <p v-if="staff.companyPhase === 'PROBATION'">Thử việc</p>
                    <p v-if="staff.companyPhase === 'OFFICIAL'">Chính thức</p>
                  </td>
                  <td>{{ staff.companyDayIn }}</td>
                  <td>{{ staff.province }}</td>
                  <td>
                    <span
                      v-if="staff.userStatus === 'ACTIVE'"
                      class="badge badge-success"
                      >Hoạt động</span
                    >
                    <span
                      v-if="staff.userStatus !== 'ACTIVE'"
                      class="badge badge-danger"
                      >Đang bị khóa</span
                    >
                  </td>
                  <td align="right">
                    <b-dropdown
                      class="text-center"
                      variant="outline-light"
                      size="sm"
                    >
                      <button
                        class="dropdown-item"
                        v-if="
                          dataPermission.includes(
                            'CNPS_SUR_STAFF_RESET_PASSWORD'
                          )
                        "
                        @click="showMsgResetPass(staff)"
                      >
                        <i class="bx bx-reset"></i>
                        <span class="ml-1">&nbsp;</span>Reset mật khẩu
                      </button>
                      <button
                        class="dropdown-item"
                        v-if="dataPermission.includes('CNPS_SUR_STAFF_UPSERT')"
                        @click="openModalEdit(staff)"
                      >
                        <i class="bx bx-edit-alt"></i>
                        <span class="ml-1">&nbsp;</span>Sửa
                      </button>
                      <button
                        v-if="
                          staff.userStatus == 'ACTIVE' &&
                          dataPermission.includes('CNPS_SUR_STAFF_SET_STATUS')
                        "
                        class="dropdown-item"
                        @click="showMsgLockUser(staff)"
                      >
                        <i class="bx bx-lock-alt"></i>
                        <span class="ml-1">&nbsp;</span>Khóa
                      </button>
                      <button
                        v-if="
                          dataPermission.includes(
                            'CNPS_SUR_STAFF_SET_STATUS'
                          ) && staff.userStatus !== 'ACTIVE'
                        "
                        class="dropdown-item"
                        @click="showMsgUnlockUser(staff)"
                      >
                        <i class="bx bx-lock-open-alt"></i>
                        <span class="ml-1">&nbsp;</span>Mở khóa
                      </button>
                      <button
                        @click="openModalAssgni(staff)"
                        v-if="dataPermission.includes('ASSIGN')"
                        class="dropdown-item"
                      >
                        <i class="bx bx-lock-alt"></i>
                        <span>&nbsp;</span>Gán quyền
                      </button>
                    </b-dropdown>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pagination-bottom"
      v-if="dataPermission.includes('CNPS_SUR_STAFF_LIST')"
    >
      <b-pagination
        v-model="pagination.page"
        :total-rows="pagination.total"
        :per-page="pagination.size"
        class="fl-right mr-2"
      ></b-pagination>
    </div>

    <!-- Modal QL-KhoaNhanVien -->
    <div
      class="modal fade"
      id="QL-lock"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Khóa nhân viên</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Bạn chắc chắn muốn khóa nhân viên
            <b>Ten_nv</b> - <b>email_nv</b>?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Bỏ qua
            </button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Khóa
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal QL-MoKhoaNhanVien -->
    <div
      class="modal fade"
      id="QL-unlock"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Mở khóa nhân viên</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Bạn chắc chắn muốn mở khóa nhân viên
            <b>Ten_nv</b> - <b>email_nv</b>?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Bỏ qua
            </button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Mở khóa
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal QL-ResetPw -->
    <div
      class="modal fade"
      id="QL-ResetPw"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Reset mật khẩu nhân viên</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Bạn chắc chắn muốn reset mật khẩu nhân viên
            <b>Ten_nv</b> - <b>email_nv</b>?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Bỏ qua
            </button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Reset mật khẩu
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div v-if="showModalAssgi">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Gán quyền
                    </h5>
                    <button
                      type="button"
                      @click="showModalAssgi = false"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div
                    class="modal-body"
                    style="max-height: 500px; overflow-y: auto"
                  >
                    <h1 class="f16 py-3">
                      Nhân viên: {{ objectAssgni.name }}
                      <br />
                      <span class="badge badge-primary"
                        >Mã NV: {{ objectAssgni.companyCode }}</span
                      >
                    </h1>
                    <ul
                      class="ql-ganquyen"
                      v-for="(item, index) in dataRole"
                      :key="index"
                    >
                      <li>
                        <label class="tree-container">
                          {{ item.text }}
                          <input
                            type="checkbox"
                            @click="assgRole(item.text)"
                            :checked="checkedRole(item.text)"
                          />
                          <span class="tree-checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="showModalAssgi = false"
                      data-dismiss="modal"
                    >
                      Hủy
                    </button>
                    <button
                      type="button"
                      @click="submitAssginRole()"
                      class="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Lưu
                    </button>
                    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#QL-LockUser-Fail" data-dismiss="modal">Khóa</button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
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
                    <h5 class="modal-title">Thông báo</h5>
                  </div>
                  <div class="modal-body text-center">
                    <img src="@/assets/noti-success2.svg" alt="icon-successs" />
                    <h2 class="f18 py-3">Reset mật khẩu thành công</h2>
                    <p class="text-center">
                      Mật khẩu mới: {{ objectDataReturns.password }}
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="showModal = false"
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
    <div>
      <div v-if="showModalStatusLock">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Thông báo</h5>
                  </div>
                  <div class="modal-body text-center">
                    <img src="@/assets/noti-success2.svg" alt="icon-successs" />
                    <h2 class="f18 py-3">Khóa nhân viên thành công</h2>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="showModalStatusLock = false"
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

    <div>
      <div v-if="showModalStatusOpen">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Thông báo</h5>
                  </div>
                  <div class="modal-body text-center">
                    <img src="@/assets/noti-success2.svg" alt="icon-successs" />
                    <h2 class="f18 py-3">Mở nhân viên thành công</h2>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="showModalStatusOpen = false"
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

    <div id="app">
      <div v-if="showModalSuccess">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Thông báo
                      </h5>
                    </div>
                    <div class="modal-body text-center">
                      <img
                        src="@/assets/img/noti-success2.svg"
                        alt="icon-successs"
                      />
                      <h2 class="f18 py-3">Gán quyền nhân viên thành công</h2>
                    </div>
                    <div class="modal-footer">
                      <a
                        href="/staff"
                        @click="showModalSuccess = false"
                        type="button"
                        class="btn btn-light"
                        >Đóng</a
                      >
                    </div>
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
import { LocationService } from '@/services/location.service'
import { CommonService } from '@/services/common.service'

import PageTitle from '@/layout/Components/PageTitle'
import Select2 from 'v-select2-component'
import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
import prepareFetchParamsMixin from '../../mixins/prepareFetchParamsMixin'
import Config from '../../thirdParty/config'
import { mapGetters } from 'vuex'

export default {
  name: 'StaffList',
  mixins: [prepareQueryParamsMixin, prepareFetchParamsMixin],

  components: {
    PageTitle,
    Select2
  },

  created () {
    this.superiors()
    this.fetchData()
    this.fetchRegion()
    this.getRegions()
    this.getTypeSale()
    this.getAllRole()
  },

  data: () => {
    return {
      dataListManage: [],
      objectDataReturns: {},
      showModal: false,
      showModalStatusOpen: false,
      showModalStatusLock: false,
      dataConfigRegion: [],
      msg: 'Quản lý nhân viên',
      dataProvince: [],
      optionCity: Config.optionCity,
      optionUserStatus: Config.optionUserStatus,
      optionComphase: Config.optionComphase,
      dataUser: JSON.parse(localStorage.getItem('userData')),
      searchObject: {
        keyWord: '',
        typeSale: false,
        companyPhase: false,
        manager: false,
        region: false,
        city: false,
        userStatus: false
      },
      searchObjectNew: {
        keyWord: '',
        typeSale: false,
        companyPhase: false,
        manager: false,
        region: false,
        city: false,
        userStatus: false
      },
      staffs: [],
      error: false,
      loading: true,
      pagination: {
        size: 20,
        page: 1,
        total: 0
      },
      dataListRole: [],
      showModalAssgi: false,
      objectAssgni: {},
      dataRole: [],
      dataRoleUser: [],
      dataRoleAss: [],
      showModalSuccess: false
    }
  },

  filters: {
    transfromData (code, dataListRole) {
      const dataFilter = dataListRole.filter((e) => e.id === code)
      if (dataFilter.length === 0) {
        return ''
      }
      return dataFilter[0].text
    }
  },

  methods: {
    openModalAssgni (data) {
      this.getRoleById(data.id)
      this.objectAssgni = data
      this.dataRoleAss = data.roles ? data.roles : []
      this.showModalAssgi = true
    },

    async submitForm (event) {
      event.preventDefault()
      this.pagination.page = 1
      this.fetchData()
    },
    async changeStatus (data) {
      if (data.userStatus === 'ACTIVE') {
        this.showMsgLockUser(data)
      }

      if (data.userStatus === 'INACTIVE') {
        this.showMsgUnlockUser(data)
      }
    },

    async getRegions () {
      const dataRes = await StaffService.getRegions()
      if (dataRes.data.length > 0) {
        const dataRegion = [{ id: false, text: 'Tất cả' }]
        dataRes.data.map((e) => {
          dataRegion.push({ id: e.id, text: e.name })
        })
        this.dataConfigRegion = dataRegion
      }
    },

    async openAdd () {
      this.$store.dispatch('user/dataEditStaff', {})
      this.$router.push('/staff-add')
    },

    async openModalEdit (data) {
      this.$store.dispatch('user/dataEditStaff', data)
      this.$router.push('/staff-edit')
    },

    openModalDetail (data) {
      this.$router.push(`/staff-detail/${data.id}`)
    },

    async queryProvince (e) {
      try {
        const data = await StaffService.getProvinceRegion({ regionId: [e] })
        this.searchObject.province = false
        if (data.data.length > 0) {
          const dataProvince = [{ id: false, text: 'Tất cả' }]
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

    async getRoleById (id) {
      try {
        const data = await StaffService.getRoleByUser({ userId: id })
        if (data.data.roles) {
          this.dataRoleUser = data.data.roles
          return
        }
        this.dataRoleUser = []
      } catch (error) {
        console.log(error)
      }
    },

    checkedRole (role) {
      return this.dataRoleUser.includes(role)
    },

    async fetchData () {
      try {
        this.loading = true
        this.fetchParams.userIdLogin = this.dataUser.userId
        const { data } = await StaffService.getList(this.fetchParams)
        this.staffs = data.content
        if (this.dataListManage.length > 0) {
          this.dataListManage.map((e) => {
            this.staffs.map((ee) => {
              if (e.id === ee.superior) {
                ee.superiorName = e.text
              }
            })
          })
        }
        this.pagination.total = data.totalElements
      } catch (e) {
        this.error = e.message
        console.log(e)
      } finally {
        this.loading = false
      }
    },

    async exportExcel () {
      try {
        this.loading = true
        this.fetchParams.userIdLogin = this.dataUser.userId
        await StaffService.exportStaff(this.fetchParams)
      } catch (e) {
        this.error = e.message
        console.log(e)
      } finally {
        this.loading = false
      }
    },

    async fetchRegion () {
      try {
        const { data } = await LocationService.getRegionList()
        this.optionRegion = [
          {
            text: '-- Vùng --',
            id: false
          }
        ]
        data.forEach((element) => {
          this.optionRegion.push({ text: element.name, id: element.code })
        })
      } catch (e) {
        // this.$store.commit('toast/NEW', { type: 'error', message: e.message, e })
        this.error = e.message
        console.log(e)
      }
    },

    async clearSearch () {
      this.searchObject = { ...this.searchObjectNew }
      await this.fetchData()
    },

    async selectRegion (event) {
      this.optionCity = [
        {
          text: 'Tỉnh/Thành phố',
          id: false
        }
      ]
      this.searchObject.city = false
      if (event.id !== 'false') {
        const { data } = await LocationService.getCityList({
          region: event.id
        })
        data.forEach((element) => {
          this.optionCity.push({ text: element.name, id: element.code })
        })
      }
    },

    showMsgResetPass (staff) {
      const h = this.$createElement
      const messageVNode = h('p', {
        domProps: {
          innerHTML: `Bạn chắc chắn muốn reset mật khẩu nhân viên <b>${staff.name}</b> - <b>${staff.userName}</b>?`
        }
      })
      this.$bvModal
        .msgBoxConfirm([messageVNode], {
          title: 'Reset mật khẩu nhân viên',
          okTitle: 'Reset mật khẩu',
          cancelTitle: 'Bỏ qua',
          centered: true
        })
        .then(async (value) => {
          if (value) {
            const dataRes = await StaffService.resetPassword({
              userId: staff.id
            })
            this.objectDataReturns.password = dataRes.data.password
            this.showModal = true
            this.fetchData()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    showMsgLockUser (staff) {
      const h = this.$createElement
      const messageVNode = h('p', {
        domProps: {
          innerHTML: `Bạn chắc chắn muốn khóa nhân viên <b>${staff.name}</b> - <b>${staff.userName}</b>?`
        }
      })
      this.$bvModal
        .msgBoxConfirm([messageVNode], {
          title: 'Khóa nhân viên',
          okTitle: 'Khóa',
          cancelTitle: 'Bỏ qua',
          centered: true
        })
        .then(async (value) => {
          if (value) {
            await StaffService.lockOfUnlockStaff({
              userId: staff.id
            })
            this.showModalStatusLock = true
            this.fetchData()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    async openDetailStaff () {},

    async superiors () {
      try {
        const data = await StaffService.superiors()
        if (data.data.length > 0) {
          const datas = [{ id: false, text: 'Tất cả' }]
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

    async submitAssginRole () {
      try {
        const body = {
          roles: this.dataRoleAss,
          userId: this.objectAssgni.id
        }
        const data = await StaffService.setRole(body)
        if (data.message === 'Success') {
          this.showModalSuccess = true
          return
        }
      } catch (error) {
        console.log(error)
      }
    },

    async getTypeSale () {
      try {
        const data = await CommonService.getTypeSale({})
        if (data.data.length > 0) {
          const datas = [{ id: false, text: 'Tất cả' }]
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
      } catch (error) {
        console.log(error)
      }
    },

    async getAllRole () {
      try {
        const data = await CommonService.getAllRole({})
        if (data.data.length > 0) {
          const datas = [{ id: false, text: 'Tất cả' }]
          data.data.map((e) => {
            const body = {
              id: e.id,
              text: e.name
            }
            datas.push(body)
          })
          this.dataRole = datas
          return
        }
        this.dataRole = []
      } catch (error) {
        console.log(error)
      }
    },

    assgRole (data) {
      if (this.dataRoleAss.includes(data)) {
        const index = this.dataRoleAss.indexOf(data)
        if (index > -1) {
          this.dataRoleAss.splice(index, 1)
          return
        }
      }
      if (!this.dataRoleAss.includes(data)) {
        this.dataRoleAss.push(data)
      }
    },

    showMsgUnlockUser (staff) {
      const h = this.$createElement
      const messageVNode = h('p', {
        domProps: {
          innerHTML: `Bạn chắc chắn muốn mở khóa nhân viên <b>${staff.name}</b> - <b>${staff.userName}</b>?`
        }
      })
      this.$bvModal
        .msgBoxConfirm([messageVNode], {
          title: 'Mở khóa nhân viên',
          okTitle: 'Mở khóa',
          cancelTitle: 'Bỏ qua',
          centered: true
        })
        .then(async (value) => {
          if (value) {
            await StaffService.lockOfUnlockStaff({
              userId: staff.id
            })
            this.showModalStatusOpen = true
            this.fetchData()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapGetters({
      dataPermission: 'role/dataPermission'
    }),

    isEmpty () {
      return this.news && !this.news.length
    },

    useInUrlQueryPropList () {
      return this.prepareQueryParamsMixin({
        size: this.pagination.size,
        page: this.pagination.page
      })
    },

    fetchParams () {
      const pagination = this.prepareFetchParamsMixin({
        size: this.pagination.size,
        page: this.pagination.page
      })

      const searchObject = this.prepareFetchParamsMixin({
        ...this.searchObject
      })
      return { ...searchObject, ...pagination }
    }
  },
  watch: {
    'pagination.size': function () {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.fetchData()
    },
    'pagination.page': function () {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.fetchData()
    }
  }
}
</script>

<style scoped>
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
