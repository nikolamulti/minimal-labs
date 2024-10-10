import Link from "next/link";
import React from "react";
import { cn } from "@/utils/utils";

import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-lg text-nowrap text-center font-semibold 	",
  {
    variants: {
      variant: {
        primary: "bg-white fg-inverted lg:hover:bg-inverted",
        ghost:
          "fg-muted hover:bg-transparent lg:hover:fg-base hover:fg-muted lg:hover:bg-muted",
        faded: "fg-base bg-default hover:transparent lg:hover:bg-medium",
      },
      size: {
        small: "px-2 py-1.5 text-sm	text-sm",
        medium: "px-3 py-2.5 text-base	text-sm",
      },
    },
    defaultVariants: {
      variant: "faded",
      size: "small",
    },
  },
);

type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonVariantsProps & {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant,
  size,
  className,
  ...$$restProps
}) => {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...$$restProps}
    >
      <div className="px-1">{children}</div>
    </Link>
  );
};

export { Button };
