import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#7CB9E8] text-white hover:bg-[#5A9FCF]",
  secondary: "bg-[#B2D8D8] text-[#2D2A26] hover:bg-[#8FBFBF]",
  outline: "border border-[#B2D8D8] text-[#2D2A26] hover:bg-[#F8F6F0]",
  ghost: "text-[#6B6560] hover:text-[#2D2A26] hover:bg-[#EAE6DE]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs rounded-lg",
  md: "px-4 py-2 text-sm rounded-xl",
  lg: "px-6 py-3 text-base rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const merged = twMerge(
      clsx(
        "inline-flex items-center justify-center gap-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#7CB9E8]/30 disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className
      )
    );
    return <button ref={ref} className={merged} {...props} />;
  }
);

Button.displayName = "Button";
