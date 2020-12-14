<template>
  <div
    class="add-role"
    v-if="dataPermissionUser && dataPermissionUser.includes('CNPS_CFG_ROLE_SAVE') &&  !checkLoad"
  >
    <div class="breadcrumb-area pos-relative" style="width : 100%">
      <h1>Sửa quyền</h1>
      <div class style="float: right;">
        <button
          @click="submitInsert()"
          class="f12 font-medium btn btn-primary rounded-pill btn-sm-fix btn-link"
        >
          <i class="bx bxs-save"></i> Cập nhật
        </button>
      </div>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-body px-20">
        <form class="col-md-6 px-0">
          <h1 class="f16 py-3">Thông tin cập nhật</h1>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label">Tên quyền</label>
            <div class="col-sm-7">
              <input
                disabled
                v-model="dataInsert.name"
                type="text"
                class="form-control"
                id
                placeholder="Nhập tên quyền"
                maxlength="50"
                required
              />
              <p v-if="objectMess.name && validate" class="text-danger">{{objectMess.name}}</p>
            </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-3 col-form-label">Mô tả</label>
            <div class="col-sm-7">
              <textarea
                class="form-control"
                rows="5"
                v-model="dataInsert.description"
                placeholder="Nhập mô tả"
                maxlength="255"
              ></textarea>
            </div>
          </div>
        </form>
        <h1 class="f16 py-3">Danh sách chức năng</h1>
        <div class="form-row box-decen" v-if="dataPermissionUser.includes('CNPS_CFG_PERMISSION_ALL')">
          <div class="col-md-3 col-sm-4" v-for="(item  , index) in dataPermission" :key="index">
            <div class="bd-detail">
              <div class="bd-main">
                <label class="tree-container">
                  {{item[0].toUpperCase()}}
                  <input
                    type="checkbox"
                    @change="checkBoxRole(item , $event)"
                    v-model="item.checkbox"
                    class="select-all_hoadon"
                  />
                  <span class="tree-checkmark"></span>
                </label>
              </div>

              <ul v-for="(permission  , indexx) in item[1]" :key="indexx" class="tree-list">
                <li>
                  <label class="tree-container">
                    {{permission.name}}
                    <input
                      type="checkbox"
                      @change="checkBoxPermisstion(permission , item , index)"
                      :checked="isChecked(permission.code)"
                      class="checkbox1"
                    />
                    <span class="tree-checkmark"></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
                    <h5 class="modal-title" id="exampleModalLabel">Thông báo</h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      @click="showModal = false"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-center">
                    <img src="@/assets/img/noti-unsuccess2.svg" alt="icon-successs" />
                    <h2 class="f18 py-3">Quyền phải chọn ít nhất một thao tác</h2>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="showModal = false
                    "
                      data-dismiss="modal"
                    >Bỏ qua</button>
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
                      <h2 class="f18 py-3">Cập nhật quyền thành công</h2>
                    </div>
                    <div class="modal-footer">
                      <a
                        href="/role"
                        @click="showModalSuccess = false"
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
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      dataInsert: {
        name: '',
        description: ''
      },
      dataUser: JSON.parse(localStorage.getItem('userData')),
      dataPermission: [],
      keyPermission: [],
      indexObject: 0,
      listCheckBox: [],
      disabledAdd: false,
      validate: false,
      objectMess: {
        name: ''
      },
      showModal: false,
      showModalSuccess: false,
      checkLoad: true
    }
  },

  async created () {
    await this.featchDataEdit()
    await this.fetchDataPermissionAll()
    await this.filCheckAll()
  },

  computed: {
    ...mapGetters({
      dataPermissionUser: 'role/dataPermission'
    })
  },

  methods: {
    async fetchDataPermissionAll () {
      try {
        const data = await RoleService.getListPermission()
        if (data.success) {
          this.dataPermission = data.data
          this.dataPermission = Object.entries(this.dataPermission)
          this.dataPermission.map((e) => {
            e.checkbox = false
          })
        }
      } catch (error) {
        console.log(error)
      }
    },

    checkBoxRole (data) {
      if (data.checkbox) {
        data[1].map((e) => {
          if (!this.listCheckBox.includes(e.code)) {
            this.listCheckBox.push(e.code)
          }
        })
      }

      if (!data.checkbox) {
        data[1].map((e) => {
          if (this.listCheckBox.includes(e.code)) {
            const index = this.listCheckBox.indexOf(e.code)
            if (index > -1) {
              this.listCheckBox.splice(index, 1)
            }
          }
        })
      }
    },

    isChecked (code) {
      return this.listCheckBox.includes(code)
    },

    async featchDataEdit () {
      const data = await RoleService.getRoleById({ id: this.$route.params.id })
      if (data.success) {
        this.dataInsert = data.data
        this.dataInsert.permissions = Object.entries(
          this.dataInsert.permissions
        )
        this.dataInsert.permissions.map((e) => {
          e[1].map((ee) => {
            if (!this.listCheckBox.includes(ee.code)) {
              this.listCheckBox.push(ee.code)
            }
          })
        })
      }
    },

    filCheckAll () {
      this.dataInsert.permissions.map((e) => {
        this.dataPermission.map((ee, index) => {
          if (e[0] === ee[0]) {
            if (e[1].length === ee[1].length) {
              this.dataPermission[index].checkbox = true
            }
          }
        })
      })
      this.checkLoad = false
    },

    checkBoxPermisstion (data, item, index) {
      const exists = this.listCheckBox.includes(data.code)
      if (exists) {
        this.listCheckBox = this.listCheckBox.filter((c) => {
          return c !== data.code
        })
      } else {
        this.listCheckBox.push(data.code)
      }
      this.dataPermission[index].checkbox = item[1].every((i) =>
        this.listCheckBox.includes(i.code)
      )
    },

    async submitInsert () {
      this.disabledAdd = true
      this.validate = true
      const bodyInsert = {}
      bodyInsert.id = this.dataInsert.id
      bodyInsert.userId = this.dataUser.userId
      bodyInsert.name = this.dataInsert.name.trim()
      bodyInsert.description = this.dataInsert.description.trim()
      bodyInsert.permissionCodes = this.listCheckBox
      const data = await RoleService.addRole(bodyInsert)
      if (data.success) {
        this.disabledAdd = false
        this.showModalSuccess = true
        this.validate = false
        return
      }

      if (data.message === 'Name exist') {
        this.objectMess.name = 'Tên quyền đã tồn tại'
      }
      if (
        data.message === 'Object invalid' &&
        data.data.name === 'must not be blank'
      ) {
        this.objectMess.name = 'Tên quyền không được để trống'
      }

      if (
        data.message === 'Object invalid' &&
        data.data.permissionCodes === 'must not be empty'
      ) {
        this.showModal = true
      }

      if (
        data.message === 'Object invalid' &&
        data.data.name === 'size must be between 2 and 50'
      ) {
        this.objectMess.name = 'Tên quyền phải nhập từ 2 đến 50 kí tự'
      }
      if (
        data.message === 'Object invalid' &&
        data.data.permissionCodes === 'must not be blank'
      ) {
        this.showModal = true
      }
      this.disabledAdd = false
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
