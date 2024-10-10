"use client";

import React from "React";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

const Benefits = () => {
  return (
    <Section className="relative overflow-hidden py-20">
      <div className="mx-auto mb-16 flex max-w-[40rem] flex-col gap-4 text-center">
        <p className="mx-auto flex bg-gradient-to-r from-[#4D91F7] to-[#D8633E] bg-clip-text text-base font-bold text-transparent">
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
          <div className="flex w-full flex-col justify-center gap-4">
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
                    src="/webflow-icons/CheckDefault.svg"
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
                    src="/webflow-icons/CheckDefault.svg"
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
          <div className="h-[456px] w-full rounded-xl bg-muted"></div>
        </div>
        <div className="flex flex-col-reverse gap-12 lg:flex-row">
          <div className="h-[456px] w-full rounded-xl bg-muted"></div>
          <div className="flex w-full flex-col justify-center gap-4">
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
                    src="/webflow-icons/CheckDefault.svg"
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
                    src="/webflow-icons/CheckDefault.svg"
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
