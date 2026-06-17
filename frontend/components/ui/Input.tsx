import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[#2D2A26] mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={twMerge(
            clsx(
              "w-full px-4 py-2.5 rounded-xl border border-[#EAE6DE] bg-white text-[#2D2A26] placeholder-[#9E9892] focus:outline-none focus:ring-2 focus:ring-[#7CB9E8]/30 focus:border-[#7CB9E8] transition-all text-sm",
              error && "border-red-300 focus:ring-red-200 focus:border-red-400",
              className
            )
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
