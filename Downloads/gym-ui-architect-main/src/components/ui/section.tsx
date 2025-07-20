import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  padded?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Comp = "section", padded = true, ...props }, ref) => {
    return (
      <Comp
        ref={ref as React.Ref<HTMLElement>}
        className={cn(padded && "py-16", className)}
        {...props}
      />
    );
  }
);
Section.displayName = "Section"; 