import { studySources } from "@/content/home";
import { BookIcon, GavelIcon, LetterIcon } from "@/components/ui/icons";

const icons = [BookIcon, GavelIcon, LetterIcon];

/** «Что будем изучать?» — нормативная база курса. Продолжает тёмный Hero. */
export function StudySources() {
  return (
    <section aria-labelledby="sources-title" className="bg-navy-950 text-white">
      <div className="container-page grid gap-8 py-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-16">
        <h2
          id="sources-title"
          className="text-[1.75rem] leading-tight font-extrabold text-cream uppercase lg:col-span-4 lg:text-[2.125rem]"
        >
          Что будем изучать?
        </h2>
        <ul className="grid gap-px overflow-hidden rounded-card bg-white/10 sm:grid-cols-3 lg:col-span-8">
          {studySources.map((source, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={source} className="flex items-center gap-4 bg-navy-950 p-5 sm:flex-col sm:items-start sm:p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blue-500/20 text-cream">
                  <Icon width={22} height={22} />
                </span>
                <span className="font-display text-[1.0625rem] leading-snug font-bold text-white">
                  {source}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
