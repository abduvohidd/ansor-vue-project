import { createApp } from "vue";
import { createI18n } from 'vue-i18n';
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "@/lang/en.json";
import uz from "@/lang/uz.json";
import ru from "@/lang/ru.json";
import "./assets/main.css";



const messages = {
  "en": en,
  "uz": uz,
  "ru":ru,
}
const i18n = createI18n({
  locale: "en",
  fallbackLocale: 'uz' && 'ru',
  messages
});

// const i18n = createI18n({
//   legacy: false,
//   locale: "en",
//   globalInjection: true,
//   messages: {
//     en: {
//       message: {
//         language: "English",
//         greeting: "Hello !",
//         btn: "Contant Us",
//       },
//       link: {
//         ourService: "Our Services",
//         industry: "Industry",
//         portfolio: "Portfolio",
//         aboutUs: "About us",
//       },
//     },
//     uzb: {
//       message: {
//         language: "Uzbek",
//         greeting: "Assalomu aleykum",
//         btn: " Biz bilan bog'lanish",
//       },
//       link: {
//         ourService: "Bizning xizmatlarimiz",
//         industry: "Sanoat",
//         portfolio: "Portfel",
//         aboutUs: "Biz haqimizda",
//       },
//     },
//     ru: {
//       message: {
//         language: "Russian",
//         greeting: "привет",
//         btn: "Свяжитесь с нами",
//       },
//       link: {
//         ourService: "Наши услуги",
//         industry: "Промышленность",
//         portfolio: "портфолио",
//         aboutUs: "О нас",
//       },
//     },
//   },
// });





createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(i18n)
  .use(router).mount("#app");
