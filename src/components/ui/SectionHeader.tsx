import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      {label && (
        <p className="mb-3 text-sm font-medium tracking-widest text-cyan-400 uppercase">{label}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg text-slate-400",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
