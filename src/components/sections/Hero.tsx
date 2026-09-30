import { vatCourse } from "@/content/courses";
import { expert } from "@/content/expert";
import { ButtonLink } from "@/components/ui/Button";
import { ExpertPortrait } from "@/components/ui/ExpertPortrait";
import { ArrowRightIcon, PlayIcon } from "@/components/ui/icons";

/** «Ступени» из синих прямоугольников — графический мотив исходного сайта. */
function BrandSteps({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      <div className="absolute inset-0 bg-navy-700" />
      <div className="absolute top-[22%] left-[20%] right-0 bottom-0 bg-blue-600" />
      <div className="absolute top-[46%] left-[42%] right-0 bottom-0 bg-blue-500" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy-900 text-white"
    >
      <BrandSteps className="-z-10 right-0 bottom-0 h-[30%] w-[70%] sm:h-[36%] lg:h-[78%] lg:w-[34%]" />

      <div className="container-page grid items-center gap-14 pt-10 pb-20 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pt-16 lg:pb-28">
        {/* Текст */}
        <div className="flex flex-col lg:col-span-7">
          <p className="eyebrow text-cream/85 motion-safe:animate-rise">{vatCourse.tagline}</p>

          <h1
            id="hero-title"
            className="mt-6 text-mega font-extrabold text-cream uppercase motion-safe:animate-rise [animation-delay:80ms]"
          >
            Курс
            <br /> по&nbsp;НДС
          </h1>

          <p className="mt-7 font-display text-[1.375rem] leading-snug font-bold text-white motion-safe:animate-rise [animation-delay:140ms] sm:text-[1.625rem]">
            Понятно, системно, на&nbsp;практике
          </p>

          <p className="mt-5 max-w-[36rem] text-lead text-white/70 motion-safe:animate-rise [animation-delay:200ms]">
            {vatCourse.summary} Автор программы —{" "}
            <a
              href="#expert"
              className="font-medium text-cream underline decoration-cream/40 decoration-1 underline-offset-4 transition-colors hover:decoration-cream"
            >
              {expert.name}
            </a>
            .
          </p>

          <div className="mt-10 flex flex-col gap-3 motion-safe:animate-rise [animation-delay:260ms] sm:flex-row">
            <ButtonLink
              href="#program"
              size="lg"
              variant="cream"
              icon={<ArrowRightIcon className="order-last" />}
            >
              Посмотреть программу
            </ButtonLink>
            <ButtonLink href="#demo" size="lg" variant="outlineLight" icon={<PlayIcon />}>
              Смотреть бесплатный урок
            </ButtonLink>
          </div>
        </div>

        {/* Портрет с жёлтыми плашками, как на исходном сайте */}
        <div className="relative mx-auto w-full max-w-[25rem] motion-safe:animate-rise [animation-delay:200ms] sm:max-w-[27rem] lg:col-span-5 lg:max-w-none lg:pl-6">
          <ExpertPortrait
            expert={expert}
            priority
            sizes="(min-width: 1024px) 36vw, (min-width: 640px) 27rem, 100vw"
            className="shadow-lift ring-1 ring-white/10"
          />
          <div className="absolute -bottom-5 -left-3 flex flex-col items-start gap-1.5 sm:-left-8">
            <span className="rounded-md bg-sun px-3 py-1.5 font-display text-[0.8125rem] font-bold text-navy-900 shadow-soft">
              {expert.role}
            </span>
            <span className="rounded-md bg-sun px-3.5 py-2 font-display text-[1.25rem] leading-none font-extrabold text-navy-900 shadow-soft sm:text-[1.5rem]">
              {expert.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
