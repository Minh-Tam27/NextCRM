<template>
  <div>
    <transition name="fade" mode="out-in" appear>
      <Sidebar
        :isOpen="isOpen"
        :isOpenMobile="isOpenMobile"
        v-on:toggle-sidebar="toggleSideBar"
        v-on:toggle-sidebar-mobile="toggleSideBarMobile"
      />
    </transition>
    <div class="main-content d-flex flex-column" v-bind:class="{ 'hide-sidemenu-area' : isOpen }">
      <Header :isOpen="isOpen" :isOpenMobile="isOpenMobile" v-on:toggle-sidebar-mobile="toggleSideBarMobile"/>
      <div @click="closeSideBarMobile">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar
  },
  computed: {
    ...mapGetters({
      isOpen: 'dom/isOpen',
      isOpenMobile: 'dom/isOpenMobile'
    })
  },
  methods: {
    toggleSideBar () {
      this.$store.commit('dom/SET_SIDEBAR_STATUS', !this.isOpen)
    },
    toggleSideBarMobile () {
      this.$store.commit('dom/SET_SIDEBAR_STATUS_MOBILE', !this.isOpenMobile)
    },
    closeSideBarMobile () {
      if (this.isOpenMobile) {
        this.$store.commit('dom/SET_SIDEBAR_STATUS_MOBILE', false)
      }
    }
  }
}
</script>
