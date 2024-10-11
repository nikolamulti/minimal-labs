import React from "react";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

const BentoVariables: React.FC = () => {
  return (
    <Card className="relative col-span-8 mx-auto flex h-[20rem] max-w-[40rem] flex-col gap-6 overflow-hidden lg:col-span-5">
      <div className="absolute left-0 top-0 z-10 h-full w-14 bg-gradient-to-r from-[#2D2D2D] to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-14 bg-gradient-to-r from-transparent to-[#2D2D2D]" />
      <div className="pointer-events-none flex flex-col items-start gap-4 overflow-hidden pt-4">
        {[0, 1, 2, 3].map((rowIndex) => {
          const items = renderMarqueeItems(rowIndex);
          return (
            <div
              key={rowIndex}
              className="relative flex w-full overflow-x-hidden"
            >
              <div
                className={`flex whitespace-nowrap ${rowIndex % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}
                ref={(el) => {
                  if (el) {
                    const width = el.getBoundingClientRect().width;
                    el.style.width = `${width}px`;
                    const nextEl = el.nextElementSibling as HTMLElement | null;
                    if (nextEl) {
                      nextEl.style.width = `${width}px`;
                    }
                  }
                }}
              >
                {items}
              </div>
              <div
                className={`absolute top-0 flex whitespace-nowrap ${rowIndex % 2 === 0 ? "animate-marquee2" : "animate-marquee2-reverse"}`}
              >
                {items}
              </div>
            </div>
          );
        })}
      </div>
      <div className="z-20 mt-auto flex max-w-[25rem] flex-col gap-1 px-6 pb-6">
        <h3 className="text-lg font-semibold fg-base">Variables & Styles</h3>
        <p className="text-sm fg-muted">
          Streamline project quickly using plug-and-play building blocks.
        </p>
      </div>
    </Card>
  );
};

const renderMarqueeItems = (rowIndex: number) => {
  const allItems = [
    // Row 1
    { type: "text", content: "font-family-body", icon: "VariableTextSize" },
    { type: "color", content: "bg-primary-hover" },
    { type: "size", content: "spacing-12x", icon: "VariableSize" },
    { type: "color", content: "bg-success-transparent" },
    { type: "text", content: "font-size-xl", icon: "VariableTextSize" },
    // Row 2
    { type: "color", content: "bg-purple" },
    { type: "size", content: "spacing-1x", icon: "VariableSize" },
    { type: "color", content: "bg-pink-pressed" },
    { type: "text", content: "line-height-md", icon: "VariableTextSize" },
    { type: "size", content: "radius-2xl", icon: "VariableSize" },
    // Row 3
    { type: "size", content: "icon-xl", icon: "VariableSize" },
    { type: "text", content: "font-size-sm", icon: "VariableTextSize" },
    { type: "color", content: "bg-warning-hover" },
    { type: "size", content: "spacing-8x", icon: "VariableSize" },
    { type: "color", content: "bg-critical-hover" },
    // Row 4
    { type: "size", content: "icon-md", icon: "VariableSize" },
    { type: "color", content: "bg-success-hover" },
    { type: "text", content: "font-size-lg", icon: "VariableTextSize" },
    { type: "size", content: "radius-lg", icon: "VariableSize" },
    { type: "color", content: "bg-purple-transparent" },
  ];

  // Select a subset of items for each row
  const itemsPerRow = 5;
  const startIndex = rowIndex * itemsPerRow;
  const rowItems = allItems.slice(startIndex, startIndex + itemsPerRow);

  return rowItems.map((item, index) => (
    <span key={index} className="mx-1.5 inline-flex">
      <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
        <div className="align-start inline-flex gap-1.5 py-1 pl-1 pr-2">
          {item.type === "color" ? (
            <div
              className={`h-5 w-5 rounded border border-muted ${item.content}`}
            ></div>
          ) : (
            <div className="h-5 w-5 flex-col rounded border border-muted bg-bold p-0.5">
              <Image
                src={`/webflow-icons/${item.icon}.svg`}
                alt="icon"
                width={16}
                height={16}
              />
            </div>
          )}
          <div className="content-center text-xs fg-muted">{item.content}</div>
        </div>
      </div>
    </span>
  ));
};

export { BentoVariables };
