import axios from "axios";
import { defineStore } from "pinia";
export const ProductsModule = defineStore("ProductsModule", {
  state: () => ({
    flashDeals: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((response) => {
          this.flashDeals = response.data.products.slice(0, 8); //get first 8 product from this array
          console.log("flashDeals :: ", this.flashDeals);
        })
        .catch((error) => console.log(error));
    },
  },
});
