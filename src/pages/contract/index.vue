<template>
  <div class="contracts" v-if="dataPermission">
    <div class="breadcrumb-area pos-relative w-100">
      <h1>Danh sách hợp đồng</h1>
    </div>
    <!-- End Breadcrumb Area -->
    <div class="card p-10 pt-15 b-t-1-869fb229">
      <div class="card-header m-b-10">
        <form class="box-search" @keyup.enter="getListContract">
          <div class="form-group">
            <label for>Từ khóa</label>
            <input
              type="text"
              class="f12 hc-37"
              placeholder="Từ khóa"
              v-model="search.keySearch"
            />
          </div>
          <div class="form-group">
            <label for>Chọn dịch vụ</label>
            <Select2 v-model="search.service" :options="dataConfigService" />
          </div>
          <div class="form-group">
            <label for>Vùng kinh doanh</label>
            <Select2
              v-model="search.regionId"
              :options="dataConfigRegion"
              @change="queryProvince($event)"
            />
          </div>
          <div class="form-group">
            <label for>Tỉnh / thành phố</label>
            <Select2 v-model="search.cityCode" :options="dataProvince" />
          </div>
          <div class="form-group">
            <label for>Số hợp đồng</label>
            <input
              type="text"
              class="f12 hc-37"
              placeholder="Số hợp đồng"
              v-model="search.code"
            />
          </div>
          <div class="form-group">
            <label for>Hình thức</label>
            <Select2 v-model="search.formContract" :options="formContract" />
          </div>
          <div class="form-group">
            <label for>Phí</label>
            <Select2 v-model="search.isDefaultFee" :options="isDefaulValue" />
          </div>
          <div class="form-group">
            <label for>Loại hợp đồng</label>
            <Select2 v-model="search.typeCustomer" :options="customerType" />
          </div>
          <div class="form-group">
            <label for>Nhân viên</label>
            <Select2 v-model="search.saleId" :options="listUser" />
          </div>
          <div class="form-group">
            <label for>Trạng thái</label>
            <Select2 v-model="search.state" :options="listStatusContract" />
          </div>
          <div class="d-inline-block m-t-23">
            <a
              v-if="dataPermission.includes('CNPS_SCON_LIST')"
              href="#"
              class="btn btn-primary hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Lọc"
              @click="getListContract()"
              ><i class="bx bx-filter-alt"></i><span>&nbsp;</span>Lọc</a
            >
            <button
              v-if="dataPermission.includes('CNPS_SCON_LIST')"
              type="button"
              class="btn btn-outline-light hc-37 mr-2 m-b-10 pt-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Bỏ lọc"
              @click="clearSearch()"
            >
              <i class="bx bx-filter-alt"></i>
              <span class="ml-1"></span>Bỏ lọc
            </button>
            <router-link
              to="contract-add"
              class="btn btn-success hc-37 mr-2 m-b-10 pt-2"
            >
              <i class="bx bx-plus-circle"></i> Thêm mới
            </router-link>
            <!--
                        <a href="CRM-Hopdong_Add.html" class="btn btn-success hc-37 mr-2 m-b-10 pt-2"
                            data-toggle="tooltip" data-placement="top" title="" data-original-title="Thêm mới"><i
                                class="bx bx-plus-circle"></i><span>&nbsp;</span>Thêm mới</a>
