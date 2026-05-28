import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400 focus-visible:ring-cyan-500",
        secondary:
          "border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 focus-visible:ring-slate-500",
        ghost:
          "bg-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200 focus-visible:ring-slate-500",
        outline:
          "border border-cyan-500/50 bg-transparent text-cyan-400 hover:bg-cyan-500/10 focus-visible:ring-cyan-500",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
