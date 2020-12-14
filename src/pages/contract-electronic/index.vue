<template>
  <div class="contract" v-if="dataPermission">
    <div class="breadcrumb-area pos-relative w-100">
      <h1>Danh sách hợp đồng điện tử</h1>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-header m-b-10">
        <form class="box-search" @keyup.enter="getListContract">
          <div class="form-group">
            <label for>Từ khóa</label>
            <input
              type="text"
              class="form-control f12 hc-37"
              placeholder="Từ khóa"
              v-model="search.keySearch"
            />
          </div>
          <div class="form-group">
            <label for>Số hợp đồng</label>
            <input
              type="text"
              class="form-control f12 hc-37"
              placeholder="Số hợp đồng"
              v-model="search.code"
            />
          </div>
          <div class="form-group">
            <label for>Chọn dịch vụ</label>
            <Select2 v-model="search.service" :options="dataConfigService" />
          </div>
          <div class="form-group">
            <label for>Vùng</label>
            <Select2
              v-model="search.regionId"
              :options="dataConfigRegion"
              @change="queryProvince($event)"
            />
          </div>
          <div class="form-group">
            <label for>Tỉnh / thành phố</label>
            <Select2 v-model="search.cityCode" :options="dataProvince" />
          </div>
          <div class="form-group">
            <label for>Nhân viên</label>
            <Select2 v-model="search.saleId" :options="listUser" />
          </div>
          <div class="form-group">
            <label for>Trạng thái ảnh</label>
            <Select2 v-model="search.imageStatus" :options="listStatusImg" />
          </div>
          <div class="form-group">
            <label for>Trạng thái hợp đồng</label>
            <Select2 v-model="search.state" :options="listStatus" />
          </div>
          <div class="d-inline-block m-t-23">
            <a
              v-if="dataPermission.includes('CNPS_SCON_LIST')"
              href="#"
              class="btn btn-primary hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Lọc"
              @click="getListContract()"
              ><i class="bx bx-filter-alt"></i><span>&nbsp;</span>Lọc</a
            >
            <button
              v-if="dataPermission.includes('CNPS_SCON_LIST')"
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
            <router-link
              to="contract-add"
              class="btn btn-success hc-37 mr-2 m-b-10 pt-2"
            >
              <i class="bx bx-plus-circle"></i> Thêm mới
            </router-link>
            <!--
                        <a href="CRM-Hopdong_Add.html" class="btn btn-success hc-37 mr-2 m-b-10 pt-2"
                            data-toggle="tooltip" data-placement="top" title="" data-original-title="Thêm mới"><i
                                class="bx bx-plus-circle"></i><span>&nbsp;</span>Thêm mới</a>
