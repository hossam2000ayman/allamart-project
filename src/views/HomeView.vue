<template class="home">
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
</template>
<script>
import TheFeatures from "@/components/module/home_module/views/TheFeatures.vue";
import TopOffers from "@/components/module/home_module/views/TopOffers.vue";
import UpperBanner from "@/components/module/home_module/views/UpperBanner.vue";

export default {
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
  },
};
</script>
