import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  port: 8080,

  lang: "ru-RU",
  title: "Опенкарт",
  description: "Документация по опенкарт!",

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
