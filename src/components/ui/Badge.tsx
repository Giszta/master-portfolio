import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-slate-800 text-slate-300",
        cyan: "bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20",
        green: "bg-green-500/10 text-green-400 ring-1 ring-green-500/20",
        violet: "bg-violet-500/10 text-violet-400 ring-1 ring-violet-500/20",
        amber: "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20",
        red: "bg-red-500/10 text-red-400 ring-1 ring-red-500/20",
        blue: "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
