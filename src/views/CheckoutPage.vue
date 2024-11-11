<template>
  <div class="checkout">
    <v-container fluid class="pa-0 ma-0">
      <v-row>
        <v-col cols="12" md="6" lg="7" class="order-1 order-md-0">
          <v-card
            class="w-100 checkout-left"
            color="white"
            elevation="0"
            style="padding: 60px 40px 0px 120px"
          >
            <v-card-title class="font-weight-bold py-0">
              new ella demo
            </v-card-title>

            <v-breadcrumbs
              :items="['Cart', 'Information', 'Shipping', 'Payment']"
              style="font-size: 13px"
            >
              <template v-slot:divider>
                <v-icon color="#878484">mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
            <v-card-actions class="justify-space-between align-center mb-7">
              <v-btn
                color="primary"
                variant="elevated"
                class="flex-grow-1"
                heighth="45"
              >
                <span v-html="$svg.checkout_shop"></span>
              </v-btn>
              <v-btn
                color="black"
                variant="elevated"
                class="flex-grow-1"
                heighth="45"
              >
                <span v-html="$svg.checkout_google"></span>
              </v-btn>
            </v-card-actions>
            <v-card-title
              style="
                font-size: 14px;
                font-weight: 700;
                color: #484848;
                white-space: pre-wrap;
                line-height: 1.2;
              "
            >
              Shipping Address
            </v-card-title>
            <select
              class="w-100 pa-3"
              name=""
              id=""
              style="
                border: 1px solid rgb(217, 217, 217);
                border-radius: 3px;
                font-size: 14px;
              "
            >
              <option
                :value="country"
                v-for="country in countries"
                :key="country"
              >
                {{ country }}
              </option>
            </select>
            <div
              class="username d-flex align-center justify-center"
              style="gap: 15px"
            >
              <input
                placeholder="First Name"
                type="text"
                class="pa-3 mt-4"
                style="
                  border: 1px solid rgb(217, 217, 217);
                  border-radius: 3px;
                  font-size: 14px;
                  width: 100%;
                "
              />
              <input
                placeholder="Last Name"
                type="text"
                class="pa-3 mt-4"
                style="
                  border: 1px solid rgb(217, 217, 217);
                  border-radius: 3px;
                  font-size: 14px;
                  width: 100%;
                "
              />
            </div>
            <input
              placeholder="Address"
              type="text"
              class="pa-3 mt-4"
              style="
                border: 1px solid rgb(217, 217, 217);
                border-radius: 3px;
                font-size: 14px;
                width: 100%;
              "
            />
            <input
              placeholder="Apartment"
              type="text"
              class="pa-3 mt-4"
              style="
                border: 1px solid rgb(217, 217, 217);
                border-radius: 3px;
                font-size: 14px;
                width: 100%;
              "
            />
            <div
              class="city-parent d-flex align-center justify-center"
              style="gap: 15px"
            >
              <input
                placeholder="City"
                type="text"
                class="pa-3 mt-4"
                style="
                  border: 1px solid rgb(217, 217, 217);
                  border-radius: 3px;
                  font-size: 14px;
                  width: 100%;
                "
              />

              <select
                class="w-100 pa-3 mt-4"
                name=""
                id=""
                style="
                  border: 1px solid rgb(217, 217, 217);
                  border-radius: 3px;
                  font-size: 14px;
                "
              >
                <option
                  :value="country"
                  v-for="country in countries"
                  :key="country"
                >
                  {{ country }}
                </option>
              </select>
              <input
                placeholder="Postal Code"
                type="text"
                class="pa-3 mt-4"
                style="
                  border: 1px solid rgb(217, 217, 217);
                  border-radius: 3px;
                  font-size: 14px;
                  width: 100%;
                "
              />
            </div>
            <v-card-actions class="justify-end my-7">
              <v-btn
                @click="showDialog = true"
                variant="elevated"
                color="primary"
                height="45"
                width="150"
              >
                Submit
              </v-btn>
            </v-card-actions>

            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text style="font-size: 10px; color: #777777">
              All Rights Reserved allmart-project
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="5">
          <v-card
            color="grey-lighten-3"
            elevation="0"
            width="100%"
            height="100%"
            min-height="400"
            class="checkout-right"
            style="padding: 60px 120px 0px 40px"
          >
            <v-card
              elevation="0"
              v-for="product in cartItems"
              :key="product.id"
              width="100%"
              color="transparent"
              class="d-flex align-center justify-space-between mb-3 pt-3"
            >
              <v-badge :content="product.quantity" color="grey-darken-1">
                <img
                  :src="product.thumbnail"
                  width="50"
                  height="50"
                  style="
                    border-radius: 7px;
                    border: 1px solid rgba(118, 118, 118, 0.2);
                  "
                  alt=""
                />
              </v-badge>
              <div class="title-parent flex-grow-1">
                <v-card-title
                  class="py-0"
                  style="
                    font-size: 14px;
                    font-weight: 700;
                    white-space: pre-wrap;
                    line-height: 1.2;
                  "
                  >({{ product.title }}) Sample - {{ product.category }} for
                  sale</v-card-title
                >
                <v-card-text
                  style="font-size: 12px; color: #777777; white-space: pre-wrap"
                  >{{ product.category }}</v-card-text
                >
              </div>
              <v-card-text
                class="flex-grow-0"
                style="font-size: 12px; color: #4b4a4a"
              >
                ${{
                  Math.ceil(
                    (product.price -
                      product.price * (product.discountPercentage / 100)) *
                      product.quantity
                  )
                }}
              </v-card-text>
            </v-card>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text
              class="d-flex align-center justify-space-between font-weigth-bold"
            >
              <span>Total</span><span>${{ calculateTotalPrice }}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <OrderSuccess
      :showDialog="showDialog"
      v-if="showDialog"
      @closeDialog="showDialog = false"
    />
  </div>
</template>

<script>
import OrderSuccess from "@/components/global/OrderSuccess.vue";
import { CartsModule } from "@/store/carts";
import { mapState } from "pinia";

export default {
  data() {
    return {
      countries: ["Egypt", "Lebanon", "America", "Seria", "Jordan"],
      showDialog: false,
    };
  },

  components: {
    OrderSuccess,
  },
  computed: {
    ...mapState(CartsModule, ["cartItems"]),
    calculateTotalPrice() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total += Math.ceil(
          (product.price - product.price * (product.discountPercentage / 100)) *
            product.quantity
        );
      });
      return total;
    },
  },
};
</script>

<style lang="scss">
//Media Queries
@media (max-width: 1280px) {
  .checkout-left {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
  .checkout-right {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
}
</style>
