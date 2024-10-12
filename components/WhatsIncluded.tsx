"use client";

import react from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardList, CardListItem } from "@/components/ui/Card";

const WhatsIncluded: React.FC = () => (
  <Section className="relative overflow-hidden pt-20">
    <div className="relative z-10 mx-auto flex flex-col text-center">
      <div className="mx-auto flex max-w-[40rem] flex-col gap-4 pb-16">
        <p className="mx-auto flex bg-gradient-to-r from-[#6EA2F5] to-[#FD855F] bg-clip-text text-base font-bold text-transparent">
          What's included?
        </p>
        <h2 className="text-balance text-center text-3xl font-bold fg-base">
          Complete app-building toolkit
        </h2>
        <p className="max-w-[34rem] text-base fg-muted">
          Accelerate your workflow with pre-built components, design systems,
          and intuitive CLI tools.
        </p>
      </div>
      <div className="mx-auto flex w-full flex-col gap-6 md:flex-row">
        <Card>
          <div className="flex flex-col gap-8 pb-8 pl-6 pr-6 pt-6">
            <div className="flex flex-col gap-5 text-left">
              <Image
                src="/figma-color.svg"
                alt="Figma logo"
                width={16}
                height={24}
              />
              <div className="flex w-full flex-col gap-2">
                <h3 className="text-xl font-semibold fg-base">Figma UI Kit</h3>
                <p className="text-sm fg-muted">
                  Leverage Webflow's design system to skip the basics and dive
                  straight into crafting your app's features.
                </p>
              </div>
            </div>
          </div>
          <div className="border border-muted" />
          <CardList className="px-6 py-8">
            <CardListItem>
              <span className="">
                <span className="font-semibold fg-base">
                  Pixel-perfect components:
                </span>{" "}
                Fixed variables, variants, and components from Webflow's Figma
                file.
              </span>
            </CardListItem>
            <CardListItem>
              <span className="">
                <span className="font-semibold fg-base">25+ components:</span>{" "}
                An extended list of components is at your fingertips.
              </span>
            </CardListItem>
            <CardListItem>
              <span className="">
                <span className="font-semibold fg-base">
                  Auto Layout components:
                </span>{" "}
                Auto-layout components grow or shrink as you edit the text.
              </span>
            </CardListItem>
            <CardListItem>
              <span className="">
                <span className="font-semibold fg-base">
                  Designer themes supported:
                </span>{" "}
                Design and adapt your app to all native Webflow themes.
              </span>
            </CardListItem>
            <CardListItem>
              <span className="">
                <span className="font-semibold fg-base">
                  Perfectly matching the code:
                </span>{" "}
                Pixel perfect components that match both Figma and Svelte
                components.
              </span>
            </CardListItem>
          </CardList>
        </Card>
        <Card>
          <div className="flex flex-col gap-8 pb-8 pl-6 pr-6 pt-6">
            <div className="flex flex-col gap-5 text-left">
              <Image
                src="/svelte-color.svg"
                alt="Svelte logo"
                width={20}
                height={32}
              />
              <div className="flex w-full flex-col gap-2">
                <h3 className="text-xl font-semibold fg-base">
                  Svelte components
                </h3>
                <p className="text-sm fg-muted">
                  Streamline your Webflow projects with plug-and-play building
                  blocks.
                </p>
              </div>
            </div>
          </div>
          <div className="border border-muted" />
          <CardList className="px-6 py-8">
            <CardListItem>
              <span className="">
                <span className="font-semibold fg-base">
                  Accessible components:
                </span>{" "}
                All components are built on top of Bits UI headless component
                library.
              </span>
            </CardListItem>
            <CardListItem>
              <span className="">
                <span className="font-semibold fg-base">
                  Typescript support:
                </span>{" "}
                Providing better error-catching and code suggestions as you
                work.
              </span>
            </CardListItem>
            <CardListItem>
              <span className="">
                <span className="font-semibold fg-base">
                  Semantic variables:
                </span>{" "}
                Names that clearly describe the data they hold, making code
                easier to understand.
              </span>
            </CardListItem>
            <CardListItem>
              <span className="">
                <span className="font-semibold fg-base">Svelte icons:</span>{" "}
                200+ icons compatible with the Figma file. Optimized and ready
                for use.
              </span>
            </CardListItem>
            <CardListItem>
              <span className="">
                <span className="font-semibold fg-base">Themes:</span> Choose
                from all three native Webflow designer themes.
              </span>
            </CardListItem>
          </CardList>
        </Card>
      </div>
      <div className="relative mt-6 animate-border overflow-hidden rounded-xl border border-transparent [background:linear-gradient(45deg,rgba(255,255,255,13%),#1e1e1e_50%,rgba(255,255,255,13%))_padding-box,conic-gradient(from_var(--border-angle),rgba(255,255,255,13%)_15%,_rgba(255,62,0,75%)_22%,_rgba(255,255,255,13%)_28%,_rgba(255,255,255,13%)_55%,_rgba(20,110,245,75%)_63%,_rgba(255,255,255,13%)_68%,_rgba(255,255,255,13%)_100%)_border-box]">
        <div className="absolute inset-0 rounded-xl bg-base bg-[linear-gradient(45deg,var(--tw-gradient-stops))] from-[#262626] via-[#1E1E1E] to-[#1E1E1E]" />
        <div className="relative mx-auto flex w-full rounded-[11px] px-8 py-6">
          <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex max-w-[22.5rem] flex-col gap-1 text-left">
              <h3 className="text-base font-semibold fg-base">
                CLI for faster workflow
              </h3>
              <p className="text-sm fg-muted">
                Webflow Svelte CLI is a tool designed to simplify the process of
                adding components in a project.
              </p>
            </div>
            <Button href="/docs" className="whitespace-nowrap">
              How it works
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute left-1/2 top-0 h-[1px] w-[60rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent" />
    <div className="absolute right-1/2 top-1 z-0 h-[360px] w-[960px] -translate-y-1/2 translate-x-1/2 scale-125 transform rounded-full bg-[radial-gradient(ellipse,_rgba(64,64,64,0.22)_0%,_#1E1E1E_70%)]" />
  </Section>
);

export default WhatsIncluded;
