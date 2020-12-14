<template>
  <div v-if="dataPermission">
    <div class="breadcrumb-area pos-relative">
      <h1>Lịch làm việc</h1>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-header m-b-10">
        <form class="box-search" @submit="submitForm">
          <div class="form-group">
            <label for>Tìm kiếm</label>
            <input
              type="text"
              v-model="search.title"
              class="form-control f12 hc-37"
              placeholder="Từ khóa"
            />
          </div>
          <div class="form-group">
            <label for>Thời gian</label>
            <DateRangePicker
              :ranges="false"
              @update="transfromDate()"
              v-model="dateRange"
              :locale-data="localeData"
            >
              <template v-slot:input="picker">
                <label style="min-width: 13.5em" class="text-center pt-1">
                  {{ picker.startDate | formatDatePicker }} -
                  {{ picker.endDate | formatDatePicker }}
                </label>
              </template>
              <!--Optional scope for the input displaying the dates -->
            </DateRangePicker>
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
            <Select2 v-model="search.provinceId" :options="dataProvince" />
          </div>
          <div class="form-group">
            <label for>Nhân viên</label>
            <Select2 v-model="search.saleId" :options="listUser" />
          </div>
          <div class="form-group">
            <label for>Mục đích</label>
            <Select2 v-model="search.cat" :options="dataConfigPurposes" />
          </div>
          <div class="form-group">
            <label for>Trạng thái</label>
            <Select2 v-model="search.outcome" :options="optionOutcome" />
          </div>
          <div class="d-inline-block m-t-23">
            <button
              @click="submitForm"
              v-if="
                dataPermission.includes('CNPS_WKCLDR_GET_LIST_TASK_BY_USERID')
              "
              class="btn btn-primary hc-37 mr-2 m-b-10 pt-2"
              type="button"
              data-toggle="tooltip"
              data-placement="top"
              title="Lọc"
            >
              <i class="bx bx-filter-alt"></i>
              <span class="ml-1"></span>Lọc
            </button>

            <button
              @click="clearSearch()"
              v-if="
                dataPermission.includes('CNPS_WKCLDR_GET_LIST_TASK_BY_USERID')
              "
              class="btn btn-outline-light hc-37 mr-2 m-b-10 pt-2"
              type="button"
              data-toggle="tooltip"
              data-placement="top"
              title="Bỏ lọc"
            >
              <i class="bx bx-filter-alt"></i>
              <span class="ml-1"></span>Bỏ lọc
            </button>
            <router-link
              v-if="dataPermission.includes('CNPS_WKCLDR_UPSERT_WKCLDR')"
              to="/calendar/add"
              class="btn btn-success hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Lọc"
              ><i class="bx bx-plus-circle"></i><span class="ml-1"></span>Thêm
              mới
            </router-link>
            <button
              v-if="dataPermission.includes('CNPS_WKCLDR_EXPORT')"
              @click="exportExcel()"
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
              v-if="
                dataPermission.includes('CNPS_WKCLDR_GET_LIST_TASK_BY_USERID')
              "
            >
              <thead class="thead-light">
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Thời gian thực hiện</th>
                  <th scope="col" class="col-5">Nhân viên</th>
                  <th scope="col">Công việc</th>
                  <th scope="col">Mục đích</th>
                  <th scope="col">Kết quả</th>

                  <th scope="col">Merchant</th>
                  <th scope="col">Địa điểm</th>

                  <th scope="col">Người tạo</th>
                  <th scope="col" class="text-right">Trạng thái</th>
                  <th scope="col" class="text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="loading">
                  <td colspan="15" align="center">
                    <i class="bx bx-loader-circle bx-spin bx-rotate-90 f30"></i>
                  </td>
                </tr>
                <tr
                  v-else
                  class="table-row"
                  v-for="(item, index) in dataCalendar"
                  :key="index"
                >
                  <td class="text-center">
                    {{
                      search.pagination.size * (search.pagination.page - 1) +
                      index +
                      1
                    }}
                  </td>
                  <td class="w-200">
                    Tạo: {{ item.createdDate | formatDate }} <br />
                    Thực hiện: {{ item.startTime | formatDay }} --
                    {{ item.startTime | fomatHour }} -
                    {{ item.endTime | fomatHour }} <br />
                    Hoàn thành: {{ item.timeFinish | formatDate }}
                  </td>
                  <td>
                    <strong>{{ item.saleInfo.name }}</strong>
                    <br />
                    <a href="#" class="color-1248EB">{{
                      item.saleInfo.userName
                    }}</a>
                  </td>
                  <td>
                    <span>{{ item.title }}</span>
                  </td>
                  <td>{{ item.cat | transfromCat(dataConfigPurposes) }}</td>
                  <td>
                    {{ item.statusCat | transfromStatusCat(purposesStatus) }}
                  </td>
                  <td>
                    <p>
                      <strong>{{ item.merchantInforRes.merchantName }}</strong>
                    </p>
                    <p>{{ item.merchantInforRes.customerName }}</p>
                    <p>{{ item.merchantInforRes.address }}</p>
                    <p>{{ item.merchantInforRes.city }}</p>
                  </td>
                  <td>{{ item.address }}</td>
                  <td>
                    <strong>{{ item.createdByInfo.name }}</strong>
                    <br />
                    <a href="#" class="color-1248EB">{{
                      item.createdByInfo.userName
                    }}</a>
                  </td>
                  <td class="text-right">
                    <span v-if="item.isDeleted" class="badge badge-danger"
                      >Hủy</span
                    >
                    <span
                      v-else-if="item.outcome > 0"
                      class="badge badge-primary"
                      >Đã xử lý</span
                    >
                    <span v-else class="badge badge-warning">Chưa xử lý</span>
                  </td>
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
                        <router-link
                          class="dropdown-item"
                          v-if="
                            dataPermission.includes(
                              'CNPS_WKCLDR_GET_DETAIL_TASK_BY_ID'
                            )
                          "
                          :to="`/calendar/detail?id=${item.id}`"
                          ><i class="bx bx-show-alt"></i> Chi tiết</router-link
                        >
                        <!-- <a class="dropdown-item" href="##" data-toggle="modal"><i class='bx bx-edit-alt'></i> Sửa</a> -->
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
    <div class="pagination-bottom" v-if="dataPermission.includes('CNPS_WKCLDR_GET_LIST_TASK_BY_USERID')">
      <b-pagination
        v-model="search.pagination.page"
        :total-rows="totalRows"
        :per-page="search.pagination.size"
        class="fl-right mr-2"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { CalendarService } from '@/services/calendar.service'
