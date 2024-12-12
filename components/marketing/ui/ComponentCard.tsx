import React from "react";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

type ComponentCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  className?: string;
};

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  description,
  imageSrc,
  href,
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block rounded-lg bg-muted bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(31,31,31,0)] py-1 pl-1 pr-3 shadow-[inset_0_1px_0_0_#FFFFFF1F] drop-shadow-[0_1px_2px__rgba(0,0,0,0.40)] transition-[background-image] duration-1000 ease-in-out hover:from-[rgba(255,255,255,0.08)]",
        className
      )}
    >
      <div className="flex flex-row gap-3 text-left">
        <Image
          src={imageSrc}
          alt={title}
          width={64}
          height={64}
          className="rounded"
        />
        <div className="flex flex-col gap-0.5 self-center">
          <h3 className="text-sm font-semibold fg-base">{title}</h3>
          <p className="text-xs fg-muted">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export { ComponentCard };
