<template>
  <div class="flash-deals pt-16">
    <v-container fluid>
      <v-row>
        <v-col cols="3" v-for="product in products" :key="product.id">
          <v-card elevation="0" class="pb-6">
            <v-card-title class="pl-0 pb-1 text-sm-body-1 font-weight-bold">
              {{ product.title }}
            </v-card-title>
            <img
              :src="
                shownItem[product.title]
                  ? shownItem[product.title]
                  : product.thumbnail
              "
              class="w-100"
              style="height: 200px"
              alt=""
            />
            <v-card-text class="pl-0 pb-1">
              {{
                product.description.split(" ").length < 8
                  ? product.description
                  : product.description.split(" ").slice(0, 10).join(" ") +
                    "..."
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
            <v-btn-toggle v-model="shownItem[product.title]">
              <v-btn
                v-for="(picture, index) in product.images"
                :value="picture"
                :key="index"
                size="x-small"
              >
                <img
                  :src="picture"
                  width="30"
                  height="30"
                  style="
                    border-radius: 50%;
                    border: 1px solid rgb(0, 0, 0, 0.3);
                  "
                />
              </v-btn>
            </v-btn-toggle>
            <div class="mt-5">
              <v-btn
                density="compact"
                class="px-12"
                style="text-transform: none; border-radius: 30px"
                variant="outlined"
              >
                Choose Options
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      shownItem: {},
    };
  },
};
</script>
