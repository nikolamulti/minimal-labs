import React from "react";
import { Card } from "@/components/ui/Card";

const BentoAccessible: React.FC = () => {
  return (
    <Card className="col-span-4 row-span-1 min-h-[20rem] p-6 md:col-span-4 lg:col-span-5">
      <h3 className="text-base font-semibold fg-base">Accessible components</h3>
      <p className="text-sm fg-muted">
        All components ensure accessibility standards, leveraging Bits UI
        headless component library.
      </p>
    </Card>
  );
};

export { BentoAccessible };