-->
          </div>
        </form>
      </div>
      <div class="card-body">
        <div class="tab-content" id="nav-tabContent">
          <div class="table-responsive">
            <div class="box-header">
              Tổng hợp đồng:
              <strong class="text-primary">{{
                objectCount.totalContract ? objectCount.totalContract : 0
              }}</strong>
              &nbsp;&nbsp;| &nbsp;&nbsp; Chưa ký:
              <strong class="text-primary">{{
                objectCount.totalNotSign ? objectCount.totalNotSign : 0
              }}</strong>
              &nbsp;&nbsp;| &nbsp;&nbsp; Đã ký:
              <strong class="text-primary">{{
                objectCount.totalSigned ? objectCount.totalSigned : 0
              }}</strong>
            </div>
            <table class="table table-hover table-bordered" id="tableScroll">
              <thead class="thead-light">
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Dịch vụ</th>
                  <th scope="col">Merchant</th>
                  <th scope="col">Hợp đồng/Ngày ký</th>
                  <th scope="col">Phụ lục</th>
                  <th scope="col">Thiết bị</th>
                  <th scope="col">Sale</th>
                  <th scope="col" width="100">Trạng thái</th>
                  <th scope="col" width="200">Lý do</th>
                  <th scope="col" style="text-align: right">Thao tác</th>
                </tr>
              </thead>
              <tbody v-for="(item, index) in listContract" :key="index">
                <tr class="table-row">
                  <td class="text-center">
                    {{ search.limit * (search.page - 1) + index + 1 }}
                  </td>
                  <td>{{ item.service }}</td>
                  <td>
                    <p>
                      <span>
                        {{
                          item.customerInfo
                            ? item.customerInfo.customerName
                            : ""
                        }}</span
                      >
                    </p>
                    <p>
                      <a href="#">
                        {{
                          item.customerInfo ? item.customerInfo.email : ""
                        }}</a
                      >
                    </p>
                    <p>
                      <a href="#">
                        {{
                          item.customerInfo ? item.customerInfo.mobile : ""
                        }}</a
                      >
                    </p>
                    <p>
                      <span>
                        {{ item.customerInfo ? item.customerInfo.address : "" }}
                        ,
                        {{
                          item.customerInfo ? item.customerInfo.district : ""
                        }}
                        ,
                        {{
                          item.customerInfo ? item.customerInfo.city : ""
                        }}</span
                      >
                    </p>
                  </td>
                  <td>
                    <p>
                      HĐ:
                      <span>
                        {{
                          item.customerInfo
                            ? item.customerInfo.customerType
                            : "" | mapTypeMerchant
                        }}</span
                      >
                    </p>
                    <p>
                      Số: <b>{{ item.code }}</b>
                    </p>
                    <p>
                      Ngày ký:
                      <span>
                        {{
                          item.effectiveFrom
                            ? item.effectiveFrom
                            : "" | formatDate
                        }}</span
                      >
                    </p>
                  </td>
                  <td v-if="item.appendixCode">
                    <p
                      v-for="(appendixItem, index) in item.appendixCode"
                      :key="index"
                    >
                      <b>{{ appendixItem }}</b>
                    </p>
                  </td>
                  <td v-if="!item.appendixCode"></td>
                  <td>
                    <p>
                      SL: <span>{{ item.numDevices }}</span>
                    </p>
                    <p>
                      TT:
                      <span>{{
                        item.price ? item.price : 0 | fomatCurrency
                      }}</span>
                    </p>
                  </td>
                  <td>
                    <p>
                      <b>{{ item.saleInfo ? item.saleInfo.name : "" }}</b>
                    </p>
                    <p>
                      <a href="#:">{{
                        item.saleInfo ? item.saleInfo.userName : ""
                      }}</a>
                    </p>
                    <p>{{ item.saleInfo ? item.saleInfo.regionName : "" }}</p>
                  </td>
                  <td>
                    <span
                      class="badge"
                      v-bind:class="[item.state ? item.state : '']"
                      >{{ item.state | mapTextStatus }}</span
                    >
                  </td>
                  <td>
                    {{ item.reasonRejected ? item.reasonRejected[0] : "" }}
                  </td>

                  <td>
                    <div class="dropdown text-right">
                      <button
                        type="button"
                        class="btn btn-outline-light btn-sm dropdown-toggle ml-1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="sr-only">More</span>
                      </button>
                      <div class="dropdown-menu" style="">
                        <router-link
                          class="dropdown-item"
                          :to="`/contract-detail-paper/${encodeURIComponent(
                            item.code
                          )}`"
                          ><i class="bx bx-show-alt"></i> Chi tiết</router-link
                        >
                        <router-link
                          class="dropdown-item"
                          :to="`/contract-detail-ecommerce/${item.code}`"
                          ><i class="bx bx-show-alt"></i> Chi tiết</router-link
                        >
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
    <div
      class="pagination-bottom"
      v-if="dataPermission.includes('CNPS_SCON_LIST')"
    >
      <b-pagination
        v-model="search.page"
        :total-rows="totalRows"
        :per-page="search.limit"
        class="fl-right mr-2"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ContractSevice } from '@/services/contract.service'
import moment from 'moment'
import { StaffService } from '@/services/staff.service'
import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
import prepareFetchParamsMixin from '../../mixins/prepareFetchParamsMixin'
import Config from '../../thirdParty/config'

export default {
  mixins: [prepareQueryParamsMixin, prepareFetchParamsMixin],

  computed: {
    ...mapGetters({
      dataConfigService: 'common/dataConfigService',
      dataPermission: 'role/dataPermission'
    }),

    useInUrlQueryPropList () {
      return this.prepareQueryParamsMixin({
        size: this.search.size,
        limit: this.search.limit
      })
    }
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

    fomatStatus (status, listStatus) {
      const dataFilter = listStatus.filter((e) => e.id === status)
      return dataFilter[0].text
    },

    transfromRegion (data, dataConfigRegion) {
      const dataReturn = dataConfigRegion.filter((e) => e.id === data)
      if (dataReturn.length === 0) {
        return ''
      }
      return dataReturn[0].text
    },

    mapTextStatus (data) {
      if (!data) return
      if (data === 'NEW') {
        return 'Mới tạo'
      }
      if (data === 'WAITING_APPROVED_FEE') {
        return 'Chờ duyệt phí'
      }
      if (data === 'APPROVED_FEE') {
        return 'Đã duyệt phí'
      }
      if (data === 'SENT') {
        return 'Đã gửi MC'
      }
      if (data === 'QRCODE') {
        return 'Chờ ký'
      }
      if (data === 'OTHER') {
        return 'Đang ký'
      }
      if (data === 'SIGNED_MISS_IMAGE') {
        return 'Đã ký - Thiếu ảnh'
      }
      if (data === 'SIGNED_WAITING_APPROVED') {
        return 'Đã ký - Chờ duyệt'
      }
      if (data === 'APPROVED') {
        return 'Đã duyệt'
      }
      if (data === 'REJECTED_SA') {
        return 'Bị từ chối SA'
      }
      if (data === 'REJECTED_MC') {
        return 'Bị từ chối MC'
      }
      if (data === 'REJECTED_MA') {
        return 'Bị từ chối MA'
      }
      if (data === 'CANCELED') {
        return 'Đã hủy'
      }
      if (data === 'EXPIRED') {
        return 'Hết hạn'
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
    }
  },

  created () {
    this.getListContract()
    this.getListStaffBySuperior()
    this.getRegions()
  },

  data () {
    return {
      loading: false,
      search: {
        page: 1,
        limit: 20
      },
      totalRows: null,
      listUser: [],
      listContract: [
        {
          customerInfo: {
            customerName: null
          }
        }
      ],
      dataConfigRegion: [],
      dataProvince: [],
      dataConfigTypeContract: [],
      listStatusContract: Config.listStatusContract,
      objectCount: {},
      dataUser: JSON.parse(localStorage.getItem('userData')),
      formContract: Config.formContract,
      isDefaulValue: Config.isDefaulValue,
      customerType: Config.customerType
    }
  },

  watch: {
    'search.page': function () {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.getListContract()
    },
    'search.limit': function () {
      this.$router.replace({
        query: this.useInUrlQueryPropList
      })
      this.getListContract()
    }
  },

  methods: {
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

    async queryProvince (e) {
      try {
        this.search.cityCode = '0'
        const data = await StaffService.getProvinceRegion({ regionId: [e] })
        if (data.data.length > 0) {
          const dataProvince = [
            {
              id: 0,
              text: 'Tất cả'
            }
          ]
          data.data.map((e) => {
            const body = {
              id: e.code,
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

    async getListContract () {
      try {
        this.loading = true
        if (this.search.saleId === '0') delete this.search.saleId
        if (this.search.state === '0') delete this.search.state
        if (this.search.service === '0') delete this.search.service
        if (this.search.cityCode === '0') delete this.search.cityCode
        if (this.search.formContract === 'false') delete this.search.formContract
        if (this.search.typeCustomer === 'false') delete this.search.typeCustomer
        if (this.search.isDefaultFee === 'false') this.search.isDefaultFee = false
        if (this.search.isDefaultFee === 'true') this.search.isDefaultFee = true
        const data = await ContractSevice.getList(this.search)
        if (data.code === 1000) {
          this.objectCount = {
            totalContract: data.data.totalContract,
            totalNotSign: data.data.totalNotSign,
            totalSigned: data.data.totalSigned
          }
          this.totalRows = data.totalPage.total
          this.listContract = data.data.contractList
          this.listContract.forEach((element) => {
            let count = 0
            const dataService = this.dataConfigService.filter(
              (e) => e.id === element.service
            )
            element.contractTypeName = dataService[0].contractType.find(
              (ee) => ee.code === element.contractType
            )
            element.contractTypeName = element.contractTypeName.name
            if (element.deviceInfos) {
              element.deviceInfos.forEach((data) => {
                count += data.totalPrice
              })
            }
            element.price = count
          })
          return
        }
        this.listContract = []
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
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

    clearSearch () {
      this.search = {
        page: 1,
        limit: 20
      }
      this.dataProvince = []
      this.getListContract()
    }
  }
}
</script>

<style scoped>
</style>
