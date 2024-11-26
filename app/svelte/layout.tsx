import type { ReactNode } from "react";
import Script from "next/script";
import { HomeLayout } from "fumadocs-ui/home-layout";
import { baseOptions } from "../layout.config";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <>
      <div className="selection:bg-white selection:fg-inverted">{children}</div>
    </>
  );
}
