import type { ReactNode } from "react";

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
