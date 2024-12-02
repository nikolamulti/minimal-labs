import React from "react";
import { cn } from "@/utils/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  removeMaxWidth?: boolean;
  removePadding?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      children,
      removeMaxWidth = false,
      removePadding = false,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full",
          { "px-4 md:px-6": !removePadding },
          className,
        )}
        {...props}
      >
        <div className={cn("mx-auto", { "max-w-[60rem]": !removeMaxWidth })}>
          {children}
        </div>
      </section>
    );
  },
);

Section.displayName = "Section";

export { Section };
