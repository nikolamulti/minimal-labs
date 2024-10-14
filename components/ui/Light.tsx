import React from "react";
import { cn } from "@/utils/utils";

type LightProps = {
  className?: string;
  divider?: boolean;
};

const Light: React.FC<LightProps> = ({ className, divider = true }) => {
  return (
    <div>
      <div
        className={cn(
          `pointer-events-none absolute right-1/2 top-1 z-0 h-[22.5rem] w-[60rem] -translate-y-1/2 translate-x-1/2 scale-125 transform rounded-full bg-[radial-gradient(ellipse,_rgba(64,64,64,22%)_0%,_#1E1E1E_70%)]`,
          className,
        )}
      />
      {divider && (
        <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-[60rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent" />
      )}
    </div>
  );
};

export { Light };
