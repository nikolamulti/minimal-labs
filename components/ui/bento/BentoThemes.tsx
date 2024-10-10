import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

const BentoThemes: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<
    "brighter" | "default" | "darker"
  >("brighter");

  const themeImages = {
    brighter: "/bento-app-shell-brighter.png",
    default: "/bento-app-shell-default.png",
    darker: "/bento-app-shell-darker.png",
  };

  return (
    <Card className="relative col-span-4 row-span-1 h-[20rem] min-h-[20rem] overflow-hidden p-6 md:col-span-4 lg:col-span-5">
      <div className="mb-6 flex flex-col gap-1">
        <h3 className="text-base font-semibold fg-base">
          All 3 modes available
        </h3>
        <p className="text-sm fg-muted">
          Compatible with native Webflow designer themes and their changes.
        </p>
      </div>
      <div className="mb-6 inline-flex gap-1 rounded-md bg-gradient-to-b from-[rgba(255,255,255,13%)] to-[rgba(255,255,255,10%)] px-0.5 py-0.5 shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.8)]">
        {["brighter", "default", "darker"].map((theme) => (
          <button
            key={theme}
            onClick={() =>
              setActiveTheme(theme as "brighter" | "default" | "darker")
            }
            className={`rounded-[4px] px-1 py-0.5 text-[11.5px] leading-[16px] ${
              activeTheme === theme
                ? "bg-[#292929] shadow-none fg-base"
                : "fg-muted"
            }`}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        ))}
      </div>
      <div className="w-[25rem] rounded border border-muted bg-muted">
        <Image
          src={themeImages[activeTheme]}
          alt={`${activeTheme} theme preview`}
          className="h-full w-full object-cover"
          width={400}
          height={224}
        />
      </div>
    </Card>
  );
};

export { BentoThemes };
