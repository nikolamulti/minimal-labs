import Link from "next/link";
import React from "react";
import { cn } from "@/utils/utils";

import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-lg text-nowrap text-center font-semibold flex items-center gap-2 justify-center",
  {
    variants: {
      variant: {
        primary: "bg-white fg-inverted lg:hover:bg-inverted",
        ghost:
          "fg-muted hover:bg-transparent lg:hover:fg-base hover:fg-muted lg:hover:bg-muted",
        faded: "fg-base bg-default hover:transparent lg:hover:bg-medium",
      },
      size: {
        small: "px-3 py-1.5 text-sm	text-sm",
        medium: "px-4 py-2.5 text-base text-sm",
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
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant,
  size,
  className,
  onClick,
  ...$$restProps
}) => {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...$$restProps}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export { Button };
