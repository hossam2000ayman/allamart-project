<template>
  <div class="checkout">
    <v-container fluid class="pa-0 ma-0">
      <v-row>
        <v-col cols="7"></v-col>
        <v-col cols="5">
          <v-card color="grey-lighten-3" elevation="0" width="100%">
            <v-card
              elevation="0"
              v-for="product in cartItems"
              :key="product.id"
              width="100%"
              class="d-flex align-center justify-space-between"
            >
              <img :src="product.thumbnail" width="50" height="50" alt="" />
              <div class="title-parent flex-grow-0">
                <v-card-title
                  style="
                    font-size: 14px;
                    font-weight: 700;
                    white-space: no-wrap;
                  "
                  >{{ product.title }}</v-card-title
                >
                <v-card-text>{{ product.category }}</v-card-text>
              </div>
              <v-card-text>
                ${{
                  Math.ceil(
                    (product.price -
                      product.price * (product.discountPercentage / 100)) *
                      product.quantity
                  )
                }}</v-card-text
              >
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { CartsModule } from "@/store/carts";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(CartsModule, ["cartItems"]),
  },

  methods: {},
};
</script>
