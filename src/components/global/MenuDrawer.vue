<template>
  <div class="menu_drawer">
    <v-navigation-drawer
      temporary
      v-model="drawer"
      width="370"
      class="px-5 pt-0 cart-drawer"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="pl-0 pr-2 d-flex justify-space-between align-center w-100"
          style="font-weight: bold; font-size: 17px"
        >
          Menu
          <v-icon @click="drawer = false">mdi-close</v-icon>
        </v-card-title>

        <v-list>
          <v-list-item
            class="px-0"
            v-for="category in categories"
            :key="category.route"
            @click="
              $router.push({
                name: 'products-category',
                query: { title: category.title, category: category.route },
              })
            "
          >
            <v-list-item-title>{{ category.title }}</v-list-item-title>
          </v-list-item>
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="px-0">
                <v-list-item-title>Languages</v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item class="d-flex align-center" style="gap: 5px">
              <v-list-item-title>
                <span v-html="this.$svg.en_lang" class="mr-2"></span>
                English
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="d-flex align-center" style="gap: 5px">
              <v-list-item-title>
                <span v-html="this.$svg.de_lang" class="mr-2"></span>
                Deutech
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { ProductsModule } from "@/store/products";
import { mapState } from "pinia";

export default {
  inject: ["emitter"],
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapState(ProductsModule, ["categories"]),
  },

  mounted() {
    this.emitter.on("toggleMenu", () => {
      this.drawer = true;
    });
  },
};
</script>
