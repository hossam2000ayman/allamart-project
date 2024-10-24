<template>
  <div class="features">
    <v-container>
      <v-row>
        <v-col v-for="(feature, index) in features" :key="index">
          <!-- Add class conditionally -->
          <div
            class="parent d-flex align-center justify-center"
            :class="{ second: index > 0 }"
          >
            <span v-html="feature.icon"></span>
            <span>{{ feature.name }}</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          name: "Free shipping & Returns",
          icon: this.$svg.truck,
        },
        {
          name: "Lowest price Guarantee",
          icon: this.$svg.guarantee,
        },
        {
          name: "Longest Warranties Offer",
          icon: this.$svg.trophy,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.features {
  .second {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background-color: rgb(172, 172, 172);
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
  }
}
</style>
