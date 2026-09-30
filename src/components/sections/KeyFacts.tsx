import { keyFacts } from "@/content/home";

/** Компактная полоса подтверждённых фактов о курсе сразу после Hero. */
export function KeyFacts() {
  return (
    <section aria-label="Коротко о курсе" className="container-page pt-16 sm:pt-20 lg:pt-24">
      <dl className="grid gap-px overflow-hidden rounded-card border border-line bg-line shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {keyFacts.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col gap-2 bg-surface p-6 sm:p-7"
          >
            <dt className="order-last text-[0.9375rem] leading-snug text-muted">{fact.label}</dt>
            <dd className="font-display text-[1.5rem] leading-tight font-extrabold text-navy-900 lg:text-[1.625rem]">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
