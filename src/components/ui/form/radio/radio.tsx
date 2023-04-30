import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type RadioProps = ComponentProps<"input"> & {
  label?: string;
  name: string;
  description?: string;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { label, description, required, disabled = false, className, ...props },
    ref
  ) => {
    return (
      <div
        className={twMerge("flex space-x-2", !description && "items-center")}
      >
        <input
          id={label}
          type="radio"
          ref={ref}
          disabled={disabled}
          required={required}
          className={twMerge(
            "peer h-4 w-4 border-input bg-transparent text-indigo-600 checked:bg-indigo-600 focus:border-indigo-300 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
        <div className="grid peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          <label
            htmlFor={label}
            className={"text-sm font-medium text-foreground"}
          >
            {label}
          </label>
          <span className="text-xs text-muted-foreground">{description}</span>
        </div>
      </div>
    );
  }
);

Radio.displayName = "Radio";
