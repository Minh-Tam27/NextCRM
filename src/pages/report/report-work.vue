<template>
  <div class="repor" v-if="dataPermission">
    <div class="breadcrumb-area pos-relative">
      <h1>Báo cáo công việc</h1>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-header m-b-10">
        <form class="box-search">
          <!-- <div class="form-group">
            <label for>Loại báo cáo</label>
            <Select2 v-model="search.typeReport" :options="typeReport" />
          </div> -->
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
          <div class="d-inline-block m-t-23">
            <button
              :disabled="disabledSumbit"
              @click="submit()"
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
        <div v-if="loading">
          <div colspan="12" class="text-center">
            <i class="bx bx-loader-circle bx-spin bx-rotate-90 f30"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
// import { AttentdentService } from '@/services/attentdent.service'
import { StaffService } from '@/services/staff.service'
import { CalendarService } from '@/services/calendar.service'
import moment from 'moment'

export default {
  components: {
    DateRangePicker
  },

  filters: {
    formatDate (date) {
      if (!date) return
      return moment(date).format('DD/MM/YYYY')
    }
  },

  data () {
    return {
      dataRole: [],
      search: {},
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
      ],
      typeReport: [
        {
          id: 'Tổng hợp',
          text: 'Tổng hợp'
        },
        {
          id: 'Chi tiết',
          text: 'Chi tiết'
        }
      ],
      dataUser: JSON.parse(localStorage.getItem('userData')),
      dateRange: {
        startDate: null,
        endDate: null
      },
      attentdents: [],
      dataConfigRegion: [],
      dataProvince: [],
      listUser: [],
      disabledSumbit: false,
      loading: false
    }
  },

  created () {
    this.getRegions()
    this.getListStaffBySuperior()
  },

  computed: {
    ...mapGetters({
      dataPermission: 'role/dataPermission'
    })
  },

  methods: {
    async getRegions () {
      const dataRes = await StaffService.getRegions()
      if (dataRes.data.length > 0) {
        const dataRegion = []
        dataRes.data.map((e) => {
          dataRegion.push({ id: e.id, text: e.name })
        })
        this.dataConfigRegion = dataRegion
      }
    },

    async getListStaffBySuperior () {
      try {
        const data = await StaffService.getStaffByIdSuperior({
          userId: this.dataUser.userId
        })
        if (data.data.length > 0) {
          const dataUser = []
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
        this.search.provinceId = null
        const data = await StaffService.getProvinceRegion({ regionId: [e] })
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

    async submit () {
      try {
        this.loading = true
        this.disabledSumbit = true
        this.search.userId = this.dataUser.userId
        this.search.outcome = -1
        this.search.endTimeUTC = moment(this.dateRange.endDate)
          .endOf('day')
          .valueOf()
        this.search.startTimeUTC = moment(this.dateRange.startDate)
          .startOf('day')
          .valueOf()
        if (this.search.outcome) {
          this.search.outcome = parseFloat(this.search.outcome)
        }
        const res = await CalendarService.export(this.search)
        if (res.success) {
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
        this.disabledSumbit = false
      }
    }
  }
}
</script>

<style scoped>
</style>
