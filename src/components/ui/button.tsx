import { forwardRef } from "react";
import { Icon, Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const buttonStyle = {
  base: "rounded-md text-sm font-medium inline-flex items-center justify-center transition-colors disabled:cursor-not-allowed disabled:opacity-50",
  size: {
    default: "px-4 py-2",
    sm: "px-2 py-1",
    lg: "px-8 py-3",
  },
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-border hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    underline: "underline-offset-4 hover:underline text-primary px-0 py-0",
    subtle: "text-muted-foreground hover:text-accent-foreground px-0 py-0",
  },
};

type ButtonProps = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  size?: keyof typeof buttonStyle.size;
  variant?: keyof typeof buttonStyle.variant;
  leftIcon?: Icon;
  rightIcon?: Icon;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = "button",
      size = "default",
      variant = "default",
      isLoading = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={isLoading}
        className={twMerge(
          buttonStyle.base,
          buttonStyle.size[size],
          buttonStyle.variant[variant],
          className
        )}
        {...props}
      >
        {isLoading && (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </>
        )}
        {!isLoading && (
          <>
            {LeftIcon && <LeftIcon className="mr-2 h-4 w-4" />}
            {children}
            {RightIcon && <RightIcon className="ml-2 h-4 w-4" />}
          </>
        )}
      </button>
    );
  }
);

export default Button;
