<template>
  <div class="single-product-details mt-16">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            class="w-100"
            height="400"
            alt=""
            v-if="!loading"
          />
          <v-skeleton-loader v-if="loading" type="image, image, image">
          </v-skeleton-loader>
          <v-tabs center-active v-model="tab" class="mt-5">
            <v-tab
              v-for="(image, i) in singleProduct.images"
              :key="i"
              class="mx-10"
              :value="image"
            >
              <img :src="image" alt="" width="100" height="100" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="12" md="5" class="pt-0 pl-0 mt-8 mt-md-0">
          <v-skeleton-loader v-if="loading" type="article, article, article">
          </v-skeleton-loader>
          <v-card elevation="0" v-if="!loading">
            <v-card-title
              class="px-0"
              style="font-size: 18px; font-weight: bold"
            >
              ({{ singleProduct.title }}) Sample -
              {{ singleProduct.category }} For Sale
            </v-card-title>
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="singleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="x-small"
                density="compact"
              >
              </v-rating>
              <span class="mt-1" style="font-size: 14px; color: rgb(96, 96, 96)"
                >Stock {{ singleProduct.stock }}</span
              >
            </div>
            <v-card-text
              class="px-0"
              style="font-size: 14px; color: rgb(96, 96, 96)"
            >
              {{ singleProduct.description }}
            </v-card-text>
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 14px; color: rgb(96, 96, 96)"
            >
              Brand : {{ singleProduct.brand }}
            </v-card-text>

            <v-card-text
              class="px-0 pt-0"
              style="font-size: 14px; color: rgb(96, 96, 96)"
            >
              Avaliability :
              {{ singleProduct.stock > 0 ? "In Stock" : "Out of Stock" }}
              <v-card-text class="pl-0 pt-0">
                <del> ${{ singleProduct.price }} </del>
                From
                <span style="font-weight: 900; font-size: 16px">
                  ${{
                    Math.ceil(
                      singleProduct.price -
                        singleProduct.price *
                          (singleProduct.discountPercentage / 100)
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
              <v-icon size="22" @click="quantity === 1 ? false : quantity--">
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
                  singleProduct.price -
                    singleProduct.price *
                      (singleProduct.discountPercentage / 100)
                ) * quantity
              }}
            </v-card-text>
            <v-card-actions class="mt-7 w-100 px-0">
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
                @click="addToCart(singleProduct)"
                :loading="btnLoading"
              >
                Add To Cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { CartsModule } from "@/store/carts";
import { ProductsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";

export default {
  inject: ["emitter"],
  data() {
    return {
      loading: false,
      quantity: 1,
      tab: "",
      btnLoading: false,
    };
  },

  components: {
    VSkeletonLoader,
  },
  async beforeMount() {
    this.loading = true;
    await this.getSingleProductById(this.$route.params.id);
    this.loading = false;
  },
  computed: {
    ...mapState(ProductsModule, ["singleProduct"]),
  },
  methods: {
    ...mapActions(ProductsModule, ["getSingleProductById"]),
    ...mapActions(CartsModule, ["addItem"]),
    addToCart(product) {
      product.quantity = this.quantity;
      this.addItem(product);
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(product);
        //open the cart drawer by emit this listener
        this.emitter.emit("toggleCart");
        this.emitter.emit("showSnackbarMessage", product.title);
      }, 1000);
    },
  },
};
</script>
<style scoped>
.v-tabs--density-default {
  --v-tabs-height: 100px;
}
</style>
