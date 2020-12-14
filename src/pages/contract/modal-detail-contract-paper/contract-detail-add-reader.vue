<template>
  <div id="app">
    <div v-if="showModalAdd">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Thêm phụ lục hợp đồng thiết bị
                  </h5>
                  <button
                    type="button"
                    @click="closeAddPhuLuc()"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  class="modal-body text-center"
                  style="max-height: 500px; overflow: scroll"
                >
                  <ValidationObserver ref="contractAdd">
                    <form>
                      <div class="form-group row">
                        <label for="" class="col-sm-3 col-form-label"
                          >Mã hợp đồng:</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="email"
                            class="form-control"
                            id=""
                            :value="codeContract"
                            disabled
                          />
                        </div>
                      </div>
                      <ValidationProvider
                        rules="required"
                        vid="effectiveFrom"
                        name="Ngày ký"
                      >
                        <div class="form-group row" slot-scope="{ errors }">
                          <label for="" class="col-sm-3 col-form-label"
                            >Ngày ký:</label
                          >
                          <div class="col-sm-9">
                            <datepicker
                              :highlighted="highlighted"
                              :language="vi"
                              v-model="dataInsertAppendix.effectiveFrom"
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
                          <label for="" class="col-sm-3 col-form-label"
                            >Hình thức:</label
                          >
                          <div class="col-sm-9">
                            <b-form-select
                              v-model="dataInsertAppendix.depositType"
                              :options="datadepositType"
                            ></b-form-select>
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
                          <label for="" class="col-sm-3 col-form-label"
                            >Loại hợp đồng:</label
                          >
                          <div class="col-sm-9">
                            <b-form-select
                              v-model="dataInsertAppendix.contractType"
                              disabled
                              :options="dataConfigTypeContract"
                            ></b-form-select>
                            <p class="text-danger">{{ errors[0] }}</p>
                          </div>
                        </div>
                      </ValidationProvider>
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <div class="table-responsive">
                            <table
                              class="table table-hover table-bordered"
                              id="tableScroll"
                            >
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col" class="text-center">
                                    Tên thiết bị
                                  </th>
                                  <th
                                    scope="col"
                                    class="text-center"
                                    width="120"
                                  >
                                    Số lượng thiết bị
                                  </th>
                                  <th scope="col" class="text-center">
                                    Giá bán
                                  </th>
                                  <th scope="col" class="text-center">
                                    Thành tiền
                                  </th>
                                  <th scope="col" class="text-center"></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  class="table-row"
                                  v-for="(item, index) in dataDevice"
                                  :key="index"
                                >
                                  <td class="text-center">
                                    <b-form-select
                                      v-model="item.name"
                                      @change="
                                        onChangSelectDevice($event, index)
                                      "
                                      :options="devices"
                                    ></b-form-select>
                                  </td>
                                  <td align="right">
                                    <input
                                      min="1"
                                      type="number"
                                      class="form-control f12"
                                      @change="
                                        onChangeCount(
                                          item.price,
                                          item.quantity,
                                          index
                                        )
                                      "
                                      v-model="item.quantity"
                                    />
                                  </td>
                                  <td align="right">
                                    <input
                                      class="form-control f12"
                                      @change="
                                        onChangeCount(
                                          $event.target.value,
                                          item.quantity,
                                          index
                                        )
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
                                    <a
                                      @click="removeDevice(index)"
                                      href="#"
                                      class="text-danger"
                                      ><i class="bx bx-trash bx-sm"></i
                                    ></a>
                                  </td>
                                </tr>
                                <tr>
                                  <td colspan="5" align="center">
                                    <button
                                      @click="pushObjectDevice()"
                                      type="button"
                                      class="btn btn-block btn-link text-center"
                                    >
                                      <span class="bx bx-plus-medical"></span>
                                      Thêm mới thiết bị
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </form>
                  </ValidationObserver>

                  <div>
                    <h5 class="p-2">Ảnh phụ lục</h5>
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
                            <input
                              @input="onSelectFile"
                              ref="fileInput"
                              type="file"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    @click="closeAddPhuLuc()"
                    class="btn btn-light"
                  >
                    Đóng
                  </button>
                  <button
                    @click="submitAdd()"
                    type="button"
                    class="btn btn-primary"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker/dist/vuejs-datepicker.esm.js'
import { vi } from 'vuejs-datepicker/dist/locale'
import { CommonService } from '@/services/common.service'
import { ContractSevice } from '@/services/contract.service'

export default {
  props: ['showModalAdd', 'datadepositType', 'dataConfigTypeContract', 'devices', 'codeContract'],
  components: {
    Datepicker
  },

  data () {
    return {
      dataInsertAppendix: {
        contractType: 'READER'
      },
      formData2: new FormData(),
      arrayFormData: [],
      imageData: [],
      arrayImgInsertSuccess: [],
      dataDevice: [
        {
          name: 'Bạn hãy chọn dịch vụ trước',
          price: null,
          quantity: null,
          totalPrice: null
        }
      ],

      highlighted: {
        dates: [
          new Date(new Date())
        ]
      },
      vi: vi

    }
  },

  created () {
    this.$parent.$on('success', this.insertSuccess)
  },

  filters: {
    fomatCurrency (currency) {
      return Number(currency).toLocaleString('vi-VI', {
        style: 'currency',
        currency: 'VND'
      })
    }
  },

  methods: {

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

    async closeAddPhuLuc () {
      this.dataInsertAppendix = {}
      this.$emit('close')
    },

    onChangeCount (price, quantity, index) {
      if (price || quantity) {
        this.dataDevice[index].price = price
        this.dataDevice[index].totalPrice = quantity * price
      }
    },

    async submitAdd () {
      try {
        const validate = await this.$refs.contractAdd.validate()
        if (!validate) {
          return
        }
        this.$emit('submitAdd', { dataDevice: this.dataDevice, dataInsertAppendix: this.dataInsertAppendix })
      } catch (error) {
        console.log(error)
      }
    },

    insertSuccess () {
      this.dataInsertAppendix = {}
      this.imageData = []
      this.dataDevice = []
      if (this.arrayFormData.length > 0) {
        this.uploadImg()
      }
    },

    removeDevice (index) {
      this.dataDevice.splice(index, 1)
    },

    removeImg (index) {
      this.imageData.splice(index, 1)
      this.arrayFormData.forEach((e, i) => {
        if (index === i) {
          this.arrayFormData.splice(i, e)
        }
      })
    },

    async uploadImg (code) {
      for (let index = 0; index < this.arrayFormData.length; index++) {
        const element = this.arrayFormData[index]
        await CommonService.uploadImg(element).then((ee) => {
          if (ee.code === 1000) {
            this.arrayImgInsertSuccess.push(ee.data[0])
          }
        })
      }

      this.arrayFormData = []

      if (this.arrayImgInsertSuccess.length > 0) {
        await ContractSevice.saveImg({
          code: code.toLocaleUpperCase(),
          images: this.arrayImgInsertSuccess
        })
      }
    },

    pushObjectDevice () {
      this.dataDevice.push({
        name: '',
        price: null,
        quantity: null,
        totalPrice: null
      })
    },

    onChangSelectDevice (value, index) {
      const data = this.devices.filter((e) => e.value === value)
      this.dataDevice[index].price = data[0].price
      this.dataDevice[index].quantity = 1
      this.dataDevice[index].totalPrice = data[0].price
    }

  }
}
</script>

<style  scoped>
</style>
