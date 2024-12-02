import React from "react";
import { cn } from "@/utils/utils";

type SvelteProps = {
  url: string;
  className?: string;
  height?: number;
};

const Svelte: React.FC<SvelteProps> = ({ url, className, height }) => {
  return (
    <iframe
      className={cn("rounded-lg border border-l-fd-border", className)}
      src={`https://webflow-svelte-preview.vercel.app${url}`}
      title="Svelte Component"
      width="100%"
      height={height ? `${height}px` : "256px"}
    />
  );
};

export { Svelte };
