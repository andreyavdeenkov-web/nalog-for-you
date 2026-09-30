"use client";

import { useEffect, useState } from "react";
import { mainNav, primaryCta, siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { phone } = siteConfig.contacts;

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
          ? "border-b border-white/10 bg-navy-900"
          : scrolled
            ? "border-b border-white/10 bg-navy-900/90 backdrop-blur-md"
            : "border-b border-transparent bg-navy-900"
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Logo />

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-[0.9375rem] text-white/70 transition-colors hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phone.href}
            className="hidden items-center gap-2 px-3 font-display text-[0.875rem] font-semibold tracking-wide text-white transition-colors hover:text-cream xl:inline-flex"
          >
            <PhoneIcon className="text-cream" />
            {phone.display}
          </a>
          <div className="hidden sm:block">
            <ButtonLink href={primaryCta.href} variant="cream">
              {primaryCta.label}
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="grid size-11 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню: полноэкранный лист под хедером */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto border-t border-white/10 bg-navy-900 lg:hidden"
      >
        <nav aria-label="Мобильная навигация" className="container-page flex min-h-full flex-col py-6">
          <ul className="flex flex-col">
            {mainNav.map((item, i) => (
              <li key={item.href} className="border-b border-white/10">
                <a
                  href={item.href}
                  onClick={close}
                  className="flex items-baseline justify-between py-4 font-display text-[1.5rem] font-bold text-cream"
                >
                  {item.label}
                  <span className="font-sans text-xs font-normal text-white/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-10 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <ButtonLink
              href={phone.href}
              variant="outlineLight"
              size="lg"
              icon={<PhoneIcon />}
              className="w-full"
            >
              {phone.display}
            </ButtonLink>
            <ButtonLink href={primaryCta.href} onClick={close} variant="cream" size="lg" className="w-full">
              {primaryCta.label}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
