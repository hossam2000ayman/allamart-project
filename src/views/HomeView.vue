<template class="home">
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
  <FlashDeals :products="flashDeals" />
</template>
<script>
import TheFeatures from "@/components/module/home_module/views/TheFeatures.vue";
import TopOffers from "@/components/module/home_module/views/TopOffers.vue";
import UpperBanner from "@/components/module/home_module/views/UpperBanner.vue";
import FlashDeals from "@/components/module/home_module/views/FlashDeals.vue";
import { ProductsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    FlashDeals,
  },
  computed: {
    ...mapState(ProductsModule, ["flashDeals"]),
  },
  methods: {
    ...mapActions(ProductsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
