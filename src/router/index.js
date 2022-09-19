import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import OurServices from '@/views/links/OurServices.vue';
import Industry from "@/views/links/Industry.vue";
import Portfolio from "@/views/links/Portfolio.vue";
import AboutUs from '@/views/links/AboutUs.vue';
import Education from '@/views/links/Education.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Our-services",
    name: "OurServices",
    component: OurServices,
  },
  {
    path: "/Industry",
    name: "Industry",
    component:Industry,
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/About-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/Education",
    name: "Education",
    component:Education
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
