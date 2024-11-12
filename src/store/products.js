import axios from "axios";
import { defineStore } from "pinia";
export const ProductsModule = defineStore("ProductsModule", {
  //in pinia state act as state + getters
  state: () => ({
    newLaptops: [],
    newSmartphones: [],
    newTablets: [],
    newMotorcycles: [],
    newMobileAccessories: [],
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
      this.newLaptops = await this.getProductsByCategory("laptops").then(
        (response) => {
          return response;
        }
      );
      this.newTablets = await this.getProductsByCategory("tablets").then(
        (response) => {
          return response;
        }
      );
      this.newSmartphones = await this.getProductsByCategory(
        "smartphones"
      ).then((response) => {
        return response;
      });
      this.newMotorcycles = await this.getProductsByCategory("motorcycle").then(
        (response) => {
          return response;
        }
      );

      this.newMobileAccessories = await this.getProductsByCategory(
        "mobile-accessories"
      ).then((response) => {
        return response;
      });
    },
    async openProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((response) => {
          this.categoryProduct = response.data;
        });
    },
    async getProductsByCategory(category) {
      //make this method return promise to be able to pass the data to other variables like (states)
      return axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((response) => {
          return response.data.products;
        })
        .catch((error) => {
          console.log(error);
          return [];
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
