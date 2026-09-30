import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * primary — синяя кнопка на светлом фоне;
 * cream — кремовая кнопка на тёмно-синем фоне;
 * outline / outlineLight — второстепенные действия на светлом / тёмном фоне.
 */
type Variant = "primary" | "cream" | "outline" | "outlineLight";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-display font-semibold whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200 ease-out active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-navy-900 text-white hover:bg-navy-800",
  cream: "bg-cream text-navy-900 hover:bg-cream-50",
  outline: "border border-line-strong bg-surface text-navy-900 hover:border-navy-900/40",
  outlineLight: "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.875rem]",
  lg: "h-14 px-7 text-[0.9375rem]",
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
