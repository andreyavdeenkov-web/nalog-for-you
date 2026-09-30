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
        <span aria-hidden className="h-px w-6 bg-brass-500" />
        {eyebrow}
      </p>
      <h2 id={id} className="font-serif text-h2 font-medium">
        {title}
      </h2>
      {lead && <p className="max-w-[40rem] text-lead text-muted">{lead}</p>}
    </div>
  );
}
