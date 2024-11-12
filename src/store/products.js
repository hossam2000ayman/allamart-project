import axios from "axios";
import { defineStore } from "pinia";
export const ProductsModule = defineStore("ProductsModule", {
  //in pinia state act as state + getters
  state: () => ({
    flashDeals: [],
    newFoods: [],
    newBeauties: [],
    newFurnitures: [],
    newFragrances: [],
    categoryProduct: [],
    singleProduct: "",
    categories: [
      {
        route: "laptops",
        title: "Laptops",
        url: "https://dummyjson.com/products/category/laptops",
      },
      {
        route: "tablets",
        title: "Tablets",
        url: "https://dummyjson.com/products/category/tablets",
      },
      {
        route: "smartphones",
        title: "Smartphones",
        url: "https://dummyjson.com/products/category/smartphones",
      },
      {
        route: "mobile-accessories",
        title: "Mobile Accessories",
        url: "https://dummyjson.com/products/category/mobile-accessories",
      },
      {
        route: "mens-watches",
        title: "Mens Watches",
        url: "https://dummyjson.com/products/category/mens-watches",
      },

      {
        route: "fragrances",
        title: "Fragrances",
        url: "https://dummyjson.com/products/category/fragrances",
      },
      {
        route: "motorcycle",
        title: "Motorcycle",
        url: "https://dummyjson.com/products/category/motorcycle",
      },
      {
        route: "vehicle",
        title: "Vehicle",
        url: "https://dummyjson.com/products/category/vehicle",
      },
    ],
  }),
  //in pinia actions act as mutations + actions
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((response) => {
          this.flashDeals = response.data.products.slice(0, 30); //get first 8 product from this array
          this.newFoods = response.data.products.filter(
            (food) => food.category === "groceries"
          );
          this.newBeauties = response.data.products.filter(
            (beauty) => beauty.category === "beauty"
          );
          this.newFurnitures = response.data.products.filter(
            (furniture) => furniture.category === "furniture"
          );
          this.newFragrances = response.data.products.filter(
            (frangrance) => frangrance.category === "fragrances"
          );
        })
        .catch((error) => console.log(error));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((response) => {
          this.categoryProduct = response.data;
        });
    },
    async getSingleProductById(id) {
      await axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          this.singleProduct = response.data;
        });
    },
  },
});
