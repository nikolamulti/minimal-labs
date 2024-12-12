import React from "react";
import { Section } from "@/components/marketing/ui/Section";
import { ComponentCard } from "@/components/marketing/ui/ComponentCard";

const componentData = [
  {
    title: "Accordion",
    description: "4 components",
    imageSrc: "/components/Accordion.png",
    href: "/svelte/docs/accordion",
  },
  {
    title: "Aspect ratio",
    description: "1 component",
    imageSrc: "/components/Aspect.png",
    href: "/svelte/docs/aspect-ratio",
  },
  {
    title: "Avatar",
    description: "2 components",
    imageSrc: "/components/Avatar.png",
    href: "/svelte/docs/avatar",
  },
  {
    title: "Button",
    description: "2 components",
    imageSrc: "/components/Button.png",
    href: "/svelte/docs/button",
  },
  {
    title: "Checkbox",
    description: "3 components",
    imageSrc: "/components/Checkbox.png",
    href: "/svelte/docs/checkbox",
  },
  {
    title: "Combobox",
    description: "7 components",
    imageSrc: "/components/Combobox.png",
    href: "/svelte/docs/combobox",
  },
  {
    title: "Divider",
    description: "1 component",
    imageSrc: "/components/Divider.png",
    href: "/svelte/docs/divider",
  },
  {
    title: "Dropdown menu",
    description: "15 components",
    imageSrc: "/components/Dropdown.png",
    href: "/svelte/docs/dropdown-menu",
  },
  {
    title: "Empty state",
    description: "5 components",
    imageSrc: "/components/Empty state.png",
    href: "/svelte/docs/empty-state",
  },
  {
    title: "Fieldset",
    description: "7 components",
    imageSrc: "/components/Fieldset.png",
    href: "/svelte/docs/fieldset",
  },
  {
    title: "Link",
    description: "1 component",
    imageSrc: "/components/Link.png",
    href: "/svelte/docs/link",
  },
  {
    title: "Note",
    description: "5 components",
    imageSrc: "/components/Note.png",
    href: "/svelte/docs/note",
  },
  {
    title: "Number input",
    description: "1 component",
    imageSrc: "/components/Number input.png",
    href: "/svelte/docs/number-input",
  },
  {
    title: "Progress",
    description: "1 component",
    imageSrc: "/components/Progress.png",
    href: "/svelte/docs/progress",
  },
  {
    title: "Radio",
    description: "3 components",
    imageSrc: "/components/Radio.png",
    href: "/svelte/docs/radio",
  },
  {
    title: "Scroll area",
    description: "1 component",
    imageSrc: "/components/Scroll area.png",
    href: "/svelte/docs/scroll-area",
  },
  {
    title: "Select",
    description: "9 components",
    imageSrc: "/components/Select.png",
    href: "/svelte/docs/select",
  },
  {
    title: "Slider",
    description: "1 component",
    imageSrc: "/components/Slider.png",
    href: "/svelte/docs/slider",
  },
  {
    title: "Spinner",
    description: "1 component",
    imageSrc: "/components/Spinner.png",
    href: "/svelte/docs/spinner",
  },
  {
    title: "Switch",
    description: "2 components",
    imageSrc: "/components/Switch.png",
    href: "/svelte/docs/switch",
  },
  {
    title: "Tabs",
    description: "4 components",
    imageSrc: "/components/Tabs.png",
    href: "/svelte/docs/tabs",
  },
  {
    title: "Text input",
    description: "1 component",
    imageSrc: "/components/Text input.png",
    href: "/svelte/docs/text-input",
  },
  {
    title: "Textarea",
    description: "1 component",
    imageSrc: "/components/Textarea.png",
    href: "/svelte/docs/textarea",
  },
  {
    title: "Tooltip",
    description: "3 components",
    imageSrc: "/components/Tooltip.png",
    href: "/svelte/docs/tooltip",
  },
];

const Components = () => {
  return (
    <Section className="relative mx-auto overflow-hidden pb-20 pt-24">
      <div className="relative z-10 mx-auto flex max-w-[40rem] flex-col gap-16 self-start text-center lg:max-w-none">
        <div className="relative flex w-full justify-self-start text-left">
          <div className="flex max-w-[40rem] flex-col items-start gap-4">
            <p className="flex bg-gradient-to-r from-[#6EA2F5] to-[#FD855F] bg-clip-text text-base font-bold text-transparent">
              Components
            </p>
            <h2 className="text-balance text-2xl font-semibold fg-base lg:text-3xl">
              Build Webflow apps faster with Svelte components
            </h2>
            <p className="max-w-[30rem] text-base fg-muted">
              A comprehensive collection of accessible components that match
              Webflow&apos;s design system.
            </p>
          </div>
          <div className="absolute right-0 top-0 hidden justify-end lg:flex mt-6">
            <span className="absolute top-[1rem] z-20 -rotate-[-15deg] text-nowrap bg-gradient-to-r from-[#6EA2F5] to-[#FD855F] bg-clip-text text-center font-handwritten text-[2rem] leading-7 text-transparent">
              Everything you
              <br />
              need to build an app
            </span>
            <div className="absolute left-1/2 top-[2.1rem] z-20 h-[5.625rem] w-[12.125rem] -translate-x-[calc(50%+11rem)] bg-[url('/components-arrow.svg')] bg-contain bg-center bg-no-repeat" />
          </div>
        </div>
        <div className="grid gap-4 min-[600px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {componentData.map((component, index) => (
            <ComponentCard
              key={index}
              title={component.title}
              description={component.description}
              imageSrc={component.imageSrc}
              href={component.href}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Components;
