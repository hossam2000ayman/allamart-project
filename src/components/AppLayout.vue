<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />
      <AppNavbar />
      <v-main>
        <!-- dynamic data will be every content in landing by using "<slot>" -->
        <slot></slot>
      </v-main>
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppFooter from "./global/AppFooter.vue";
import AppNavbar from "./global/AppNavbar.vue";
import CartDrawer from "./global/CartDrawer.vue";

export default {
  components: {
    AppNavbar,
    AppFooter,
    CartDrawer,
  },
};
</script>
