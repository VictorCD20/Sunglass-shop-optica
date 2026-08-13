import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-amber-500 px-6 py-3 text-black hover:bg-amber-400 hover:-translate-y-0.5",
      outline: "border border-white/35 bg-white/5 px-6 py-3 text-white backdrop-blur-md hover:bg-white hover:text-black",
      dark: "bg-black px-6 py-3 text-white hover:bg-zinc-800 hover:-translate-y-0.5",
      ghost: "px-4 py-2 text-current hover:bg-black/5",
    },
    size: { default: "h-12", sm: "h-10", icon: "h-11 w-11 p-0" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const resolvedVariant = variant ?? "default";
  return <Comp className={cn("ui-button", `ui-button--${resolvedVariant}`, buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";
export { buttonVariants };
