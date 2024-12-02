import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "@/utils/utils";

interface DocsTabsProps {
  items: string[];
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
}

interface DocsTabProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function DocsTabs({
  items,
  children,
  defaultValue,
  className,
}: DocsTabsProps) {
  return (
    <Tabs.Root
      defaultValue={defaultValue ?? items[0]}
      className={cn("w-full", className)}
    >
      <Tabs.List className="flex border-b border-fd-border gap-4">
        {items.map((item) => (
          <Tabs.Trigger
            key={item}
            value={item}
            className="border-b-2 border-transparent py-2.5 text-sm text-fd-muted-foreground transition-colors font-medium hover:text-fd-foreground data-[state=active]:border-fd-primary data-[state=active]:text-fd-foreground"
          >
            {item}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {children}
    </Tabs.Root>
  );
}

export function DocsTab({ value, children, className }: DocsTabProps) {
  return (
    <Tabs.Content value={value} className={cn("mt-4", className)}>
      {children}
    </Tabs.Content>
  );
}
