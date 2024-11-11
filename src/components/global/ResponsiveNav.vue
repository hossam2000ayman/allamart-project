<template>
  <v-app-bar>
    <v-container>
      <v-row class="align-center">
        <v-col cols="4" class="d-flex align-center">
          <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
          <span v-html="this.$svg.search_mini"></span>
        </v-col>
        <v-col cols="4" class="text-center">
          <img
            src="@/assets/images/footer-logo.webp"
            @click="$router.replace({ name: 'home' })"
            style="cursor: pointer; width: 130px"
            alt=""
          />
        </v-col>
        <v-col cols="4" class="d-flex justify-end">
          <div>
            <span v-html="this.$svg.responsive_account"></span>
          </div>
          <div @click="openCart" style="cursor: pointer">
            <span v-html="this.$svg.responsive_cart"></span>
          </div>
          <v-badge
            location="right top"
            :content="cartItems.length"
            color="black"
            v-if="cartItems.length"
          >
          </v-badge>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { CartsModule } from "@/store/carts";
import { mapState } from "pinia";

export default {
  inject: ["emitter"],
  methods: {
    openCart() {
      this.emitter.emit("toggleCart");
    },
    openMenu() {
      this.emitter.emit("toggleMenu");
    },
  },
  computed: {
    ...mapState(CartsModule, ["cartItems"]),
  },
};
</script>
