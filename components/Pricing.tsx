"use client";
import { Section } from "@/components/ui/Section";
import { Card, CardList, CardListItem, CardAction } from "@/components/ui/Card";

import { Button } from "@/components/ui/Button";

const Pricing = () => {
  return (
    <Section className="py-20">
      <div className="mx-auto flex flex-col text-center">
        <div className="mb-16 flex flex-col gap-4">
          <p className="mx-auto flex bg-gradient-to-r from-[#4D91F7] to-[#D8633E] bg-clip-text text-base font-bold text-transparent">
            Pricing
          </p>
          <h2 className="text-balance text-center text-3xl font-bold fg-base">
            Choose the perfect plan for your needs
          </h2>
          <p className="text-balance text-base fg-muted">
            Pay once for a powerful set of tools to boost your workflow. No
            subscriptions or hidden fees - just better design and development at
            your fingertips.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card highlighted={true} className="flex flex-col px-6 pb-6 pt-8">
            <div className="flex flex-col gap-5 text-left">
              <p className="text-xl font-semibold fg-base">Personal</p>
              <div className="flex w-full flex-col gap-2">
                <h3 className="text-4xl font-semibold fg-base">$116</h3>
                <p className="text-sm fg-muted">
                  A single license for solo designers, developers, and
                  freelancers.
                </p>
              </div>
            </div>
            <div className="my-6 border border-muted" />
            <CardList className="mb-6 flex-grow">
              <CardListItem>License for 1 user.</CardListItem>
              <CardListItem>Figma UI Kit (30+ components)</CardListItem>
              <CardListItem>Svelte components (30+ components)</CardListItem>
              <CardListItem>Unlimited projects</CardListItem>
            </CardList>
            <CardAction className="mt-auto">
              <Button
                variant="primary"
                size="medium"
                href="/pricing"
                className="w-full"
              >
                Buy now
              </Button>
            </CardAction>
          </Card>
          <Card className="flex flex-col px-6 pb-6 pt-8">
            <div className="flex flex-col gap-5 text-left">
              <p className="text-xl font-semibold fg-base">Team</p>
              <div className="flex w-full flex-col gap-2">
                <h3 className="text-4xl font-semibold fg-base">$242</h3>
                <p className="text-sm fg-muted">
                  Up to 5 users. Perfect for design teams, agencies, and
                  startups.
                </p>
              </div>
            </div>
            <div className="my-6 border border-muted" />
            <CardList className="mb-6 flex-grow">
              <CardListItem>License for up to 5 users</CardListItem>
              <CardListItem>Figma UI Kit (30+ components)</CardListItem>
              <CardListItem>Svelte components (30+ components)</CardListItem>
              <CardListItem>Unlimited projects</CardListItem>
            </CardList>
            <CardAction className="mt-auto">
              <Button
                variant="faded"
                size="medium"
                href="/pricing"
                className="w-full"
              >
                Buy now
              </Button>
            </CardAction>
          </Card>
        </div>
        <div className="mt-8">
          <p className="mx-auto max-w-[40rem] text-balance text-sm fg-muted">
            Secure 256-bit SSL Encrypted payments by Lemon Squeezy. The standard
            local tax rate may be charged, following the law of your country.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
