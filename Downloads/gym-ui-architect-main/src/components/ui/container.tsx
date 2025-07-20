import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Comp = "div", ...props }, ref) => {
    return (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container"; 