-->
          </div>
        </form>
      </div>
      <div class="card-body">
        <div class="tab-content" id="nav-tabContent">
          <div class="table-responsive">
            <table
              class="table table-hover table-bordered"
              id="tableScroll"
              v-if="dataPermission.includes('CNPS_SCON_LIST')"
            >
              <thead class="thead-light">
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Dịch vụ</th>
                  <th scope="col">Merchant</th>
                  <th scope="col">Số hợp đồng</th>
                  <th scope="col">Loại hợp đồng</th>
                  <th scope="col">Số lượng thiết bị/năm</th>
                  <th scope="col">Hình thức</th>
                  <th scope="col">Giá bán</th>
                  <th scope="col">Ngày ký - hết hạn</th>
                  <th scope="col">Vùng</th>
                  <th scope="col">Sales chăm sóc</th>
                  <th scope="col">TT ảnh</th>
                  <th scope="col">TT hđ </th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tr v-if="loading">
                <td colspan="12" align="center">
                  <i class="bx bx-loader-circle bx-spin bx-rotate-90 f30"></i>
                </td>
              </tr>
              <tbody v-for="(item, index) in listContract" :key="index">
                <tr class="table-row" v-if="!loading">
                  <td class="text-center">
                    {{ search.limit * (search.page - 1) + index + 1 }}
                  </td>
                  <td>{{ item.service }}</td>
                  <td v-if="item.customerInfo">
                    <p>
                      - Tên Merchant :
                      {{
                        item.customerInfo.customerName
                          ? item.customerInfo.customerName
                          : ""
                      }}
                    </p>
                    <p>
                      - Email :
                      {{
                        item.customerInfo.email ? item.customerInfo.email : ""
                      }}
                    </p>
                    <p>
                      - Số điện thoại :
                      {{
                        item.customerInfo.mobile ? item.customerInfo.mobile : ""
                      }}
                    </p>
                    <p>
                      - Địa chỉ :
                      {{
                        item.customerInfo.address
                          ? item.customerInfo.address
                          : ""
                      }}
                      ,
                      {{
                        item.customerInfo.district
                          ? item.customerInfo.district
                          : ""
                      }}
                      ,
                      {{ item.customerInfo.city ? item.customerInfo.city : "" }}
                    </p>
                  </td>
                  <td v-if="!item.customerInfo"></td>
                  <td>{{ item.code }}</td>
                  <td>{{ item.contractTypeName }}</td>
                  <td>{{ item.numDevices }}</td>
                  <td>{{ item.depositType | mapdepositType }}</td>
                  <td>{{ item.price | fomatCurrency }}</td>
                  <td>
                    {{ item.effectiveFrom | formatDate }} -
                    {{ item.effectiveTo | formatDate }}
                  </td>
                  <td v-if="item.customerInfo">
                    {{
                      item.customerInfo.regionId
                        | transfromRegion(dataConfigRegion)
                    }}
                  </td>
                  <td v-if="!item.customerInfo"></td>
                  <td>
                    {{ item.saleName }}<br />
                    {{ item.saleEmail }}
                  </td>
                    <td>
                    <span
                      v-if="item.imageStatus && item.imageStatus === 'MISS_IMAGE'"
                      class="badge badge-warning"
                      >Chưa đủ ảnh</span
                    >
                                        <span
                      v-if="item.imageStatus && item.imageStatus === 'FULL_IMAGE'"
                      class="badge badge-success"
                      >Đã đủ ảnh</span
                    >
                    </td>
                  <td>
                    <span
                      v-if="item.state && item.state === 'APPROVED'"
                      class="badge badge-success"
                      >{{ item.state | fomatStatus(listStatus) }}</span
                    >
                    <span
                      v-if="item.state && item.state === 'NEW'"
                      class="badge badge-info"
                      >{{ item.state | fomatStatus(listStatus) }}</span
                    >
                    <span
                      v-if="item.state && item.state === 'EXPIRED'"
                      class="badge badge-dark"
                      >{{ item.state | fomatStatus(listStatus) }}</span
                    >
                    <span
                      v-if="item.state && item.state === 'WAITING_APPROVED'"
                      class="badge badge-warning"
                      >{{ item.state | fomatStatus(listStatus) }}</span
                    >
                    <span
                      v-if="item.state && item.state === 'REJECT'"
                      class="badge badge-danger"
                      >{{ item.state | fomatStatus(listStatus) }}</span
                    >
                  </td>
                  <td align="right">
                    <b-dropdown
                      class="text-center"
                      variant="outline-light"
                      size="sm"
                    >
                      <router-link
                        v-if="dataPermission.includes('CNPS_SCON_INFO_BY_CODE')"
                        class="dropdown-item"
                        :to="`/contract/detail?id=${item.code}`"
                        ><i class="bx bx-show-alt"></i> Chi tiết</router-link
                      >
                      <button
                        v-if="
                          item.state === 'NEW' ||
                          item.state === 'WAITING_APPROVED' ||
                          item.state === 'REJECT'
                        "
                        class="dropdown-item pl-0"
                      >
                        <router-link
                          :to="`contract-edit/?code=${item.code}`"
                          class="dropdown-item"
                        >
                          <i class="bx bx-edit-alt"></i><span>&nbsp;</span>Sửa
                        </router-link>
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
      v-if="dataPermission.includes('CNPS_SCON_LIST')"
    >
      <b-pagination
        v-model="search.page"
        :total-rows="totalRows"
        :per-page="search.limit"
        class="fl-right mr-2"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ContractSevice } from '@/services/contract.service'
import moment from 'moment'
import { StaffService } from '@/services/staff.service'
import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
import prepareFetchParamsMixin from '../../mixins/prepareFetchParamsMixin'

