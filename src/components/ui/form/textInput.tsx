import { ComponentProps, forwardRef } from "react";
import { Icon } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { InputWrapper } from "./inputWrapper";

export type TextInputProps = ComponentProps<"input"> & {
  label?: string;
  name: string;
  description?: string;
  error?: string;
  startNode?: Icon | string;
  endNode?: Icon | string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type = "text",
      label,
      placeholder,
      description,
      required,
      disabled = false,
      error,
      startNode: StartNode,
      endNode: EndNode,
      ...props
    },
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
        {StartNode && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {typeof StartNode === "string" ? (
              <span className="text-muted-foreground">{StartNode}</span>
            ) : (
              <StartNode className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        )}
        <input
          type={type}
          id={props.name}
          ref={ref}
          disabled={disabled}
          readOnly={disabled}
          placeholder={placeholder}
          required={required}
          className={twMerge(
            "block w-full rounded-md border-0 bg-transparent px-3 py-2 ring-1 ring-inset ring-input placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50",
            error &&
              "text-destructive ring-destructive focus:ring-destructive/80",
            StartNode && "pl-10",
            EndNode && "pr-10"
          )}
          {...props}
        />
        {EndNode && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {typeof EndNode === "string" ? (
              <span className="text-muted-foreground">{EndNode}</span>
            ) : (
              <EndNode className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        )}
      </InputWrapper>
    );
  }
);

TextInput.displayName = "TextInput";
