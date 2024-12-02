import React from "react";
import Image from "next/image";
import { Card } from "@/components/marketing/ui/Card";

const iconRows = [
  [
    "Account",
    "Add",
    "Apps",
    "Archive",
    "Attachment",
    "BranchDefault",
    "Briefcase",
    "Briefcase",
    "Briefcase",
  ],
  [
    "Brush",
    "Buy",
    "CheckDefault",
    "Cleanup",
    "CMSAdd",
    "Code",
    "Comment",
    "Comment",
    "Comment",
  ],
  [
    "Component",
    "CssPreview",
    "Date",
    "DuplicateOutline",
    "Ecommerce",
    "Edit",
    "Email",
    "Email",
    "Email",
  ],
];

const BentoIcons: React.FC = () => {
  return (
    <Card className="relative col-span-8 mx-auto h-[20rem] max-w-[40rem] overflow-hidden p-6 lg:col-span-7">
      <div className="flex max-w-[25rem] flex-col gap-1">
        <h3 className="text-lg font-semibold fg-base">200+ Icons</h3>
        <p className="text-sm fg-muted">
          Fully compatible with the Figma file. Optimized and ready for
          immediate use.
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-[8.75rem] bg-gradient-to-t from-[rgba(41,41,41,1)] to-[rgba(41,41,41,0)]" />
      <div className="mt-6 flex flex-col gap-2">
        {iconRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-shrink-0 place-items-center gap-2"
          >
            {row.map((icon, iconIndex) => (
              <div
                key={`${rowIndex}-${iconIndex}`}
                className="flex h-16 w-16 flex-shrink-0 place-content-center place-items-center rounded-md bg-default"
              >
                <Image
                  className="h-5 w-5"
                  src={`/webflow-icons/${icon}.svg`}
                  alt="icon"
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};

export { BentoIcons };
