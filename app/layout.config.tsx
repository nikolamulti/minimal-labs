import type { BaseLayoutProps } from "@/components/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="webflow svelte components logo"
          width={24}
          height={24}
        />
        <span className="text-base font-semibold">WFS</span>
      </div>
    ),
    url: "/svelte",
  },
  disableThemeSwitch: true,
};
