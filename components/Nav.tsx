"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { List, X } from "@phosphor-icons/react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section
      className={`relative z-30 px-4 py-6 md:px-6 ${isMenuOpen ? "bg-base" : ""}`}
    >
      <div className="mx-auto flex w-full max-w-[960px] items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div>
            <Link href="/svelte">
              <Image src="/logo.svg" alt="Fumadocs" width={32} height={32} />
            </Link>
          </div>
          <nav
            className={`${
              isMenuOpen ? "z-20 flex border-b border-muted bg-base" : "hidden"
            } absolute left-0 top-16 w-full flex-col gap-2 p-4 lg:relative lg:left-auto lg:top-0 lg:flex lg:w-auto lg:flex-row lg:p-0`}
          >
            <Button
              variant="ghost"
              className="text-left lg:text-center"
              href="/svelte/docs"
            >
              Docs
            </Button>
            <Button
              variant="ghost"
              className="text-left lg:text-center"
              href="/svelte/docs/accordion"
            >
              Components
            </Button>
            <Button
              variant="ghost"
              className="text-left lg:text-center"
              href="/svelte/pricing"
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              className="text-left lg:text-center"
              href="/svelte/faqs"
            >
              FAQs
            </Button>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-row gap-3">
            <Button
              variant="faded"
              href="/svelte/preview"
              className="hidden min-[375px]:flex"
            >
              Figma Preview
            </Button>
            <Button variant="primary" href="/svelte/pricing">
              Get Access
            </Button>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="-mr-2 p-2">
              {isMenuOpen ? (
                <X size={24} weight="bold" />
              ) : (
                <List size={24} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
