"use client";
import { Section } from "@/components/marketing/ui/Section";
import {
  BentoCodeBlock,
  BentoIcons,
  BentoVariables,
  BentoThemes,
  BentoComponents,
  BentoAccessible,
} from "@/components/marketing/ui/bento";
import { Light } from "@/components/marketing/ui/Light";

const Features = () => {
  return (
    <Section className="relative overflow-hidden pb-4 pt-20">
      <Light />
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
