"use client";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import {
  BentoCodeBlock,
  BentoIcons,
  BentoVariables,
  BentoThemes,
  BentoComponents,
  BentoAccessible,
} from "@/components/ui/bento";

const Features = () => {
  return (
    <Section className="relative overflow-hidden py-20">
      <div className="absolute right-1/2 top-1 z-0 h-[360px] w-[960px] -translate-y-1/2 translate-x-1/2 scale-125 transform rounded-full bg-[radial-gradient(ellipse,_rgba(64,64,64,0.22)_0%,_#1E1E1E_70%)]" />
      <div className="relative z-20 mx-auto mb-16 flex max-w-[40rem] flex-col items-center gap-4 text-center">
        <p className="flex bg-gradient-to-r from-[#6EA2F5] to-[#FD855F] bg-clip-text text-base font-bold text-transparent">
          Features
        </p>
        <h2 className="text-balance text-2xl font-semibold fg-base lg:text-3xl">
          Easy and fast development process
        </h2>
        <p className="max-w-[30rem] text-base fg-muted">
          Simplify design and development cycles with our optimized, time-saving
          assets and components.
        </p>
      </div>
      <div className="z-10 grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <BentoCodeBlock />
        <BentoVariables />
        <BentoThemes />
        <BentoComponents />
        <BentoIcons />
        <BentoAccessible />
      </div>
    </Section>
  );
};

export default Features;
