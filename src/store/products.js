import axios from "axios";
import { defineStore } from "pinia";
export const ProductsModule = defineStore("ProductsModule", {
  state: () => ({
    flashDeals: [],
    newFoods: [],
    newBeauties: [],
    newFurnitures: [],
    newFragrances: [],
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
          this.newBeauties = response.data.products
            .slice(0, 30)
            .filter((beauty) => beauty.category === "beauty");
          this.newFurnitures = response.data.products
            .slice(0, 30)
            .filter((furniture) => furniture.category === "furniture");
          this.newFragrances = response.data.products
            .slice(0, 30)
            .filter((frangrance) => frangrance.category === "fragrances");
          console.log("flashDeals :: ", this.flashDeals);
          console.log("newFoods :: ", this.newFoods);
          console.log("newBeauties :: ", this.newBeauties);
          console.log("newFurnitures :: ", this.newFurnitures);
          console.log("newFragrances :: ", this.newFragrances);
        })
        .catch((error) => console.log(error));
    },
  },
});
