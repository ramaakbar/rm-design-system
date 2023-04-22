import { ComponentPropsWithRef, forwardRef } from "react";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import { Icon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const linkStyle = {
  base: "inline-flex items-center justify-center transition-colors disabled:cursor-not-allowed disabled:opacity-50",
  size: {
    default: "text-base",
    sm: "text-sm",
    lg: "text-lg",
  },
  variant: {
    underline: "underline-offset-4 hover:underline text-primary",
    subtle: "text-muted-foreground hover:text-accent-foreground",
  },
};

type LinkProps = {
  href: string;
  external?: boolean;
  size?: keyof typeof linkStyle.size;
  variant?: keyof typeof linkStyle.variant;
  leftIcon?: Icon;
  rightIcon?: Icon;
} & NextLinkProps &
  ComponentPropsWithRef<"a">;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      size = "default",
      variant = "underline",
      href,
      external,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      className,
      ...props
    },
    ref
  ) => {
    if (external) {
      return (
        <a
          ref={ref}
          href={href}
          className={twMerge(
            linkStyle.base,
            linkStyle.size[size],
            linkStyle.variant[variant],
            className
          )}
          {...props}
        >
          {LeftIcon && <LeftIcon className="mr-2 h-4 w-4" />}
          {children}
          {RightIcon && <RightIcon className="ml-2 h-4 w-4" />}
        </a>
      );
    }
    return (
      <NextLink
        ref={ref}
        href={href}
        className={twMerge(
          linkStyle.base,
          linkStyle.size[size],
          linkStyle.variant[variant],
          className
        )}
        {...props}
      >
        {LeftIcon && <LeftIcon className="mr-2 h-4 w-4" />}
        {children}
        {RightIcon && <RightIcon className="ml-2 h-4 w-4" />}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export default Link;
