import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { routes } from "./route";

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
