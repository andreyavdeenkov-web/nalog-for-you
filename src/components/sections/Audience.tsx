import type { ComponentType, SVGProps } from "react";
import { audience } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BriefcaseIcon,
  CalculatorIcon,
  CompassIcon,
  LedgerIcon,
  ScaleIcon,
} from "@/components/ui/icons";

// Иконки сопоставлены по порядку с content/home.ts → audience.
const icons: ComponentType<SVGProps<SVGSVGElement>>[] = [
  CalculatorIcon,
  LedgerIcon,
  BriefcaseIcon,
  ScaleIcon,
  CompassIcon,
];

export function Audience() {
  return (
    <section
      aria-labelledby="audience-title"
      className="border-y border-line bg-surface py-24 sm:py-28 lg:py-36"
    >
      <div className="container-page grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <div className="pb-8 md:col-span-2 lg:col-span-1 lg:pr-6 lg:pb-0">
          <SectionHeading
            id="audience-title"
            eyebrow="Для кого курс"
            title="Для тех, кто работает с НДС на практике"
            lead="Программа выстроена последовательно, поэтому подходит и для систематизации опыта, и для первого знакомства с налогом."
          />
        </div>

        {audience.map((segment, i) => {
          const Icon = icons[i % icons.length];
          return (
            <article
              key={segment.title}
              className="group flex flex-col rounded-card border border-line bg-paper/60 p-7 transition-colors duration-300 hover:border-line-strong hover:bg-paper sm:p-8 md:last:col-span-2 lg:last:col-span-1"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-surface text-ink-800 ring-1 ring-line transition-colors group-hover:text-brass-600">
                <Icon width={24} height={24} />
              </span>
              <h3 className="mt-8 font-serif text-h3 font-medium">{segment.title}</h3>
              <p className="mt-3 text-muted">{segment.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
