<template>
  <div>
    <PageTitle :heading="msg" />
    <div class="card p-0  b-t-1-869fb229">
      <div v-if="loading" class="card-body p-10 b-t-1-869fb229 text-center">
        <i class='bx bx-loader-circle bx-spin bx-rotate-90 h1'></i>
      </div>
      <div v-else class="card-body p-10 b-t-1-869fb229">
        <span class="de-img"><img :src="staffAvatar" alt="img"></span>
        <div class="de-info">
          <h3 class="de-name">{{staffName}}</h3>
          <span class="s">Mã: {{staffCode}}</span>
        </div>
        <div class="clearfix"></div>
        <div class="form-row">
          <div class="col-md-6 my-2">
            <h1 class="f16 pb-1"><b>Checkin</b></h1>
          </div>
          <div class="col-md-6 my-2">
            <h1 class="f16 pb-1"><b>Chekout</b></h1>
          </div>
        </div>
        <div class="form-row" v-for="(item, index) in listData" :key="index">
          <div class="col-md-6 my-2">
            <div class="box-detail mb-4" v-if="item.checkIn">
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Thời gian</label>
                <div class="col-sm-9">
                  <p class="form-control-plaintext f14">{{item.checkIn.timeCheckin}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Ghi chú</label>
                <div class="col-sm-9">
                  <p type="text" class="form-control-plaintext f14">{{item.checkIn.note}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Địa điểm</label>
                <div class="col-sm-9">
                  <a href="#" @click="showMapModal(item.checkIn.latitude, item.checkIn.longtitude)" class="f14">{{item.checkIn.latitude | placeHolder}} / {{item.checkIn.longtitude | placeHolder}}</a>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Ảnh</label>
                <div class="col-sm-9">
                  <ul v-if="item.checkIn.imageUrls" class="list-img">
                    <li v-for="(image, imageIndex) in item.checkIn.imageUrls" :key="imageIndex">
                      <a data-toggle="modal">
                        <img @click="showImageModal(image)" :src="image" alt="">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 my-2">
            <div class="box-detail mb-4" v-if="item.checkOut">
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Thời gian</label>
                <div class="col-sm-9">
                  <p class="form-control-plaintext f14">{{item.checkOut.timeCheckout}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Ghi chú</label>
                <div class="col-sm-9">
                  <p type="text" class="form-control-plaintext f14">{{item.checkOut.note}}</p>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Địa điểm</label>
                <div class="col-sm-9">
                  <a href="#" @click="showMapModal(item.checkOut.latitude, item.checkOut.longtitude)" class="f14">{{item.checkOut.latitude | placeHolder}} / {{item.checkOut.longtitude | placeHolder}}</a>
                </div>
              </div>
              <div class="form-group row mb-0">
                <label class="col-sm-3 col-form-label f14">Ảnh</label>
                <div class="col-sm-9">
                  <ul v-if="item.checkOut.imageUrls" class="list-img">
                    <li v-for="(image, imageIndex) in item.checkOut.imageUrls" :key="imageIndex">
                      <a  data-toggle="modal">
                        <img @click="showImageModal(image)" :src="image" alt="">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal ref="modal-image" centered hide-footer hide-header>
      <div class="d-block text-center">
        <img :src="mainImage" alt="">
      </div>
    </b-modal>
    <b-modal ref="modal-map" centered hide-footer hide-header size="lg">
      <div>
        <GmapMap
          :center="{lat: latitude, lng: longtitude}"
          :zoom="12"
          map-type-id="terrain"
          style="width: 100%; height: 500px"
        >
          <gmap-marker
          :position="{lat: latitude, lng: longtitude}"
        ></gmap-marker>
        </GmapMap>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {
  AttentdentService
} from '@/services/attentdent.service'
import PageTitle from '@/layout/Components/PageTitle'
import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
import prepareFetchParamsMixin from '../../mixins/prepareFetchParamsMixin'
import moment from 'moment'
import userDefaultImage from '@/assets/img/user.svg'

export default {
  name: 'AttentdentDetail',
  mixins: [prepareQueryParamsMixin, prepareFetchParamsMixin],

  components: {
    PageTitle
  },
  created () {
    const userId = this.$route.query.userId
    const time = moment(this.$route.query.time, 'DD/MM/YYYY').valueOf()
    this.fetchData(userId, time)
  },
  data: () => {
    return {
      msg: 'Chi tiết chấm công',
      loading: true,
      mainImage: null,
      staffName: null,
      staffCode: null,
      staffAvatar: null,
      listData: [],
      longtitude: 10,
      latitude: 10
    }
  },
  filters: {
    placeHolder (data) {
      const result = data || 'null'
      return result
    }
  },
  methods: {
    async fetchData (userId, time) {
      try {
        this.loading = true
        const {
          data
        } = await AttentdentService.getDetail({ userId, time })
        const listCheckin = []
        const listCheckout = []
        this.staffAvatar = data[0] && data[0].avatar ? data[0].avatar : userDefaultImage
        this.staffCode = data[0] && data[0].companyCode ? data[0].companyCode : ''
        this.staffName = data[0] && data[0].name ? data[0].name : ''
        data.forEach(element => {
          if (element.type === 'CHECKIN') {
            listCheckin.push(element)
          } else {
            listCheckout.push(element)
          }
        })
        if (listCheckin.length > listCheckout.length) {
          listCheckin.forEach((item, index) => {
            if (listCheckout[index]) {
              this.listData.push({ checkIn: item, checkOut: listCheckout[index] })
            } else {
              this.listData.push({ checkIn: item, checkOut: null })
            }
          })
        } else {
          listCheckout.forEach((item, index) => {
            if (listCheckin[index]) {
              this.listData.push({ checkIn: listCheckin[index], checkOut: item })
            } else {
              this.listData.push({ checkIn: null, checkOut: item })
            }
          })
        }
      } catch (e) {
        console.log(e)
        this.error = e.message
      } finally {
        this.loading = false
      }
    },
    
    showImageModal (image) {
      this.mainImage = image
      this.$refs['modal-image'].show()
    },
    
    showMapModal (lat, long) {
      this.latitude = parseFloat(lat)
      this.longtitude = parseFloat(long)
      this.$refs['modal-map'].show()
    }
  },
  computed: {
  }

}

</script>
