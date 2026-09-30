import Image from "next/image";
import type { Expert } from "@/content/expert";

type ExpertPortraitProps = {
  expert: Expert;
  /** Для первого экрана — загружать фото с высоким приоритетом. */
  priority?: boolean;
  sizes: string;
  className?: string;
};

/**
 * Портрет эксперта в формате 4:5. Пока фото нет — показывается
 * нейтральная композиция с инициалами, которая выглядит завершённо
 * и сохраняет размеры блока (без сдвига макета после добавления фото).
 */
export function ExpertPortrait({ expert, priority, sizes, className = "" }: ExpertPortraitProps) {
  const initials = expert.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-panel bg-ink-900 ${className}`}
    >
      {expert.photo ? (
        <Image
          src={expert.photo.src}
          alt={expert.photo.alt}
          fill
          sizes={sizes}
          preload={priority}
          fetchPriority={priority ? "high" : undefined}
          className="object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0" role="img" aria-label={`${expert.name} — фотография будет добавлена`}>
          {/* Тонкие концентрические линии — спокойная «бумажная» фактура без градиентов */}
          <svg
            aria-hidden
            viewBox="0 0 400 500"
            className="absolute inset-0 size-full text-paper/[0.07]"
            preserveAspectRatio="xMidYMid slice"
          >
            {Array.from({ length: 9 }, (_, i) => (
              <circle
                key={i}
                cx="330"
                cy="90"
                r={60 + i * 48}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </svg>
          <span className="absolute top-8 left-8 text-xs tracking-[0.14em] text-paper/45 uppercase sm:top-10 sm:left-10">
            Место для фотографии
          </span>
          {/* Нижний отступ оставляет место для карточки-подписи в Hero */}
          <span className="absolute bottom-24 left-8 font-serif text-[5.5rem] leading-none font-medium tracking-[-0.04em] text-paper/90 sm:bottom-28 sm:left-10 sm:text-[7rem]">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
