<template class="home">
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
  <ProductsComponent title="Flash Deals" color="error" :products="flashDeals" />
  <TopCategories />
  <NewProducts :products="newFoods" />
  <QualityFeatures />
  <ProductsComponent title="Top Furnitures" :products="newFurnitures" />
  <v-container fluid>
    <v-row>
      <v-col cols="6" class="pr-5">
        <img src="@/assets/images/band-left-cover.webp" alt="" class="w-100" />
      </v-col>
      <v-col cols="6" class="pl-5">
        <img src="@/assets/images/band-right-cover.webp" alt="" class="w-100" />
      </v-col>
    </v-row>
  </v-container>
  <ProductsComponent
    title="Top Frangrances"
    color="purple"
    :products="newFragrances"
  />
  <img src="@/assets/images/tv-banner.webp" alt="" class="w-100" />

  <WhyShopWithUs />
</template>
<script>
import TheFeatures from "@/components/module/home_module/views/TheFeatures.vue";
import TopOffers from "@/components/module/home_module/views/TopOffers.vue";
import UpperBanner from "@/components/module/home_module/views/UpperBanner.vue";
import ProductsComponent from "@/components/module/home_module/views/ProductSwiper.vue";
import TopCategories from "@/components/module/home_module/views/TopCategories.vue";
import NewProducts from "@/components/module/home_module/views/NewProducts.vue";
import QualityFeatures from "@/components/module/home_module/views/QualityFeatures.vue";
import { ProductsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";
import WhyShopWithUs from "@/components/module/home_module/views/WhyShopWithUs.vue";
export default {
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopWithUs,
  },
  computed: {
    ...mapState(ProductsModule, [
      "flashDeals",
      "newFoods",
      "newBeauties",
      "newFurnitures",
      "newFragrances",
    ]),
  },
  methods: {
    ...mapActions(ProductsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
