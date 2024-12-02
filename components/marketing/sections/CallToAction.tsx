"use client";

import React from "react";
import { Button } from "@/components/marketing/ui/Button";
import { Section } from "@/components/marketing/ui/Section";
import { Light } from "@/components/marketing/ui/Light";
import { useState, useEffect } from "react";

const CallToAction = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Check scroll position on initial load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      const yOffset = -64;
      const y =
        pricingSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Section removePadding removeMaxWidth className="pb-24">
      <div className="relative flex h-[20rem] items-end overflow-hidden pb-8 lg:pb-12">
        <div className="absolute right-1/2 top-[13rem] h-[32rem] w-[32rem] translate-x-[10rem] scale-[2] transform rounded-full bg-[radial-gradient(circle,_#146EF5_0%,_rgba(20,110,245,0.25)_40%,_rgba(30,30,30,0)_55%)] opacity-[28%]"></div>
        <div className="absolute left-1/2 top-[13rem] h-[32rem] w-[32rem] -translate-x-[10rem] scale-[2] transform rounded-full bg-[radial-gradient(circle,_#FF3E00_0%,_rgba(255,62,0,0.25)_40%,_rgba(30,30,30,0)_55%)] opacity-[28%]"></div>

        <div className="absolute bottom-0 left-1/2 h-[0.0625rem] w-[80rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent mix-blend-overlay" />
        <div className="z-10 mx-auto flex items-center gap-4">
          <div className="h-[4rem] w-[3.5625rem] bg-[url('/webflow.svg')] bg-contain bg-center bg-no-repeat" />
          <div className="h-[1.25rem] w-[1.25rem] bg-[url('/x.svg')] bg-contain bg-center bg-no-repeat" />
          <div className="h-[4rem] w-[2.6875rem] bg-[url('/svelte.svg')] bg-contain bg-center bg-no-repeat" />
        </div>
      </div>
      <div className="relative mx-auto overflow-hidden px-4 md:px-6">
        <div className="mx-auto flex max-w-[30rem] flex-col items-center gap-8 pt-16 lg:max-w-[40rem] lg:pt-20">
          <div className="absolute right-1/2 top-[0.0625rem] z-0 h-[22.5rem] w-[60rem] -translate-y-1/2 translate-x-1/2 scale-125 transform rounded-full bg-[radial-gradient(ellipse,_rgba(64,64,64,0.22)_0%,_#1E1E1E_70%)]" />
          <div className="relative z-10 flex flex-col gap-6 text-center">
            <h2 className="text-balance bg-gradient-to-r from-[#6EA2F5] to-[#FD855F] bg-clip-text text-4xl font-semibold leading-[1.15] text-transparent lg:text-[3rem]">
              Build your app today
            </h2>
            <p className="text-balance text-lg font-normal leading-normal fg-muted lg:text-xl lg:leading-8">
              Improve the design and development process with the best Figma Kit
              and component library for Webflow apps.
            </p>
          </div>
          <Light divider={false} />
          <Button
            className="relative z-10"
            variant="primary"
            size={"medium"}
            href="#pricing"
            onClick={scrollToPricing}
          >
            Get access
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CallToAction;
