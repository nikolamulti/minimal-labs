import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

const BentoComponents: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<
    "general" | "profile" | "notifications"
  >("general");

  return (
    <Card className="col-span-4 row-span-1 h-[20rem] overflow-hidden rounded-[12px] p-6 md:col-span-4 lg:col-span-7">
      <div className="mb-6 flex flex-col gap-1">
        <h3 className="text-base font-semibold fg-base">Pre-made components</h3>
        <p className="max-w-[20rem] text-sm fg-muted">
          Streamline project quickly using plug-and-play building blocks.
        </p>
      </div>
      <div className="grid grid-cols-[250px_1fr] gap-4">
        <div className="flex flex-col gap-1">
          <button className="flex w-full items-center justify-between rounded-[4px] bg-[#292929] bg-gradient-to-b from-[rgba(255,255,255,13%)] to-[rgba(255,255,255,10%)] px-2 py-1 text-[11.5px] font-normal leading-[16px] text-white shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-1">
              <Image
                src="/webflow-icons/Account.svg"
                alt="Account"
                width={16}
                height={16}
              />
              Account
            </div>
            <Image
              src="/webflow-icons/ChevronSmallDown.svg"
              alt="Arrow Right"
              width={16}
              height={16}
            />
          </button>
          <div className="flex flex-col gap-1 rounded-[4px] bg-[#353535] py-1 shadow-[inset_0px_0.5px_0px_0px_rgba(255,255,255,0.12)]">
            <div className="flex flex-col">
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/Settings.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Settings
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/Subscriptions.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Subscriptions
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/Localization.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Language
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/Appearance.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Appearance
              </button>
            </div>
            <div className="w-full border-b border-muted" />
            <div className="flex flex-col">
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/HelpCircle.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Help & Support
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/Info.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                About
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/Logout.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Log out
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <button className="rounded-[4px] bg-primary px-2 py-1 text-[11.5px] leading-[16px] shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,80%)] fg-base hover:bg-primary-hover">
              Button
            </button>
            <button className="rounded-[4px] bg-muted bg-gradient-to-b from-[rgba(255,255,255,13%)] to-[rgba(255,255,255,10%)] px-2 py-1 text-[11.5px] leading-[16px] shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,80%)] fg-base hover:from-[rgba(255,255,255,19%)] hover:to-[rgba(255,255,255,16%)]">
              Button
            </button>
            <button className="rounded-[4px] px-2 py-1 text-[11.5px] leading-[16px] shadow-[inset_0_0_0_1px_rgba(255,255,255,13%)] fg-base hover:bg-[#404040]">
              Button
            </button>
            <button className="rounded-[4px] px-2 py-1 text-[11.5px] leading-[16px] fg-base hover:bg-gradient-to-b hover:from-[rgba(255,255,255,19%)] hover:to-[rgba(255,255,255,16%)]">
              Button
            </button>
          </div>
          <div className="mt-4 rounded-[4px] bg-[#353535] px-2 py-2 shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,80%)]">
            <div className="relative flex items-start gap-1 pr-2 text-[11.5px] leading-[16px] fg-base">
              <button className="absolute right-0 top-0 flex items-center">
                <Image
                  src="/webflow-icons/CloseDefault.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
              </button>
              <Image
                src="/webflow-icons/InteractionsDefault.svg"
                alt="Account"
                width={16}
                height={16}
              />
              <div className="flex flex-col items-start">
                <span>Storage alert</span>
                <span className="fg-muted">Used 90% of available space.</span>
                <button className="mt-1.5 flex items-center fg-primary">
                  <div>Manage storage</div>
                  <Image
                    src="/webflow-icons/ChevronSmallRight.svg"
                    alt="Arrow Right"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="inline-flex gap-1 rounded-md bg-gradient-to-b from-[rgba(255,255,255,13%)] to-[rgba(255,255,255,10%)] px-0.5 py-0.5 shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.8)]">
              {["General", "Profile", "Notifications"].map((theme) => (
                <button
                  key={theme}
                  onClick={() =>
                    setActiveTheme(
                      theme.toLowerCase() as
                        | "general"
                        | "profile"
                        | "notifications",
                    )
                  }
                  className={`rounded-[4px] px-1 py-0.5 text-[11.5px] leading-[16px] ${
                    activeTheme === theme.toLowerCase()
                      ? "bg-[#292929] shadow-none fg-base"
                      : "fg-muted"
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="radio1"
                name="radioGroup"
                className="accent-primary relative h-3 w-3 appearance-none rounded-full bg-critical shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] checked:before:absolute checked:before:left-1/2 checked:before:top-1/2 checked:before:h-1 checked:before:w-1 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:rounded-full checked:before:bg-white checked:before:content-['']"
                defaultChecked
              />
              <input
                type="checkbox"
                id="checkbox1"
                name="checkboxGroup"
                className="relative h-3 w-3 appearance-none rounded-sm bg-input shadow-[inset_0_0_0_1px_rgba(255,255,255,0.19)] checked:bg-primary checked:bg-[url('/webflow-icons/CheckboxCheck.svg')] checked:bg-cover checked:bg-center checked:bg-no-repeat checked:shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)]"
                defaultChecked
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="focus:ring-primary mt-4 w-full rounded-md bg-[#353535] bg-[url('/webflow-icons/Brush.svg')] bg-[length:16px_16px] bg-[left_0.5rem_center] bg-no-repeat py-1 pl-8 pr-2 text-[11.5px] fg-base placeholder:fg-muted focus:outline-none focus:ring-1"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[rgba(41,41,41,1)] to-[rgba(41,41,41,0)]" />
    </Card>
  );
};

export { BentoComponents };
