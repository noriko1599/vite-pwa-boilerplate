export const routes = [
  {
    path: "/",
    component: () => import("../layout/Main.vue"),
    children: [
      {
        path: "/",
        component: () => import("../pages/index.vue"),
      },
      {
        path: "/product/:productName",
        component: () => import("../pages/Product.vue"),
      },
      {
        path: "/send-to-lab",
        component: () => import("../pages/HowToSendToLab.vue"),
      },
      {
        path: "/search",
        component: () => import("../pages/Search.vue"),
      },
    ],
  },
];
