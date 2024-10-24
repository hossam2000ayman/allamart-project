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
import AppFooter from "./AppFooter.vue";
import AppNavbar from "./AppNavbar.vue";
import CartDrawer from "./CartDrawer.vue";

export default {
  components: {
    AppNavbar,
    AppFooter,
    CartDrawer,
  },
};
</script>
