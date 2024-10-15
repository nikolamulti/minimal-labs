import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import Image from "next/image";
/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
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

  // links: [
  //   {
  //     text: "Documentation",
  //     url: "/svelte/docs",
  //     active: "nested-url",
  //   },
  // ],
};
