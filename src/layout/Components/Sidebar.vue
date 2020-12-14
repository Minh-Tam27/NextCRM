<template>
  <div
    v-if="dataPermission.length > 0"
    class="sidemenu-area"
    v-bind:class="{
      'toggle-sidemenu-area': isOpen,
      'active-sidemenu-area': isOpenMobile,
    }"
  >
    <div class="sidemenu-header">
      <a href="/" class="navbar-brand d-flex align-items-center">
        <img src="@/assets/Logo-crm.png" alt="image" class="logo-main" />
        <img
          src="@/assets/img/ni-favicon-white.svg"
          alt="image"
          class="logo-shorten"
        />
      </a>
      <div
        class="burger-menu d-none d-lg-block"
        v-bind:class="{ active: isOpen }"
        @click="$emit('toggle-sidebar')"
      >
        <span class="top-bar"></span>
        <span class="middle-bar"></span>
        <span class="bottom-bar"></span>
      </div>

      <div
        class="responsive-burger-menu d-block d-lg-none"
        v-bind:class="{ active: isOpenMobile }"
        @click="$emit('toggle-sidebar-mobile')"
      >
        <span class="top-bar"></span>
        <span class="middle-bar"></span>
        <span class="bottom-bar"></span>
      </div>
    </div>
    <div class="sidemenu-body">
      <VuePerfectScrollbar v-once>
        <ul
          class="sidemenu-nav metisMenu h-100"
          id="sidemenu-nav"
          data-simplebar
        >
          <!-- <li class="nav-item" v-for="(item, index) in menu" :key="index">
            <a v-if="item.child" class="nav-link collapsed-nav-link" v-b-toggle.collapse-1>
              <i :class="item.icon"></i>
              <span class="menu-title">{{item.title}}</span>
            </a>
            <router-link v-else :to="item.href" class="nav-link">
              <i :class="item.icon"></i>
              <span class="menu-title">{{item.title}}</span>
            </router-link>
            <b-collapse id="collapse-1" class="sidemenu-nav-second-level" v-if="item.child">
              <li class="nav-item" v-for="(subItem, subIndex) in item.child" :key="subIndex">
                <router-link :to="subItem.href" class="nav-link">
                  <span class="menu-title">{{subItem.title}}</span>
                </router-link>
              </li>
            </b-collapse>
          </li> -->
          <template v-for="(item, index) in menu">
            <li class="nav-item" v-if="item.child" :key="index">
              <a
                v-if="item.child"
                class="nav-link collapsed-nav-link"
                v-b-toggle="'accordion-' + item.accId"
              >
                <i :class="item.icon"></i>
                <span class="menu-title">{{ item.title }}</span>
              </a>
              <b-collapse
                :id="'accordion-' + item.accId"
                accordion="my-accordion"
                role="tabpanel"
                class="sidemenu-nav-second-level"
                v-if="item.child"
              >
                <li
                  class="nav-item"
                  v-for="(subItem, subIndex) in item.child"
                  :key="subIndex"
                >
                  <router-link :to="subItem.href" class="nav-link">
                    <span class="menu-title">{{ subItem.title }}</span>
                  </router-link>
                </li>
              </b-collapse>
            </li>
            <router-link
              v-else
              :key="index"
              :to="item.href"
              v-slot="{ href, navigate, isActive, isExactActive }"
            >
              <li
                class="nav-item"
                :class="[
                  isActive && 'router-link-active mm-active',
                  isExactActive && 'router-link-exact-active',
                ]"
              >
                <a :href="href" @click="navigate" class="nav-link">
                  <i :class="item.icon"></i>
                  <span class="menu-title">{{ item.title }}</span>
                </a>
              </li>
            </router-link>
          </template>
        </ul>
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  components: {
    VuePerfectScrollbar
  },

  props: {
    isOpen: Boolean,
    isOpenMobile: Boolean
  },

  async created () {
    await this.$store.subscribe((type) => {
      if (type.type === 'role/SET_PERMISSION_BY_USER') {
        this.dataPermission = type.payload
      }
    })

    if (this.dataPermission.length === 0) {
      this.dataPermission = await this.$store.state.role.dataPermission
    }
  },

  data () {
    return {
      dataPermission: [{}],
      sidebarActive: false,
      collapsed: true,
      windowWidth: 0,
      menu: [
        {
          icon: 'bx bx-timer',
          title: 'Chấm công',
          href: '/attentdent',
          permission: 'CNPS_ATTN_ATTENDANCE_LIST'
        },
        {
          icon: 'bx bx-calendar',
          title: 'Lịch làm việc',
          href: '/calendar',
          permission: 'CNPS_WKCLDR_GET_LIST_TASK_BY_USERID'
        },
        {
          icon: 'bx bx-buildings',
          title: 'Merchant',
          href: '/merchant',
          permission: 'CNPS_CSTM_MERCHANT_LIST'
        },
        {
          icon: 'bx bx-user-circle',
          title: 'Nhân viên',
          href: '/staff',
          permission: 'CNPS_CFG_ROLE_LIST'
        },
        {
          icon: 'bx bx-notepad',
          title: 'Hợp đồng',
          href: '/contract',
          permission: 'CNPS_SCON_LIST'
        },
        {
          icon: 'bx bx-cog',
          title: 'Cài đặt',
          accId: 1,
          child: [
            {
              title: 'Quyền',
              href: '/role',
              permission: 'CNPS_CFG_ROLE_LIST'
            },
            {
              title: 'Cài đặt 2',
              href: '/'
            }
          ]
        },

        {
          icon: 'bx bx-calendar',
          accId: 2,
          title: 'Báo cáo',
          child: [
            {
              title: 'Báo cáo chấm công',
              href: '/report-attentdent'
            },
            {
              title: 'Báo cáo merchant',
              href: '/report-merchant'
            },
            {
              title: 'Báo cáo công việc',
              href: '/report-work'
            }
          ]
        }
      ]
    }
  },

  methods: {
    checkPermission (per) {
      return this.dataPermission.includes(per)
    }
  }
}
</script>
