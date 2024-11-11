<template>
  <div class="quality-features py-13 bg-grey-lighten-2">
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          lg=""
          v-for="card in cards"
          :key="card.title"
          class="px-2"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="text-center d-flex align-center justify-center px-4"
              height="250"
              :elevation="isHovering ? 2 : 0"
              :color="isHovering ? 'blue-lighten-4' : 'white'"
              style="cursor: pointer"
            >
              <div class="parent">
                <span v-html="card.svg"></span>
                <v-card-title
                  style="
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 16px;
                  "
                >
                  {{ card.title }}</v-card-title
                >
                <v-card-text>{{ card.description }}</v-card-text>
              </div>
            </v-card>
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
      cards: [
        {
          title: "quality and saving",
          description: "Comperhensive quality control and affordable prices",
          svg: this.$svg.quality_and_saving,
        },

        {
          title: "global warehouse",
          description: "27 overseas warehouses",
          svg: this.$svg.global_warehouse,
        },

        {
          title: "fast shipping",
          description: "Fast and convenient door to door delivery",
          svg: this.$svg.fast_shipping,
        },

        {
          title: "payment security",
          description: "More than 10 different secure payment methods",
          svg: this.$svg.payment_security,
        },

        {
          title: "have questions?",
          description: "24/7 Customer service - We're here and happy to help",
          svg: this.$svg.have_questions,
        },
      ],
    };
  },
};
</script>
