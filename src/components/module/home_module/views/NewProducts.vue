<template>
  <div class="new-products pt-12">
    <div class="title mb-10 px-5 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 30px">New Foods</h2>
      <a href="#" class="text-black" style="font-size: 14px">Shop All</a>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="7" class="pt-16" v-if="!products.length">
          <v-row>
            <v-col cols="3" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7" class="pt-16" v-else>
          <swiper
            :pagination="{ element: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            class="pb-5"
          >
            <swiper-slide v-for="product in products" :key="product.id">
              <v-card elevation="0" class="pb-6">
                <v-hover v-slot="{ isHovering, props }">
                  <v-lazy>
                    <div
                      class="image-parent"
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
                    </div>
                  </v-lazy>
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
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </swiper>
        </v-col>
        <v-col cols="5">
          <img src="@/assets/images/vr-banner.webp" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },

  data() {
    return {
      shownItem: {},
    };
  },
};
</script>
