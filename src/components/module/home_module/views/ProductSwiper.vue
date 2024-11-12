<template>
  <div class="products-swiper py-16 px-5">
    <div class="title mb-10 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 30px" :class="[`text-${color}`]">
        {{ title }}
      </h2>
      <!-- <a href="#" class="text-black" style="font-size: 14px">Shop All</a> -->
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <swiper
      :pagination="{ element: '.swiper-pagination', clickable: true }"
      :navigation="{ prevIcon: '.swiper-previous', nextIcon: 'swiper-next' }"
      :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :breakpoints="breakpoints"
      :loop="true"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      class="pb-5"
    >
      <swiper-slide v-for="product in products" :key="product.id">
        <v-card elevation="0" class="pb-6">
          <v-card-title class="pl-0 pb-1 text-sm-body-1 font-weight-bold">
            {{ product.title }}
          </v-card-title>
          <v-hover v-slot="{ isHovering, props }">
            <v-lazy>
              <div
                class="image-parent position-relative"
                style="height: 200px; overflow: hidden"
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
                  width="60"
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
            </v-lazy>
          </v-hover>

          <v-card-text class="pl-0 pb-1">
            {{
              product.description.split(" ").length < 8
                ? product.description
                : product.description.split(" ").slice(0, 10).join(" ") + "..."
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
            <span class="text-red" style="font-weight: 900; font-size: 16px">
              ${{
                Math.ceil(
                  product.price -
                    product.price * (product.discountPercentage / 100)
                )
              }}
            </span>
          </v-card-text>
          <v-btn-toggle v-model="shownItem[product.title]" mandatory>
            <v-btn
              v-for="(picture, index) in product.images.slice(0, 4)"
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
                style="border-radius: 50%; border: 1px solid rgb(0, 0, 0, 0.3)"
              />
            </v-btn>
          </v-btn-toggle>
          <div class="mt-5">
            <v-btn
              density="compact"
              class="px-12"
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
      <div class="swiper-previous"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
export default {
  inject: ["emitter"],
  methods: {
    openQuickView(product) {
      this.emitter.emit("openQuickView", product);
    },
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "grey",
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
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
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        580: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        990: {
          slidesPerView: 4,
        },
      },
    };
  },
};
</script>

<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: white;
    top: 40%;
    &::after {
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(69, 68, 68);
      font-weight: 900;
    }
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
}

//Media Queries
@media (max-width: 580px) {
  .products-swiper {
    .image-parent {
      height: 300px !important;
    }
    .swiper-button-next,
    .swiper-button-prev {
      top: 50%;
    }
  }
}
</style>
