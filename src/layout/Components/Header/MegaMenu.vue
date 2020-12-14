<template>
    <div>
        <ul class="header-megamenu nav">
            <li class="nav-item">
                <b-dropdown variant="link" no-caret>
                    <span slot="button-content">
                        <div class="badge badge-pill badge-danger ml-0 mr-2">4</div>
                        Settings
                        <font-awesome-icon class="ml-1 opacity-5" icon="angle-down"/>
                    </span>
                    <div class="dropdown-menu-header">
                        <div class="dropdown-menu-header-inner bg-focus">
                            <div class="menu-header-image opacity-2 dd-header-bg-5"></div>
                            <div class="menu-header-content">
                                <h5 class="menu-header-title">Overview</h5>
                                <h6 class="menu-header-subtitle">Dropdown menus for everyone</h6>
                            </div>
                        </div>
                    </div>
                    <div class="scroll-area-xs">
                        <VuePerfectScrollbar class="scrollbar-container" v-once>
                            <h6 tabindex="-1" class="dropdown-header">Key Figures</h6>
                            <button type="button" tabindex="0" class="dropdown-item">Service Calendar</button>
                            <button type="button" tabindex="0" class="dropdown-item">Knowledge Base</button>
                            <button type="button" tabindex="0" class="dropdown-item">Accounts</button>
                            <div tabindex="-1" class="dropdown-divider"></div>
                            <button type="button" tabindex="0" class="dropdown-item">Products</button>
                            <button type="button" tabindex="0" class="dropdown-item">Rollup Queries</button>
                        </VuePerfectScrollbar>
                    </div>
                    <ul class="nav flex-column">
                        <li class="nav-item-divider nav-item"></li>
                        <li class="nav-item-btn nav-item">
                            <button class="btn-wide btn-shadow btn btn-danger btn-sm">Cancel</button>
                        </li>
                    </ul>
                </b-dropdown>
            </li>
            <li class="nav-item">
                <b-dropdown variant="link" no-caret class="dropdown-menu-rounded" menu-class="dropdown-menu-lg">
                    <span slot="button-content">
                        <i class="nav-link-icon pe-7s-settings"> </i>
                        Projects
                        <font-awesome-icon class="ml-1 opacity-5" icon="angle-down"/>
                    </span>
                    <div class="dropdown-menu-header">
                        <div class="dropdown-menu-header-inner bg-success">
                            <div class="menu-header-image opacity-1 dd-header-bg-3"></div>
                            <div class="menu-header-content text-left">
                                <h5 class="menu-header-title">Overview</h5>
                                <h6 class="menu-header-subtitle">Unlimited options</h6>
                                <div class="menu-header-btn-pane">
                                    <button class="mr-2 btn btn-dark btn-sm">Settings</button>
                                    <button class="btn-icon btn-icon-only btn btn-warning btn-sm"><i class="pe-7s-config btn-icon-wrapper"> </i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-file-empty"> </i>Graphic Design</button>
                    <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-file-empty"> </i>App Development</button>
                    <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-file-empty"> </i>Icon Design</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-file-empty"> </i>Miscellaneous</button>
                    <button type="button" tabindex="0" class="dropdown-item"><i class="dropdown-icon lnr-file-empty"> </i>Frontend Dev</button>

                </b-dropdown>
            </li>
        </ul>

    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faAngleDown
)

export default {
  components: {
    VuePerfectScrollbar,
    'font-awesome-icon': FontAwesomeIcon
  },

  methods: {
    onPopoverShow () {
      this.$refs.PopoverMegaMenu._toolpop.getTipElement().classList.add('rm-max-width')
    }
  }
}

</script>
