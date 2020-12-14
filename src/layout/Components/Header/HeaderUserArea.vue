<template>
  <div class="d-flex">
    <div class="header-btn-lg pr-0">
      <div class="widget-content p-0">
        <div class="widget-content-wrapper">
          <div class="widget-content-left float-right">
            <b-dropdown
              toggle-class="p-0 mr-2"
              menu-class="dropdown-menu-lg"
              variant="link"
              no-caret
              right
            >
              <span slot="button-content">
                <b-img
                  blankColor="#777"
                  class="m1 mt-2"
                  src="https://banner2.cleanpng.com/20180603/jx/kisspng-user-interface-design-computer-icons-default-stephen-salazar-photography-5b1462e1b19d70.1261504615280626897275.jpg"
                  width="40"
                  height="40"
                  rounded="circle"
                  alt="Circle image"
                ></b-img>
              </span>
              <div class="dropdown-menu-header">
                <div class="dropdown-menu-header-inner bg-info">
                  <div class="menu-header-image opacity-2 dd-header-bg-6"></div>
                  <div class="menu-header-content text-left">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-right mr-3">
                          <img width="42" class="rounded-circle" alt />
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Alina Mcloughlin</div>
                          <div class="widget-subheading opacity-8">A short profile description</div>
                        </div>
                        <div class="widget-content-right mr-2">
                          <button class="btn-pill btn-shadow btn-shine btn btn-focus">Logout</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-dropdown>
          </div>
          <div class="widget-content-left ml-3 header-user-info ml-sm-n5 pt-3">
            <div class="widget-heading color-fff overflow-hidden">
              <div class="notification-btn mr-4" style="font-size : 20px">
                <i class="bx bx-help-circle" />
              </div>
              <div class="notification-btn mr-2" style="font-size : 20px">
                <i class="bx bx-bell" />
              </div>
            </div>
          </div>
          <div class="widget-content-left ml-xl-3 header-user-info mr-2">
            <div class="widget-heading color-fff overflow-hidden pb-lg-2">{{dataUser.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'
// import VueCircle from 'vue2-circle-progress'
// import Trend from 'vuetrend';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import {
//   faAngleDown,
//   faCalendarAlt,
//   faTrashAlt,
//   faCheck,
//   faFileAlt,
//   faCloudDownloadAlt,
//   faFileExcel,
//   faFilePdf,
//   faFileArchive,
//   faEllipsisH
// } from '@fortawesome/free-solid-svg-icons'
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

// library.add(
//   faAngleDown,
//   faCalendarAlt,
//   faTrashAlt,
//   faCheck,
//   faFileAlt,
//   faCloudDownloadAlt,
//   faFileExcel,
//   faFilePdf,
//   faFileArchive,
//   faEllipsisH
// )

export default {
  components: {
    // VuePerfectScrollbar,
    // 'font-awesome-icon': FontAwesomeIcon,
    // VueCircle,
    // 'trend': Trend,
  },

  created () {
  },

  data: () => ({
    dataUser: JSON.parse(localStorage.getItem('userData')),
    fill1: { gradient: ['#00b09b', '#96c93d'] },
    fill2: { gradient: ['#ff0844', '#ffb199'] },
    fill3: { gradient: ['#f6d365', '#fda085'] },
    showDrawerSection: false
  }),
  methods: {}
}
</script>
<style scoped>
* {
  display: inline-block;
  position: relative;
  font-weight: 600;
}
.d-flex {
  float: right;
}
</style>
