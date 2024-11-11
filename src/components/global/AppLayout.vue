<template>
  <div class="layout">
    <!-- make layout component relative position to any sub component which position is absolute -->
    <v-layout class="position-relative">
      <CartDrawer />
      <MenuDrawer />
      <AppNavbar
        v-show="$route.name !== 'checkout' && !showFixed && windowWidth > 990"
      />
      <ResponsiveNav
        v-show="windowWidth <= 990 && $route.name !== 'checkout'"
      />
      <FixedNav
        v-show="$route.name !== 'checkout' && showFixed && windowWidth > 990"
      />
      <v-main
        :style="`padding-top: ${
          $route.name !== 'checkout' ? (windowWidth <= 990 ? '60' : '190') : '0'
        }px`"
      >
        <!-- dynamic data will be every content in landing by using "<slot>" -->
        <slot></slot>
      </v-main>
      <AppFooter v-show="$route.name !== 'checkout'" />
    </v-layout>
  </div>
</template>

<script>
import AppFooter from "./AppFooter.vue";
import AppNavbar from "./AppNavbar.vue";
import CartDrawer from "./CartDrawer.vue";
import FixedNav from "./FixedNav.vue";
import MenuDrawer from "./MenuDrawer.vue";
import ResponsiveNav from "./ResponsiveNav.vue";

export default {
  data() {
    return {
      showFixed: false,
      windowWidth: 0,
    };
  },
  components: {
    AppNavbar,
    AppFooter,
    CartDrawer,
    FixedNav,
    ResponsiveNav,
    MenuDrawer,
  },

  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      console.log("windowWidth :: ", this.windowWidth);
    };
    window.onscroll = () => {
      if (window.scrollY >= 205) {
        this.showFixed = true;
      } else {
        this.showFixed = false;
      }
    };
  },
};
</script>
