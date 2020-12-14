<template>
  <div
    class="merchant-add"
    v-if="dataPermission && dataPermission.includes('CNPS_CSTM_MERCHANT_ADD')"
  >
    <div class="breadcrumb-area pos-relative">
      <h1>Thêm mới Merchant</h1>

      <div class style="float: right">
        <span href="CRM-Merchant.html" class="btn btn-light" @click="closeAdd()"
          >Hủy bỏ</span
        >
        <span
          href="#"
          class="btn btn-success btn-primary ml-2"
          @click="submitInsertMerchant()"
          >Thêm mới</span
        >
      </div>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div>
        <ValidationObserver ref="merchantAdd" class="card-body px-20 mt-2 row">
          <form class="col-md-6">
            <div class="form-group row">
              <label for class="col-sm-3 col-form-label">Thêm ảnh</label>
              <div class="col-sm-3">
                <div
                  class="base-image-input"
                  :style="{ 'background-image': `url(${imageData})` }"
                >
                  <input
                    class="file-input"
                    ref="fileInput"
                    type="file"
                    @input="onSelectFile"
                  />
                </div>
              </div>
              <div class="col-sm-9 text-center mt-1">
                <b-button
                  @click="chooseImage"
                  id="fileInput"
                  style="background: #eaf0ff; color: #2f6bff; border: 0px"
                  class="mr-4 w-25 text-center"
                  >Chọn ảnh</b-button
                >
              </div>
            </div>
            <ValidationProvider
              rules="required|minMAxName|username"
              vid="customerName"
              name="Họ và tên"
            >
              <div class="form-group row" slot-scope="{ errors }">
                <label class="col-sm-3 col-form-label"
                  >Họ và tên <span style="color: red">*</span></label
                >
                <div class="col-sm-7">
                  <input
                    v-model="dataInsert.customerName"
                    type="text"
                    class="form-control"
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="regexNumber"
              vid="mobile"
              name="Số điện thoại"
            >
              <div class="form-group row" slot-scope="{ errors }">
                <label class="col-sm-3 col-form-label">Số điện thoại</label>
                <div class="col-sm-7">
                  <input
                    v-model="dataInsert.mobile"
                    type="text"
                    class="form-control"
                    id
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>

            <ValidationProvider rules="mail" vid="email" name="Địa chỉ email">
              <div class="form-group row" slot-scope="{ errors }">
                <label for class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-7">
                  <input
                    v-model="dataInsert.email"
                    type="text"
                    class="form-control"
                    id
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="minMAxName"
              vid="merchantName"
              name="Tên cửa hàng"
            >
              <div class="form-group row" slot-scope="{ errors }">
                <label for class="col-sm-3 col-form-label">Tên cửa hàng</label>
                <div class="col-sm-7">
                  <input
                    v-model="dataInsert.merchantName"
                    type="text"
                    class="form-control"
                    id
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
          </form>
          <form class="col-md-6">
            <ValidationProvider
              rules="required"
              vid="customerType"
              name="Loại merchant"
            >
              <div class="form-group row" slot-scope="{ errors }">
                <label for class="col-sm-3 col-form-label"
                  >Loại merchant<span style="color: red">*</span></label
                >
                <div class="col-sm-7">
                  <Select2
                    v-model="dataInsert.customerType"
                    :options="configCustomerType"
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <div class="form-group row">
              <label for class="col-sm-3 col-form-label">Ngành hàng</label>
              <div class="col-sm-7">
                <Select2 v-model="dataInsert.mcc" :options="dataConfigMcc" />
              </div>
            </div>

            <div class="form-group row">
              <label for class="col-sm-3 col-form-label">Chọn dịch vụ</label>
              <div class="col-sm-7">
                <select2-multiple-control
                  v-model="dataInsert.suggestServiceType"
                  :options="dataConfigService"
                />
              </div>
            </div>
            <ValidationProvider
              rules="required"
              vid="cityCode"
              name="Tỉnh/ thành phố"
            >
              <div class="form-group row" slot-scope="{ errors }">
                <label for class="col-sm-3 col-form-label"
                  >Tỉnh/ thành phố <span style="color: red">*</span></label
                >
                <div class="col-sm-7">
                  <Select2
                    @change="getDistictByCode($event)"
                    v-model="dataInsert.cityCode"
                    :options="dataCitys"
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="required"
              vid="districtCode"
              name="Quận/huyện"
            >
              <div class="form-group row" slot-scope="{ errors }">
                <label for class="col-sm-3 col-form-label"
                  >Quận/huyện <span style="color: red">*</span></label
                >
                <div class="col-sm-7">
                  <Select2
                    v-model="dataInsert.districtCode"
                    :options="dataDistrict"
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="required|minMAxName"
              vid="address"
              name="Địa chỉ trụ sở"
            >
              <div class="form-group row" slot-scope="{ errors }">
                <label for class="col-sm-3 col-form-label"
                  >Địa chỉ trụ sở <span style="color: red">*</span></label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    v-model="dataInsert.address"
                    class="form-control"
                    id
                  />
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </div>
            </ValidationProvider>
            <!-- <div class="form-group row">
            <label for class="col-sm-3 col-form-label">Hiển thị theo bản đồ</label>
            <div class="col-sm-7">
              <input type="email" class="form-control" id />
            </div>
          </div> -->
          </form>
        </ValidationObserver>
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
import { CommonService } from '@/services/common.service'
import { MerchantService } from '@/services/merchant.service'
import { StaffService } from '@/services/staff.service'

