import Link from "next/link";
import React from "react";

type NavButtonProps = {
  children: React.ReactNode;
  href: string;
};

const NavButton: React.FC<NavButtonProps> = ({
  children,
  href,
  ...$$restProps
}) => {
  return (
    <Link
      href={href}
      className={`px-2 py-1.5 fg-muted rounded-lg hover:bg-muted hover:fg-base`}
      {...$$restProps}
    >
      <div className="px-1">{children}</div>
    </Link>
  );
};

export default NavButton;
