import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const Hero = () => {
  return (
    <Section removeMaxWidth={true} className="mx-auto mt-20 px-0 pt-12 md:px-0">
      <div className="absolute -top-[5.25rem] left-1/2 z-20 h-[calc(100%+5.25rem)] w-[calc(100vw-30px)] -translate-x-1/2 overflow-hidden">
        <div className="absolute -top-[5.25rem] left-1/2 h-[calc(100%+5.25rem)] w-[160px] -translate-x-[145%] bg-[url('/line-left-small.svg')] bg-contain bg-center bg-no-repeat md:-translate-x-[155%] lg:-translate-x-[200%]" />
        <div className="absolute -top-[5.25rem] right-1/2 h-[calc(100%+5.25rem)] w-[160px] translate-x-[145%] bg-[url('/line-right-small.svg')] bg-contain bg-center bg-no-repeat md:translate-x-[155%] lg:translate-x-[200%]" />
        {/* <div className="absolute -top-[5.25rem] right-1/2 h-[calc(100%+5.25rem)] w-[320px] translate-x-[170%] bg-[url('/line-right-large.svg')] bg-contain bg-center bg-no-repeat md:translate-x-[190%] lg:translate-x-[225%]" /> */}

        <div className="absolute -top-[5.25rem] right-1/2 h-[calc(100%+5.25rem)] w-[320px] translate-x-[170%] md:translate-x-[190%] lg:translate-x-[225%]">
          <svg
            className="h-full w-full"
            viewBox="0 0 314 982"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="line-mask-right">
                <path
                  d="M4.69791 0C-3.64209 239.805 -4.65809 771.531 314 980"
                  stroke="white"
                  strokeWidth="1"
                />
              </mask>
              <mask id="fade-mask-right">
                <linearGradient
                  id="fade-gradient-right"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="30%" stopColor="white" stopOpacity="1" />
                  <stop offset="70%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#fade-gradient-right)"
                />
              </mask>
              <radialGradient id="orange-gradient" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#FF6533" stopOpacity="1" />
                <stop offset="40%" stopColor="#FF6533" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#FF6533" stopOpacity="0.15" />
                <stop offset="90%" stopColor="#FF6533" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="gray-gradient"
                x1="124"
                y1="1"
                x2="124"
                y2="981"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" stopOpacity="0" />
                <stop offset=".18" stopColor="#fff" stopOpacity=".02" />
                <stop offset=".32" stopColor="#fff" stopOpacity=".08" />
                <stop offset=".42" stopColor="#fff" stopOpacity=".08" />
                <stop offset=".46" stopColor="#fff" stopOpacity=".08" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.2149 502.651C-2.3085 313.746.0281372 120.912 4.19791 1.01738L3.19852.98262C-.971771 120.892-3.31305 313.824 35.2351 502.851 73.7808 691.865 153.231 877.075 312.726 981.418l.548-.836C154.111 876.456 74.7406 691.568 36.2149 502.651Z"
              fill="url(#gray-gradient)"
            />
            <g mask="url(#line-mask-right)">
              <g mask="url(#fade-mask-right)">
                <circle
                  r="128"
                  fill="url(#orange-gradient)"
                  className="animate-moveAlongPathDelayed"
                  style={{
                    offsetPath:
                      "path('M4.69791 0C-3.64209 239.805 -4.65809 771.531 314 980')",
                  }}
                />
              </g>
            </g>
          </svg>
        </div>

        {/* Add the new animated signal line */}
        <div className="absolute -top-[5.25rem] left-1/2 h-[calc(100%+5.25rem)] w-[320px] -translate-x-[170%] md:-translate-x-[190%] lg:-translate-x-[225%]">
          <svg
            className="h-full w-full"
            viewBox="0 0 314 982"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="line-mask">
                <path
                  d="M309.302 0C317.642 239.805 318.658 771.531 0 980"
                  stroke="white"
                  strokeWidth="1"
                />
              </mask>
              <mask id="fade-mask">
                <linearGradient id="fade-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="30%" stopColor="white" stopOpacity="1" />
                  <stop offset="70%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <rect width="100%" height="100%" fill="url(#fade-gradient)" />
              </mask>
              <radialGradient id="blue-gradient" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#458CF7" stopOpacity="1" />
                <stop offset="40%" stopColor="#458CF7" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#458CF7" stopOpacity="0.15" />
                <stop offset="90%" stopColor="#458CF7" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="gray-gradient"
                x1="124"
                y1="1"
                x2="124"
                y2="981"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" stopOpacity="0" />
                <stop offset=".18" stopColor="#fff" stopOpacity=".02" />
                <stop offset=".32" stopColor="#fff" stopOpacity=".08" />
                <stop offset=".42" stopColor="#fff" stopOpacity=".08" />
                <stop offset=".46" stopColor="#fff" stopOpacity=".08" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M277.785 502.651c38.524-188.905 36.187-381.739 32.017-501.63362l1-.03476c4.17 119.90938 6.511 312.84138-32.037 501.86838C240.219 691.865 160.769 877.075 1.27378 981.418l-.547462-.836C159.889 876.456 239.259 691.568 277.785 502.651Z"
              fill="url(#gray-gradient)"
            />
            <g mask="url(#line-mask)">
              <g mask="url(#fade-mask)">
                <circle
                  r="128"
                  fill="url(#blue-gradient)"
                  className="animate-moveAlongPath"
                  style={{
                    offsetPath:
                      "path('M309.302 0C317.642 239.805 318.658 771.531 0 980')",
                  }}
                />
              </g>
            </g>
          </svg>
        </div>
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
        <span className="absolute left-1/2 top-[1rem] z-20 hidden -translate-x-[calc(50%+14rem)] -rotate-[18deg] bg-gradient-to-r from-[#6EA2F5] to-[#FD855F] bg-clip-text text-center font-handwritten text-[2rem] leading-7 text-transparent sm:flex">
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
