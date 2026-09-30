/**
 * Глобальные данные сайта: название, адрес, навигация, контакты.
 *
 * Правило проекта: здесь только факты, подтверждённые исходным сайтом
 * nalog-for-you.ru. Всё, что ещё не подтверждено, помечено TODO и
 * не выводится на страницу, пока не будет заполнено.
 */

export const siteConfig = {
  name: "Налоги для Вас",
  shortDescription: "Онлайн-школа налогового образования Ирины Авдеенковой",
  url: "https://nalog-for-you.ru",
  locale: "ru_RU",
  contacts: {
    // Подтверждено: e-mail указан в контактах исходного сайта.
    email: "avdeenkova.i@yandex.ru",
    // TODO: телефон есть на исходном сайте, но не был получен при анализе.
    phone: null as string | null,
  },
} as const;

export type NavItem = {
  label: string;
  href: `#${string}`;
};

/** Якоря совпадают с id секций на главной странице. */
export const mainNav: NavItem[] = [
  { label: "Курсы", href: "#courses" },
  { label: "Программа", href: "#program" },
  { label: "Об эксперте", href: "#expert" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export const primaryCta = { label: "Выбрать курс", href: "#courses" } as const;
