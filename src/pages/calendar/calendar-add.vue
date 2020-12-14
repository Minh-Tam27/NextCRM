<template>
  <div
    v-if="
      dataPermission && dataPermission.includes('CNPS_WKCLDR_UPSERT_WKCLDR')
    "
  >
    <div class="breadcrumb-area pos-relative">
      <h1>Thêm mới lịch làm việc</h1>
      <div class=" " style="float: right">
        <button class="btn btn-light" @click="resetForm">Hủy bỏ</button>
        <button class="btn btn-success btn-primary ml-2" @click="onSubmit">
          Thêm mới
        </button>
      </div>
    </div>
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-body px-20 row">
        <ValidationObserver ref="calendarAdd" class="d-block w-100">
          <form class="col-md-6" @submit.prevent="onSubmit">
            <ValidationProvider rules="required" vid="title" name="Tiêu đề">
              <div class="form-group row" slot-scope="{ errors }">
                <label for="" class="col-sm-3 col-form-label">Tiêu đề<span style="color: red"> * </span> </label>
                <div class="col-sm-7">
                  <b-form-input
                    type="text"
                    v-model="submitData.title"
                  ></b-form-input>
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <div class="form-group row">
              <label for="" class="col-sm-3 col-form-label"
                >Nhân viên thực hiện</label
              >
              <div class="col-sm-7">
                <Select2
                @change="getMerchant($event)"
                  v-model="submitData.staff"
                  :options="listStaff"
                  name="staff"
                />
              </div>
            </div>
            <ValidationProvider rules="requiredDate" name="Thời gian">
              <div class="form-group row" slot-scope="{ errors }">
                <label for="" class="col-sm-3 col-form-label">Thời gian<span style="color: red"> * </span> </label>
                <div class="col-sm-7">
                  <DateRangePicker
                    :ranges="false"
                    v-model="dateRange"
                    :locale-data="localeData"
                    class="w-100"
                    :timePicker="true"
                    :timePicker24Hour="true"
                  >
                    <template v-slot:input="picker">
                      <label style="min-width: 13.5em" class="text-left pt-1"
                        >{{ picker.startDate | formatDate }} -
                        {{ picker.endDate | formatDate }}</label
                      >
                    </template>
                  </DateRangePicker>
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required" vid="outcome" name="Mục đích">
              <div class="form-group row" slot-scope="{ errors }">
                <label for="" class="col-sm-3 col-form-label">Mục đích<span style="color: red"> * </span> </label>
                <div class="col-sm-7">
                  <Select2 v-model="submitData.cat" :options="listCat" />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required" vid="merchant" name="Merchant">
              <div class="form-group row" slot-scope="{ errors }">
                <label for="" class="col-sm-3 col-form-label">Merchant<span style="color: red"> * </span> </label>
                <div class="col-sm-7">
                  <Select2
                    v-model="submitData.merchant"
                    :options="listMerchant"
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
              <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Địa điểm</label>
                <div class="col-sm-7">
                  <b-form-input
                    type="text"
                    v-model="submitData.address"
                  ></b-form-input>
                </div>
              </div>

              <div class="form-group row" >
                <label for="" class="col-sm-3 col-form-label">Ghi chú</label>
                <div class="col-sm-7">
                  <b-form-input
                    type="text"
                    v-model="submitData.depcription"
                  ></b-form-input>
                </div>
              </div>
          </form>
        </ValidationObserver>
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
                    <h5 class="modal-title" id="exampleModalLabel">
                      Thông báo
                    </h5>
                    <button
                      type="button"
                      @click="closeModal"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-center">
                    <img src="@/assets/noti-success2.svg" alt="icon-successs" />
                    <h2 class="f18 py-3">Thêm mới thành công</h2>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="closeModal"
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
import Select2 from 'v-select2-component'
import DateRangePicker from 'vue2-daterange-picker'
import moment from 'moment'
import { CommonService } from '@/services/common.service'
import { CalendarService } from '@/services/calendar.service'
import { MerchantService } from '@/services/merchant.service'
import { StaffService } from '@/services/staff.service'
import { mapGetters } from 'vuex'

export default {
  components: {
    Select2,
    DateRangePicker
  },
  data () {
    return {
      submitData: {
        title: null,
        staff: null,
        depcription: null,
        merchant: null,
        cat: null,
        address: null
      },
      listStaff: [],
      listMerchant: [],
      listCat: [],
      showModal: false,
      localeData: {
        direction: 'ltr',
        format: 'dd/mm/yyyy',
        separator: ' - ',
        applyLabel: 'Áp dụng',
        cancelLabel: 'Hủy bỏ',
        weekLabel: 'W',
        daysOfWeek: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
          'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
        ],
        firstDay: 0
      },
      dataUser: JSON.parse(localStorage.getItem('userData')),
      dateRange: {
        startDate: null,
        endDate: null
      },
      submitted: false
    }
  },

  async created () {
    this.fetchData()
    this.getMerchant()
  },

  computed: {
    ...mapGetters({
      dataPermission: 'role/dataPermission'
    })
  },

  methods: {
    async fetchData () {
      try {
        const [configResponse, staffReponse] = await Promise.all([
          CommonService.getConfigSystem(),
          StaffService.getList(
            {
              userIdLogin: JSON.parse(localStorage.getItem('userData')).userId,
              size: 1000,
              page: 1
            }
          )
        ])
        this.listCat = configResponse.data.purposes.map(item => {
          return { id: item.code, text: item.name }
        })
        this.listStaff = staffReponse.data.content.map(item => {
          return { id: `${item.id}|${item.name}`, text: `${item.name} - ${item.userName}` }
        })
      } catch (error) {
        console.log(error)
      }
    },

    async getMerchant (data) {
      let dataCurrent = null
      if (data) {
        dataCurrent = data.split('|')
      }
      const saleID = dataCurrent ? dataCurrent[0] : this.dataUser.userId
      const dataRespone = await MerchantService.getDataMerchant({ saleId: saleID })
      this.listMerchant = dataRespone.data.map(item => {
        return { id: item.customerId, text: item.customerName }
      })
    },

    resetForm () {
      this.$refs.calendarAdd.reset()
      this.submitData = {
        title: null,
        staff: null,
        depcription: null,
        merchant: null,
        cat: null,
        address: null
      }
    },
    async onSubmit () {
      const isSuccess = await this.$refs.calendarAdd.validate()
      if (!isSuccess) {
        return
      }
      try {
        const data = await CalendarService.upsert({
          title: this.submitData.title,
          address: this.submitData.address,
          cat: this.submitData.cat,
          depcription: this.submitData.depcription,
          customerId: this.submitData.merchant,
          userId: this.submitData.staff ? this.submitData.staff.split('|')[0] : JSON.parse(localStorage.getItem('userData')).userId,
          saleName: this.submitData.staff ? this.submitData.staff.split('|')[1] : JSON.parse(localStorage.getItem('userData')).name,
          startTime: moment(this.dateRange.startDate).toISOString(),
          endTime: moment(this.dateRange.endDate).toISOString()
        })
        if (data.success) {
          this.showModal = true
        }
      } catch (error) {
        console.log(error)
      }
    },

    closeModal () {
      this.showModal = false
      this.$router.push('/calendar')
    }
  },

  filters: {
    formatDate (date) {
      if (!date) return
      return moment(date).format('HH:mm DD/MM/YYYY')
    }
  }
}

</script>
<style scoped>
.pos-relative {
  width: 100%;
}
</style>
