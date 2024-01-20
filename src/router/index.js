import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth";
import dashboard from "./dashboard";
import products from "./products";
import users from "./users";

// import Barcode from "../views/pages/product/barcodeproduct/barcode";

const routes = [...auth, ...dashboard, ...products, ...users];
export const router = createRouter({
  history: createWebHistory(),
  // linkActiveClass: 'active',
  routes,
});

export default router;
