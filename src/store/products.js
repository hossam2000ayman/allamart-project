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

      // {
      //   route: "mens-shoes",
      //   title: "Mens Shoes",
      //   url: "https://dummyjson.com/products/category/mens-shoes",
      // },
      // {
      //   route: "mens-shirts",
      //   title: "Mens Shirts",
      //   url: "https://dummyjson.com/products/category/mens-shirts",
      // },
      // {
      //   route: "sunglasses",
      //   title: "Sunglasses",
      //   url: "https://dummyjson.com/products/category/sunglasses",
      // },

      {
        route: "fragrances",
        title: "Fragrances",
        url: "https://dummyjson.com/products/category/fragrances",
      },
      // {
      //   route: "groceries",
      //   title: "Groceries",
      //   url: "https://dummyjson.com/products/category/groceries",
      // },
      // {
      //   route: "home-decoration",
      //   title: "Home Decoration",
      //   url: "https://dummyjson.com/products/category/home-decoration",
      // },
      // {
      //   route: "furniture",
      //   title: "Furniture",
      //   url: "https://dummyjson.com/products/category/furniture",
      // },
      // {
      //   route: "kitchen-accessories",
      //   title: "Kitchen Accessories",
      //   url: "https://dummyjson.com/products/category/kitchen-accessories",
      // },,
      // {
      //   route: "sports-accessories",
      //   title: "Sports Accessories",
      //   url: "https://dummyjson.com/products/category/sports-accessories",
      // },
      // {
      //   route: "skin-care",
      //   title: "Skin Care",
      //   url: "https://dummyjson.com/products/category/skin-care",
      // }
      // {
      //   route: "beauty",
      //   title: "Beauty",
      //   url: "https://dummyjson.com/products/category/beauty",
      // },
      // {
      //   route: "tops",
      //   title: "Tops",
      //   url: "https://dummyjson.com/products/category/tops",
      // },
      // {
      //   route: "womens-bags",
      //   title: "Womens Bags",
      //   url: "https://dummyjson.com/products/category/womens-bags",
      // },
      // {
      //   route: "womens-dresses",
      //   title: "Womens Dresses",
      //   url: "https://dummyjson.com/products/category/womens-dresses",
      // },
      // {
      //   route: "womens-jewellery",
      //   title: "Womens Jewellery",
      //   url: "https://dummyjson.com/products/category/womens-jewellery",
      // },
      // {
      //   route: "womens-shoes",
      //   title: "Womens Shoes",
      //   url: "https://dummyjson.com/products/category/womens-shoes",
      // },
      // {
      //   route: "womens-watches",
      //   title: "Womens Watches",
      //   url: "https://dummyjson.com/products/category/womens-watches",
      // },
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
