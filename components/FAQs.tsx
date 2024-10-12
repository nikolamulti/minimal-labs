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
          <p className="mx-auto flex bg-gradient-to-r from-[#4D91F7] to-[#D8633E] bg-clip-text text-base font-bold text-transparent">
            FAQs
          </p>
          <h2 className="text-3xl font-semibold fg-base">
            Everything you need to know
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
                <h3>How will this kit save me time?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Use our customizable components to save time on repetitive
                  setup.<br></br>
                  Our assets and Svelte component library can help you code
                  interfaces faster.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h3>How does this improve my collaboration with developers?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  The library follows Webflow's design system. That reduces
                  errors and makes handoff between design and development teams
                  smoother.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h3>
                  I'm not familiar with WFS. Can I still use this library?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Absolutely! Our library is intuitive and comes with
                  documentation to help you get started, regardless of your
                  familiarity with Figma or Svelte.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h3>Do I need a team license?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  A Personal license for Svelte and Figma is great for solo
                  creators, freelancers, or designers.<br></br>
                  <br></br>If you work with someone or a team, you will need a
                  team license.<br></br>
                  <br></br>If you plan to share Figma files with team members or
                  publish a UI kit to your team's Figma library, you'll need to
                  buy a Team license.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                <h3>Can I use it for client projects?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes! You can use the product for an unlimited amount of client
                  and personal projects.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                <h3>
                  Do I need to purchase a license for each project I work on?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  No. You can use the product for unlimited personal and
                  commercial projects.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                <h3>Can I upgrade my Personal license to the Team license?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Sure! We will reduce your next order's price by the amount you
                  paid for the Personal license. Please get in touch with us
                  with your customer email.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                <h3>
                  Can I sell templates or themes built with a purchased product?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  No, you're not allowed to sell or distribute the products on
                  your website or marketplaces like ThemeForest, Creative
                  Market, etc. (even for free), as well as resell, lease,
                  license, sublicense or redistribute a purchased product on its
                  own (even for free). You can learn more about licensing on our{" "}
                  <a href="/license" className="underline fg-base">
                    Licensing Page
                  </a>
                  .
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                <h3>Is it a one-time payment?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>Yes, you pay once! It's NOT a subscription.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                <h3>Do you provide invoices?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, we provide invoices for all purchases. We sell via our
                  merchant of record Lemon Squeezy and after the purchase you
                  will be able to generate an invoice with all your company and
                  address details.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>
                <h3>Can you please give the company details?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  We are selling our products via our Merchant of Record - Lemon
                  Squeezy. Their company details will be stated on your invoice
                  after the purchase. Below you can find the Lemon Squeezy
                  details for your accounting:<br></br>
                  <br></br>
                  <span className="fg-base">Name:</span> Lemon Squeezy, LLC
                  <br></br>
                  <span className="fg-base">Address:</span> 222 South Main
                  Street Suite 500, Salt Lake City, UT 84101, USA<br></br>
                  <span className="fg-base">EU VAT number:</span> EU440000220
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger>
                <h3>How does support work?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  If you're having trouble with WFS for Svelte and Figma, we're
                  here to help via email:{" "}
                  <a
                    href="mailto:aleksandar@minimal-square.com"
                    className="fg-base"
                  >
                    aleksandar@minimal-square.com
                  </a>
                  .<br></br>
                  <br></br>Please note we are not Figma support. If you have a
                  Figma-related question, we recommend checking{" "}
                  <a href="https://help.figma.com/hc/en-us" className="fg-base">
                    Figma's Help Center
                  </a>{" "}
                  as a start. Also, check out Figma tutorials for the Figma
                  features, such as{" "}
                  <a
                    href="https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma"
                    className="fg-base"
                  >
                    components
                  </a>
                  ,{" "}
                  <a
                    href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants"
                    className="fg-base"
                  >
                    variants
                  </a>
                  ,{" "}
                  <a
                    href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties"
                    className="fg-base"
                  >
                    Auto Layout 5.0
                  </a>
                  ,{" "}
                  <a
                    href="https://help.figma.com/hc/en-us/articles/360061175334-Create-interactive-components-with-variants"
                    className="fg-base"
                  >
                    interactive components
                  </a>
                  , and{" "}
                  <a
                    href="https://help.figma.com/hc/en-us/articles/5579474826519-Explore-component-properties"
                    className="fg-base"
                  >
                    component properties
                  </a>
                  .
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger>
                <h3>How can I find my receipt email?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  After the purchase you will get a receipt directly to your
                  email:<br></br>
                  <br></br>
                  <ul>
                    <li>
                      • Receipts are sent from{" "}
                      <a
                        href="mailto:hello@lemonsqueezy-mail.com"
                        className="fg-base"
                      >
                        hello@lemonsqueezy-mail.com
                      </a>{" "}
                      with the subject Your WFS for Svelte and Figma receipt.
                    </li>
                    <li>
                      • Try searching in your email inbox from:
                      from:Hello@lemonsqueezy-mail.com . If you cannot find the
                      receipt email, it may have been sent to a different email
                      address. Try to recall what email address you've used to
                      make a purchase.
                    </li>
                  </ul>
                  <br></br>
                  If you get super stuck, we're here to help via{" "}
                  <a
                    href="mailto:aleksandar@minimal-square.com"
                    className="fg-base"
                  >
                    aleksandar@minimal-square.com
                  </a>
                  .
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-14">
              <AccordionTrigger>
                <h3>How do I access the files after purchasing?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  After purchasing, you will receive the Svelte and Figma files
                  for Webflow app building. You will have full edit access to
                  these files to use in your code editor of choice and Figma
                  account.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-15">
              <AccordionTrigger>
                <h3>Why did my payment didn't go through?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  If your payment fails, the following steps can help get your
                  purchase through:<br></br>
                  <ul>
                    <li>
                      • Try the purchase in a different browser, or update your
                      browser and try again
                    </li>
                    <li>• Try the purchase on a different device</li>
                    <li>
                      • Turn off browser extensions and VPNs and try again
                    </li>
                    <li>
                      • Call your card provider or contact PayPal and ask them
                      if there are blocks or limitations on your account
                    </li>
                  </ul>
                  <br></br>If you still have problems with getting your payment
                  through contact us at{" "}
                  <a
                    href="mailto:aleksandar@minimal-square.com"
                    className="fg-base"
                  >
                    aleksandar@minimal-square.com
                  </a>
                  .
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-16">
              <AccordionTrigger>
                <h3>How do I contact you?</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  If you have questions, feedback or suggestions, don't hesitate
                  to contact us via email at{" "}
                  <a
                    href="mailto:aleksandar@minimal-square.com"
                    className="fg-base"
                  >
                    aleksandar@minimal-square.com
                  </a>
                  .<br></br>
                  <br></br>If you want to be informed about new updates,
                  products, or freebies, follow us on X{" "}
                  <a href="https://x.com/minimalsquare" className="fg-base">
                    @minimalsquare
                  </a>
                  .
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
