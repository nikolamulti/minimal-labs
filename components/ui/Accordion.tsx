import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/utils/utils";

/*-------------------------------------
 * Accordion
 * -----------------------------------*/

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn("flex w-full flex-col gap-3", className)}
    {...props}
  />
));
Accordion.displayName = "Accordion";

/*-------------------------------------
 * Accordion Item
 * -----------------------------------*/

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "overflow-hidden rounded-md bg-muted bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(31,31,31,0)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.07),0px_0.5px_2px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.16)]",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

/*-------------------------------------
 * Accordion Trigger
 * -----------------------------------*/

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "fg-white group flex flex-1 cursor-pointer items-start justify-between gap-2 px-4 py-4 text-left font-semibold fg-base",
        className,
      )}
      {...props}
    >
      {children}
      <CaretDown
        className="mt-1 fg-subtle group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

/*-------------------------------------
 * Accordion Content
 * -----------------------------------*/

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown max-w-[36rem] overflow-hidden text-base fg-muted lg:mr-8",
      className,
    )}
    {...props}
  >
    <div className="w-full px-4 pb-5">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
