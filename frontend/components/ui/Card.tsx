import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg" | "none";
}

const paddingStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  none: "",
};

export function Card({ children, className, padding = "lg" }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "gradient-card border border-[#EAE6DE] rounded-2xl",
          paddingStyles[padding],
          className
        )
      )}
    >
      {children}
    </div>
  );
}
