import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const Hero = () => {
  return (
    <Section removeMaxWidth={true} className="mx-auto px-0 pt-12 md:px-0">
      <div className="absolute -top-[5.25rem] left-1/2 z-20 h-[calc(100%+5.25rem)] w-[calc(100vw-30px)] -translate-x-1/2 overflow-hidden">
        <div className="absolute -top-[5.25rem] left-1/2 h-[calc(100%+5.25rem)] w-[320px] -translate-x-[170%] bg-[url('/line-left-large.svg')] bg-contain bg-center bg-no-repeat md:-translate-x-[190%] lg:-translate-x-[225%]" />
        <div className="absolute -top-[5.25rem] left-1/2 h-[calc(100%+5.25rem)] w-[160px] -translate-x-[145%] bg-[url('/line-left-small.svg')] bg-contain bg-center bg-no-repeat md:-translate-x-[155%] lg:-translate-x-[200%]" />
        <div className="absolute -top-[5.25rem] right-1/2 h-[calc(100%+5.25rem)] w-[160px] translate-x-[145%] bg-[url('/line-right-small.svg')] bg-contain bg-center bg-no-repeat md:translate-x-[155%] lg:translate-x-[200%]" />
        <div className="absolute -top-[5.25rem] right-1/2 h-[calc(100%+5.25rem)] w-[320px] translate-x-[170%] bg-[url('/line-right-large.svg')] bg-contain bg-center bg-no-repeat md:translate-x-[190%] lg:translate-x-[225%]" />
      </div>
      <div className="absolute inset-0 z-0 -mt-[5.25rem] bg-gradient-to-b from-[#1A1A1A] via-[#1E1E1E] to-[#1E1E1E]" />
      <div className="relative z-20 flex flex-col items-center gap-8 px-4 text-center md:px-6">
        <div className="z-10 mx-auto flex items-center gap-3">
          <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-[0.25rem] border border-muted bg-base">
            <div className="ml-0.5 h-[1.0625rem] w-[1.625rem] bg-[url('/webflow-color.svg')] bg-contain bg-center bg-no-repeat" />
          </div>
          <div className="h-[0.75rem] w-[0.75rem] bg-[url('/x.svg')] bg-contain bg-center bg-no-repeat" />
          <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-[0.25rem] border border-muted bg-base">
            <div className="h-[1.5rem] w-[1.25rem] bg-[url('/svelte-color.svg')] bg-contain bg-center bg-no-repeat" />
          </div>
          <div className="h-[0.75rem] w-[0.75rem] bg-[url('/x.svg')] bg-contain bg-center bg-no-repeat" />
          <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-[0.25rem] border border-muted bg-base">
            <div className="h-[1.5rem] w-[1rem] bg-[url('/figma-color.svg')] bg-contain bg-center bg-no-repeat" />
          </div>
        </div>
        <div className="flex max-w-[40rem] flex-col gap-6">
          <h1 className="text-balance text-[2.25rem] font-semibold leading-[3rem] fg-base lg:text-5xl lg:leading-[3.625rem]">
            Supercharge building Webflow apps
          </h1>
          <p className="text-balance text-xl font-light leading-[2rem] fg-muted">
            Ship faster with Webflow's design system, Svelte components and
            user-friendly CLI that streamline your workflow.
          </p>
        </div>
        <div className="flex w-full flex-col justify-center gap-4 min-[480px]:flex-row">
          <Button href="/" size="medium" variant="primary">
            Get access
          </Button>
          <Button href="/" size="medium">
            Preview
          </Button>
        </div>
      </div>
      <div className="relative z-30 flex h-[30rem] w-full items-end justify-center overflow-hidden">
        <span className="absolute left-1/2 top-[1rem] z-20 hidden -translate-x-[calc(50%+14rem)] -rotate-[18deg] text-center font-handwritten text-[2rem] leading-7 fg-base sm:flex">
          5x faster
          <br />
          development
        </span>
        <div className="absolute left-1/2 top-[4.5rem] z-20 hidden h-[4.5625rem] w-[4.5625rem] -translate-x-[calc(50%+11rem)] bg-[url('/hero-arrow.svg')] bg-contain bg-center bg-no-repeat sm:flex" />
        <div className="pointer-events-none absolute right-1/2 top-1/3 h-[512px] w-[512px] translate-x-[160px] scale-[2] transform rounded-full bg-[radial-gradient(circle,_#146EF5_0%,_rgba(20,110,245,0.25)_40%,_rgba(30,30,30,0)_55%)] opacity-[28%]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[512px] w-[512px] -translate-x-[160px] scale-[2] transform rounded-full bg-[radial-gradient(circle,_#FF3E00_0%,_rgba(255,62,0,0.25)_40%,_rgba(30,30,30,0)_55%)] opacity-[28%]" />
        <div className="relative w-full">
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 w-[320px] -translate-x-1/2 transform overflow-hidden rounded-lg shadow-[0px_3px_64px_-4px_rgba(0,0,0,0.5)]">
            <Image
              src="/app-shell-01.jpg"
              alt="Hero"
              width={320}
              height={400}
              className="pointer-events-none h-auto w-full"
            />
          </div>
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 hidden w-[320px] -translate-x-[calc(50%+128px)] transform overflow-hidden rounded-lg bg-base shadow-lg sm:flex md:-translate-x-[calc(50%+160px)]">
            <Image
              src="/app-shell-02.jpg"
              alt="Hero"
              width={320}
              height={360}
              className="pointer-events-none opacity-50"
            />
          </div>
          <div className="pointer-events-none absolute bottom-0 right-1/2 z-0 hidden w-[320px] translate-x-[calc(50%+128px)] transform overflow-hidden rounded-lg bg-base shadow-lg sm:flex md:translate-x-[calc(50%+160px)]">
            <Image
              src="/app-shell-03.jpg"
              alt="Hero"
              width={320}
              height={320}
              className="pointer-events-none opacity-50"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 mx-auto h-[256px] max-w-[320px] bg-gradient-to-t from-[rgba(30,30,30,1)] to-[rgba(0,0,0,0)] sm:max-w-[36rem] md:max-w-[40rem]" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
