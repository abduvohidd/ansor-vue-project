import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Our-services",
    name: "OurServices",
    component: () => import('@/views/links/OurServices.vue'),
  },
  {
    path: "/Industry",
    name: "Industry",
    component:()=> import('@/views/links/Industry.vue'),
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: ()=> import('@/views/links/Portfolio.vue'),
  },
  {
    path: "/About-us",
    name: "AboutUs",
    component: ()=> import('@/views/links/AboutUs.vue'),
  },
  {
    path: "/Education",
    name: "Education",
    component:()=> import('@/views/links/Education.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
