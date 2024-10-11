import React from "react";
import { Card } from "@/components/ui/Card";

const BentoAccessible: React.FC = () => {
  return (
    <Card className="relative col-span-4 row-span-1 min-h-[20rem] overflow-hidden md:col-span-4 lg:col-span-5">
      <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-[#2D2D2D] to-transparent" />
      <div className="-mt-2 flex flex-col gap-4 px-6">
        <div className="flex flex-row items-center gap-1 rounded-md border border-muted bg-default py-2 pl-2 pr-3">
          <img
            src="/ArrowsClockwise.svg"
            width={24}
            height={24}
            className="fg-purple"
          />
          <p className="text-sm fg-base">State Communication</p>
        </div>
        <div className="flex flex-row items-center gap-1 rounded-md border border-muted bg-default py-2 pl-2 pr-3">
          <img
            src="/Visible.svg"
            width={24}
            height={24}
            className="fg-orange"
          />
          <p className="text-sm fg-base">WCAG 2.1 Compliance</p>
        </div>
        <div className="flex flex-row items-center gap-1 rounded-md border border-muted bg-default py-2 pl-2 pr-3">
          <img
            src="/KeyReturn.svg"
            width={24}
            height={24}
            className="fg-pink"
          />
          <p className="text-sm fg-base">Keyboard Navigation</p>
        </div>
        <div className="flex flex-row items-center gap-1 rounded-md border border-muted bg-default py-2 pl-2 pr-3">
          <img src="/Tag.svg" width={24} height={24} className="fg-primary" />
          <p className="text-sm fg-base">WAI-ARIA Compliance</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-6">
        <h3 className="text-base font-semibold fg-base">
          Accessible components
        </h3>
        <p className="text-sm fg-muted">
          All components ensure accessibility standards, leveraging Bits UI
          headless component library.
        </p>
      </div>
    </Card>
  );
};

export { BentoAccessible };
