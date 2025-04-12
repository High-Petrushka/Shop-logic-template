import { createRouter, createWebHistory } from "vue-router";

import AuthPage from "./views/AuthPage.vue";
import RegPage from "./views/RegPage.vue";
import UserPage from "./views/UserPage.vue";
import ShopPage from "./views/ShopPage.vue";

const routes = [
  { path: '/', component: AuthPage, name: "Auth" },
  { path: '/registration', component: RegPage, name: "Reg" },
  { path: '/user', component: UserPage, name: "User" },
  { path: '/shop', component: ShopPage, name: "Shop" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
