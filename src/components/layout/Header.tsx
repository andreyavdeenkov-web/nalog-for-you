"use client";

import { useEffect, useState } from "react";
import { mainNav, primaryCta } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Блокируем прокрутку страницы под открытым мобильным меню, закрываем по Esc.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        // backdrop-filter создаёт containing block для position: fixed,
        // поэтому при открытом меню размытие отключаем — иначе лист меню
        // позиционировался бы относительно хедера, а не окна.
        open
          ? "border-b border-line bg-paper"
          : scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md backdrop-saturate-150"
            : "border-b border-transparent bg-paper"
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Logo />

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-[0.9375rem] text-muted transition-colors hover:text-ink-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="grid size-11 place-items-center rounded-full text-ink-900 transition-colors hover:bg-ink-900/5 lg:hidden"
          >
            {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню: полноэкранный лист под хедером */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label="Мобильная навигация" className="container-page flex min-h-full flex-col py-6">
          <ul className="flex flex-col">
            {mainNav.map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={close}
                  className="flex items-baseline justify-between py-4 font-serif text-[1.625rem] font-medium tracking-[-0.01em] text-ink-900"
                >
                  {item.label}
                  <span className="font-sans text-xs text-subtle tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <ButtonLink href={primaryCta.href} onClick={close} size="lg" className="w-full">
              {primaryCta.label}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
