import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

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
    <Card className="relative col-span-4 row-span-1 h-[20rem] overflow-hidden p-6 md:col-span-4 lg:col-span-7">
      <h3 className="mb-1 text-base font-semibold fg-base">200+ Icons</h3>
      <p className="max-w-xs text-sm fg-muted">
        Fully compatible with the Figma file. Optimized and ready for immediate
        use.
      </p>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-[8.75rem] bg-gradient-to-b from-[#29292900] to-[#353535]" />
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
