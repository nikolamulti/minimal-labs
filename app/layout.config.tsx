import { type HomeLayoutProps } from "fumadocs-ui/home-layout";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: "Minimal Labs",
  },
  links: [
    {
      text: "Documentation",
      url: "/svelte/docs",
      active: "nested-url",
    },
  ],
};
