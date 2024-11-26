import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next/types";
import type { Viewport } from "next/types";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WFS Components - Supercharge building Webflow apps",
  description:
    "Ship faster with Webflow's design system, Svelte components and user-friendly CLI that streamline your workflow.",
  metadataBase: new URL("https://minimal-labs.com/svelte"),
  openGraph: {
    title: "WFS Components - Supercharge building Webflow apps",
    description:
      "Ship faster with Webflow's design system, Svelte components and user-friendly CLI that streamline your workflow.",
    type: "website",
    url: "https://minimal-labs.com/svelte",
    images: [
      {
        url: "/app/og-image.png",
        width: 1200,
        height: 630,
        alt: "WFS Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WFS Components - Supercharge building Webflow apps",
    description:
      "Ship faster with Webflow's design system, Svelte components and user-friendly CLI that streamline your workflow.",
    images: ["/app/og-image.png"],
    creator: "@minimalsquare",
  },
  authors: [{ name: "Minimal Square", url: "https://minimal-square.com" }],
  keywords: [
    "Webflow",
    "Svelte",
    "Components",
    "Design System",
    "CLI",
    "WFS",
    "Figma UI Kit",
  ],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/app/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/app/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/app/favicon.ico",
    apple: "/app/apple-touch-icon.png",
  },
  manifest: "/app/site.webmanifest",
  alternates: {
    canonical: "https://minimal-labs.com/svelte",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1e1e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <link
        rel="icon"
        type="image/png"
        href="/app/favicon-48x48.png"
        sizes="48x48"
      />
      <link rel="icon" type="image/svg+xml" href="/app/favicon.svg" />
      <link rel="shortcut icon" href="/app/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/app/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="WFS" />
      <link rel="manifest" href="/app/site.webmanifest" />
      <GoogleTagManager gtmId="GTM-KF4LP92J" />
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
