import type { Metadata, Viewport } from "next";
import { Literata, Onest } from "next/font/google";
import { siteConfig } from "@/content/site";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin", "cyrillic"],
  axes: ["opsz"],
  display: "swap",
});

const title = "Онлайн-курс по НДС Ирины Авдеенковой — «Налоги для Вас»";
const description =
  "Онлайн-курс по НДС: базовые основы налога на добавленную стоимость и все изменения налогового законодательства. Автор программы — Ирина Авдеенкова. Весь пакет уроков — 1 000 ₽.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description,
  applicationName: siteConfig.name,
  authors: [{ name: "Ирина Авдеенкова" }],
  keywords: [
    "курс НДС",
    "онлайн-курс по НДС",
    "налог на добавленную стоимость",
    "изменения НДС",
    "обучение бухгалтеров",
    "Ирина Авдеенкова",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title,
    description,
    // TODO: добавить app/opengraph-image.(png|tsx) с фото эксперта.
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${onest.variable} ${literata.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
