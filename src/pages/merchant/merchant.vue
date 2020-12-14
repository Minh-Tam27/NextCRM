<template>
  <div v-if="dataPermission">
    <div class="breadcrumb-area pos-relative">
      <h1>Danh sách Merchant</h1>
    </div>
    
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-header m-b-10">
        <form
          class="box-search"
          @submit="submitForm"
        >
          <div class="form-group">
            <label for>Tìm kiếm</label>
            <input
              type="text"
              v-model="search.textSearch"
              class="form-control f12 hc-37"
              placeholder="Từ khóa"
            />
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
            <label for>Ngành hàng</label>
            <Select2 v-model="search.mcc" :options="dataConfigMcc" />
          </div>
          <div class="form-group">
            <label for>Dịch vụ đã kí hợp đồng</label>
            <Select2
              v-model="search.serviceType"
              :options="dataConfigService"
            />
          </div>
          <div class="d-inline-block m-t-23">
            <button
              v-if="dataPermission.includes('CNPS_CSTM_MERCHANT_LIST')"
              @click="submitForm"
              type="button"
              class="btn btn-primary hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Lọc"
            >
              <i class="bx bx-filter-alt"></i>
              <span class="ml-1"></span>Lọc
            </button>

            <button
              type="button"
              v-if="dataPermission.includes('CNPS_CSTM_MERCHANT_LIST')"
              @click="clearSearch()"
              class="btn btn-outline-light hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Bỏ lọc"
            >
              <i class="bx bx-filter-alt"></i>
              <span class="ml-1"></span>Bỏ lọc
            </button>
            <button
              @click="exportExcel()"
              v-if="dataPermission.includes('CNPS_CSTM_MERCHANT_LIST_XLS')"
              type="button"
              class="btn btn-info hc-37 mr-2 m-b-10 pt-2 file-input"
              data-toggle="tooltip"
              data-placement="top"
              title="Xuất
                            Excel"
            >
              <i class="bx bx-download"></i>
              <span class="ml-1"></span>Xuất Excel
            </button>
            <button
              v-if="dataPermission.includes('CNPS_CSTM_MERCHANT_ADD')"
              @click="openAdd()"
              class="btn btn-success hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Thêm mới"
              type="button"
            >
              <i class="bx bx-plus-circle"></i>
              <span class="ml-1"></span>Thêm mới
            </button>
            <!-- <button
              v-if="dataPermission.includes('CNPS_CSTM_MERCHANT_ADD')"
              type="button"
              class="btn btn-danger hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Cập nhật"
            >
              <span class="ml-1"></span>Cập nhật
            </button> -->
          </div>
        </form>
      </div>
      <div class="card-body">
        <div class="tab-content" id="nav-tabContent">
          <div class="table-responsive">
            <table
              class="table table-hover table-bordered"
              id="tableScroll"
              v-if="dataPermission.includes('CNPS_CSTM_MERCHANT_LIST')"
            >
              <thead class="thead-light">
                <tr>
                  <th scope="col" class="text-center">STT</th>
                  <th scope="col">TG tạo</th>
                  <th scope="col">Tên khách hàng</th>
                  <th scope="col">Số điện thoại</th>
                  <th scope="col">Tên merchant</th>
                  <th scope="col">Địa chỉ</th>
                  <th scope="col">Vùng kinh doanh</th>
                  <th scope="col">Ngành hàng</th>
                  <th scope="col">Sale</th>
                  <th scope="col">Dịch vụ đã ký HĐ</th>
                  <th scope="col">Loại merchant</th>
                  <!-- <th scope="col">Thao tác</th> -->
                </tr>
              </thead>
              <tbody v-if="loading">
                <tr>
                  <td colspan="11" align="center">
                    <i class="bx bx-loader-circle bx-spin bx-rotate-90 f30"></i>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr
                  v-for="(item, index) in dataMerchant"
                  :key="index"
                  class="table-row"
                >
                  <td class="text-center">
                    {{ search.limit * (search.page - 1) + index + 1 }}
                  </td>
                  <td>
                    {{ item.createAt | formatDay }},
                    {{ item.createAt | formatDate }}
                  </td>
                  <td>{{ item.customerName }}</td>
                  <td>{{ item.mobile }}<a v-if="item.mobile" href="#add-contact" data-toggle="modal" class="font-size-18"><i class="bx bxs-phone-call"></i></a></td>
                  <td>{{ item.merchantName }}</td>
                  <td>
                    {{ item.address + ", " + item.district + ", " + item.city }}
                  </td>
                  <td>
                    Vùng {{ item.regionId | transfromRegion(dataConfigRegion) }}
                    <br />
                    {{ item.city }}
                  </td>
                  <td>{{ item.mcc | transfromMccName(dataConfigMcc) }}</td>
                  <td>
                    <strong>{{ item.activeSaleName }}</strong>
                    <br />
                    <a href="#">{{ item.activeSaleEmail }}</a>
                  </td>
                  <td v-if="!item.listServiceType"></td>
                  <td v-else>
                    <div
                      v-for="(itemm, indexx) in item.listServiceType"
                      :key="indexx"
                    >
                      <span v-if="itemm.status === 'POTENTIAL'">{{
                        itemm.serviceType
                      }}</span>
                      <p
                        v-if="itemm.status !== 'POTENTIAL'"
                        class="text-0A63AB"
                      >
                        {{ itemm.serviceType }}
                      </p>
                    </div>
                  </td>
                  <td>{{item.customerType | fomatCustomtype}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-bottom" v-if="dataPermission.includes('CNPS_CSTM_MERCHANT_LIST')">
      <b-pagination
        v-model="search.page"
        :total-rows="pagination.total"
        :per-page="search.limit"
        class="fl-right mr-2"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { StaffService } from '@/services/staff.service'
import { MerchantService } from '@/services/merchant.service'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import { CommonService } from '@/services/common.service'
import { mapGetters } from 'vuex'
import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
import prepareFetchParamsMixin from '../../mixins/prepareFetchParamsMixin'

export default {
  mixins: [prepareQueryParamsMixin, prepareFetchParamsMixin],
  components: {},
  filters: {
    formatDate (date) {
      return date.substring(0, 10)
    },

    fomatCustomtype (type) {
      if (type === 'COMPANY') return 'Doanh nghiệp'
      if (type === 'INDIVIDUAL') return 'Cá nhân'
    },

    formatDay (date) {
      return date.substring(10, 16)
    },

    transfromMccName (data, dataConfigMcc) {
      const dataReturn = dataConfigMcc.filter((e) => e.id === data)
      if (dataReturn.length === 0) {
        return ''
      }
      return dataReturn[0].text
    },

    transfromRegion (data, dataConfigRegion) {
      const dataReturn = dataConfigRegion.filter((e) => e.id === data)
      if (dataReturn.length === 0) {
        return ''
      }
      return dataReturn[0].text
    }
  },

  computed: {
    ...mapGetters({
      dataPermission: 'role/dataPermission'
    })
  },

  data () {
    return {
      loading: true,
      dateRange: {
        startDate: null,
        endDate: null
      },
      dataMerchant: [],
      dataProvince: [],
      listUser: [],
      dataConfigRegion: [],
      dataUser: JSON.parse(localStorage.getItem('userData')),
      search: {
        limit: 20,
        page: 1
      },
      pagination: {
        total: 0
      },
      optionRule: [
        {
          text: 'Chưa xử lý',
          id: 0
        },
        {
          text: 'Đã xử lý',
          id: 1
        }
      ],

      dataConfigService: [],
      dataConfigMcc: []
    }
  },
  created () {
    this.fetchData()
    this.getRegions()
    this.configSystem()
    this.getListStaffBySuperior()
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

  methods: {
    async submitForm (event) {
      event.preventDefault()
      this.pagination.page = 1
      this.fetchData()
    },
    async openAdd () {
      this.$router.push('/merchant-add')
    },

    configSystem () {
      return CommonService.getConfigSystem()
        .then((data) => {
          if (data.success) {
            const dataPurposes = [
              {
                id: 0,
                text: 'Tất cả'
              }
            ]
            const dataService = [
              {
                id: 0,
                text: 'Tất cả'
              }
            ]
            const dataConfigMcc = [
              {
                id: 0,
                text: 'Tất cả'
              }
            ]
            data.data.purposes.map((e) => {
              dataPurposes.push({ id: e.code, text: e.name })
            })
            data.data.services.map((e) => {
              dataService.push({ id: e.code, text: e.name })
            })
            data.data.businessFields.map((e) => {
              dataConfigMcc.push({ id: e.code, text: e.name })
            })
            this.dataConfigService = dataService
            this.dataConfigMcc = dataConfigMcc
          }
        })
        .catch((error) => console.log(error))
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

    async clearSearch () {
      this.search = {
        limit: 20,
        page: 1
      }
      await this.fetchData()
    },

    async exportExcel () {
      try {
        this.loading = true
        this.search.userId = this.dataUser.userId
        if (this.search.regionId === '0') delete this.search.regionId
        if (this.search.cityCode === '0') delete this.search.cityCode
        if (this.search.mcc === '0') delete this.search.mcc
        if (this.search.serviceType === '0') {
          delete this.search.serviceType
        }
        if (this.search.saleId === '0') {
          delete this.search.saleId
        }

        if (this.search.regionId) {
          const data = this.dataConfigRegion.filter((e) => {
            return this.search.regionId === e.id
          })
          this.search.regionName = data[0].text
        }

        await MerchantService.exportMerchant(this.search)
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async fetchData () {
      try {
        this.loading = true
        this.search.userId = this.dataUser.userId
        if (this.search.regionId === '0') delete this.search.regionId
        if (this.search.cityCode === '0') delete this.search.cityCode
        if (this.search.mcc === '0') delete this.search.mcc
        if (this.search.serviceType === '0') {
          delete this.search.serviceType
        }
        if (this.search.saleId === '0') {
          delete this.search.saleId
        }

        const data = await MerchantService.getDataMerchant(this.search)
        if (data.success) {
          this.dataMerchant = data.data
          this.pagination.total = data.meta.pagination.total
            ? data.meta.pagination.total
            : 0
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
