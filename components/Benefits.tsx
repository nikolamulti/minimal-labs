"use client";

import React from "React";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

const Benefits = () => {
  return (
    <Section className="relative overflow-hidden py-20">
      <div className="mx-auto mb-16 flex max-w-[40rem] flex-col gap-4 text-center">
        <p className="mx-auto flex bg-gradient-to-r from-[#6EA2F5] to-[#FD855F] bg-clip-text text-base font-bold text-transparent">
          Benefits
        </p>
        <h2 className="text-balance text-2xl font-semibold fg-base lg:text-3xl">
          Bridge design and development
        </h2>
        <p className="text-base fg-muted">
          Seamlessly transition from Figma designs to functional UI with our
          integrated kit and Svelte component library.
        </p>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="relative z-20 flex w-full flex-col justify-center gap-4">
            <div className="mb-8 flex flex-col gap-2">
              <h3 className="text-2xl font-semibold fg-base">
                Work smarter, not harder
              </h3>
              <p className="text-sm fg-muted">
                Streamline your workflow and focus on what truly matters. 100+
                hours saved means more time for innovation and growth.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <div className="flex shrink-0">
                  <Image
                    className="h-5 w-5 fg-success"
                    src="/ArrowsSplit.svg"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold fg-base">
                    Build logic, not components
                  </p>
                  <p className="text-sm fg-muted">
                    Focus on creating business logic rather than endlessly
                    crafting individual components.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex shrink-0">
                  <Image
                    className="h-5 w-5 fg-success"
                    src="/ClockCountdown.svg"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold fg-base">
                    Develop app in no time
                  </p>
                  <p className="text-sm fg-muted">
                    Pre-made components allow fast app building and shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex h-[360px] w-full flex-col justify-center rounded-xl p-6">
            <div className="absolute left-1/2 top-1/2 h-[30rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,#292929_0%,#1E1E1E_65%)]" />
            <Card className="z-10 flex-row gap-4 p-5">
              <div className="flex flex-row items-start justify-between gap-4">
                <div className="mb-6 flex flex-col gap-1">
                  <h3 className="text-base font-semibold fg-base">
                    All 3 modes available
                  </h3>
                  <p className="text-sm fg-muted">
                    Compatible with native Webflow designer themes and their
                    changes.
                  </p>
                </div>
                <div className="rounded-full border border-muted bg-default px-2 py-0.5 text-xs fg-muted">
                  +30%
                </div>
              </div>
              <div className="w-full shrink-0">
                <img
                  src="/Performance-loading-graphic.png"
                  alt="Performance loading graphic"
                  width="100%"
                  height={80}
                />
              </div>
            </Card>
          </div>
        </div>
        <div className="flex h-[360px] flex-col-reverse gap-12 lg:flex-row">
          <div className="relative flex w-full flex-col justify-center rounded-xl p-6">
            <div className="absolute left-1/2 top-1/2 h-[30rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,#292929_0%,#1E1E1E_65%)]" />
            <Card className="z-20 flex-row gap-4 p-5">
              <div className="mb-6 flex flex-col gap-1">
                <h3 className="text-base font-semibold fg-base">
                  Perfectly aligned
                </h3>
                <p className="text-sm fg-muted">
                  Focus on creating business logic rather than crafting
                  components.
                </p>
              </div>
              <div className="flex h-[90px] w-full shrink-0 flex-row items-center justify-center">
                <img
                  src="/Figma-svelte-webflow-logos-graphic.png"
                  alt="Graphic with Figma, Svelte, and Webflow logos"
                  width="100%"
                  height={90}
                />
              </div>
            </Card>
          </div>
          <div className="relative z-20 flex w-full flex-col justify-center gap-4">
            <div className="mb-8 flex flex-col gap-2">
              <h3 className="text-2xl font-semibold fg-base">
                Keep consistency with ease
              </h3>
              <p className="text-sm fg-muted">
                From concept to flawless execution, ensure every detail aligns
                perfectly with your vision and brand standards.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <div className="flex shrink-0">
                  <Image
                    className="h-5 w-5 fg-success"
                    src="/Target.svg"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold fg-base">
                    Improved accuracy
                  </p>
                  <p className="text-sm fg-muted">
                    Minimizes discrepancies between design and final product.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex shrink-0">
                  <Image
                    className="h-5 w-5 fg-success"
                    src="/ChartLineUp.svg"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold fg-base">Scalability</p>
                  <p className="text-sm fg-muted">
                    Easily extend the system as new design patterns and
                    components are needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
