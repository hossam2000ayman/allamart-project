<template class="home">
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
  <FlashDeals :products="flashDeals" />
  <TopCategories />
  <NewProducts :products="newFoods" />
  <QualityFeatures />
</template>
<script>
import TheFeatures from "@/components/module/home_module/views/TheFeatures.vue";
import TopOffers from "@/components/module/home_module/views/TopOffers.vue";
import UpperBanner from "@/components/module/home_module/views/UpperBanner.vue";
import FlashDeals from "@/components/module/home_module/views/ProductSwiper.vue";
import TopCategories from "@/components/module/home_module/views/TopCategories.vue";
import NewProducts from "@/components/module/home_module/views/NewProducts.vue";
import QualityFeatures from "@/components/module/home_module/views/QualityFeatures.vue";
import { ProductsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    FlashDeals,
    TopCategories,
    NewProducts,
    QualityFeatures,
  },
  computed: {
    ...mapState(ProductsModule, ["flashDeals", "newFoods"]),
  },
  methods: {
    ...mapActions(ProductsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
