"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-[960px] flex-col-reverse items-center justify-between text-sm font-light md:flex-row">
        <p className="font-normal leading-5 fg-subtle">
          ©2024{" "}
          <Link
            href="https://www.minimal-square.com/"
            className="underline fg-base"
          >
            Minimal Square
          </Link>{" "}
          · All rights reserved.
        </p>
        <div className="mb-4 flex gap-6 md:mb-0">
          <Link className="underline fg-base" href="/svelte/privacy">
            Privacy policy
          </Link>
          <Link className="underline fg-base" href="/svelte/license">
            Licensing
          </Link>
          <Link className="underline fg-base" href="/svelte/cookies">
            Cookies
          </Link>
          <Link className="fg-base" href="https://x.com/minimalsquare">
            <Image
              className=""
              src="/twitter.svg"
              alt="Twitter"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
