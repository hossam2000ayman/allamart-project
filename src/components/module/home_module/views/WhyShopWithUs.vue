<template>
  <div class="shop-with-us py-14 px-12">
    <div class="title">
      <h2 class="text-center mb-5"><span>Why Shop </span> with us ?</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col
          cols="3"
          class="px-1"
          v-for="(reason, index) in reasons"
          :key="index"
        >
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img :src="reason.image" alt="" />
            </div>
            <v-card-title
              style="
                white-space: pre-wrap;
                line-height: 1.2;
                font-size: 20px;
                font-weight: 700;
              "
              >{{ reason.answer }}
            </v-card-title>
            <v-card-text class="pb-0" style="font-size: 14px"
              >{{ reason.description }}
            </v-card-text>
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reasons: [
        {
          answer: "Free Shipping On First Order",
          description: "Lorem ipsum dolor sit amet",
          image: require("@/assets/images/free-shipping.png"),
        },
        {
          answer: "Weekly Flash Sale",
          description: "Lorem ipsum dolor sit amet",
          image: require("@/assets/images/weekly-flash-sales.png"),
        },
        {
          answer: "Annual Payment Discount",
          description: "Lorem ipsum dolor sit amet",
          image: require("@/assets/images/discount.png"),
        },
        {
          answer: "Cashback Reward Program",
          description: "Lorem ipsum dolor sit amet",
          image: require("@/assets/images/cash-back.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.shop-with-us {
  background-image: url(../../../../assets/images/why-shop-with-us-banner.webp);
  background-repeat: repeat-x;
  background-size: cover;
  h2 {
    font-size: 45px;
    font-weight: 900;
    color: white;
    span {
      color: rgb(41, 251, 223);
    }
  }
}
</style>
