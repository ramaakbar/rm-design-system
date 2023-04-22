import { ComponentProps, forwardRef } from "react";
import { Icon, Loader2 } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type TextInputProps = ComponentProps<"input"> & {
  label?: string;
  name: string;
  description?: string;
  startNode?: Icon | string;
  endNode?: Icon | string;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      type = "text",
      label,
      placeholder,
      description,
      required,
      disabled = false,
      startNode: StartNode,
      endNode: EndNode,
      ...props
    },
    ref
  ) => {
    const form = useFormContext();
    const state = form.getFieldState(props.name, form.formState);

    return (
      <div className="flex flex-col">
        <label htmlFor={props.name} className="text-sm font-medium">
          {label && label}
          {label && required && <span className="text-destructive"> *</span>}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </label>
        <div
          className={twMerge(
            "relative",
            (label || description) && "mt-1.5",
            state.error && "mb-1.5"
          )}
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
              state.error &&
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
        </div>
        {state.error && (
          <span className="text-sm text-destructive">
            {state.error.message}
          </span>
        )}
      </div>
    );
  }
);

export default TextInput;
