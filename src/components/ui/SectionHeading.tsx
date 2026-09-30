import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignment} ${className}`}>
      <p className="eyebrow flex items-center gap-3">
        <span aria-hidden className="h-2.5 w-2.5 rounded-[3px] bg-sun" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-h2 font-bold">
        {title}
      </h2>
      {lead && <p className="max-w-[40rem] text-lead text-muted">{lead}</p>}
    </div>
  );
}
