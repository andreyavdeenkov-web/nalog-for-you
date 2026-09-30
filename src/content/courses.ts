/**
 * Каталог курсов. Сейчас один курс — НДС, но структура рассчитана
 * на школу с несколькими курсами: страница курса, тарифы и
 * Schema.org-разметка строятся из этих данных.
 */

export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  /** Подзаголовок-слоган с исходного сайта. */
  tagline: string;
  summary: string;
  /** Темы, подтверждённые исходным сайтом. Полная программа — в program. */
  keyTopics: string[];
  price: { amount: number; currency: "RUB"; label: string } | null;
  /** Площадки, где размещены видеоуроки. */
  videoPlatforms: string[];
};

export const vatCourse: Course = {
  slug: "nds",
  title: "Онлайн-курс по НДС",
  shortTitle: "НДС",
  tagline: "Программа для быстрого понимания НДС",
  summary:
    "Базовые основы налога на добавленную стоимость и все изменения налогового законодательства по НДС — в одной структурированной программе.",
  keyTopics: [
    "Налогоплательщики НДС",
    "Объект налогообложения",
    "Место реализации товаров, работ и услуг",
  ],
  // Подтверждено: «Весь пакет уроков стоит 1 000 рублей».
  // TODO: уточнить, есть ли на исходном сайте другие тарифы/пакеты.
  price: { amount: 1000, currency: "RUB", label: "весь пакет уроков" },
  videoPlatforms: ["YouTube", "RUTUBE"],
};

export const courses: Course[] = [vatCourse];

export function formatPrice(amount: number) {
  return `${new Intl.NumberFormat("ru-RU", { useGrouping: "always" }).format(amount)} ₽`;
}
