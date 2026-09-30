# Налоги для Вас

Сайт онлайн-школы налогового образования Ирины Авдеенковой.

Стек: Next.js 16 (App Router, статическая генерация), TypeScript, Tailwind CSS v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # продакшн-сборка
npm run lint
```

## Структура

```
src/
  app/            layout, page, globals.css (дизайн-токены), robots, sitemap
  components/
    layout/       Header (и позже Footer)
    sections/     секции главной страницы
    ui/           Button, SectionHeading, Logo, ExpertPortrait, icons
  content/        все тексты и данные (курсы, эксперт, навигация)
  lib/            schema.ts — JSON-LD
docs/ARCHITECTURE.md — информационная архитектура и дизайн-система
```

## Правило контента

На сайте используются только факты, подтверждённые исходным сайтом
nalog-for-you.ru. Неподтверждённые данные помечены `TODO` в `src/content/*`
и не выводятся на страницу. Не добавлять отзывы, цифры, регалии и обещания
«от себя».
