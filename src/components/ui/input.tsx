import { ComponentProps, forwardRef } from "react";

export interface Props extends ComponentProps<"input"> {}
export type ButtonProps = ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, ButtonProps>(
  ({ id, ...props }, ref) => (
    <input
      {...props}
      id={id}
      ref={ref}
      className="block w-full rounded-md border-0 bg-transparent px-3 py-2 ring-1 ring-inset ring-input placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50"
    />
  )
);

Input.displayName = "Input";

export default Input;
