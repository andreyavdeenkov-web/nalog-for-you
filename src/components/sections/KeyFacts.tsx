import { keyFacts } from "@/content/home";

/** Компактная полоса подтверждённых фактов о курсе сразу после Hero. */
export function KeyFacts() {
  return (
    <section aria-label="Коротко о курсе" className="container-page">
      <dl className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {keyFacts.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col gap-2 bg-surface p-6 sm:p-7"
          >
            <dt className="order-last text-[0.9375rem] leading-snug text-muted">{fact.label}</dt>
            <dd className="font-serif text-[1.625rem] leading-tight font-medium tracking-[-0.015em] text-ink-900 lg:text-[1.75rem]">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
