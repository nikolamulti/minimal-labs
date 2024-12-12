import "./global.css";
import { Metadata, type Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
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
    siteName: "WFS Components",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "WFS Components",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WFS Components - Supercharge building Webflow apps",
    description:
      "Ship faster with Webflow's design system, Svelte components and user-friendly CLI that streamline your workflow.",
    creator: "@minimalsquare",
    images: [
      {
        url: "/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "WFS Components",
        type: "image/jpeg",
      },
    ],
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
      <Script
        src="https://app.lemonsqueezy.com/js/lemon.js"
        strategy="afterInteractive"
        defer
      />
      <Script
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KF4LP92J');`,
        }}
      />
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KF4LP92J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
