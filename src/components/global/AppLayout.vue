<template>
  <div class="layout">
    <!-- make layout component relative position to any sub component which position is absolute -->
    <v-layout class="position-relative">
      <CartDrawer />
      <AppNavbar v-show="$route.name !== 'checkout'" />
      <FixedNav v-show="$route.name !== 'checkout'" />
      <v-main
        :style="`padding-top: ${$route.name !== 'checkout' ? '190' : '0'}px`"
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

export default {
  components: {
    AppNavbar,
    AppFooter,
    CartDrawer,
    FixedNav,
  },
};
</script>
