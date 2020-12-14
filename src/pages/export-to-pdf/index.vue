<template>
  <div>
    <!-- <button type="button" @click="generateReport()"></button> -->
    <vue-html2pdf
      :show-layout="false"
      :float-layout="false"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="1400"
      filename="hee hee"
      :pdf-quality="2"
      :manual-pagination="true"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width="100%"
      ref="html2Pdf"
    >
      <section v-if="false" slot="pdf-content">
        <HDHTTT />
        <PLBPCNTTCN />
        <PLBPCNTTDN />
        <PLMBBG />
        <PLTG />
      </section>
    </vue-html2pdf>
    <b-tabs card>
      <b-tab title="Hợp đồng hợp tác thanh toán" active>
        <b-card-text> <HDHTTT /> </b-card-text>
      </b-tab>
      <b-tab title="Biểu phí chấp nhận thanh toán cá nhân">
        <b-card-text><PLBPCNTTCN /></b-card-text>
      </b-tab>
      <b-tab title="Biểu phí chấp nhận thanh toán doanh nghiệp">
        <b-card-text><PLBPCNTTDN /></b-card-text>
      </b-tab>
      <b-tab title="Phụ lục mua bán bàn giao mpos-smartpos">
        <b-card-text><PLMBBG /></b-card-text>
      </b-tab>
      <b-tab title="Phụ lục trả góp">
        <b-card-text><PLTG /></b-card-text>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'
import HDHTTT from './CRM-hopdong-hoptacthanhtoan'
import PLBPCNTTCN from './CRM-phuluc-bieuphi-chapnhanthanhtoan-canhan'
import PLBPCNTTDN from './CRM-phuluc-bieuphi-chapnhanthanhtoan-doanhnghiep'
import PLMBBG from './CRM-phuluc-mua-bangiao-mpos-smartpos'
import PLTG from './CRM-phuluc-dichvu-tragop-thetindung'

export default {
  created () {
    console.log(this.$route)
  },
  methods: {
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
    generateReport () {
      this.$refs.html2Pdf.generatePdf()
    }
  },

  components: {
    VueHtml2pdf,
    HDHTTT,
    PLBPCNTTCN,
    PLBPCNTTDN,
    PLMBBG,
    PLTG
  }
}
</script>

<style scoped>
</style>
