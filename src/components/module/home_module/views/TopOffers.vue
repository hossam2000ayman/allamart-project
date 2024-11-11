<template>
  <div class="top-offers bg-grey-lighten-4 py-9">
    <v-container fluid class="pt-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          class="py-0 px-3 pr-lg-6 mt-3 mt-lg-0 mt-sm-0"
          v-for="(offer, index) in offers"
          :key="index"
          style="height: 290px"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                :src="offer.image"
                :style="`width: 100%; cursor: pointer; transition: 0.4s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="mt-9">
        <v-col
          cols="12"
          sm="6"
          class="mt-3 py-0 px-3 px-sm-5"
          v-for="(special, index) in specials"
          :key="index"
          style="height: 500px"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                :src="special.image"
                :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.4s all ease-in-out; scale: ${
                  isHovering ? 1.04 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offers: [
        {
          image: require("@/assets/images/playstations.webp"),
        },
        {
          image: require("@/assets/images/headset.webp"),
        },
        {
          image: require("@/assets/images/chairs.webp"),
        },
      ],
      specials: [
        {
          image: require("@/assets/images/iphones.webp"),
        },
        {
          image: require("@/assets/images/laptops.webp"),
        },
      ],
    };
  },
};
</script>
