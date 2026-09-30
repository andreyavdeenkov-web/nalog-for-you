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
 * Портрет эксперта в формате 4:5. Если фото не задано — нейтральная
 * заглушка с инициалами тех же размеров (без сдвига макета).
 */
export function ExpertPortrait({ expert, priority, sizes, className = "" }: ExpertPortraitProps) {
  const initials = expert.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className={`relative aspect-[4/5] overflow-hidden rounded-panel bg-navy-800 ${className}`}>
      {expert.photo ? (
        <Image
          src={expert.photo.src}
          alt={expert.photo.alt}
          fill
          sizes={sizes}
          preload={priority}
          fetchPriority={priority ? "high" : undefined}
          className="object-cover object-[50%_20%]"
        />
      ) : (
        <div
          role="img"
          aria-label={`${expert.name} — фотография будет добавлена`}
          className="absolute inset-0 grid place-items-center font-display text-[6rem] font-extrabold text-cream/80"
        >
          {initials}
        </div>
      )}
    </div>
  );
}
