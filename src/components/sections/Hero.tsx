import { vatCourse } from "@/content/courses";
import { expert } from "@/content/expert";
import { ButtonLink } from "@/components/ui/Button";
import { ExpertPortrait } from "@/components/ui/ExpertPortrait";
import { ArrowRightIcon, PlayIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-page grid items-center gap-12 pt-10 pb-16 sm:pt-14 md:gap-14 lg:grid-cols-12 lg:gap-10 lg:pt-16 lg:pb-24">
        {/* Текст */}
        <div className="flex flex-col lg:col-span-7 lg:pr-6">
          <p className="eyebrow flex motion-safe:animate-rise items-center gap-3">
            <span aria-hidden className="h-px w-6 bg-brass-500" />
            Онлайн-курс · Налог на добавленную стоимость
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-serif text-display font-medium motion-safe:animate-rise [animation-delay:80ms]"
          >
            НДС — понятно,
            <br className="hidden sm:block" /> системно,{" "}
            <span className="text-ink-700">на&nbsp;практике</span>
          </h1>

          <p className="mt-7 max-w-[36rem] text-lead text-muted motion-safe:animate-rise [animation-delay:160ms]">
            {vatCourse.summary} Автор программы —{" "}
            <a href="#expert" className="font-medium text-ink-900 underline decoration-brass-500/50 decoration-1 underline-offset-4 transition-colors hover:decoration-brass-500">
              {expert.name}
            </a>
            .
          </p>

          <div className="mt-10 flex flex-col gap-3 motion-safe:animate-rise [animation-delay:240ms] sm:flex-row">
            <ButtonLink
              href="#program"
              size="lg"
              icon={<ArrowRightIcon className="order-last" />}
            >
              Посмотреть программу
            </ButtonLink>
            <ButtonLink href="#demo" size="lg" variant="secondary" icon={<PlayIcon />}>
              Смотреть бесплатный урок
            </ButtonLink>
          </div>

          <div className="mt-12 border-t border-line pt-6 motion-safe:animate-rise [animation-delay:320ms]">
            <p className="text-sm text-subtle">В программе, среди прочего</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {vatCourse.keyTopics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-sm text-body"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Портрет */}
        <div className="relative mx-auto w-full max-w-[26rem] motion-safe:animate-rise [animation-delay:200ms] sm:max-w-[28rem] lg:col-span-5 lg:max-w-none">
          <ExpertPortrait
            expert={expert}
            priority
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
            className="shadow-lift"
          />

          {/* Подпись к портрету */}
          <div className="absolute -bottom-6 left-4 right-4 rounded-card border border-line bg-surface/95 p-5 shadow-soft backdrop-blur sm:left-6 sm:right-auto sm:max-w-[19rem] lg:-left-10">
            <p className="font-serif text-lg font-medium text-ink-900">{expert.name}</p>
            <p className="mt-1 text-sm text-muted">{expert.role}</p>
            {expert.credentials.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm text-body">
                {expert.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
