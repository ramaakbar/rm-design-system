import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { InputWrapper } from "../inputWrapper";
import { TextInputProps } from "../textInput/textInput";

export const PasswordInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      placeholder,
      description,
      required,
      disabled = false,
      error,
      startNode: StartNode,
      endNode: EndNode,
      className,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => setShowPassword((prev) => !prev);

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
          type={showPassword ? "text" : "password"}
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
            EndNode && "pr-10",
            className
          )}
          {...props}
        />

        <button
          className="absolute inset-y-0 right-0 flex cursor-pointer select-none items-center pr-3"
          onClick={handleTogglePassword}
        >
          {!showPassword ? (
            <Eye className="h-4 w-4 text-muted-foreground" />
          ) : (
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </InputWrapper>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
