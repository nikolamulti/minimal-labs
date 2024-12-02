"use client";

import {
  Nav,
  CallToAction,
  Footer,
  FAQs,
  Pricing,
  WhatsIncluded,
  Components,
  Features,
  Benefits,
} from "@/components/marketing/sections";
import Hero from "@/components/marketing/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="relative bg-base">
          <div className="pointer-events-none absolute left-0 z-[110] hidden h-full w-[15rem] bg-gradient-to-l from-[#1E1E1E] to-[#1B1B1B] 2xl:block" />
          <div className="pointer-events-none absolute right-0 z-[110] hidden h-full w-[15rem] bg-gradient-to-r from-[#1E1E1E] to-[#1B1B1B] 2xl:block" />
          <WhatsIncluded />
          <Components />
          <Features />
          <Benefits />
          <Pricing />
          <FAQs />
          <CallToAction />
        </div>
      </main>
      <div className="relative bg-base">
        <div className="pointer-events-none absolute left-0 z-[110] hidden h-full w-[15rem] bg-gradient-to-l from-[#1E1E1E] to-[#1B1B1B] 2xl:block" />
        <div className="pointer-events-none absolute right-0 z-[110] hidden h-full w-[15rem] bg-gradient-to-r from-[#1E1E1E] to-[#1B1B1B] 2xl:block" />
        <Footer />
      </div>
    </>
  );
}
