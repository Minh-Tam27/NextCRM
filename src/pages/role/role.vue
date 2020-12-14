<template>
  <div class="role" v-if="dataPermission">
    <div class="breadcrumb-area pos-relative">
      <h1>Phân quyền</h1>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-header m-b-10">
        <form class="box-search" v-if="dataPermission.includes('CNPS_CFG_ROLE_LIST')" @submit="submitForm">
          <div class="form-group">
            <label for>Tìm kiếm</label>
            <input
              type="text"
              v-model="search.name"
              class="form-control f12 hc-37"
              placeholder="Tên quyền"
            />
          </div>
          <div class="d-inline-block mt-4">
            <button
              v-if="dataPermission.includes('CNPS_CFG_ROLE_LIST')"
              @click="submitForm"
              type="button"
              class="btn btn-primary hc-37 mr-2 m-b-10 pt-2"
              title="Lọc"
            >
              <i class="bx bx-filter-alt"></i>
              <span class="ml-1"></span>Lọc
            </button>
            <button
              v-if="dataPermission.includes('CNPS_CFG_ROLE_LIST')"
              type="button"
              @click="clearSearch()"
              class="btn btn-outline-light hc-37 mr-2 m-b-10 pt-2"
              title="Bỏ lọc"
            >
              <i class="bx bx-filter-alt"></i>
              <span class="ml-1"></span>Bỏ lọc
            </button>

            <a
              v-if="dataPermission.includes('CNPS_CFG_ROLE_SAVE')"
              href="/role-add"
              class="btn btn-success hc-37 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Thêm mới"
            >
              <i class="bx bx-plus-circle"></i>
              <span>&nbsp;</span>Thêm mới
            </a>
          </div>
        </form>
      </div>
      <div class="card-body">
        <div class="tab-content" id="nav-tabContent">
          <div class="table-responsive">
            <table
              class="table table-hover table-bordered"
              id="tableScroll"
              v-if="dataPermission.includes('CNPS_CFG_ROLE_LIST')"
            >
              <thead class="thead-light">
                <tr>
                  <th scope="col" class="text-center" style="width: 50px">STT</th>
                  <th scope="col" class="text-center">Tên quyền</th>
                  <th scope="col" class="text-center">Mô tả</th>
                  <th scope="col" class="text-right" width="150">Thao tác</th>
                </tr>
              </thead>
              <tbody v-for="(item , index) in dataRole" :key="index">
                <tr class="table-row">
                  <td class="text-center">{{search.limit * (search.page - 1) + index + 1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.description}}</td>
                  <td class="text-right">
                    <div class="dropdown show float-right">
                      <button
                        type="button"
                        class="btn btn-outline-light btn-sm dropdown-toggle ml-1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="sr-only">More</span>
                      </button>
                      <div class="dropdown-menu">
                        <a
                          v-if="dataPermission.includes('CNPS_CFG_ROLE_SAVE')"
                          class="dropdown-item"
                          @click="edit(item)"
                          href="#"
                        >
                          <i class="bx bx-edit-alt"></i> Cập nhật
                        </a>
                        <a
                          v-if="dataPermission.includes('CNPS_CFG_ROLE_DELETE')"
                          class="dropdown-item"
                          @click="openModalComfirmDeleted(item)"
                          href="##"
                          data-toggle="modal"
                        >
                          <i class="bx bx-trash"></i> Xóa
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-bottom" v-if="dataPermission.includes('CNPS_CFG_ROLE_LIST')">
      <b-pagination
        v-model="search.page"
        :total-rows="pagination.total"
        :per-page="search.limit"
        class="fl-right mr-2"
      ></b-pagination>
    </div>
    <div id="app">
      <div v-if="showModalDeleted">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xóa quyền</h5>
                    <button
                      type="button"
                      class="close"
                      @click="showModalDeleted = false"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">{{messageAlertDelRole}}</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="showModalDeleted = false"
                      data-dismiss="modal"
                    >Bỏ qua</button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="submitDeleted()"
                      data-dismiss="modal"
                    >Xóa</button>
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
                      <h5 class="modal-title" id="exampleModalLabel">Thông báo</h5>
                    </div>
                    <div class="modal-body text-center">
                      <img src="@/assets/img/noti-success2.svg" alt="icon-successs" />
                      <h2 class="f18 py-3">Xóa quyền thành công</h2>
                    </div>
                    <div class="modal-footer">
                      <a
                        href="/role"
                        @click="showModalSuccess = false && fetchData()"
                        type="button"
                        class="btn btn-light"
                      >Đóng</a>
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
import { RoleService } from '@/services/role.service'
import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
import prepareFetchParamsMixin from '../../mixins/prepareFetchParamsMixin'
import { mapGetters } from 'vuex'
import { StaffService } from '@/services/staff.service'

export default {
  components: {},
  mixins: [prepareQueryParamsMixin, prepareFetchParamsMixin],

  data () {
    return {
      dataRole: [],
      search: {
        name: '',
        limit: 20,
        page: 1
      },
      pagination: {
        total: 0
      },
      showModalDeleted: false,
      showModalSuccess: false,
      dataDeleted: {},
      messageAlertDelRole: ''
    }
  },

  watch: {
    'search.limit': function () {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.fetchData()
    },
    'search.page': function () {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.fetchData()
    }
  },

  created () {
    this.fetchData()
  },

  computed: {
    ...mapGetters({
      dataPermission: 'role/dataPermission'
    })
  },

  methods: {
    async fetchData () {
      try {
        this.search.name = this.search.name ? this.search.name.trim() : ''
        const data = await RoleService.getList(this.search)
        if (data.success) {
          this.dataRole = data.data
          this.pagination.total = data.totalPage.total
            ? data.totalPage.total
            : 0
        }
      } catch (error) {
        console.log(error)
      }
    },
    
    async checkUsedPermission (permissionName) {
      try {
        const { data } = await StaffService.checkUsedPermission({ roleName: permissionName })
        return data
      } catch (e) {
        this.error = e.message
        console.log(e)
      }
    },

    async openModalComfirmDeleted (data) {
      this.messageAlertDelRole = 'Bạn có chắc chắn muốn xóa quyền không'
      const dataCheck = await this.checkUsedPermission(data.name)
      if (dataCheck) {
        this.messageAlertDelRole = 'Quyền này đang được sử dụng , bạn có chắc chắn muốn xóa quyền không?'
      }
      this.showModalDeleted = true
      this.dataDeleted = data
    },

    async submitDeleted () {
      try {
        this.showModalDeleted = false
        const res = await RoleService.deleted({ id: this.dataDeleted.id })
        if (res.success) {
          this.showModalSuccess = true
        }
        if (res.code === 8113) {
          alert(res.message)
          return
        }
      } catch (error) {
        console.log(error)
      }
    },

    async clearSearch () {
      this.search = {
        limit: 20,
        page: 1
      }
      await this.fetchData()
    },

    edit (data) {
      this.$router.push(`/role-edit/${data.id}`)
    },

    async submitForm (event) {
      event.preventDefault()
      this.search.page = 1
      this.fetchData()
    }
  }
}
</script>
