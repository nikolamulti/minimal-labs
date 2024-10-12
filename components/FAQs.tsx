"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";

const FAQs = () => {
  return (
    <Section className="pt-20">
      <div className="mx-auto max-w-[40rem]">
        <div className="mb-12 flex flex-col items-center justify-center gap-4 text-center lg:mb-16">
          <p className="mx-auto flex bg-gradient-to-r from-[#6EA2F5] to-[#FD855F] bg-clip-text text-base font-bold text-transparent">
            FAQs
          </p>
          <h2 className="text-3xl font-semibold fg-base">
            Your questions answered
          </h2>
          <p className="max-w-[24rem] text-base fg-muted">
            Find expert answers to common questions about Figma Kit and Svelte
            component library.
          </p>
        </div>
        <div className="w-full">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h3>What is shadcn/ui?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Improve your design and development process with the best
                  shadcn/ui Kit for Figma, a comprehensive collection of
                  customizable components
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h3>Do I need a team license?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Improve your design and development process with the best
                  shadcn/ui Kit for Figma, a comprehensive collection of
                  customizable components
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h3>How will this kit save me time?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Improve your design and development process with the best
                  shadcn/ui Kit for Figma, a comprehensive collection of
                  customizable components
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h3>Can I use it for client projects?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Improve your design and development process with the best
                  shadcn/ui Kit for Figma, a comprehensive collection of
                  customizable components
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                <h3>Is it a one-time payment?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Improve your design and development process with the best
                  shadcn/ui Kit for Figma, a comprehensive collection of
                  customizable components
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                <h3>Do you provide invoices?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Improve your design and development process with the best
                  shadcn/ui Kit for Figma, a comprehensive collection of
                  customizable components
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default FAQs;
