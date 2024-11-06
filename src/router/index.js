import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },

  {
    path: "/products/:category/:title",
    name: "products-category",
    component: () => import("@/views/ProductsCategory.vue"),
  },

  {
    path: "/product/details/:id",
    name: "product-details",
    component: () => import("@/views/ProductDetails.vue"),
  },

  {
    path: "/cart",
    name: "cart-page",
    component: () => import("@/views/CartPage.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("@/views/CheckoutPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
