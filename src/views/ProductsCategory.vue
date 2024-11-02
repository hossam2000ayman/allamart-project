<template>
  <div class="products-category mt-10">
    <h1 class="text-center">{{ $route.params.title }}</h1>
    <v-container>
      <v-card :loading="loading" class="pt-5" min-height="700" elevation="0">
        <v-row v-if="loading">
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader
              type="image, article, button"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
            cols="3"
            v-for="product in categoryProduct.products"
            :key="product.id"
            class="px-5"
          >
            <v-lazy>
              <v-card elevation="0" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="image-parent position-relative"
                    style="height: 150px; overflow: hidden"
                  >
                    <img
                      :src="
                        shownItem[product.title]
                          ? shownItem[product.title]
                          : product.thumbnail
                      "
                      class="w-100"
                      style="height: 100%"
                      v-bind="props"
                      :style="`height: 200px; transition: 0.5s all ease-in-out; scale: ${
                        isHovering ? 1.1 : 1
                      }; cursor: pointer`"
                    />
                    <v-btn
                      width="90"
                      height="30"
                      variant="outlined"
                      class="bg-white quick-view-btn"
                      density="compact"
                      :style="`border-radius: 30px; font-size: 12px; text-transform: none;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    opacity: ${isHovering ? 1 : 0};
                    transition: 0.3s all ease-in;
                    transition-delay: 0.5s`"
                      @click="openQuickView(product)"
                    >
                      Quick View
                    </v-btn>
                  </div>
                </v-hover>

                <v-card-text class="pl-0 pb-1">
                  ({{ product.title }})
                  {{
                    product.description.split(" ").length <= 5
                      ? product.description
                      : product.description
                          .split(" ")
                          .slice(0, 5 - product.title.split(" ").length)
                          .join(" ") + "..."
                  }}
                </v-card-text>
                <v-rating
                  v-model="product.rating"
                  half-increments
                  readonly
                  color="yellow-darken-2"
                  size="x-small"
                  density="compact"
                ></v-rating>
                <v-card-text class="pl-0 pt-0">
                  <del> ${{ product.price }} </del>
                  From
                  <span
                    class="text-red"
                    style="font-weight: 900; font-size: 16px"
                  >
                    ${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}
                  </span>
                </v-card-text>
                <v-btn-toggle v-model="shownItem[product.title]">
                  <v-btn
                    v-for="(picture, index) in product.images"
                    :value="picture"
                    :key="index"
                    size="x-small"
                    rounded="xl"
                    :ripple="false"
                  >
                    <img
                      :src="picture"
                      width="30"
                      height="30"
                      style="
                        border-radius: 50%;
                        border: 1px solid rgb(0, 0, 0, 0.3);
                      "
                    />
                  </v-btn>
                </v-btn-toggle>
                <div class="mt-5">
                  <v-btn
                    density="compact"
                    class="px-6"
                    style="text-transform: none; border-radius: 30px"
                    variant="outlined"
                    @click="
                      $router.push({
                        name: 'product-details',
                        params: { id: product.id },
                      })
                    "
                  >
                    Choose Options
                  </v-btn>
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { ProductsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";

export default {
  inject: ["emitter"],
  data() {
    return {
      loading: false,
      shownItem: {},
    };
  },

  computed: {
    ...mapState(ProductsModule, ["categoryProduct"]),
  },
  methods: {
    ...mapActions(ProductsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.emitter.emit("openQuickView", product);
    },
  },
  components: {
    VSkeletonLoader,
  },

  watch: {
    async $route() {
      document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },

  async mounted() {
    this.loading = true;
    console.log("route :: ", this.$route);
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>
