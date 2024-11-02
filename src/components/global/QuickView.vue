<template>
  <div class="quick-view mt-16">
    <v-dialog v-model="dialog" max-width="900" max-height="500">
      <v-icon
        style="
          position: absolute;
          right: -14px;
          top: -14px;
          background-color: black;
          color: rgb(198, 198, 198);
          font-size: 18px;
          padding: 13px;
          z-index: 10;
        "
        @click="dialog = false"
      >
        mdi-close
      </v-icon>
      <v-card elevation="0">
        <v-container fluid class="content-card bg-white pt-10 px-10">
          <v-row>
            <v-col cols="7">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-100"
                height="300"
                alt=""
                v-if="!loading"
              />
              <v-skeleton-loader v-if="loading" type="image, image, image">
              </v-skeleton-loader>
              <v-tabs center-active v-model="tab" class="mt-10">
                <v-tab
                  v-for="(image, i) in product.images"
                  :key="i"
                  class="mx-5"
                  :value="image"
                >
                  <img :src="image" alt="" width="100" height="100" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="5" class="pt-0 pl-0">
              <v-skeleton-loader
                v-if="loading"
                type="article, article, article"
              >
              </v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 18px;
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                >
                  ({{ product.title }}) Sample - {{ product.category }} For Sale
                </v-card-title>
                <div
                  class="rating-parent d-flex align-center"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-2"
                    size="x-small"
                    density="compact"
                  >
                  </v-rating>
                  <span
                    class="mt-1"
                    style="font-size: 14px; color: rgb(96, 96, 96)"
                    >Stock {{ product.stock }}</span
                  >
                </div>
                <v-card-text
                  class="px-0"
                  style="font-size: 14px; color: rgb(96, 96, 96)"
                >
                  {{ product.description }}
                </v-card-text>
                <v-card-text
                  class="px-0 pt-0"
                  style="font-size: 14px; color: rgb(96, 96, 96)"
                >
                  Brand : {{ product.brand }}
                </v-card-text>

                <v-card-text
                  class="px-0 pt-0"
                  style="font-size: 14px; color: rgb(96, 96, 96)"
                >
                  Avaliability :
                  {{ product.stock > 0 ? "In Stock" : "Out of Stock" }}
                  <v-card-text class="pl-0 pt-0">
                    <del> ${{ product.price }} </del>
                    From
                    <span style="font-weight: 900; font-size: 16px">
                      ${{
                        Math.ceil(
                          product.price -
                            product.price * (product.discountPercentage / 100)
                        )
                      }}
                    </span>
                  </v-card-text>
                </v-card-text>
                <v-card-text class="pl-0 pt-0"> Quantity </v-card-text>
                <div
                  class="counter px-1"
                  style="
                    border-radius: 30px;
                    border: 1px solid rgb(201, 201, 201);
                    width: fit-content;
                  "
                >
                  <v-icon
                    size="22"
                    @click="quantity === 1 ? false : quantity--"
                  >
                    mdi-minus
                  </v-icon>
                  <input
                    type="number"
                    style="
                      border: none;
                      outline: none;
                      width: 60px;
                      font-size: 13px;
                    "
                    class="text-center py-2"
                    min="1"
                    v-model="quantity"
                  />
                  <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
                </div>
                <v-card-text class="pl-0">
                  SubTotal: $
                  {{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quantity
                  }}
                </v-card-text>
                <v-card-actions class="mt-2 w-100 px-0">
                  <v-btn
                    variant="outlined"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      background-color: rgb(20, 20, 20);
                    "
                    class="w-75 text-white"
                    density="compact"
                    height="50"
                    @click="addToCart(product)"
                    :loading="btnLoading"
                  >
                    Add To Cart
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { CartsModule } from "@/store/carts.js";
export default {
  inject: ["emitter"],
  methods: {
    ...mapActions(CartsModule, ["addItem"]),
    addToCart(product) {
      product.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(product);
        //open the cart drawer by emit this listener
        this.emitter.emit("toggleCart");
        this.emitter.emit("showSnackbarMessage", product.title);
        //and close the dialog
        this.dialog = false;
      }, 1000);
    },
  },
  data() {
    return {
      loading: false,
      quantity: 1,
      tab: "",
      dialog: false,
      product: "",
      btnLoading: false,
    };
  },

  components: {
    VSkeletonLoader,
  },

  mounted() {
    this.emitter.on("openQuickView", (product) => {
      this.loading = true;
      this.product = product;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>
<style lang="scss" scoped>
.v-tabs--density-default {
  --v-tabs-height: 100px;
}
.v-card--variant-elevated {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(151, 150, 150);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(224, 224, 224);
  }
}
</style>
