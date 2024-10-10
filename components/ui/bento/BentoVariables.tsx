import React from "react";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

const BentoVariables: React.FC = () => {
  return (
    <Card className="col-span-4 row-span-1 flex h-full min-h-[20rem] flex-col gap-6 overflow-hidden md:col-span-4 lg:col-span-5 relative">
      <div className="absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-[#2D2D2D] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-14 bg-gradient-to-r to-[#2D2D2D] from-transparent z-10"></div>
      <div className="flex flex-col items-start gap-4 pt-4 overflow-hidden">
        {[0, 1, 2, 3].map((rowIndex) => {
          const items = renderMarqueeItems(rowIndex);
          return (
            <div key={rowIndex} className="relative flex overflow-x-hidden w-full">
              <div 
                className={`flex whitespace-nowrap ${rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`}
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
                className={`flex absolute top-0 whitespace-nowrap ${rowIndex % 2 === 0 ? 'animate-marquee2' : 'animate-marquee2-reverse'}`}
              >
                {items}
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-6 mt-auto pb-6 z-20">
        <h3 className="text-base font-semibold fg-base">Variables & Styles</h3>
        <p className="text-sm fg-muted">
          Streamline project quickly using plug-and-play building blocks.
        </p>
      </div>
    </Card>
  );
};

const renderMarqueeItems = (rowIndex: number) => {
  const allItems = [
    { type: "text", content: "font-family-body", icon: "VariableTextSize" },
    { type: "color", content: "bg-primary-hover" },
    { type: "size", content: "spacing-12x", icon: "VariableSize" },
    { type: "color", content: "bg-primary" },
    { type: "text", content: "font-size-xl", icon: "VariableTextSize" },
    { type: "color", content: "bg-purple" },
    { type: "text", content: "line-height-md", icon: "VariableTextSize" },
    { type: "color", content: "bg-pink-pressed" },
    { type: "text", content: "line-height-md", icon: "VariableTextSize" },
    { type: "size", content: "spacing-1x", icon: "VariableSize" },
    { type: "size", content: "icon-xl", icon: "VariableSize" },
    { type: "text", content: "font-size-sm", icon: "VariableTextSize" },
    { type: "color", content: "bg-warning-hover" },
    { type: "size", content: "spacing-8x", icon: "VariableSize" },
    { type: "color", content: "bg-critical-hover" },
    { type: "size", content: "icon-md", icon: "VariableSize" },
  ];

  // Select a subset of items for each row
  const itemsPerRow = 4;
  const startIndex = rowIndex * itemsPerRow;
  const rowItems = allItems.slice(startIndex, startIndex + itemsPerRow);

  return rowItems.map((item, index) => (
    <span key={index} className="inline-flex mx-1.5">
      <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
        <div className="align-start inline-flex gap-1.5 py-1 pl-1 pr-2">
          {item.type === "color" ? (
            <div className={`h-5 w-5 rounded border border-muted ${item.content}`}></div>
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