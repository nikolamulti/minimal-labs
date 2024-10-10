"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const CallToAction = () => {
  return (
    <Section className="pb-32">
      <div className="relative flex h-[320px] items-end overflow-hidden pb-8 lg:pb-12">
        <div className="absolute right-1/2 top-52 h-[512px] w-[512px] translate-x-[160px] scale-[2] transform rounded-full bg-[radial-gradient(circle,_#146EF5_0%,_rgba(20,110,245,0.25)_40%,_rgba(30,30,30,0)_55%)] opacity-[28%]"></div>
        <div className="absolute left-1/2 top-52 h-[512px] w-[512px] -translate-x-[160px] scale-[2] transform rounded-full bg-[radial-gradient(circle,_#FF3E00_0%,_rgba(255,62,0,0.25)_40%,_rgba(30,30,30,0)_55%)] opacity-[28%]"></div>

        <div className="absolute bottom-0 left-1/2 h-[1px] w-[80rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent mix-blend-overlay" />
        <div className="z-10 mx-auto flex items-center gap-4">
          <div className="h-[64px] w-[57px] bg-[url('/webflow.svg')] bg-contain bg-center bg-no-repeat" />
          <div className="h-[20px] w-[20px] bg-[url('/x.svg')] bg-contain bg-center bg-no-repeat" />
          <div className="h-[64px] w-[43px] bg-[url('/svelte.svg')] bg-contain bg-center bg-no-repeat" />
        </div>
      </div>
      <div className="relative mx-auto overflow-hidden px-6">
        <div className="mx-auto flex max-w-[480px] flex-col items-center pt-16 lg:max-w-[640px] lg:pt-20">
          <div className="relative z-10 mb-8 flex flex-col gap-4 text-center lg:gap-6">
            <h2 className="text-balance text-4xl font-semibold leading-tight fg-base lg:text-5xl">
              Build your app today
            </h2>
            <p className="text-balance text-lg font-normal leading-normal fg-muted lg:text-xl lg:leading-8">
              Improve the design and development process with the best Figma Kit
              and component library for Webflow apps.
            </p>
          </div>
          <div className="absolute right-1/2 top-1 z-0 h-[360px] w-[960px] -translate-y-1/2 translate-x-1/2 scale-125 transform rounded-full bg-[radial-gradient(ellipse,_rgba(64,64,64,0.22)_0%,_#1E1E1E_70%)]" />
          <Button variant="primary" size={"medium"} href="/svelte/pricing">
            Get access
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CallToAction;
