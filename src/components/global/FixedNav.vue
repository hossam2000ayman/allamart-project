<template>
  <div class="fixed-nav">
    <v-app-bar color="#161880">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <img
              src="@/assets/images/logo.png"
              @click="$router.replace({ name: 'home' })"
              style="cursor: pointer"
              class="w-50"
            />
          </v-col>
          <v-col cols="7">
            <ul
              class="categories d-flex text-white justify-space-between"
              style="list-style: none"
            >
              <li v-for="category in categories" :key="category.title">
                <router-link
                  :to="{
                    name: 'products-category',
                    params: { category: category.route, title: category.title },
                  }"
                  style="color: white; text-decoration: none"
                >
                  {{ category.title }}
                </router-link>
              </li>
            </ul>
          </v-col>
          <v-col
            cols="3"
            class="d-flex justify-end align-center"
            style="gap: 20px"
          >
            <span
              v-html="$svg.search"
              style="fill: white; top: 13px; left: 67%"
            ></span>
            <div
              class="parent text-white d-flex justify-lg-space-between align-center"
            >
              <div
                class="options"
                v-for="(option, index) in options"
                :key="index"
              >
                <div
                  class="d-flex flex-column align-center"
                  style="cursor: pointer"
                  @click="option.action"
                >
                  <v-badge
                    location="right top"
                    :content="option.content"
                    color="red"
                    offset-x="-15"
                  ></v-badge>
                  <span
                    style="width: 28px; fill: white"
                    v-html="option.svg"
                  ></span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { ProductsModule } from "@/store/products";
import { mapState } from "pinia";
export default {
  data() {
    return {
      links: [
        "Theme Demo",
        "Shop",
        "Product",
        "New In",
        "Must Have",
        "Collections",
      ],
      //TODO will leave the values to find a way to make mixin or reusable list on application level on call (like mixin)
      options: [
        {
          name: "Cart",
          svg: this.$svg.cart,
          action: this.openCart,
          content: "2",
        },
      ],
    };
  },

  computed: {
    ...mapState(ProductsModule, ["categories"]),
  },

  inject: ["emitter"], //inject by key of provide emitter

  methods: {
    openCart() {
      this.emitter.emit("toggleCart"); //fire event and will be listen in next step
      console.log("toggleCart emit");
    },
  },
};
</script>
