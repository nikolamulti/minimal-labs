"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-[960px] flex-col items-center justify-between text-sm font-light lg:flex-row">
        <p className="font-normal leading-5 fg-subtle">
          ©2024 Minimal Square · All rights reserved.
        </p>
        <div className="mt-2 flex gap-4 lg:mt-0">
          <Link className="underline fg-base" href="/svelte/privacy">
            Privacy policy
          </Link>
          <Link className="underline fg-base" href="/svelte/license">
            Licensing
          </Link>
          <Link className="underline fg-base" href="/svelte/cookies">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
