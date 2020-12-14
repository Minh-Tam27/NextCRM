<template>
  <nav
    class="navbar top-navbar navbar-expand is-sticky"
    v-bind:class="{ 'toggle-navbar-area': isOpen }"
  >
    <div class="collapse navbar-collapse" id="navbarSupportContent">
      <div
        class="responsive-burger-menu d-block d-lg-none"
        v-bind:class="{ active: isOpenMobile }"
        @click="$emit('toggle-sidebar-mobile')"
      >
        <span class="top-bar"></span>
        <span class="middle-bar"></span>
        <span class="bottom-bar"></span>
      </div>

      <div class="navbar-nav left-nav align-items-center">
        <div class="nav-item">
          <div class="form-search">
            <div class="company-name">
              <p>Phần mềm Quản lý Nội bộ - My NextPay v2.0.2</p>
              <!--<span>PMQL hóa đơn điện tử - MST:1233312232 </span>-->
            </div>
          </div>
        </div>
      </div>
      <ul class="navbar-nav left-nav align-items-center">
        <li class="nav-item notification-box dropdown">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="notification-btn ml-5">
              <i class="bx bxs-phone-call text-FFEE92" style="font-size: 40px;"></i>

              <span class="badge ml-2 text-FFEE92 font-size-17">Đang có cuộc gọi</span>
            </div>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav right-nav align-items-center">
        <!-- <li class="nav-item dropdown language-switch-nav-item">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src="../../assets/img/us-flag.jpg" alt="image" />
            <span>English</span>
          </a>

          <div class="dropdown-menu">
            <a href="#" class="dropdown-item d-flex justify-content-between align-items-center">
              <span>German</span>

              <img src="../../assets/img/germany-flag.jpg" alt="flag" />
            </a>

            <a href="#" class="dropdown-item d-flex justify-content-between align-items-center">
              <span>French</span>
            </a>

            <a href="#" class="dropdown-item d-flex justify-content-between align-items-center">
              <span>Spanish</span>

              <img src="../../assets/img/spain-flag.jpg" alt="flag" />
            </a>

            <a href="#" class="dropdown-item d-flex justify-content-between align-items-center">
              <span>Russian</span>

              <img src="../../assets/img/russia-flag.jpg" alt="flag" />
            </a>

            <a href="#" class="dropdown-item d-flex justify-content-between align-items-center">
              <span>Italian</span>

              <img src="../../assets/img/italy-flag.jpg" alt="flag" />
            </a>
          </div>
        </li> -->

        <!-- <li class="nav-item notification-box">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="notification-btn">
              <i class="bx bx-help-circle"></i>
            </div>
          </a>

          <div class="dropdown-menu w-220px pos-right-115 pos-top-40">
            <div class="dropdown-header d-flex justify-content-between align-items-center">
              <span class="title d-inline-block">Thông tin hỗ trợ</span>
            </div>

            <div class="dropdown-body py-0">
              <a href="#" class="dropdown-item d-flex align-items-center py-1">
                <i class="icon-support"></i>
                <div class="content">
                  <span class="d-block">1900-2079</span>
                </div>
              </a>
              <a href="#" class="dropdown-item d-flex align-items-center py-1">
                <i class="icon-email"></i>
                <div class="content">
                  <span class="d-block">support@nextinvoice.vn</span>
                </div>
              </a>
              <a href="#" class="dropdown-item d-flex align-items-center py-1">
                <i class="bx bxs-phone-call"></i>
                <div class="content">
                  <span class="d-block">0905 4939 38</span>
                </div>
              </a>
            </div>

            <div class="dropdown-body py-0 border-top-1">
              <a href="#" class="dropdown-item d-flex align-items-center">
                <i class="bx bx-question-mark"></i>
                <div class="content">
                  <span class="d-block">Hướng dẫn &#38; Hỏi đáp</span>
                </div>
              </a>
            </div>

            <div class="dropdown-footer">
              <span class="float-left pb-2 pr-2">
                <img src="../../assets/img/facebook.svg" alt="link-fb" />
              </span>
              <span class="float-left pb-2 pr-2">
                <img src="../../assets/img/youtube.svg" alt="link-youtube" />
              </span>
            </div>
          </div>
        </li> -->

        <li class="nav-item dropdown profile-nav-item">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="menu-profile">
              <span class="name">{{ dataUser.name }}</span>
              <img
                src="../../assets/img/avatar1.png"
                class="rounded-circle"
                alt="image"
              />
            </div>
          </a>

          <div class="dropdown-menu">
            <div class="dropdown-header d-flex flex-column align-items-center">
              <div class="figure mb-3">
                <img
                  src="../../assets/img/avatar1.png"
                  class="rounded-circle"
                  alt="image"
                />
              </div>

              <div class="info text-center">
                <span class="name">{{ dataUser.name }}</span>
                <p class="mb-3 email">{{ dataUser.username }}</p>
              </div>
            </div>

            <div class="dropdown-body">
              <ul class="profile-nav p-0 pt-3">
                <li class="nav-item">
                  <a href="#" class="nav-link pl-0">
                    <i class="icon-lock"></i>
                    <div class="content">
                      <a href="/change-pass">
                        <span class="d-block pl-4">Đổi mật khẩu</span>
                      </a>
                    </div>
                  </a>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link pl-0">
                    <i class="bx bxs-user"></i>
                    <div class="content">
                      <span class="d-block pl-4">Thông tin đơn vị</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div class="dropdown-footer">
              <ul class="profile-nav">
                <li class="nav-item">
                  <a href="#" class="nav-link pl-1">
                    <span class="sub-img">
                      <img
                        src="../../assets/img/logout.svg"
                        alt="logout"
                        class="drop-ft-img"
                      />
                    </span>
                    <p class="pl-4 color-707070" @click="logout">Đăng xuất</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import HeaderDots from './Header/HeaderDots'
// import UserArea from './Header/HeaderUserArea.vue'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faEllipsisV)
export default {
  name: 'Header',
  
  components: {
    // HeaderDots,
    // UserArea
    // 'font-awesome-icon': FontAwesomeIcon
  },

  data () {
    return {
      dataUser: JSON.parse(localStorage.getItem('userData'))
    }
  },
  props: {
    headerbg: String,
    isOpen: Boolean,
    isOpenMobile: Boolean
  },
  methods: {
    async logout () {
      await this.$store.dispatch('user/clear')
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style scoped>
.app-header {
  left: 210px;
  width: 100%;
  padding-top: 0px;
  padding-bottom: 0;
  height: 52px;
  background: #0b62ab !important;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
