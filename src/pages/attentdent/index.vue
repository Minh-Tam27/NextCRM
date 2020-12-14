<template>
  <div v-if="dataPermission">
    <PageTitle :heading="msg" />
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-header m-b-10">
        <form class="box-search" @submit="submitForm">
          <div class="form-group">
            <label for>Tìm kiếm</label>
            <input
              type="text"
              v-model="searchObject.keyWord"
              class="form-control f12 hc-37"
              placeholder="Từ khóa"
            />
          </div>
          <div class="form-group">
            <label for>Thời gian</label>
            <DateRangePicker
              :ranges="false"
              v-model="dateRange"
              :locale-data="localeData"
            >
              <template v-slot:input="picker">
                <label style="min-width: 13.5em" class="text-center pt-1">
                  {{ picker.startDate | formatDate }} -
                  {{ picker.endDate | formatDate }}
                </label>
              </template>
              <!--Optional scope for the input displaying the dates -->
            </DateRangePicker>
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
            <label for>Quản lý</label>
            <Select2 v-model="searchObject.superior" :options="optionManager" />
          </div>
          <div class="form-group">
            <label for>Nhân viên</label>
            <Select2 v-model="searchObject.saleId" :options="listUser" />
          </div>
          <div class="d-inline-block m-t-23">
            <button
              type="button"
              v-if="dataPermission.includes('CNPS_ATTN_ATTENDANCE_LIST')"
              @click="submitForm"
              class="btn btn-primary hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Lọc"
            >
              <i class="bx bx-filter-alt"></i>
              <span class="ml-1">&nbsp;</span>Lọc
            </button>

            <button
              type="button"
              v-if="dataPermission.includes('CNPS_ATTN_ATTENDANCE_LIST')"
              @click="clearSearch()"
              class="btn btn-outline-light hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Bỏ lọc"
            >
              <i class="bx bx-filter-alt"></i>
              <span class="ml-1">&nbsp;</span>Bỏ lọc
            </button>

            <button
              @click="exportExcel()"
              v-if="dataPermission.includes('CNPS_ATTN_ATTENDANCE_EXPORT')"
              type="button"
              class="btn btn-info hc-37 mr-2 m-b-10 pt-2 file-input"
              data-toggle="tooltip"
              data-placement="top"
              title="Xuất Excel"
            >
              <i class="bx bx-download"></i>
              <span class="ml-1"></span>Xuất Excel
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
              v-if="dataPermission.includes('CNPS_ATTN_ATTENDANCE_LIST')"
            >
              <thead class="thead-light">
                <tr>
                  <th scope="col" class="text-center">STT</th>
                  <th scope="col">Nhân viên</th>
                  <th scope="col">Thứ</th>
                  <th scope="col">Đăng nhập</th>
                  <th scope="col">Đăng xuất</th>
                  <th scope="col" style="width: 50px">Đến muộn</th>
                  <th scope="col" style="width: 50px">Về sớm</th>
                  <th scope="col">Vai trò</th>
                  <th scope="col">Quản lý</th>
                  <th scope="col">Tỉnh/Thành phố</th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="loading">
                  <td colspan="12" align="center">
                    <i class="bx bx-loader-circle bx-spin bx-rotate-90 f30"></i>
                  </td>
                </tr>
                <tr
                  v-else
                  class="table-row"
                  v-for="(item, index) in attentdents"
                  :key="index"
                >
                  <td class="text-center" style="width: 50px">
                    {{ pagination.size * (pagination.page - 1) + index + 1 }}
                  </td>
                  <td>
                    <b>{{ item.name }}</b>
                    <p v-if="item.userName">
                      <a href="#" class="text-0A63AB">{{ item.userName }}</a>
                    </p>
                  </td>
                  <td>
                    {{ item.dayOfWeek | formatDay }} <br />
                    {{ item.date }}
                  </td>
                  <td>
                    {{ item.timeCheckin ? item.timeCheckin : "--/--" }}
                  </td>
                  <td>
                    {{ item.timeCheckout ? item.timeCheckout : "--/--" }}
                  </td>
                  <td class="text-center">{{ item.lateMinute }}</td>
                  <td class="text-right">{{ item.earlyMinute }}</td>
                  <td>{{ item.typeSale | fomatSaleType }}</td>
                  <td>{{ item.superiorName }}</td>
                  <td>{{ item.provinceName }}</td>
                  <td class="text-center">
                    <b-dropdown class="text-center" variant="outline-light">
                      <router-link
                        :to="`/attentdent/detail?userId=${item.userId}&time=${item.date}`"
                        class="dropdown-item"
                      >
                        <i class="bx bx-reset"></i>
                        <span class="ml-1"></span>Chi tiết
                      </router-link>
                    </b-dropdown>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-bottom" v-if="dataPermission.includes('CNPS_ATTN_ATTENDANCE_LIST')">
      <b-pagination
        v-model="pagination.page"
        :total-rows="pagination.total"
        :per-page="pagination.size"
        class="fl-right mr-2"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { AttentdentService } from '@/services/attentdent.service'
