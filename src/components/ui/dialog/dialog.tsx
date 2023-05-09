import { ReactNode } from "react";

import {
  DialogContent,
  DialogContentProps,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./root";

type DialogProps = DialogContentProps & {
  triggerNode: ReactNode;
  title: string;
  footer?: ReactNode | string;
};

export const Dialog = ({
  triggerNode,
  title,
  footer,
  mobilePosition,
  fullscreen,
  children,
}: DialogProps) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>{triggerNode}</DialogTrigger>
      <DialogContent mobilePosition={mobilePosition} fullscreen={fullscreen}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="">{footer}</DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};
