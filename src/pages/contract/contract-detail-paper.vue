<template>
  <div class="detailContract">
    <div class="breadcrumb-area pos-relative w-100">
      <h1>Chi tiết hợp đồng</h1>
      <div style="float: right">
        <!-- v-if="dataContract.state === 'WAITING_APPROVED' && dataUser.typeSale === 'SALE_ADMIN' " -->

        <button
          v-if="
            dataContract.state === 'WAITING_APPROVED' &&
            dataUser.typeSale === 'SALE_ADMIN'
          "
          @click="rejectContract()"
          type="button"
          class="btn btn-danger ml-2"
        >
          Từ chối
        </button>
        <!-- v-if="
            dataContract.state === 'WAITING_APPROVED' &&
            dataUser.typeSale === 'SALE_ADMIN'
          " -->
        <button
          v-if="
            dataContract.state === 'WAITING_APPROVED' &&
            dataUser.typeSale === 'SALE_ADMIN'
          "
          @click="approvedContract()"
          type="button"
          class="btn btn-success ml-2"
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
      <div class="card-body px-20 form-row">
        <div class="col-sm-6 mb-3">
          <div class="form-detail">
            <h1>
              Thông tin MC <a href="" class="float-right f12">Chi tiết</a>
            </h1>
            <div class="form-group form-row">
              <label for="" class="col-sm-4 col-form-label"
                >Tên Merchant <span class="float-right">:</span></label
              >
              <div class="col-sm-8">
                <p class="form-control-plaintext f12">
                  {{
                    dataContract.customerInfo.customerName
                      ? dataContract.customerInfo.customerName
                      : ""
                  }}
                </p>
              </div>
            </div>
            <div class="form-group form-row">
              <label for="" class="col-sm-4 col-form-label"
                >Email<span class="float-right">:</span></label
              >
              <div class="col-sm-8">
                <p class="form-control-plaintext f12">
                  {{
                    dataContract.customerInfo.email
                      ? dataContract.customerInfo.email
                      : ""
                  }}
                </p>
              </div>
            </div>
            <div class="form-group form-row">
              <label for="" class="col-sm-4 col-form-label"
                >Số điện thoại<span class="float-right">:</span></label
              >
              <div class="col-sm-8">
                <p class="form-control-plaintext f12">
                  {{
                    dataContract.customerInfo
                      ? dataContract.customerInfo.mobile
                      : ""
                  }}
                </p>
              </div>
            </div>
            <div class="form-group form-row">
              <label for="" class="col-sm-4 col-form-label"
                >Địa chỉ<span class="float-right">:</span></label
              >
              <div class="col-sm-8">
                <p class="form-control-plaintext f12">
                  {{
                    dataContract.customerInfo
                      ? dataContract.customerInfo.address
                      : ""
                  }}
                  ,
                  {{
                    dataContract.customerInfo
                      ? dataContract.customerInfo.district
                      : ""
                  }}
                  ,
                  {{
                    dataContract.customerInfo
                      ? dataContract.customerInfo.city
                      : ""
                  }}
                </p>
              </div>
            </div>
          </div>
          <div class="form-detail">
            <h1>
              Thông tin hợp đồng
              <a
                href=""
                class="float-right f12"
                v-if="
                  dataContract.state === 'SIGNED_WAITING_APPROVED' ||
                  dataContract.state === 'REJECTED_SA'
                "
                >Sửa</a
              >
            </h1>
            <div class="form-group form-row">
              <label for="" class="col-sm-4 col-form-label"
                >Số hợp đồng <span class="float-right">:</span></label
              >
              <div class="col-sm-8">
                <p class="form-control-plaintext f12">
                  {{ dataContract.code }}
                </p>
              </div>
            </div>
            <div class="form-group form-row">
              <label for="" class="col-sm-4 col-form-label"
                >Loại<span class="float-right">:</span></label
              >
              <div class="col-sm-8">
                <p class="form-control-plaintext f12">
                  {{
                    dataContract.customerInfo
                      ? dataContract.customerInfo.customerType
                      : "" | mapTypeMerchant
                  }}
                </p>
              </div>
            </div>
            <div class="form-group form-row">
              <label for="" class="col-sm-4 col-form-label"
                >Dịch vụ<span class="float-right">:</span></label
              >
              <div class="col-sm-8">
                <p class="form-control-plaintext f12">
                  {{ dataContract.service }}
                </p>
              </div>
            </div>
            <div class="form-group form-row">
              <label for="" class="col-sm-4 col-form-label"
                >Ngày ký<span class="float-right">:</span></label
              >
              <div class="col-sm-8">
                <p class="form-control-plaintext f12">
                  {{ dataContract.effectiveFrom | formatDate }}
                </p>
              </div>
            </div>
            <div class="form-group form-row">
              <label for="" class="col-sm-4 col-form-label"
                >Hình thức<span class="float-right">:</span></label
              >
              <div class="col-sm-8">
                <p class="form-control-plaintext f12">
                  {{ dataContract.depositType | mapdepositType }}
                </p>
              </div>
            </div>
            <div class="form-group form-row">
              <label for="" class="col-sm-4 col-form-label"
                >Trạng thái<span class="float-right">:</span></label
              >
              <div class="col-sm-8">
                <p
                  class="f12 badge"
                  v-bind:class="[dataContract.state ? dataContract.state : '']"
                >
                  {{ dataContract.state | mapTextStatus(listStatusContract) }}
                </p>
              </div>
            </div>
            <div class="form-group form-row">
              <label for="" class="col-sm-4 col-form-label"
                >Lý do<span class="float-right">:</span></label
              >
              <div class="col-sm-8">
                <p class="form-control-plaintext f12">
                  {{
                    dataContract.reasonRejected
                      ? dataContract.reasonRejected[0]
                      : ""
                  }}
                </p>
              </div>
            </div>
          </div>

          <div class="form-detail">
            <h1>
              Phụ lục thiết bị<a
                v-if="
                  dataContract.state === 'SIGNED_WAITING_APPROVED' ||
                  dataContract.state === 'APPROVED'
                "
                href="#"
                @click="showAddPhuLuc('0')"
                class="float-right f12"
                >Thêm mới phục lục</a
              >
            </h1>
            <div class="table-responsive">
              <table class="table table-hover table-bordered" id="tableScroll">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="text-left">Số phụ lục</th>
                    <th scope="col" class="text-right">Ngày ký</th>
                    <th scope="col" class="text-left">Tên thiết bị</th>
                    <th scope="col" class="text-right">Số lượng thiết bị</th>
                    <th scope="col" class="text-right">Giá bán</th>
                    <th scope="col" class="text-right">Thành tiền</th>
                    <th scope="col" class="text-right">Trạng thái</th>
                    <th scope="col" class="text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody v-for="(itemm, index) in arrayApxReader" :key="index">
                  <tr class="table-row">
                    <td class="text-left">
                      {{ itemm.code ? itemm.code : "" }}
                    </td>
                    <td class="text-right">
                      {{
                        itemm.effectiveFrom
                          ? itemm.effectiveFrom
                          : "" | formatDate
                      }}
                    </td>
                    <td class="text-left">
                      {{ itemm.name ? itemm.name : "" }}
                    </td>
                    <td align="right">
                      {{ itemm.quantity ? itemm.quantity : "" }}
                    </td>
                    <td align="right">
                      {{ itemm.price ? itemm.price : "" | fomatCurrency }}
                    </td>
                    <td align="right">
                      {{
                        itemm.totalPrice ? itemm.totalPrice : "" | fomatCurrency
                      }}
                    </td>
                    <td align="right">
                      <span
                        class="badge"
                        v-bind:class="[itemm.state ? itemm.state : '']"
                      >
                        {{
                          itemm.state
                            ? itemm.state
                            : "" | mapTextStatus(listStatusContract)
                        }}</span
                      >
                    </td>
                    <td align="right" style="width: 5.3em">
                      <a
                        href="#"
                        v-if="
                          itemm.state === 'SIGNED_MISS_IMAGE' ||
                          itemm.state === 'REJECTED_SA'
                        "
                        @click="showEditPhuLuc(itemm, true)"
                        class="font-size-20"
                        ><i
                          class="bx bxs-edit-alt"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Sửa"
                        ></i
                      ></a>

                      <a
                        v-if="itemm.state === 'SIGNED_WAITING_APPROVED'"
                        href="#"
                        class="font-size-20 text-success"
                        ><i
                          class="bx bx-check-circle"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Duyệt"
                        ></i
                      ></a>
                      <a
                        v-if="itemm.state === 'SIGNED_WAITING_APPROVED'"
                        href="#"
                        data-toggle="modal"
                        class="font-size-20 text-danger"
                        ><i
                          class="bx bx-x-circle"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Từ chối"
                        ></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="form-detail">
            <h1>
              Phụ lục khác<a
                href="#"
                v-if="
                  dataContract.state === 'SIGNED_WAITING_APPROVED' ||
                  dataContract.state === 'APPROVED'
                "
                @click="showAddPhuLuc('1')"
                class="float-right f12"
                >Thêm mới phụ lục</a
              >
            </h1>
            <div class="table-responsive">
              <table class="table table-hover table-bordered" id="tableScroll">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="text-left">
                      Số phụ lục/Số hợp đồng
                    </th>
                    <th scope="col" class="text-left">Loại phụ lục</th>
                    <th scope="col" class="text-left">Trạng thái</th>
                    <th scope="col" class="text-left">Ngày ký</th>
                    <th scope="col" class="text-left">Thao tác</th>
                  </tr>
                </thead>
                <tbody
                  v-for="(itemlstAppendix, index) in arrayApxOther"
                  :key="index"
                >
                  <tr class="table-row">
                    <td align="left">{{ itemlstAppendix.code }}</td>
                    <td align="left">
                      {{
                        itemlstAppendix.contractType
                          | mapContractype(dataConfigTypeContract)
                      }}
                    </td>
                    <td align="right">
                      <span
                        class="badge"
                        v-bind:class="[
                          itemlstAppendix.state ? itemlstAppendix.state : '',
                        ]"
                      >
                        {{
                          itemlstAppendix.state
                            ? itemlstAppendix.state
                            : "" | mapTextStatus(listStatusContract)
                        }}</span
                      >
                    </td>
                    <td align="right">
                      {{ itemlstAppendix.effectiveFrom | formatDate }}
                    </td>

                    <td align="right">
                      <a
                        v-if="
                          itemlstAppendix.state === 'SIGNED_MISS_IMAGE' ||
                          itemlstAppendix.state === 'REJECTED_SA'
                        "
                        href="#"
                        @click="showEditPhuLuc(itemlstAppendix)"
                        >Sửa</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="form-detail">
            <h1>Lịch sử ký</h1>
            <div class="table-responsive">
              <table class="table table-hover table-bordered" id="tableScroll">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="text-left">
                      Số phụ lục/ Số hợp đồng
                    </th>
                    <th scope="col" class="text-left">Ngày ký</th>
                    <th scope="col" class="text-left">Sales</th>
                  </tr>
                </thead>
                <tbody
                  v-for="(
                    itemlstAppendixCurrent, index
                  ) in dataContract.lstAppendixContract"
                  :key="index"
                >
                  <tr class="table-row">
                    <td align="left">{{ itemlstAppendixCurrent.code }}</td>
                    <td align="left">
                      {{ itemlstAppendixCurrent.effectiveFrom | formatDate }}
                    </td>
                    <td align="left">
                      {{
                        itemlstAppendixCurrent.userInfo
                          ? itemlstAppendixCurrent.userInfo.name
                          : ""
                      }}
                      <br />{{
                        itemlstAppendixCurrent.userInfo
                          ? itemlstAppendixCurrent.userInfo.userName
                          : ""
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="img-list-wrapper">
            <h1 class="form-inner-heading">Ảnh hợp đồng</h1>
            <div class="form-group row img-list">
              <ul>
                <li
                  v-for="(itemImg, index) in dataContract.images"
                  :key="index"
                >
                  <a href="#popup-slider" data-toggle="modal">
                    <img
                      :src="itemImg"
                      @click="showImg(dataContract.images, index)"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="img-list-wrapper"
            v-for="(item, index) in dataImg"
            :key="index"
          >
            <h1 class="form-inner-heading">Ảnh phụ lục {{ item.code }}</h1>
            <div class="form-group row img-list">
              <ul>
                <li v-for="(itemImg, index) in item.images" :key="index">
                  <a href="#popup-slider" data-toggle="modal">
                    <img
                      :src="itemImg"
                      @click="showImg(item.images, index)"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
                      data-dismiss="modal"
                      @click="showModalSuccess = false"
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

    <rejectFrom
      :showModalDescriptionReject="showModalDescriptionReject"
      @submitReject="submitRejectContract($event)"
      @closeModal="showModalDescriptionReject = false"
    >
      <slot></slot>
    </rejectFrom>

    <appendixOtherFrom
      :showModalAdd="showModalAddOther"
      :datadepositType="datadepositType"
      :dataConfigTypeContract="dataConfigTypeContract"
      :devices="devices"
      :codeContract="dataContract.code"
      @submitAdd="addContract"
      @close="showModalAddOther = false"
    >
      <slot></slot>
    </appendixOtherFrom>

    <appendixReaderFrom
      :showModalAdd="showModalAddReader"
      :datadepositType="datadepositType"
      :dataConfigTypeContract="dataConfigTypeContract"
      :devices="devices"
      :codeContract="dataContract.code"
      @submitAdd="addContract"
      @close="showModalAddReader = false"
    >
    </appendixReaderFrom>

    <appendixFromEdit
      :showModalEdit="showModalEdit"
      :datadepositType="datadepositType"
      :dataConfigTypeContract="dataConfigTypeContract"
      :dataEdit="dataEdit"
      :devices="devices"
      @submitEdit="editContract"
      @close="showModalEdit = false"
    ></appendixFromEdit>

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
  </div>
</template>

<script>
import { ContractSevice } from '@/services/contract.service'
import moment from 'moment'
import { mapGetters } from 'vuex'
import { StaffService } from '@/services/staff.service'
import Config from '../../thirdParty/config'
import RejectFrom from './modal-detail-contract-paper/contract-detail-des-reject'
import InsertAppendixOtherFrom from './modal-detail-contract-paper/contract-detail-add-other'
import InsertAppendixReaderFrom from './modal-detail-contract-paper/contract-detail-add-reader'
import EditAppendix from './modal-detail-contract-paper/contract-detail-edit'

export default {
  data () {
    return {
      showModalSuccess: false,
      showModalErr: false,
      messErr: '',
      messSuccess: '',

      showModalImgSlider: false,
      indexImg: 0,

      dataContract: {
        customerInfo: {
          avatarUrl: [],
          listServiceType: []
        },
        reasonRejected: ''
      },

      dataConfigRegion: [],
      dataUser: JSON.parse(localStorage.getItem('userData')),
      getRegions: [],
      dataConfigServiceCurrent: [],
      datadepositType: [
        {
          value: false,
          text: 'Chọn dịch vụ trước'
        }
      ],
      devices: [],
      dataConfigTypeContract: [
        {
          value: false,
          text: 'Chọn dịch vụ trước'
        }
      ],
      arrayApxReader: [],
      arrayApxOther: [],
      listStatusContract: Config.listStatusContract,
      dataEdit: {},
      showModalAddOther: false,
      showModalAddReader: false,
      showModalEdit: false,
      showModalDescriptionReject: false,
      devicesEdit: [],
      dataImg: []
    }
  },

  components: {
    rejectFrom: RejectFrom,
    appendixOtherFrom: InsertAppendixOtherFrom,
    appendixReaderFrom: InsertAppendixReaderFrom,
    appendixFromEdit: EditAppendix
  },

  computed: {
    ...mapGetters({
      dataPermission: 'role/dataPermission',
      dataConfigService: 'common/dataConfigService'
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

    mapContractype (data) {
      if (!data) return
      if (data === 'READER') {
        return 'Thiết bị'
      }
      if (data === 'PAYMENT') {
        return 'Thanh toán'
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

    mapTextStatus (data, listState) {
      if (!data) return
      const text = listState.filter((e) => e.id === data)
      console.log(text)
      return text.length > 0 ? text[0].text : ''
    }
  },

  async created () {
    this.getRegion()
    const id = this.$router.history.current.params.id
    await this.getByCode(id)
    this.dataConfigServiceCurrent = this.dataConfigService.filter(
      (e) => e.active === true
    )
  },

  methods: {
    async editContract (data) {
      try {
        const body = {}
        if (data.contractType !== 'READER') {
          body.deviceInfos = []
        } else {
          body.deviceInfos = data.deviceInfos
        }
        body.customerId = data.customerInfo.customerId
        body.code = data.code
        body.saleId = data.saleId
        body.service = data.service
        body.depositType = data.depositType
        body.contractType = data.contractType
        body.effectiveFrom = data.effectiveFrom
        body.isAppend = data.isAppend
        body.id = data.id
        body.numDevices = data.numDevices
        const response = await ContractSevice.insertContract(body)
        if (response.code === 1000) {
          this.showModalSuccess = true
          this.messSuccess = 'Cập nhật phụ lục thành công !'
          this.$emit('successEdit')
          this.showModalEdit = false
          await this.getByCode(this.$router.history.current.params.id)
          this.dataEdit = {}
          return
        } else {
          this.showModalErr = true
          this.messErr = 'Cập nhật thất bại'
          return
        }
        // eslint-disable-next-line no-unreachable
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },

    async getByCode (id) {
      const data = await ContractSevice.getByCode({ code: id })
      console.log(data)
      if (data.data.id) {
        this.arrayApxReader = []
        this.arrayApxOther = []
        this.dataContract = data.data
        console.log(this.dataContract)
        if (this.dataContract.lstAppendixContract) {
          this.dataContract.lstAppendixContract.forEach((e) => {
            if (e.images) {
              this.dataImg.push({ code: e.code, images: e.images })
            }
          })
          const arrayApxReaderCurrent = this.dataContract.lstAppendixContract.filter(
            (e) => e.contractType === 'READER'
          )
          this.arrayApxOther = this.dataContract.lstAppendixContract.filter(
            (e) => e.contractType !== 'READER'
          )
          if (arrayApxReaderCurrent.length > 0) {
            arrayApxReaderCurrent.forEach((e) => {
              if (e.deviceInfos && e.deviceInfos.length > 0) {
                e.deviceInfos.forEach((ee) => {
                  let body = {}
                  body = ee
                  body.code = e.code
                  body.effectiveFrom = e.effectiveFrom
                  body.state = e.state
                  this.arrayApxReader.push(body)
                })
              }
            })
          }
          console.log(this.dataContract)
        }
      }
    },

    async addContract ({ dataDevice, dataInsertAppendix }) {
      try {
        let count = 0
        if (dataDevice.length > 0) {
          dataDevice.map((e) => {
            count += parseInt(e.quantity)
          })
        }
        dataInsertAppendix.numDevices = count
        dataInsertAppendix.saleId = this.dataUser.userId
        dataInsertAppendix.isAppend = true
        dataInsertAppendix.effectiveFrom = new Date(
          dataInsertAppendix.effectiveFrom
        ).getTime()
        dataInsertAppendix.customerId = this.dataContract.customerInfo.customerId
        dataInsertAppendix.deviceInfos = dataDevice
        dataInsertAppendix.service = this.dataContract.service
        dataInsertAppendix.code = this.dataContract.code
        const response = await ContractSevice.insertContract(
          dataInsertAppendix
        )
        if (response.code === 1000) {
          this.showModalAddOther = false
          this.showModalAddReader = false
          this.showModalSuccess = true
          this.messSuccess = 'Thêm phụ lục thành công'
          this.$emit('success')
          this.getByCode(this.$router.history.current.params.id)
        }

        if (response.code !== 1000) {
          this.showModalErr = true
          this.messErr = response.message
        }
      } catch (error) {
        console.log(error)
        this.showModalErr = true
        this.messErr = 'Đã có lỗi xảy ra'
      }
    },

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

    onChangSelectService (service) {
      this.devices = []
      this.dataConfigTypeContract = []
      this.datadepositType = []
      for (
        let index = 0;
        index < this.dataConfigServiceCurrent.length;
        index++
      ) {
        if (this.dataConfigServiceCurrent[index].id === service) {
          this.dataConfigTypeContract = this.dataConfigServiceCurrent[
            index
          ].contractType
          this.datadepositType = this.dataConfigServiceCurrent[
            index
          ].depositType
          this.devices = this.dataConfigServiceCurrent[index].devices
        }

        this.dataConfigTypeContract = this.dataConfigTypeContract.map(
          (item) => {
            return { value: item.code, text: item.name }
          }
        )

        this.datadepositType = this.datadepositType.map((item) => {
          return { value: item.code, text: item.name }
        })

        this.devices = this.devices.map((item) => {
          return { value: item.code, text: item.name, price: item.price }
        })
      }
    },

    async showAddPhuLuc (key) {
      this.onChangSelectService(this.dataContract.service)
      if (key === '1') this.showModalAddOther = true
      if (key === '0') this.showModalAddReader = true
    },

    async showEditPhuLuc (data, isKey) {
      this.onChangSelectService(this.dataContract.service)
      if (isKey) {
        this.dataEdit = this.dataContract.lstAppendixContract.find(
          (e) => e.code === data.code
        )
        this.devicesEdit = this.dataEdit.deviceInfos
      } else {
        this.dataEdit = data
      }
      this.showModalEdit = true
    },

    rejectContract () {
      this.showModalDescriptionReject = true
    },

    async submitRejectContract (payload) {
      this.showModalDescriptionReject = false
      const data = await ContractSevice.rejectContract({
        reasonRejected: payload.reasonRejected,
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
