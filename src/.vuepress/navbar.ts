import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Главная",
    icon: "home",
    link: "/",
  },
  {
    text: "Скачать",
    icon: "download",
    link: "/download",
  },
  {
    text: "Демо",
    icon: "laptop-code",
    link: "/demo",
  },
  {
    text: "Документация",
    icon: "book",
    children: [
      {
        text: "Магазин",
        icon: "store",
        prefix: "store/",
        link: "store/",
      },
      {
        text: "Администрирование",
        icon: "toolbox",
        prefix: "admin/",
        link: "admin/",
      },
      {
        text: "Разработка",
        icon: "code",
        prefix: "develop/",
        link: "develop/",
      },
    ],
  },
    {
      text: "Форум",
      icon: "comments",
      link: "https://forum.opencart.name",
    },
]);
