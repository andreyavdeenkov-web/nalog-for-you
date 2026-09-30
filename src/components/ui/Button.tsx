import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-white hover:bg-ink-800 shadow-[0_1px_0_rgb(255_255_255/0.08)_inset,0_8px_20px_-10px_rgb(14_27_51/0.55)]",
  secondary:
    "bg-surface text-ink-900 border border-line-strong hover:border-ink-900/40 hover:bg-white",
  ghost: "text-ink-900 hover:bg-ink-900/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-base",
};

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
};

/** Кнопка-ссылка. На лендинге все CTA ведут к якорям или внешним ссылкам. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  icon,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {icon}
      {children}
    </a>
  );
}
