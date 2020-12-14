<template>
  <div
    class="contract-detail"
    v-if="dataPermission && dataPermission.includes('CNPS_SCON_INFO_BY_CODE')"
  >
    <div class="breadcrumb-area pos-relative w-100">
      <h1>Chi tiết hợp đồng</h1>

      <div style="float: right">
        <button
          v-if="dataContract.state === 'WAITING_APPROVED' && dataUser.typeSale === 'SALE_ADMIN' "
          @click="rejectContract()"
          type="button"
          class="btn btn-danger ml-2"
        >
          Từ chối
        </button>
        <button
          v-if="
            dataContract.state === 'WAITING_APPROVED' &&
            dataUser.typeSale === 'SALE_ADMIN'
          "
          @click="approvedContract()"
          type="button"
          class="btn btn-primary ml-2"
        >
          Duyệt
        </button>
        <router-link class="btn btn-success btn-primary ml-2" :to="`/contract`"
          >Quay lại</router-link
        >
      </div>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-body px-20 row">
        <form class="col-md-6 mb-3">
          <h1 class="form-inner-heading">Thông tin MC</h1>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label">Tên Merchant: </label>
            <div class="col-sm-8 pt-1">
              <p>
                {{
                  dataContract.customerInfo.customerName
                    ? dataContract.customerInfo.customerName
                    : ""
                }}
              </p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label">Email:</label>
            <div class="col-sm-8 pt-1">
              <p>
                {{
                  dataContract.customerInfo.email
                    ? dataContract.customerInfo.email
                    : ""
                }}
              </p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label">Loại Merchant:</label>
            <div class="col-sm-8 pt-1">
              <p>
                {{ dataContract.customerInfo.customerType | mapTypeMerchant }}
              </p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label">Địa chỉ:</label>
            <div class="col-sm-8 pt-1">
              <p>
                {{
                  dataContract.customerInfo.address
                    ? dataContract.customerInfo.address
                    : ""
                }}
                ,
                {{
                  dataContract.customerInfo.district
                    ? dataContract.customerInfo.district
                    : ""
                }}
                ,
                {{
                  dataContract.customerInfo.city
                    ? dataContract.customerInfo.city
                    : ""
                }}
              </p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label">Dịch vụ:</label>
            <div class="col-sm-8 pt-1">
              <p>{{ dataContract.service }}</p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label"
              >Vùng kinh doanh</label
            >
            <div class="col-sm-8 pt-1">
              <input
                type="text"
                readonly
                class="form-control-plaintext f12"
                placeholder=""
                :value="
                  dataContract.customerInfo.regionId
                    | transfromRegion(dataConfigRegion)
                "
              />
            </div>
          </div>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label"
              >Tỉnh/ thành phố</label
            >
            <div class="col-sm-8 pt-1">
              <p>
                {{
                  dataContract.customerInfo
                    ? dataContract.customerInfo.city
                    : ""
                }}
              </p>
            </div>
          </div>
        </form>
        <form class="col-md-6 mb-3">
          <h1 class="form-inner-heading">Thông tin hợp đồng</h1>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label">Số hợp đồng:</label>
            <div class="col-sm-8 pt-1">
              <p>{{ dataContract.code }}</p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label">Loại hợp đồng:</label>
            <div class="col-sm-8 pt-1">
              <p>{{ dataContract.contractType | mapContractype }}</p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label"
              >Ngày ký - Ngày hết hạn:</label
            >
            <div class="col-sm-8 pt-1">
              <p>
                {{ dataContract.effectiveFrom | formatDate }} -
                {{ dataContract.effectiveTo | formatDate }}
              </p>
            </div>
          </div>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label">Hình thức:</label>
            <div class="col-sm-8 pt-1">
              {{ dataContract.depositType | mapdepositType }}
            </div>
          </div>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label">Sale chăm sóc:</label>
            <div class="col-sm-8 pt-1">
              {{ dataContract.saleName }}
            </div>
          </div>
          <div class="form-group row mb-0">
            <label for="" class="col-sm-4 col-form-label">Trạng thái:</label>
            <div class="col-sm-8 pt-1">
              <p>{{ dataContract.state | fomatStatus(listStatus) }}</p>
            </div>
          </div>
          <div
            class="form-group row mb-0"
            v-if="dataContract.state === 'REJECT'"
          >
            <label for="" class="col-sm-4 col-form-label">Lý do từ chối</label>
            <div class="col-sm-8 pt-1">
              <p>{{ dataContract.reasonRejected }}</p>
            </div>
          </div>
        </form>

        <div class="table-responsive">
          <table class="table table-hover table-bordered" id="tableScroll">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="text-center">Tên thiết bị</th>
                <th scope="col" class="text-center" width="120">
                  Số lượng thiết bị
                </th>
                <th scope="col" class="text-center">Giá bán</th>
                <th scope="col" class="text-center">Thành tiền</th>
              </tr>
            </thead>
            <tbody
              v-for="(itemm, index) in dataContract.deviceInfos"
              :key="index"
            >
              <tr class="table-row">
                <th class="text-center">{{ itemm.name }}</th>
                <td align="right">{{ itemm.quantity }}</td>
                <td align="right">{{ itemm.price | fomatCurrency }}</td>
                <td align="right">{{ itemm.totalPrice | fomatCurrency }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card-body px-20 mt-5 row">
        <form class="col-md-12 img-list-wrapper">
          <h1 class="form-inner-heading">Ảnh hợp đồng</h1>
          <div class="form-group row img-list">
            <ul>
              <li v-for="(itemImg, index) in dataContract.images" :key="index">
                <a href="#popup-slider" data-toggle="modal">
                  <img
                    :src="itemImg"
                    @click="showImg(dataContract.images, index)"
                    class="width-20"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
    <div id="app">
      <div v-if="showModalImgSlider">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      @click="showModalImgSlider = false"
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div
                    class="modal-body"
                    style="max-height: 600px; overflow-x: auto"
                  >
                    <div
                      id="carouselExampleIndicators"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <ol class="carousel-indicators">
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                          class="active"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="1"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="2"
                        ></li>
                      </ol>
                      <div class="carousel-inner">
                        <div>
                          <img
                            class="d-block slider-img"
                            :src="dataImg[indexImg]"
                            alt="First slide"
                          />
                        </div>
                      </div>
                      <a
                        class="carousel-control-prev"
                        @click="backImg(indexImg)"
                        href="#"
                        role="button"
                        data-slide="prev"
                      >
                        <i
                          style="color: white !important"
                          class="bx bxs-chevron-left f40 cl-808080"
                        ></i>
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#"
                        @click="nextImg(indexImg)"
                        role="button"
                        data-slide="next"
                      >
                        <i
                          style="color: white !important"
                          class="bx bxs-chevron-right f40 cl-808080"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div id="app">
      <div v-if="showModalErr">
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
                      class="close"
                      data-dismiss="modal"
                      @click="showModalErr = false"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-center">
                    <img
                      src="@/assets/img/noti-unsuccess2.svg"
                      alt="icon-successs"
                    />
                    <h2 class="f18 py-3">{{ messErr }}</h2>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="showModalErr = false"
                      data-dismiss="modal"
                    >
                      Bỏ qua
                    </button>
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
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Thông báo
                    </h5>
                    <button
                      type="button"
                      @click="closeAdd()"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-center">
                    <img src="@/assets/noti-success2.svg" alt="icon-successs" />
                    <h2 class="f18 py-3">{{ messSuccess }}</h2>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="closeAdd()"
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

    <div id="app">
      <div v-if="showModalDescriptionReject">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Lý do từ chối
                    </h5>
                    <button
                      type="button"
                      class="close"
                      @click="showModalDescriptionReject = false"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-center">
                    <form>
                      <div class="form-group pos-relative">
                        <textarea
                          v-model="dataContract.reasonRejected"
                          class="form-control f12"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-light" data-dismiss="modal">Xác nhận</button> -->
                    <button
                      :disabled="
                        !dataContract.reasonRejected ||
                        !dataContract.reasonRejected.trim()
                      "
                      @click="submitRejectContract()"
                      class="btn btn-light"
                    >
                      Xác nhận
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
import { ContractSevice } from '@/services/contract.service'
import moment from 'moment'
import { mapGetters } from 'vuex'
import { StaffService } from '@/services/staff.service'

export default {
  data () {
    return {
      showModalImgSlider: false,
      dataImg: [],
      dataContract: {
        customerInfo: {
          avatarUrl: [],
          listServiceType: []
        },
        reasonRejected: ''
      },
      showModalSuccess: false,
      showModalErr: false,
      messErr: '',
      dataConfigRegion: [],
      dataUser: JSON.parse(localStorage.getItem('userData')),
      indexImg: 0,
      messSuccess: '',
      showModalDescriptionReject: false,
      getRegions: [],
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
      ]
    }
  },

  computed: {
    ...mapGetters({
      dataPermission: 'role/dataPermission'
    })
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
    },

    mapTypeMerchant (data) {
      if (!data) return
      if (data === 'INDIVIDUAL') {
        return 'Cá nhân'
      }
      if (data === 'COMPANY') {
        return 'Doanh nghiệp'
      }
    },

    fomatStatus (status, listStatus) {
      if (!status) return
      if (!listStatus) return
      const dataFilter = listStatus.filter((e) => e.id === status)
      return dataFilter[0].text
    }
  },

  async created () {
    this.getRegion()
    const id = this.$route.query.id
    const data = await ContractSevice.getByCode({ code: id })
    if (data.data.id) {
      this.dataContract = data.data
    }
  },

  methods: {
    showImg (data, index) {
      this.showModalImgSlider = true
      this.dataImg = data
      this.indexImg = index
    },

    async getRegion () {
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

    async rejectContract () {
      this.showModalDescriptionReject = true
    },

    async submitRejectContract () {
      this.showModalDescriptionReject = false
      const data = await ContractSevice.rejectContract({
        reasonRejected: this.dataContract.reasonRejected,
        code: this.dataContract.code
      })
      if (data.code !== 1000) {
        this.messErr = data.message
        this.showModalErr = true
        return
      }

      if (data.code === 1000) {
        this.messSuccess = 'Từ chối duyệt HĐ thành công'
        this.showModalSuccess = true
      }
    },

    async closeAdd () {
      this.$router.push('/contract')
    },

    async approvedContract () {
      const body = {
        code: this.dataContract.code,
        customerId: this.dataContract.customerInfo.customerId,
        saleId: this.dataContract.saleId
      }
      const data = await ContractSevice.approvedContract(body)
      if (data.code !== 1000) {
        this.messErr = data.message
        this.showModalErr = true
        return
      }

      if (data.code === 1000) {
        this.messSuccess = 'Duyệt HĐ thành công'
        this.showModalSuccess = true
      }
    },

    nextImg (index) {
      if (index + 1 === this.dataImg.length) {
        this.indexImg = 0
        return
      }
      this.indexImg++
    },

    backImg (index) {
      if (index === 0) return
      this.indexImg--
    }
  }
}
</script>

<style scoped>
</style>
