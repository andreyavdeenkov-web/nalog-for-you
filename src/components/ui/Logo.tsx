import { siteConfig } from "@/content/site";

/**
 * Знак школы: синий круг, как на исходном сайте, с монограммой.
 * TODO: заменить на векторный оригинал логотипа, если он есть.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`group inline-flex shrink-0 items-center gap-3 whitespace-nowrap ${className}`}
      aria-label={`${siteConfig.name} — на главную`}
    >
      <span
        aria-hidden
        className="grid size-10 place-items-center rounded-full bg-blue-500 font-display text-lg font-extrabold text-cream ring-4 ring-white/10 transition-colors group-hover:bg-blue-600"
      >
        Н
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.0625rem] font-bold tracking-[0.01em] text-cream">
          «{siteConfig.name}»
        </span>
        <span className="mt-1.5 font-display text-[0.625rem] font-semibold tracking-[0.2em] text-white/55 uppercase">
          Онлайн-школа
        </span>
      </span>
    </a>
  );
}
