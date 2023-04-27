import { twMerge } from "tailwind-merge";

type InputWrapperProps = {
  name: string;
  label?: string;
  required?: boolean;
  description?: string;
  error?: string;
} & React.PropsWithChildren;

export function InputWrapper({
  name,
  label,
  required,
  description,
  error,
  children,
}: InputWrapperProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label && label}
        {label && required && <span className="text-destructive"> *</span>}
        {description && <p className="text-muted-foreground">{description}</p>}
      </label>
      <div
        className={twMerge(
          "relative",
          (label || description) && "mt-1.5",
          error && "mb-1.5"
        )}
      >
        {children}
      </div>
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  );
}
