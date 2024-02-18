import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Скачать",
      icon: "download",
      link: "/download",
    },
    {
      text: "Демонстрация",
      icon: "laptop-code",
      link: "/demo",
    },
    {
      text: "Магазин",
      icon: "store",
      prefix: "store/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Администрирование",
      icon: "toolbox",
      prefix: "admin/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Разработка",
      icon: "code",
      prefix: "develop/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Форум",
      icon: "comments",
      link: "https://forum.opencart.name",
    },
  ],
});
