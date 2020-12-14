<template>
  <div class="addContract">
    <div class="breadcrumb-area pos-relative w-100">
      <h1>Thêm mới hợp đồng</h1>

      <div class=" " style="float: right">
        <router-link to="/contract" class="btn btn-danger btn-primary ml-2">
          Hủy bỏ
        </router-link>
        <a
          href="#"
          class="btn btn-success btn-primary ml-2"
          @click="addContract()"
          >Thêm mới</a
        >
      </div>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-body px-20 row">
        <ValidationObserver ref="contractAdd" class="card-body px-20 mt-2 row">
          <form class="col-md-6 mb-3">
            <h1 class="form-inner-heading">Thông tin MC</h1>
            <ValidationProvider rules="required" vid="service" name="Dịch vụ">
              <div class="form-group row" slot-scope="{ errors }">
                <label for="" class="col-sm-4 col-form-label"
                  >Dịch vụ<span style="color: red"> * </span> :</label
                >
                <div class="col-sm-8">
                  <Select2
                    v-model="dataInsert.service"
                    :options="dataConfigServiceCurrent"
                    @change="onChangSelectService($event)"
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="required"
              vid="merchantName"
              name="Tên merchant"
            >
              <div class="form-group pos-relative row" slot-scope="{ errors }">
                <label for="" class="col-sm-4 col-form-label"
                  >Tên Merchant<span style="color: red"> * </span> :
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control f12"
                    id=""
                    placeholder=""
                    :value="objectMerchant.merchantName"
                    disabled
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
                <button
                  type="button"
                  @click="openModalMerchant()"
                  class="link-contact"
                >
                  <i class="bx bxs-contact"></i>
                </button>
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="regexNumber"
              vid="mobile"
              name="Số điện thoại"
            >
              <div class="form-group row" slot-scope="{ errors }">
                <label for="" class="col-sm-4 col-form-label"
                  >Số điện thoại:
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control f12"
                    id=""
                    placeholder=""
                    :disabled="objectMerchant.keyCheckMobile"
                    v-model="objectMerchant.mobile"
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                  <p class="text-danger" v-if="errorsMcSdt">
                    {{ errorsMcSdt }}
                  </p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="mail" vid="email" name="Địa chỉ email">
              <div class="form-group row" slot-scope="{ errors }">
                <label for="" class="col-sm-4 col-form-label">Email:</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control f12"
                    :disabled="objectMerchant.keyCheckMail"
                    v-model="objectMerchant.email"
                    placeholder=""
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                  <p class="text-danger" v-if="errorsMcEmail">
                    {{ errorsMcEmail }}
                  </p>
                </div>
              </div>
            </ValidationProvider>
            <div class="form-group row">
              <label for="" class="col-sm-4 col-form-label">Địa chỉ:</label>
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control f12"
                  :value="
                    (objectMerchant.address ? objectMerchant.address : '') +
                    ' ' +
                    (objectMerchant.district ? objectMerchant.district : '') +
                    ' ' +
                    (objectMerchant.city ? objectMerchant.city : '')
                  "
                  placeholder=""
                  disabled
                />
              </div>
            </div>
          </form>
          <form class="col-md-6 mb-3">
            <h1 class="form-inner-heading">Thông tin hợp đồng</h1>
            <div class="form-group row">
              <label for="" class="col-sm-4 col-form-label"
                >Phụ lục hợp đồng:</label
              >
              <div class="col-sm-8">
                <div class="row">
                  <label for="radio1" class="col-form-label pl-3">Có</label>
                  <input
                    class=""
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    :value="true"
                    :disabled="this.objectKeyCheck.appendixContract === true"
                    style="margin: 10px 15px; width: auto"
                    v-model="dataInsert.isAppend"
                    @click="checkCodeByCustomer(true)"
                  />

                  <label for="gridRadios2" class="col-form-label pl-3"
                    >Không</label
                  >
                  <input
                    class=""
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    :value="false"
                    :disabled="this.objectKeyCheck.appendixContract === true"
                    style="margin: 10px 15px; width: auto"
                    @click="checkCodeByCustomer(true)"
                    v-model="dataInsert.isAppend"
                  />
                </div>
                <p class="text-info">{{ messErr2 }}</p>
              </div>
            </div>
            <ValidationProvider rules="required" vid="code" name="Mã hợp đồng">
              <div class="form-group row" slot-scope="{ errors }">
                <label for="" class="col-sm-4 col-form-label"
                  >Số hợp đồng <span style="color: red"> * </span> :</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control f12"
                    :disabled="objectMerchant.keyCheckCode"
                    v-model="dataInsert.code"
                    placeholder=""
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="required"
              vid="contractType"
              name="Loại hợp đồng"
            >
              <div class="form-group row" slot-scope="{ errors }">
                <label for="" class="col-sm-4 col-form-label"
                  >Loại hợp đồng<span style="color: red">* </span>:</label
                >
                <div class="col-sm-8">
                  <Select2
                    v-model="dataInsert.contractType"
                    :options="dataConfigTypeContract"
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="required"
              vid="effectiveFrom"
              name="Ngày ký"
            >
              <div class="form-group row" slot-scope="{ errors }">
                <label for="" class="col-sm-4 col-form-label"
                  >Ngày ký:<span style="color: red">* </span>:</label
                >
                <div class="col-sm-8">
                  <datepicker
                    :highlighted="highlighted"
                    :language="vi"
                    v-model="dataInsert.effectiveFrom"
                  ></datepicker>
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="required"
              vid="depositType"
              name="Hình thức"
            >
              <div class="form-group row" slot-scope="{ errors }">
                <label for="" class="col-sm-4 col-form-label"
                  >Hình thức<span style="color: red"> * </span>:</label
                >
                <div class="col-sm-8">
                  <Select2
                    v-model="dataInsert.depositType"
                    :options="datadepositType"
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
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
              <tbody>
                <tr
                  class="table-row"
                  v-for="(item, index) in dataDevice"
                  :key="index"
                >
                  <td class="text-center">
                    <Select2
                      v-model="item.name"
                      @change="onChangSelectDevice($event, index)"
                      :options="devices"
                    />
                  </td>
                  <td align="right">
                    <input
                      min="1"
                      type="number"
                      class="form-control f12"
                      @change="onChangeCount(item.price, item.quantity, index)"
                      v-model="item.quantity"
                    />
                  </td>
                  <td align="right">
                    <input
                      class="form-control f12"
                      @change="
                        onChangeCount($event.target.value, item.quantity, index)
                      "
                      :value="item.price | fomatCurrency"
                    />
                  </td>
                  <td align="right">
                    <input
                      disabled
                      type="text"
                      class="form-control f12"
                      placeholder=""
                      :value="item.totalPrice | fomatCurrency"
                    />
                  </td>
                  <td align="right" width="50px">
                    <a @click="removeDevice(index)" href="#" class="text-danger"
                      ><i class="bx bx-trash bx-sm"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td colspan="4" align="center">
                    <button
                      @click="pushObjectDevice()"
                      href=""
                      class="btn btn-block btn-link text-center"
                    >
                      <span class="bx bx-plus-medical"></span> Thêm mới thiết bị
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ValidationObserver>
      </div>

      <div class="card-body px-20 mt-5 row">
        <form class="col-md-12 img-list-wrapper">
          <h1 class="form-inner-heading">Ảnh hợp đồng</h1>
          <div class="form-group row img-list">
            <ul>
              <li v-for="(item, index) in imageData" :key="index">
                <a href="#popup-slider" data-toggle="modal">
                  <img :src="item" class="width-20" alt="" />
                  <span @click="removeImg(index)"
                    ><i class="bx bx-trash bx-sm"></i
                  ></span>
                </a>
              </li>
              <li>
                <div class="add-img">
                  <span class="bx bx-plus text-center"></span>
                  <p class="text-center" style="font-size: 15px">
                    Thêm ảnh hợp đồng
                  </p>
                  <input @input="onSelectFile" ref="fileInput" type="file" />
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
    <div id="app">
      <div v-if="showModalMerchant">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content" style="width: 1000px; right: 250px">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Danh sách các merchant
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span
                        @click="showModalMerchant = false"
                        aria-hidden="true"
                        >&times;</span
                      >
                    </button>
                  </div>
                  <div
                    class="modal-body text-center"
                    style="overflow: scroll; max-height: 400px"
                  >
                    <div class="table-responsive">
                      <table
                        class="table table-hover table-bordered"
                        id="tableScroll"
                      >
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="text-center">Chọn</th>
                            <th scope="col">Tên khách hàng</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
                            <th scope="col">Tên merchant</th>
                            <th scope="col">Địa chỉ</th>
                            <!-- <th scope="col">Thao tác</th> -->
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(item, index) in dataMerchant"
                            :key="index"
                            class="table-row"
                          >
                            <td>
                              <input
                                class=""
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                value=""
                                :checked="
                                  item.customerId === objectMerchant.customerId
                                "
                                @click="selectItemMerchant(item)"
                              />
                            </td>

                            <td>{{ item.customerName }}</td>
                            <td>{{ item.mobile }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.merchantName }}</td>
                            <td>
                              {{
                                item.address +
                                ", " +
                                item.district +
                                ", " +
                                item.city
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      @click="submitSelectMerchant()"
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Chọn
                    </button>
                    <button
                      @click="showModalMerchant = false"
                      type="button"
                      class="btn btn-light"
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
                    <h2 class="f18 py-3">Thêm mới thành công</h2>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ContractSevice } from '@/services/contract.service'
import Datepicker from 'vuejs-datepicker/dist/vuejs-datepicker.esm.js'
import { MerchantService } from '@/services/merchant.service'
import { CommonService } from '@/services/common.service'
import { vi } from 'vuejs-datepicker/dist/locale'

export default {
  data () {
    return {
      highlighted: {
        dates: [
          // your date
          new Date(new Date())
        ]
      },
      dataUser: JSON.parse(localStorage.getItem('userData')),
      objectMerchant: {},
      showModalErr: false,
      messErr: '',
      vi: vi,
      messErr2: '',
      dataInsert: {
        depositType: '',
        service: '',
        code: '',
        isAppend: false,
        numDevices: 0
      },
      objectKeyCheck: {
        keyCheckCode: false,
        appendixContract: false
      },
      showModalSuccess: false,
      showModalMerchant: false,
      dataConfigServiceCurrent: [],
      objectMerchantRaw: {},
      dataMerchant: [],
      dataDevice: [
        {
          name: 'Bạn hãy chọn dịch vụ trước',
          price: null,
          quantity: null,
          totalPrice: null
        }
      ],
      objectMessErr: {},
      formData2: new FormData(),
      imageData: [],
      arrayFormData: [],
      dataConfigTypeContract: [
        {
          id: false,
          text: 'Chọn dịch vụ trước'
        }
      ],
      devices: [],
      datadepositType: [
        {
          id: false,
          text: 'Chọn dịch vụ trước'
        }
      ],
      errorsMcEmail: null,
      errorsMcSdt: null,
      arrayImgInsertSuccess: []
    }
  },

  components: {
    Datepicker
  },

  created () {
    this.dataConfigServiceCurrent = this.dataConfigService.filter(
      (e) => e.active === true
    )

    this.featchDataMerchant()
  },

  methods: {
    pushObjectDevice () {
      this.dataDevice.push({
        name: '',
        price: null,
        quantity: null,
        totalPrice: null
      })
    },

    removeDevice (index) {
      this.dataDevice.splice(index, 1)
    },

    onChangeCount (price, quantity, index) {
      if (price || quantity) {
        this.dataDevice[index].price = price
        this.dataDevice[index].totalPrice = quantity * price
      }
    },

    async closeAdd () {
      this.$router.push('/contract')
    },

    onChangSelectService (service) {
      this.devices = []
      this.dataConfigTypeContract = []
      this.datadepositType = []
      this.dataInsert.depositType = 'BAN'
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
            return { id: item.code, text: item.name }
          }
        )

        this.datadepositType = this.datadepositType.map((item) => {
          return { id: item.code, text: item.name }
        })

        this.devices = this.devices.map((item) => {
          return { id: item.code, text: item.name, price: item.price }
        })
      }
    },

    async featchDataMerchant () {
      const data = await MerchantService.getDataMerchant({
        saleId: this.dataUser.userId
      })
      if (data.code === 1000) {
        this.dataMerchant = data.data
      }
    },

    openModalMerchant () {
      this.showModalMerchant = true
    },

    async checkCodeByCustomer (key) {
      this.messErr2 = ''

      if (!this.objectMerchant.customerId) return
      this.dataInsert.code = ''

      const code = await ContractSevice.getCodeContractByCustomer({
        id: this.objectMerchant.customerId
      })

      if (code.data.state && code.data.state === 'WAITING_APPROVED') {
        this.dataInsert.isAppend = true
        this.objectMerchant.keyCheckCode = true
        this.dataInsert.code = code.data.code
        this.objectKeyCheck.appendixContract = true
        this.messErr2 =
          'Hợp đồng đang trong trạng thái chờ duyệt , không thể thêm phụ lục'
      }

      if (code.data.state && code.data.state === 'EXPIRED') {
        this.dataInsert.isAppend = false
        this.objectMerchant.keyCheckCode = true
        this.dataInsert.code = ''
        this.objectKeyCheck.appendixContract = true
        this.messErr2 = 'Hợp đồng đã hết hạn , vui lòng tạo hợp đồng mới'
      }

      if (code.data.state && code.data.state !== 'APPROVED') {
        this.dataInsert.isAppend = true
        this.objectMerchant.keyCheckCode = true
        this.dataInsert.code = code.data.code
        this.objectKeyCheck.appendixContract = true
        this.messErr2 = 'Trạng thái hợp đồng gốc không phù hợp để tạo hợp đồng'
      }

      if (code.data.code) {
        this.dataInsert.isAppend = true
        this.objectMerchant.keyCheckCode = true
        this.dataInsert.code = code.data.code
        this.objectKeyCheck.appendixContract = true
        this.messErr2 = 'Merchant đã có hợp đồng , chỉ được tạo thêm phụ lục'
      }

      if (!code.data.code) {
        this.dataInsert.isAppend = false
        this.objectMerchant.keyCheckCode = false
        this.objectKeyCheck.appendixContract = true
        this.dataInsert.code = ''
        this.messErr2 = 'Merchant chưa có hợp đồng , tạo mới'
      }
    },

    onChangSelectDevice (value, index) {
      const data = this.devices.filter((e) => e.id === value)
      this.dataDevice[index].price = data[0].price
      this.dataDevice[index].quantity = 1
      this.dataDevice[index].totalPrice = data[0].price
    },

    async addContract () {
      this.errorsMcEmail = null
      this.errorsMcSdt = null
      try {
        const isSuccess = await this.$refs.contractAdd.validate()
        if (!isSuccess) {
          return
        }

        let count = 0
        if (this.dataDevice.length > 0) {
          this.dataDevice.map((e) => {
            count += parseInt(e.quantity)
          })
        }
        this.dataInsert.numDevices = count
        this.dataInsert.saleId = this.dataUser.userId
        this.dataInsert.effectiveFrom = new Date(
          this.dataInsert.effectiveFrom
        ).getTime()
        this.dataInsert.customerId = this.objectMerchant.customerId
        this.dataInsert.deviceInfos = this.dataDevice
        if (
          !this.objectMerchant.keyCheckMail ||
          !this.objectMerchant.keyCheckMobile
        ) {
          const body = {
            customerId: this.objectMerchant.customerId,
            email: this.objectMerchant.email,
            mobile: this.objectMerchant.mobile
          }
          const updateMerchant = await MerchantService.updateById(body)
          if (updateMerchant.code !== 1000) {
            if (updateMerchant.code === 1024) {
              this.errorsMcEmail = 'Email đã tồn tại'
              return
            }
            if (updateMerchant.code === 1025) {
              this.errorsMcSdt = 'Số điện thoại đã tồn tại'
              return
            }
            this.messErr = updateMerchant.message
            this.showModalErr = true
            return
          }
        }

        const response = await ContractSevice.insertContract(this.dataInsert)
        if (response.code === 1000) {
          await this.uploadImg(response.data.code)
          this.showModalSuccess = true
          return
        }

        if (response.code !== 1000) {
          this.showModalErr = true
          this.messErr = response.message
        }
      } catch (error) {
        this.showModalErr = true
        this.messErr = 'Đã có lỗi xảy ra'
      }
    },

    async uploadImg (code) {
      if (this.arrayFormData.length > 0) {
        for (let index = 0; index < this.arrayFormData.length; index++) {
          const element = this.arrayFormData[index]
          await CommonService.uploadImg(element).then((ee) => {
            if (ee.code === 1000) {
              this.arrayImgInsertSuccess.push(ee.data[0])
            }
          })
        }

        if (this.arrayImgInsertSuccess.length > 0) {
          await ContractSevice.saveImg({
            code: code.toLocaleUpperCase(),
            images: this.arrayImgInsertSuccess
          })
        }
      }
    },

    selectItemMerchant (item) {
      this.objectMerchantRaw = item
    },

    removeImg (index) {
      this.imageData.splice(index, 1)
      this.arrayFormData.forEach((e, i) => {
        if (index === i) {
          this.arrayFormData.splice(i, e)
        }
      })
    },

    async onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      const fomatUpload = ['image/jpeg', 'image/png']
      const checkFomat = fomatUpload.includes(input.files[0].type)
      if (!checkFomat) {
        alert('Định dạng ảnh không đúng')
        return
      }
      var FileSize = input.files[0].size / 1024 / 1024 // in MB
      if (FileSize > 2) {
        alert('Size ảnh quá lớn')
        return
      }
      this.formData2 = new FormData()
      this.formData2.append('files', files[0])
      this.formData2.append('folderName', 'NextCrm')
      this.arrayFormData.push(this.formData2)
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imageData.push(e.target.result)
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    },

    submitSelectMerchant () {
      this.objectMerchant = {}
      this.objectMerchant = this.objectMerchantRaw
      if (this.objectMerchant.email) this.objectMerchant.keyCheckMail = true
      if (this.objectMerchant.mobile) this.objectMerchant.keyCheckMobile = true
      this.showModalMerchant = false
      this.checkCodeByCustomer()
    }
  },

  filters: {
    fomatCurrency (currency) {
      if (!currency) return ''
      return Number(currency).toLocaleString('vi-VI', {
        style: 'currency',
        currency: 'VND'
      })
    }
  },

  computed: {
    ...mapGetters({
      dataConfigService: 'common/dataConfigService'
    })
  }
}
</script>

<style scoped>
</style>