export default {
  data () {
    return {
      objectMesserr: {},
      dataInsert: {
        customerName: null
      },
      imageData:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsakRbDmhHcvMtgFx5xuaR3ljCBX9Qm7-OSA&usqp=CAU',
      checkUploadFomat: false,
      checkUploadSize: false,
      formData2: new FormData(),
      dataDistrict: [],
      objectInsert: {},
      dataCitys: [],
      dataUser: JSON.parse(localStorage.getItem('userData')),
      objectErr: {},
      showModalSuccess: false,
      configCustomerType: [
        {
          id: 'COMPANY',
          text: 'Doanh nghiệp'
        },
        {
          id: 'INDIVIDUAL',
          text: 'Cá nhân'
        }
      ]
    }
  },

  created () {
    this.getCity()
    this.$store.subscribe((e) => {
      if (e.type === 'merchant/RETURN_DATA_UPLOAD_IMG') {
        if (e.payload.data.success) {
          this.objectInsert.images = [e.payload.data.data.imageLink]
        }
      }
    })
  },

  computed: {
    ...mapGetters({
      dataConfigService: 'common/dataConfigService',
      dataConfigMcc: 'common/dataConfigMcc',
      dataPermission: 'role/dataPermission'
    })
  },

  methods: {
    async onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      const fomatUpload = ['image/jpeg', 'image/png']
      const checkFomat = fomatUpload.includes(input.files[0].type)
      if (!checkFomat) {
        alert('Định dạng ảnh không đúng ! ')
        return
      }
      var FileSize = input.files[0].size / 1024 / 1024 // in MB
      if (FileSize > 2) {
        alert('Size ảnh quá lớn ! ')
        return
      }
      this.formData2 = new FormData()
      this.formData2.append('files', files[0])
      this.formData2.append('folderName', 'NextCrm')
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    },

    chooseImage () {
      this.$refs.fileInput.click()
    },

    async closeAdd () {
      this.$router.push('/merchant')
    },

    async submitInsertMerchant () {
      const isSuccess = await this.$refs.merchantAdd.validate()
      if (!isSuccess) {
        // this.$refs.merchantAdd.reset()
        return
      }
      try {
        const dataGetNameCity = this.dataCitys.filter(
          (e) => e.id === this.dataInsert.cityCode
        )
        this.dataInsert.city = dataGetNameCity[0].text
        const dataGetNameDistrict = this.dataDistrict.filter(
          (e) => e.id === this.dataInsert.districtCode
        )
        this.dataInsert.district = dataGetNameDistrict[0].text
        this.dataInsert.userId = this.dataUser.userId
        this.dataInsert.userName = this.dataUser.username
        if (this.dataInsert.mcc) {
          const dataGetNameMCc = this.dataConfigMcc.filter(
            (e) => e.id === this.dataInsert.mcc
          )
          this.dataInsert.mccName = dataGetNameMCc[0].text
        }
        const dataUploadImg = await CommonService.uploadImg(this.formData2)
        if (dataUploadImg.data.length > 0) {
          this.dataInsert.avatarUrl = dataUploadImg.data
        }
        const respon = await MerchantService.insertMerchant(this.dataInsert)
        if (respon.code === 1000) {
          this.showModalSuccess = true
          return
        }
      } catch (error) {
        console.log(error)
      }
    },

    async getDistictByCode (code) {
      try {
        this.dataDistrict = []
        const data = await StaffService.getDistictByCode({ cityCode: code })
        if (data.data.length > 0) {
          data.data.forEach((e) => {
            this.dataDistrict.push({
              id: e.code,
              text: e.name
            })
          })
          return
        }
        this.dataDistrict = []
      } catch (error) {
        console.log(error)
      }
    },

    async getCity () {
      try {
        const data = await StaffService.getAllCity({})
        if (data.data.length > 0) {
          if (this.dataUser.adminLocations.length === 0) {
            data.data.forEach((e) => {
              this.dataCitys.push({
                id: e.code,
                text: e.name
              })
            })
            return
          }
          data.data.filter((e) => {
            this.dataUser.adminLocations.forEach((element) => {
              if (e.code === element) {
                this.dataCitys.push({
                  id: e.code,
                  text: e.name
                })
              }
            })
          })
          return
        }
        this.dataCitys = []
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.base-image-input {
  display: block;
  width: 150px;
  height: 150px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}

.placeholder {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}

.placeholder:hover {
  background: #e0e0e0;
}

.file-input {
  display: none;
}

.pos-relative {
  width: 100%;
}
</style>
