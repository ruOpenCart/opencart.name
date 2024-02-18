import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default defineUserConfig({
  base: "/",
  port: 8080,

  lang: "ru-RU",
  title: "Опенкарт",
  description: "Документация по опенкарт!",

  head: [
    [
      "script",
      { type: "text/javascript" },
      `
      '<!-- /Yandex.Metrika counter -->
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(66920854, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
      });
      <!-- /Yandex.Metrika counter -->',
    `,
    ],
    [
      "noscript",
      {},
      '<div><img src="https://mc.yandex.ru/watch/66920854" style="position:absolute; left:-9999px;" alt="" /></div>',
    ],
  ],

  theme,

  plugins: [
    googleAnalyticsPlugin({
      id: "G-SR3RM7Z8T6",
    }),
  ],

  // Enable it with pwa
  shouldPrefetch: false,
});
