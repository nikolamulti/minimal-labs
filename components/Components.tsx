import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ComponentCard } from "@/components/ui/ComponentCard";

const componentData = [
  {
    title: "Accordion",
    description: "16 variants",
    imageSrc: "/component-icons/Accordion.png",
    href: "/svelte/docs/accordion",
  },
  {
    title: "Aspect ratio",
    description: "16 variants",
    imageSrc: "/component-icons/Aspect.png",
    href: "/svelte/docs/aspect-ratio",
  },
  {
    title: "Avatar",
    description: "16 variants",
    imageSrc: "/component-icons/Avatar.png",
    href: "/svelte/docs/avatar",
  },
  {
    title: "Button",
    description: "16 variants",
    imageSrc: "/component-icons/Button.png",
    href: "/svelte/docs/button",
  },
  {
    title: "Checkbox",
    description: "16 variants",
    imageSrc: "/component-icons/Checkbox.png",
    href: "/svelte/docs/checkbox",
  },
  {
    title: "Color input",
    description: "16 variants",
    imageSrc: "/component-icons/Color input.png",
    href: "/svelte/docs/color-picker",
  },
  {
    title: "Combobox",
    description: "16 variants",
    imageSrc: "/component-icons/Combobox.png",
    href: "/svelte/docs/combobox",
  },
  {
    title: "Divider",
    description: "16 variants",
    imageSrc: "/component-icons/Divider.png",
    href: "/svelte/docs/divider",
  },
  {
    title: "Dropdown",
    description: "16 variants",
    imageSrc: "/component-icons/Dropdown.png",
    href: "/svelte/docs/dropdown",
  },
  {
    title: "Empty state",
    description: "16 variants",
    imageSrc: "/component-icons/Empty state.png",
    href: "/svelte/docs/empty-state",
  },
  {
    title: "Fieldset",
    description: "16 variants",
    imageSrc: "/component-icons/Fieldset.png",
    href: "/svelte/docs/fieldset",
  },
  {
    title: "Helper text",
    description: "16 variants",
    imageSrc: "/component-icons/Helper text.png",
    href: "/svelte/docs/helper-text",
  },
  {
    title: "Label",
    description: "16 variants",
    imageSrc: "/component-icons/Label.png",
    href: "/svelte/docs/label",
  },
  {
    title: "Link",
    description: "16 variants",
    imageSrc: "/component-icons/Link.png",
    href: "/svelte/docs/link",
  },
  {
    title: "Navigation",
    description: "16 variants",
    imageSrc: "/component-icons/Navigation.png",
    href: "/svelte/docs/navigation",
  },
  {
    title: "Note",
    description: "16 variants",
    imageSrc: "/component-icons/Note.png",
    href: "/svelte/docs/note",
  },
  {
    title: "Number input",
    description: "16 variants",
    imageSrc: "/component-icons/Number input.png",
    href: "/svelte/docs/number-input",
  },
  {
    title: "Progress",
    description: "16 variants",
    imageSrc: "/component-icons/Progress.png",
    href: "/svelte/docs/progress",
  },
  {
    title: "Radio",
    description: "16 variants",
    imageSrc: "/component-icons/Radio.png",
    href: "/svelte/docs/radio",
  },
  {
    title: "Scroll area",
    description: "16 variants",
    imageSrc: "/component-icons/Scroll area.png",
    href: "/svelte/docs/scroll-area",
  },
  {
    title: "Select",
    description: "16 variants",
    imageSrc: "/component-icons/Select.png",
    href: "/svelte/docs/select",
  },
  {
    title: "Slider",
    description: "16 variants",
    imageSrc: "/component-icons/Slider.png",
    href: "/svelte/docs/slider",
  },
  {
    title: "Spinner",
    description: "16 variants",
    imageSrc: "/component-icons/Spinner.png",
    href: "/svelte/docs/spinner",
  },
  {
    title: "Switch",
    description: "16 variants",
    imageSrc: "/component-icons/Switch.png",
    href: "/svelte/docs/switch",
  },
  {
    title: "Tabs",
    description: "16 variants",
    imageSrc: "/component-icons/Tabs.png",
    href: "/svelte/docs/tabs",
  },
  {
    title: "Text input",
    description: "16 variants",
    imageSrc: "/component-icons/Text input.png",
    href: "/svelte/docs/text-input",
  },
  {
    title: "Textarea",
    description: "16 variants",
    imageSrc: "/component-icons/Textarea.png",
    href: "/svelte/docs/textarea",
  },
  {
    title: "Tooltip",
    description: "16 variants",
    imageSrc: "/component-icons/Tooltip.png",
    href: "/svelte/docs/tooltip",
  },
];

const Components = () => {
  return (
    <Section className="relative mx-auto overflow-hidden pb-20 pt-24">
      <div className="relative z-10 flex flex-col gap-16 self-start text-center">
        <div className="relative flex w-full justify-self-start text-left">
          <div className="flex max-w-[40rem] flex-col gap-4">
            <p className="mr-auto flex bg-gradient-to-r from-[#4D91F7] to-[#D8633E] bg-clip-text text-base font-bold text-transparent">
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
            <span className="absolute top-[1rem] z-20 -rotate-[-15deg] text-nowrap text-center font-handwritten text-[2rem] leading-7 fg-base">
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
      <div className="absolute right-1/2 z-0 h-[512px] w-[512px] translate-x-[160px] scale-[2] transform rounded-full bg-[radial-gradient(circle,_#146EF5_0%,_rgba(20,110,245,0.25)_40%,_rgba(30,30,30,0)_55%)] opacity-[28%]" />
      <div className="absolute left-1/2 z-0 h-[512px] w-[512px] -translate-x-[160px] scale-[2] transform rounded-full bg-[radial-gradient(circle,_#FF3E00_0%,_rgba(255,62,0,0.25)_40%,_rgba(30,30,30,0)_55%)] opacity-[28%]" />
      <div className="absolute bottom-0 left-1/2 h-[1px] w-[80rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent mix-blend-overlay" />
    </Section>
  );
};

export default Components;
