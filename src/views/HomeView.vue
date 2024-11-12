<template class="home">
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
  <ProductsComponent
    title="Smart Phones"
    color="error"
    :products="newSmartphones"
  />
  <TopCategories />
  <NewProducts
    title="New Mobile Accessories"
    :products="newMobileAccessories"
  />
  <QualityFeatures />
  <ProductsComponent title="Top Tablets" :products="newTablets" />
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
    title="Top Motorcycles"
    color="blue"
    :products="newMotorcycles"
  />
  <img src="@/assets/images/tv-banner.webp" alt="" class="w-100" />
  <ProductsComponent
    title="Top Laptops"
    color="purple"
    :products="newLaptops"
  />

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
  data() {
    return {
      // newLaptops: [],
      // newTablets: [],
      // newSmartphones: [],
      // newMotorcycles: [],
    };
  },
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
      "newLaptops",
      "newSmartphones",
      "newTablets",
      "newMotorcycles",
      "newMobileAccessories",
    ]),
  },
  methods: {
    ...mapActions(ProductsModule, ["getProducts"]),
  },
  async mounted() {
    this.getProducts();
  },
};
</script>
