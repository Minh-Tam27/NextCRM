<template>
  <div v-if="dataPermission && dataPermission.includes('CNPS_WKCLDR_GET_DETAIL_TASK_BY_ID')">
    <div class="breadcrumb-area  pos-relative">
      <h1>Chi tiết lịch làm việc</h1>
    </div>
    <div v-if="loading" class="card p-0 b-t-1-869fb229 text-center">
        <i class='bx bx-loader-circle bx-spin bx-rotate-90 h1'></i>
      </div>
    <div v-else class="card p-0 b-t-1-869fb229">
      <div class="card-body p-10 b-t-1-869fb229">
        <span v-if="dataDetail.saleInfo.avatar" class="de-img"><img :src="dataDetail.saleInfo.avatar" alt="img"></span>
        <span v-else class="de-img"><img :src="userDefaultImage" alt="img"></span>
        <div class="de-info">
          <h3 class="de-name">{{dataDetail.saleInfo.name}}</h3>
          <span class="s">Mã: {{dataDetail.saleInfo.companyCode}}</span>
        </div>
        <div class="clearfix"></div>
        <div class="form-row">
          <div class="col-md-6 my-2">
            <!-- Tab panes -->
            <div class="mb-4">
              <h1 class="f16 pb-1"><b>Thông tin công việc</b></h1>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">TG tạo</label>
                <div class="col-sm-9">
                  <p class="form-control-plaintext f14">{{dataDetail.createdDate | formatDate}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">TG thực hiện</label>
                <div class="col-sm-9">
                  <p class="form-control-plaintext f14">{{dataDetail.startTime | formatDate}} - {{dataDetail.endTime | formatDate}}</p>

                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">TG hoàn thành</label>
                <div class="col-sm-9">
                  <p  class="form-control-plaintext f14">{{dataDetail.timeFinish | formatDate}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Công việc</label>
                <div class="col-sm-9">
                  <p  class="form-control-plaintext f14">{{dataDetail.title}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Địa điểm</label>
                <div class="col-sm-9">
                  <p  class="form-control-plaintext f14">{{dataDetail.address}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Mục đích</label>
                <div class="col-sm-9">
                  <p  class="form-control-plaintext f14">{{dataDetail.cat | transfromCat(dataConfigPurposes)}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Kết quả</label>
                <div class="col-sm-9">
                  <p  class="form-control-plaintext f14">{{dataDetail.statusCat | transfromStatusCat(purposesStatus)}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Người tạo</label>
                <div class="col-sm-9">
                  <p  class="form-control-plaintext f14">{{dataDetail.createdByInfo.name}} - {{dataDetail.createdByInfo.userName}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Trạng thái</label>
                <div class="col-sm-9 p-t-10">
                  <span v-if="dataDetail.isDeleted" class="badge badge-danger">Hủy</span>
                  <span v-else-if="dataDetail.outcome > 0" class="badge badge-primary">Đã xử lý</span>
                  <span v-else class="badge badge-warning">Chưa xử lý</span>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Ghi chú</label>
                <div class="col-sm-9">
                  <p  class="form-control-plaintext f14">{{dataDetail.depcription}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Ảnh</label>
                <div class="col-sm-9">
                  <ul>
                    <li v-for="(image, index) in dataDetail.urlImage" :key="index"><img :src="image" alt=""></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 my-2">
            <!-- Tab panes -->
            <div class="mb-4">
              <h1 class="f16 pb-1"><b>Thông tin merchant</b></h1>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Logo</label>
                <div class="col-sm-9">
                  <div v-if="dataDetail.merchantInforRes">
                  <span v-for="(image, index) in dataDetail.merchantInforRes.avatarUrl" :key="index"><img :src="image" :alt="`merchant-logo-${index}`"></span>
                  </div>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Merchant</label>
                <div class="col-sm-9">
                  <p  class="form-control-plaintext f14" v-if="dataDetail.merchantInforRes">{{dataDetail.merchantInforRes.customerName}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Số điện thoại</label>
                <div class="col-sm-9">
                  <p  class="form-control-plaintext f14" v-if="dataDetail.merchantInforRes">{{dataDetail.merchantInforRes.mobile}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Địa chỉ</label>
                <div class="col-sm-9">
                  <p  class="form-control-plaintext f14" v-if="dataDetail.merchantInforRes">{{dataDetail.merchantInforRes.address}}</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import userDefaultImage from '@/assets/img/user.svg'
import moment from 'moment'
import {
  CommonService
} from '@/services/common.service'
import {
  CalendarService
} from '@/services/calendar.service'
import { mapGetters } from 'vuex'
export default {
  components: {},
  data () {
    return {
      loading: true,
      userDefaultImage: userDefaultImage,
      dataDetail: null,
      dataConfigPurposes: [],
      purposesStatus: []
    }
  },

  async created () {
    const id = this.$route.query.id
    this.fetchData(id)
  },

  methods: {
    async fetchData (id) {
      try {
        this.loading = true
        const { data } = await CalendarService.getById({ id })
        this.dataDetail = data
        const config = await CommonService.getConfigSystem()
        if (config.success) {
          const dataPurposes = []
          config.data.purposes.map((e) => {
            dataPurposes.push({
              id: e.code,
              text: e.name
            })
            this.purposesStatus = [...this.purposesStatus, ...e.purposesStatus]
          })
          this.dataConfigPurposes = dataPurposes
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  },

  filters: {
    formatDate (date) {
      if (!date) return '--:--'
      return moment(date).format('HH:mm DD/MM/YYYY')
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

  computed: {
    ...mapGetters({
      dataPermission: 'role/dataPermission'
    })
  }
}

</script>
<style scoped>
  .pos-relative {
    width: 100%;
  }

</style>
