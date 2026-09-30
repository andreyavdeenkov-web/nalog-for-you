import { vatDifficulties } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Блок «Проблема»: почему НДС требует системного подхода. */
export function WhyVat() {
  return (
    <section aria-labelledby="why-title" className="py-24 sm:py-28 lg:py-36">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="why-title"
              eyebrow="Почему это непросто"
              title="НДС — это система, а не набор отдельных правил"
              lead="Налог на добавленную стоимость — одна из самых объёмных тем налогового законодательства. Сложность не в отдельных нормах, а в том, как они связаны между собой."
            />
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {vatDifficulties.map((item, i) => (
            <li
              key={item.title}
              className="grid grid-cols-[2.75rem_1fr] gap-x-4 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[4rem_1fr] sm:py-9 lg:first:pt-2"
            >
              <span
                aria-hidden
                className="pt-0.5 font-display text-lg font-extrabold text-blue-500 tabular-nums"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-h3 font-bold">{item.title}</h3>
                <p className="mt-3 max-w-[34rem] text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
