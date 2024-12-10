import Link from "next/link";
import React from "react";
import { cn } from "@/utils/utils";

import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "transition-all duration-200 rounded-lg text-nowrap text-center font-semibold flex items-center gap-2 justify-center",
  {
    variants: {
      variant: {
        primary: "bg-white fg-inverted lg:hover:bg-[#E0E0E0]",
        ghost:
          "fg-muted hover:bg-transparent lg:hover:fg-base hover:fg-muted lg:hover:bg-[#373737]",
        faded: "fg-base bg-[#373737] hover:transparent lg:hover:bg-[#4c4c4c]",
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
  }
);

type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonVariantsProps & {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant,
  size,
  className,
  target,
  onClick,
  ...$$restProps
}) => {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...$$restProps}
      onClick={onClick}
      target={target}
    >
      {children}
    </Link>
  );
};

export { Button };