import { StaffService } from '@/services/staff.service'

import PageTitle from '@/layout/Components/PageTitle'
// import Select2 from 'v-select2-component'
import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
import prepareFetchParamsMixin from '../../mixins/prepareFetchParamsMixin'
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import moment from 'moment'
import { daysOfWeek } from './constant'
import { mapGetters } from 'vuex'

export default {
  name: 'AttentdentList',
  mixins: [prepareQueryParamsMixin, prepareFetchParamsMixin],

  components: {
    PageTitle,
    // Select2,
    DateRangePicker
  },

  created () {
    this.fetchData()
    this.getRegions()
    this.fetchSuperiors()
    this.getListStaffBySuperior()
  },

  data: () => {
    return {
      msg: 'Quản lý điểm danh',
      localeData: {
        direction: 'ltr',
        format: 'dd/mm/yyyy',
        separator: ' - ',
        applyLabel: 'Áp dụng',
        cancelLabel: 'Hủy bỏ',
        weekLabel: 'W',
        daysOfWeek: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        monthNames: [
          'Tháng 1',
          'Tháng 2',
          'Tháng 3',
          'Tháng 4',
          'Tháng 5',
          'Tháng 6',
          'Tháng 7',
          'Tháng 8',
          'Tháng 9',
          'Tháng 10',
          'Tháng 11',
          'Tháng 12'
        ],
        firstDay: 0
      },
      listUser: [],
      optionManager: [],
      searchObject: {
        keyWord: '',
        superior: false,
        location: false,
        province: '',
        region: ''
      },
      dateRange: {
        startDate: new Date(),
        endDate: new Date()
      },
      searchObjectNew: {
        keyWord: '',
        superior: false,
        location: false,
        province: '',
        region: ''
      },
      attentdents: [],
      error: false,
      loading: true,
      // pagination: {
      //   size: 20,
      //   page: 1,
      //   totalPage: 0
      // },
      pagination: {
        size: 20,
        page: 1,
        total: 0
      },
      dataConfigRegion: [],
      dataProvince: [],
      dataUser: JSON.parse(localStorage.getItem('userData'))
    }
  },

  filters: {
    formatDate (date) {
      if (!date) return
      return moment(date).format('DD/MM/YYYY')
    },
    formatDay (day) {
      return daysOfWeek[day]
    },
    fomatSaleType (type) {
      switch (type) {
        case 'REGION_DIRECTOR':
          return 'Giám đốc vùng'
        case 'SALE_MANAGER':
          return 'Sale Manager'
        case 'SALE_LEADER':
          return 'Sale Leader'
        case 'AFTER_SALE_LEADER':
          return 'After Sale Leader'
        case 'TELESALE_LEADER':
          return 'Telesale Leader'
        case 'SALE':
          return 'Sale Man'
        case 'SALE_ADMIN':
          return 'Sale Admin'
        case 'AFTER_SALE':
          return 'After Sale'
        case 'TELESALE':
          return 'Telesale'
        case 'KEY_ACCOUNT':
          return 'Key Account'
        default:
          return 'Không xác định'
      }
    }
  },

  methods: {
    async getRegions () {
      const dataRes = await StaffService.getRegions()
      if (dataRes.data.length > 0) {
        const dataRegion = [
          {
            id: 0,
            text: 'Tất cả '
          }
        ]
        dataRes.data.map((e) => {
          dataRegion.push({ id: e.id, text: e.name })
        })
        this.dataConfigRegion = dataRegion
      }
    },

    async submitForm (event) {
      event.preventDefault()
      this.pagination.page = 1
      this.fetchData()
    },

    async exportExcel () {
      try {
        this.loading = true
        if (this.fetchParams.saleId === '0') delete this.fetchParams.saleId
        if (this.fetchParams.province === '0') delete this.fetchParams.province
        if (this.fetchParams.region === '0') delete this.fetchParams.region
        if (this.fetchParams.superior === '0') delete this.fetchParams.superior
        this.fetchParams.typeExport = 'DETAIL'
        delete this.fetchParams.size
        delete this.fetchParams.page
        await StaffService.export(this.fetchParams)
      } catch (e) {
        this.error = e.message
        console.log(e)
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
              text: 'Tất cả '
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

    async fetchData () {
      this.loading = true
      try {
        if (this.fetchParams.saleId === '0') delete this.fetchParams.saleId
        if (this.fetchParams.province === '0') delete this.fetchParams.province
        if (this.fetchParams.region === '0') delete this.fetchParams.region
        if (this.fetchParams.superior === '0') delete this.fetchParams.superior

        const { data } = await AttentdentService.getList(this.fetchParams)
        this.attentdents = data.content
        this.pagination.total = data.totalElements
      } catch (e) {
        this.error = e.message
      } finally {
        this.loading = false
      }
    },

    async queryProvince (e) {
      try {
        const data = await StaffService.getProvinceRegion({ regionId: [e] })
        this.searchObject.province = '0'
        if (data.data.length > 0) {
          const dataProvince = [
            {
              id: 0,
              text: 'Tất cả '
            }
          ]
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

    async fetchSuperiors () {
      try {
        const { data } = await StaffService.superiors()
        this.optionManager = [
          {
            id: 0,
            text: 'Tất cả'
          }
        ]
        data.forEach((element) => {
          this.optionManager.push({
            text: element.name,
            id: element.userName
          })
        })
      } catch (e) {
        // this.$store.commit('toast/NEW', { type: 'error', message: e.message, e })
        console.error(e)
      }
    },

    async clearSearch () {
      this.searchObject = {
        ...this.searchObjectNew
      }
      this.dateRange = {
        startDate: null,
        endDate: null
      }
      await this.fetchData()
    }
  },
  computed: {
    currentUserId () {
      return this.$store.state.user.currentUser.userId
    },

    isEmpty () {
      return this.news && !this.news.length
    },

    ...mapGetters({
      dataPermission: 'role/dataPermission'
    }),

    useInUrlQueryPropList () {
      return this.prepareQueryParamsMixin({
        size: this.pagination.size,
        page: this.pagination.page
      })
    },

    fetchParams () {
      const endDate = moment(this.dateRange.endDate)
        .endOf('day')
        .add(7, 'hours')
        .valueOf()
      const fromDate = moment(this.dateRange.startDate)
        .startOf('day')
        .add(7, 'hours')
        .valueOf()
      const params = this.prepareFetchParamsMixin({
        size: this.pagination.size,
        page: this.pagination.page,
        ...this.searchObject,
        endDate,
        fromDate
      })
      return {
        userId: this.currentUserId,
        typeExport: 'DETAIL',
        ...params
      }
    },

    totalRows () {
      return this.pagination.totalPage * this.pagination.size
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
