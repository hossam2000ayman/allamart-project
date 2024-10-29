import axios from "axios";
import { defineStore } from "pinia";
export const ProductsModule = defineStore("ProductsModule", {
  state: () => ({
    flashDeals: [],
    newFoods: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((response) => {
          this.flashDeals = response.data.products.slice(0, 30); //get first 8 product from this array
          this.newFoods = response.data.products
            .slice(0, 30)
            .filter((food) => food.category === "groceries");
          console.log("flashDeals :: ", this.flashDeals);
          console.log("newFoods :: ", this.newFoods);
        })
        .catch((error) => console.log(error));
    },
  },
});