import Select2 from 'v-select2-component'
import DateRangePicker from 'vue2-daterange-picker'
import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import moment from 'moment'
import { CommonService } from '@/services/common.service'
import { mapGetters } from 'vuex'
import { StaffService } from '@/services/staff.service'

export default {
  components: {
    Select2,
    DateRangePicker
  },
  mixins: [prepareQueryParamsMixin],

  data () {
    return {
      loading: true,
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
      dateRange: {
        startDate: null,
        endDate: null
      },
      totalRows: null,
      search: {
        pagination: {
          page: 1,
          size: 20
        },
        userId: ''
        // outcome: -1
      },
      dataConfigRegion: [],
      listUser: [],
      dataCalendar: [],
      dataProvince: [],
      dataConfigPurposes: [],
      purposesStatus: [],
      dataUser: JSON.parse(localStorage.getItem('userData')),
      optionOutcome: [
        {
          text: 'Tất cả',
          id: -1
        },
        {
          text: 'Chưa xử lý',
          id: 0
        },
        {
          text: 'Đã xử lý',
          id: 1
        },
        {
          text: 'Đã hủy',
          id: 2
        }
      ]
    }
  },

  filters: {
    formatDate (date) {
      if (!date) return
      moment.locale('vi')
      return moment(date).format('DD/MM/YYYY HH:mm')
    },

    formatDay (date) {
      if (!date) return
      moment.locale('vi')
      return moment(date).format('DD/MM/YYYY')
    },

    fomatHour (date) {
      if (!date) return
      moment.locale('vi')
      return moment(date).format('HH:mm')
    },

    formatDatePicker (date) {
      if (!date) return
      return moment(date).format('DD/MM/YYYY')
    },

    transfromCat (data, dataConfigPurposes) {
      const dataReturn = dataConfigPurposes.filter((e) => e.id === data)
      if (dataReturn.length === 0) {
        return ''
      }
      return dataReturn[0].text
    },
    transfromStatusCat (data, purposesStatus) {
      const dataReturn = purposesStatus.filter((e) => e.code === data)
      if (dataReturn.length === 0) {
        return ''
      }
      return dataReturn[0].name
    }
  },

  created () {
    this.configSystem()
    this.fetchData()
    this.getListStaffBySuperior()
    this.getRegions()
  },

  computed: {
    ...mapGetters({
      dataPermission: 'role/dataPermission'
    }),
    useInUrlQueryPropList () {
      return this.prepareQueryParamsMixin({
        size: this.search.pagination.size,
        page: this.search.pagination.page
      })
    }
  },

  methods: {
    async submitForm (event) {
      event.preventDefault()
      this.search.pagination.page = 1
      this.fetchData()
    },

    async queryProvince (e) {
      try {
        const data = await StaffService.getProvinceRegion({ regionId: [e] })
        this.search.provinceId = '0'
        if (data.data.length > 0) {
          const dataProvince = [
            {
              id: 0,
              text: 'Tất cả'
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

    async exportExcel () {
      this.loading = true
      try {
        let data = null
        this.search.userId = this.dataUser.userId
        this.search.outcome = this.search.outcome ? this.search.outcome : -1
        if (this.search.cat === '0') delete this.search.cat
        if (this.search.saleId === '0') delete this.search.saleId
        if (this.search.regionId === '0') delete this.search.regionId
        if (this.search.provinceId === '0') delete this.search.provinceId
        delete this.search.pagination
        if (this.search.outcome === 2) {
          data = await CalendarService.exportExcel({
            ...this.search,
            ...{ isDeleted: true }
          })
        } else if (this.search.outcome === -1) {
          await CalendarService.exportExcel(this.search)
        } else {
          await CalendarService.exportExcel({
            ...this.search,
            ...{ isDeleted: false }
          })
        }
        if (data.success) {
          this.dataCalendar = data.data.content
          this.totalRows = data.data.totalWkcldrs
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async fetchData () {
      this.loading = true
      try {
        let data = null
        this.search.userId = this.dataUser.userId
        this.search.outcome = this.search.outcome
          ? parseFloat(this.search.outcome)
          : -1
        if (this.search.cat === '0') delete this.search.cat
        if (this.search.saleId === '0') delete this.search.saleId
        if (this.search.regionId === '0') delete this.search.regionId
        if (this.search.provinceId === '0') delete this.search.provinceId

        if (this.search.outcome === 2) {
          data = await CalendarService.getCalendarByUser({
            ...this.search,
            ...{ isDeleted: true }
          })
        } else if (this.search.outcome === -1) {
          data = await CalendarService.getCalendarByUser(this.search)
        } else {
          data = await CalendarService.getCalendarByUser({
            ...this.search,
            ...{ isDeleted: false }
          })
        }
        if (data.success) {
          this.dataCalendar = data.data.content
          this.totalRows = data.data.totalWkcldrs
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
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
            data.data.purposes.map((e) => {
              dataPurposes.push({
                id: e.code,
                text: e.name
              })
              this.purposesStatus = [
                ...this.purposesStatus,
                ...e.purposesStatus
              ]
            })
            this.dataConfigPurposes = dataPurposes
          }
        })
        .catch((error) => console.log(error))
    },

    transfromDate () {
      this.search.startTimeUTC = moment(this.dateRange.startDate)
        .startOf('day')
        .valueOf()
      this.search.endTimeUTC = moment(this.dateRange.endDate)
        .endOf('day')
        .valueOf()
    },

    async clearSearch () {
      this.search = {
        pagination: {
          page: 1,
          size: 20
        },
        userId: '',
        outcome: -1
      }
      this.dateRange = {
        startDate: null,
        endDate: null
      }
      await this.fetchData()
    }
  },
  watch: {
    'search.pagination.page': function () {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.fetchData()
    },
    'search.pagination.size': function () {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.fetchData()
    }
  }
}
</script>

<style>
body {
  font-family: "Helvetica Neue Light", Helvetica, sans-serif;
  padding: 1em 2em 2em;
}

input,
select {
  padding: 0.75em 0.5em;
  font-size: 100%;
  border: 1px solid #ccc;
  width: 100%;
}

select {
  height: 2.5em;
}

.example {
  background: #f2f2f2;
  border: 1px solid #ddd;
  padding: 0em 1em 1em;
  margin-bottom: 2em;
}

code,
pre {
  margin: 1em 0;
  padding: 1em;
  border: 1px solid #bbb;
  display: block;
  background: #ddd;
  border-radius: 3px;
}

.settings {
  margin: 2em 0;
  border-top: 1px solid #bbb;
  background: #eee;
}

h5 {
  font-size: 100%;
  padding: 0;
}

.form-group {
  margin-bottom: 1em;
}

.form-group label {
  display: block;
}
</style>