export default {
  mixins: [prepareQueryParamsMixin, prepareFetchParamsMixin],

  computed: {
    ...mapGetters({
      dataConfigService: 'common/dataConfigService',
      dataPermission: 'role/dataPermission'
    }),

    useInUrlQueryPropList () {
      return this.prepareQueryParamsMixin({
        size: this.search.size,
        limit: this.search.limit
      })
    }
  },

  filters: {
    formatDate (date) {
      if (!date) return
      return moment(date).format('DD/MM/YYYY')
    },

    fomatCurrency (currency) {
      return Number(currency).toLocaleString('vi-VI', {
        style: 'currency',
        currency: 'VND'
      })
    },

    fomatStatus (status, listStatus) {
      const dataFilter = listStatus.filter((e) => e.id === status)
      return dataFilter[0].text
    },

    transfromRegion (data, dataConfigRegion) {
      const dataReturn = dataConfigRegion.filter((e) => e.id === data)
      if (dataReturn.length === 0) {
        return ''
      }
      return dataReturn[0].text
    },

    mapContractype (data) {
      if (!data) return
      if (data === 'READER') {
        return 'Thiết bị'
      }
      if (data === 'PAYMENT') {
        return 'Dịch vụ'
      }
      if (data === 'INSTALLMENT') {
        return 'Trả góp'
      }
      if (data === 'QRCODE') {
        return 'QRCode'
      }
      if (data === 'OTHER') {
        return 'Khác'
      }
    },

    mapdepositType (data) {
      if (!data) return
      if (data === 'BAN') {
        return 'Bán'
      }
      if (data === 'DAT_COC') {
        return 'Đặt cọc'
      }
    }
  },

  created () {
    this.getListContract()
    this.getListStaffBySuperior()
    this.getRegions()
  },

  data () {
    return {
      loading: false,
      search: {
        page: 1,
        limit: 20
      },
      totalRows: null,
      listUser: [],
      listContract: [
        {
          customerInfo: {
            customerName: null
          }
        }
      ],
      dataConfigRegion: [],
      dataProvince: [],
      dataConfigTypeContract: [],
      listStatusImg: [
        { id: 0, text: 'Tất cả' },
        {
          id: 'MISS_IMAGE',
          text: 'Chưa đủ ảnh'
        },
        {
          id: 'FULL_IMAGE',
          text: 'Đã đủ ảnh'
        }
      ],
      listStatus: [
        { id: 0, text: 'Tất cả' },
        {
          id: 'NEW',
          text: 'Mới tạo'
        },
        {
          id: 'APPROVED',
          text: 'Đã duyệt'
        },
        {
          id: 'EXPIRED',
          text: 'Hết hạn'
        },
        {
          id: 'WAITING_APPROVED',
          text: 'Chờ duyệt'
        },
        {
          id: 'REJECT',
          text: 'Từ chối'
        }
      ],
      dataUser: JSON.parse(localStorage.getItem('userData'))
    }
  },

  watch: {
    'search.page': function () {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.getListContract()
    },
    'search.limit': function () {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.getListContract()
    }
  },

  methods: {
    async getRegions () {
      const dataRes = await StaffService.getRegions()
      if (dataRes.data.length > 0) {
        const dataRegion = [
          {
            id: 0,
            text: 'Tất cả'
          }
        ]
        dataRes.data.map((e) => {
          dataRegion.push({ id: e.id, text: e.name })
        })
        this.dataConfigRegion = dataRegion
      }
    },

    async queryProvince (e) {
      try {
        this.search.cityCode = '0'
        const data = await StaffService.getProvinceRegion({ regionId: [e] })
        if (data.data.length > 0) {
          const dataProvince = [
            {
              id: 0,
              text: 'Tất cả'
            }
          ]
          data.data.map((e) => {
            const body = {
              id: e.code,
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

    async getListContract () {
      try {
        this.loading = true
        if (this.search.saleId === '0') delete this.search.saleId
        if (this.search.state === '0') delete this.search.state
        if (this.search.service === '0') delete this.search.service
        if (this.search.cityCode === '0') delete this.search.cityCode

        const data = await ContractSevice.getList(this.search)
        if (data.data.length > 0) {
          this.totalRows = data.totalPage.total
          this.listContract = data.data
          this.listContract.forEach((element) => {
            let count = 0
            const dataService = this.dataConfigService.filter(e => e.id === element.service)
            element.contractTypeName = dataService[0].contractType.find(ee => ee.code === element.contractType)
            element.contractTypeName = element.contractTypeName.name
            if (element.deviceInfos) {
              element.deviceInfos.forEach((data) => {
                count += data.totalPrice
              })
            }
            element.price = count
          })
          return
        }
        this.listContract = []
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async getListStaffBySuperior () {
      try {
        const data = await StaffService.getStaffByIdSuperior({
          userId: this.dataUser.userId
        })
        if (data.data.length > 0) {
          const dataUser = [
            {
              id: 0,
              text: 'Tất cả'
            }
          ]
          data.data.map((e) => {
            const body = {
              id: e.userId,
              text: e.name
            }
            dataUser.push(body)
          })
          this.listUser = dataUser
          return
        }
        this.listUser = []
      } catch (error) {
        console.log(error)
      }
    },

    clearSearch () {
      this.search = {
        page: 1,
        limit: 20
      }
      this.dataProvince = []
      this.getListContract()
    }
  }
}
</script>

<style scoped>
</style>
