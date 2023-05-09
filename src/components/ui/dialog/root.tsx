import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";

const DialogRoot = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props}>
    <div
      className={twMerge(
        "fixed inset-0 z-50 flex justify-center sm:items-center",
        className
      )}
    >
      {children}
    </div>
  </DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={twMerge(
      "fixed inset-0 z-50 bg-black/40 transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const position = {
  top: "items-start",
  bottom: "items-end",
  center: "items-center",
};

export type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> & {
  mobilePosition?: keyof typeof position;
  fullscreen?: boolean;
};

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(
  (
    {
      className,
      children,
      mobilePosition = "bottom",
      fullscreen = false,
      ...props
    },
    ref
  ) => (
    <DialogPortal className={position[mobilePosition]}>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={twMerge(
          "fixed z-50 grid w-full gap-4 border border-border bg-background p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
          fullscreen && "h-full sm:h-auto",
          mobilePosition === "top" && "data-[state=open]:slide-in-from-top-10",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge("flex flex-col space-y-1.5 text-left", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge(
      "inline-flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ children, className, ...props }, ref) => (
  <div className="mb-3 flex items-center justify-between">
    <DialogPrimitive.Title
      ref={ref}
      className={twMerge(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Title>
    <DialogPrimitive.Close className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </DialogPrimitive.Close>
  </div>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={twMerge("text-base leading-6 text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
