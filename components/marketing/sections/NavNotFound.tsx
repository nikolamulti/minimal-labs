"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/marketing/ui/Button";
import { List, X } from "@phosphor-icons/react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section
      className={`fixed left-0 right-0 top-0 z-[100] px-4 py-4 md:px-6 ${
        isMenuOpen
          ? "py-4 md:py-6"
          : "py-4 backdrop-blur-md transition-all duration-300 md:py-6"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[60rem] items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div>
            <Link href="/svelte">
              <Image src="/logo.svg" alt="Fumadocs" width={32} height={32} />
            </Link>
          </div>
          <nav
            className={`${
              isMenuOpen ? "z-20 flex lg:bg-transparent" : "hidden"
            } lg:p-auto absolute left-0 top-[4.5rem] w-full flex-col place-items-start gap-2 p-4 pl-0 backdrop-blur-md lg:relative lg:left-auto lg:top-0 lg:flex lg:w-auto lg:flex-row lg:p-0 lg:backdrop-filter-none`}
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
              href="/svelte#pricing"
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              className="text-left lg:text-center"
              href="/svelte#faqs"
            >
              FAQs
            </Button>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-row gap-3">
            <Button
              variant="faded"
              href="https://www.figma.com/design/QWWynAfNdebaDFCQ7iZqRz/Webflow-Apps---Extended-UI-Kit-v1.0"
              target="_blank"
              className="hidden items-center gap-2 min-[480px]:flex"
            >
              <Image
                src="/figma-color.svg"
                alt="Figma"
                width={11}
                height={16}
              />
              Preview in Figma
            </Button>
            <Button variant="primary" href="/svelte#pricing">
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
