import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-[60rem] flex-col-reverse items-center justify-between text-sm font-light md:flex-row">
        <p className="font-light leading-5 fg-subtle">
          ©2024{" "}
          <Link
            href="https://www.minimal-square.com/"
            className="underline fg-base"
          >
            Minimal Square
          </Link>{" "}
          · All rights reserved.
        </p>
        <div className="mb-4 flex items-center gap-6 md:mb-0">
          <Link className="underline fg-base" href="/svelte/privacy">
            Privacy policy
          </Link>
          <Link className="underline fg-base" href="/svelte/license">
            Licensing
          </Link>
          <Link className="fg-base" href="https://x.com/minimalsquare">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1.53163 2 5.01915 6.61878L1.5 14h1.13682l4.42205-4.71144L10.6316 14H14.5L9.19834 7.009 13.8996 2h-1.1368L8.69047 6.33901 5.4 2H1.53163Zm1.67174.82598h1.77711L12.828 13.1742h-1.7771L3.20337 2.82598Z"
                fill="#fff"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
