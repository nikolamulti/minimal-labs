import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ComponentCard } from "@/components/ui/ComponentCard";

const componentData = [
  {
    title: "Accordion",
    description: "2 variants",
    imageSrc: "/components/Accordion.png",
    href: "/svelte/docs/accordion",
  },
  {
    title: "Aspect ratio",
    description: "18 variants",
    imageSrc: "/components/Aspect.png",
    href: "/svelte/docs/aspect-ratio",
  },
  {
    title: "Avatar",
    description: "89 variants",
    imageSrc: "/components/Avatar.png",
    href: "/svelte/docs/avatar",
  },
  {
    title: "Button",
    description: "75 variants",
    imageSrc: "/components/Button.png",
    href: "/svelte/docs/button",
  },
  {
    title: "Checkbox",
    description: "24 variants",
    imageSrc: "/components/Checkbox.png",
    href: "/svelte/docs/checkbox",
  },
  {
    title: "Color input",
    description: "6 variants",
    imageSrc: "/components/Color input.png",
    href: "/svelte/docs/color-picker",
  },
  {
    title: "Combobox",
    description: "2 variants",
    imageSrc: "/components/Combobox.png",
    href: "/svelte/docs/combobox",
  },
  {
    title: "Divider",
    description: "8 variants",
    imageSrc: "/components/Divider.png",
    href: "/svelte/docs/divider",
  },
  {
    title: "Dropdown",
    description: "4 variants",
    imageSrc: "/components/Dropdown.png",
    href: "/svelte/docs/dropdown",
  },
  {
    title: "Empty state",
    description: "6 variants",
    imageSrc: "/components/Empty state.png",
    href: "/svelte/docs/empty-state",
  },
  {
    title: "Fieldset",
    description: "1 variant",
    imageSrc: "/components/Fieldset.png",
    href: "/svelte/docs/fieldset",
  },
  {
    title: "Helper text",
    description: "2 variants",
    imageSrc: "/components/Helper text.png",
    href: "/svelte/docs/helper-text",
  },
  {
    title: "Label",
    description: "3 variants",
    imageSrc: "/components/Label.png",
    href: "/svelte/docs/label",
  },
  {
    title: "Link",
    description: "30 variants",
    imageSrc: "/components/Link.png",
    href: "/svelte/docs/link",
  },
  {
    title: "Navigation",
    description: "3 variants",
    imageSrc: "/components/Navigation.png",
    href: "/svelte/docs/navigation",
  },
  {
    title: "Note",
    description: "48 variants",
    imageSrc: "/components/Note.png",
    href: "/svelte/docs/note",
  },
  {
    title: "Number input",
    description: "6 variants",
    imageSrc: "/components/Number input.png",
    href: "/svelte/docs/number-input",
  },
  {
    title: "Progress",
    description: "55 variants",
    imageSrc: "/components/Progress.png",
    href: "/svelte/docs/progress",
  },
  {
    title: "Radio",
    description: "16 variants",
    imageSrc: "/components/Radio.png",
    href: "/svelte/docs/radio",
  },
  {
    title: "Scroll area",
    description: "3 variants",
    imageSrc: "/components/Scroll area.png",
    href: "/svelte/docs/scroll-area",
  },
  {
    title: "Select",
    description: "2 variants",
    imageSrc: "/components/Select.png",
    href: "/svelte/docs/select",
  },
  {
    title: "Slider",
    description: "75 variants",
    imageSrc: "/components/Slider.png",
    href: "/svelte/docs/slider",
  },
  {
    title: "Spinner",
    description: "4 variants",
    imageSrc: "/components/Spinner.png",
    href: "/svelte/docs/spinner",
  },
  {
    title: "Switch",
    description: "8 variants",
    imageSrc: "/components/Switch.png",
    href: "/svelte/docs/switch",
  },
  {
    title: "Tabs",
    description: "6 variants",
    imageSrc: "/components/Tabs.png",
    href: "/svelte/docs/tabs",
  },
  {
    title: "Text input",
    description: "6 variants",
    imageSrc: "/components/Text input.png",
    href: "/svelte/docs/text-input",
  },
  {
    title: "Textarea",
    description: "6 variants",
    imageSrc: "/components/Textarea.png",
    href: "/svelte/docs/textarea",
  },
  {
    title: "Tooltip",
    description: "8 variants",
    imageSrc: "/components/Tooltip.png",
    href: "/svelte/docs/tooltip",
  },
];

const Components = () => {
  return (
    <Section className="relative mx-auto overflow-hidden pb-20 pt-24">
      <div className="relative z-10 flex flex-col gap-16 self-start text-center">
        <div className="relative flex w-full justify-self-start text-left">
          <div className="flex max-w-[40rem] flex-col items-start gap-4">
            <p className="flex bg-gradient-to-r from-[#6EA2F5] to-[#FD855F] bg-clip-text text-base font-bold text-transparent">
              Library
            </p>
            <h2 className="text-balance text-2xl font-semibold fg-base lg:text-3xl">
              Pre-made components
            </h2>
            <p className="max-w-[30rem] text-base fg-muted">
              Curated library of ready-to-use Webflow app elements.
            </p>
          </div>
          <div className="absolute right-0 top-0 flex justify-end max-[850px]:hidden">
            <span className="absolute top-[1rem] z-20 -rotate-[-15deg] text-nowrap bg-gradient-to-r from-[#6EA2F5] to-[#FD855F] bg-clip-text text-center font-handwritten text-[2rem] leading-7 text-transparent">
              Everything you
              <br />
              need to build an app
            </span>
            <div className="absolute left-1/2 top-[2.1rem] z-20 h-[90px] w-[194px] -translate-x-[calc(50%+11rem)] bg-[url('/components-arrow.svg')] bg-contain bg-center bg-no-repeat" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
      <div className="absolute bottom-0 left-1/2 h-[1px] w-[80rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent mix-blend-overlay" />
    </Section>
  );
};

export default Components;
