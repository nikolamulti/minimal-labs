import { cn } from "@/utils/utils";
import { ExternalLink } from "lucide-react";

interface DocsButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function DocsButton({ className, ...props }: DocsButtonProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "inline-flex border hover:bg-fd-muted/70 border-fd-border h-6 mb-12 text-xs items-center justify-center rounded-md bg-fd-secondary px-2 text-fd-secondary-foreground gap-1.5",
        className
      )}
      {...props}
    >
      {props.children}
      <ExternalLink
        className="w-3 h-3 text-fd-muted-foreground"
        strokeWidth="3"
      />
    </a>
  );
}
