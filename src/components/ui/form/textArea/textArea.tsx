import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { InputWrapper } from "../inputWrapper";

export type TextAreProps = ComponentProps<"textarea"> & {
  label?: string;
  name: string;
  description?: string;
  error?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreProps>(
  (
    { label, description, required, disabled = false, error, ...props },
    ref
  ) => {
    return (
      <InputWrapper
        label={label}
        description={description}
        required={required}
        name={props.name}
        error={error}
      >
        <textarea
          id={props.name}
          ref={ref}
          disabled={disabled}
          required={required}
          className={twMerge(
            "block h-20 w-full rounded-md border-0 bg-transparent px-3 py-2 ring-1 ring-inset ring-input placeholder:text-muted-foreground invalid:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50",
            error &&
              "text-destructive ring-destructive focus:ring-destructive/80"
          )}
          {...props}
        />
      </InputWrapper>
    );
  }
);

TextArea.displayName = "TextArea";
