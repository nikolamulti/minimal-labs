"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { NavNotFound } from "@/components";

export default function NotFound() {
  return (
    <>
      <NavNotFound />
      <Section removeMaxWidth={true} className="mx-auto px-0 md:px-0">
        <div className="absolute z-20 flex h-dvh w-full flex-col items-center justify-center gap-8 px-4 text-center md:px-6">
          <div className="flex max-w-[40rem] flex-col gap-6">
            <h2 className="text-balance text-[2.25rem] font-semibold leading-[3rem] fg-base lg:text-5xl lg:leading-[3.625rem]">
              Page Not Found
            </h2>
            <p className="text-balance text-xl font-light leading-[2rem] fg-muted">
              Sorry, the page you're looking for doesn't exist.
            </p>
          </div>
          <Button size="medium" variant="primary" href="/svelte">
            Go Home
          </Button>
        </div>
      </Section>
    </>
  );
}
