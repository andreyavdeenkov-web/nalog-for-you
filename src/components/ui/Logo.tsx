import { siteConfig } from "@/content/site";

/**
 * Словесный знак школы. Монограмма «Н» — временная, до появления
 * утверждённого логотипа (TODO: заменить, если у бренда есть свой знак).
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
        className="grid size-9 place-items-center rounded-[0.7rem] bg-ink-900 font-serif text-lg font-medium text-paper transition-colors group-hover:bg-ink-800"
      >
        Н
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.1875rem] font-medium tracking-[-0.01em] text-ink-900">
          {siteConfig.name}
        </span>
        <span className="mt-1 text-[0.6875rem] font-medium tracking-[0.14em] text-subtle uppercase">
          Онлайн-школа
        </span>
      </span>
    </a>
  );
}
