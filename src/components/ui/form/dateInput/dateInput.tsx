import { ComponentProps, forwardRef } from "react";
import { Icon } from "lucide-react";
import { useInput } from "react-day-picker";
import { twMerge } from "tailwind-merge";

import { Calendar } from "../../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover";
import { InputWrapper } from "../inputWrapper";

type DateInputProps = ComponentProps<"input"> & {
  label?: string;
  name: string;
  description?: string;
  error?: string;
  startNode?: Icon | string;
  endNode?: Icon | string;
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      label,
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
    const { inputProps, dayPickerProps } = useInput({
      format: "d MMMM yyyy",
    });

    return (
      <InputWrapper
        label={label}
        description={description}
        required={required}
        name={props.name}
        error={error}
      >
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <input
                {...props}
                {...inputProps}
                id={props.name}
                type="text"
                ref={ref}
                disabled={disabled}
                required={required}
                className={twMerge(
                  "block w-full rounded-md border-0 bg-transparent px-3 py-2 ring-1 ring-inset ring-input placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50",
                  error &&
                    "text-destructive ring-destructive focus:ring-destructive/80",
                  StartNode && "pl-10",
                  EndNode && "pr-10",
                  className
                )}
              />
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar {...dayPickerProps} />
            </PopoverContent>
          </Popover>
        </div>
      </InputWrapper>
    );
  }
);

DateInput.displayName = "DateInput";
