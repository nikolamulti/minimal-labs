"use client";
import { Section } from "@/components/ui/Section";
import { Card, CardList, CardListItem, CardAction } from "@/components/ui/Card";

import { Button } from "@/components/ui/Button";
import { Light } from "@/components/ui/Light";

const Pricing = () => {
  return (
    <Section id="pricing" className="relative overflow-hidden pt-20">
      <div className="relative z-20 mx-auto flex flex-col text-center">
        <div className="mb-16 flex flex-col items-center gap-4">
          <p className="flex bg-gradient-to-r from-[#6EA2F5] to-[#FD855F] bg-clip-text text-base font-bold text-transparent">
            Pricing
          </p>
          <h2 className="text-balance text-center text-3xl font-bold fg-base">
            Choose the perfect plan for your needs
          </h2>
          <p className="max-w-[30rem] text-base fg-muted">
            Pay once for a powerful set of tools to boost your workflow. No
            subscriptions or hidden fees - just better design and development at
            your fingertips.
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-6 md:flex-row">
          <div className="max-w-[25rem] rounded-xl bg-[linear-gradient(142deg,#FF6533_0%,rgba(255,101,51,0)_25%,rgba(69,140,247,0)_75%,#458CF7_100%)] p-[0.0625rem] md:max-w-[22.5rem]">
            <Card className="flex flex-col">
              <div className="flex flex-col items-start gap-5 px-6 pb-8 pt-6 text-left">
                <div className="rounded-full bg-white px-[0.625rem] py-0.5 text-sm fg-inverted">
                  Personal
                </div>
                <div className="flex w-full flex-col gap-2">
                  <h3 className="text-4xl font-semibold fg-base">$116</h3>
                  <p className="text-base fg-muted">
                    A single license for solo designers, developers, and
                    freelancers.
                  </p>
                </div>
              </div>
              <div className="border border-muted" />
              <CardList className="flex-grow px-6 pb-6 pt-8">
                <CardListItem>License for 1 user</CardListItem>
                <CardListItem>Figma UI Kit (30+ components)</CardListItem>
                <CardListItem>Svelte components (30+ components)</CardListItem>
                <CardListItem>Unlimited projects</CardListItem>
                <CardAction className="mt-6">
                  <Button
                    variant="primary"
                    size="medium"
                    href="/pricing"
                    className="w-full"
                  >
                    Buy personal license
                  </Button>
                </CardAction>
              </CardList>
            </Card>
          </div>
          <Card className="flex max-w-[25rem] flex-col md:max-w-[22.5rem]">
            <div className="p-[0.0625]">
              <div className="flex flex-col items-start gap-5 px-6 pb-8 pt-6 text-left">
                <div className="rounded-full border border-muted bg-default px-[0.625rem] py-0.5 text-sm fg-muted">
                  Team
                </div>
                <div className="flex w-full flex-col gap-2">
                  <h3 className="text-4xl font-semibold fg-base">$242</h3>
                  <p className="text-base fg-muted">
                    Up to 5 users. Perfect for design teams, agencies, and
                    startups.
                  </p>
                </div>
              </div>

              <div className="border border-muted" />
              <CardList className="flex-grow px-6 pb-6 pt-8">
                <CardListItem>License for up to 5 users</CardListItem>
                <CardListItem>Figma UI Kit (30+ components)</CardListItem>
                <CardListItem>Svelte components (30+ components)</CardListItem>
                <CardListItem>Unlimited projects</CardListItem>
                <CardAction className="mt-6">
                  <Button
                    variant="faded"
                    size="medium"
                    href="/pricing"
                    className="w-full"
                  >
                    Buy team license
                  </Button>
                </CardAction>
              </CardList>
            </div>
          </Card>
        </div>
        <div className="mt-8">
          <p className="mx-auto max-w-[25rem] text-sm fg-subtle md:max-w-xl">
            Secure 256-bit SSL Encrypted payments by Lemon Squeezy. The standard
            local tax rate may be charged, following the law of your country.
          </p>
        </div>
      </div>
      <Light />
    </Section>
  );
};

export default Pricing;
