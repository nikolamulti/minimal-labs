import React from "react";
import { cn } from "@/utils/utils";

type SvelteComponentProps = {
  url: string;
  className?: string;
  height?: number;
};

const SvelteComponent: React.FC<SvelteComponentProps> = ({
  url,
  className,
  height,
}) => {
  return (
    <iframe
      className={cn("rounded-lg border border-l-fd-border", className)}
      src={`https://webflow-svelte-preview.vercel.app${url}`}
      title="Svelte Component"
      width="100%"
      height={height ? `${height}px` : "384px"}
    />
  );
};

export { SvelteComponent };
