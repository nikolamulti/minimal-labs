import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

const BentoComponents: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<
    "general" | "profile" | "notifications"
  >("general");

  return (
    <Card className="relative col-span-4 row-span-1 h-[20rem] overflow-hidden rounded-[12px] p-6 md:col-span-4 lg:col-span-7">
      <div className="mb-6 flex flex-col gap-1">
        <h3 className="text-base font-semibold fg-base">Pre-made components</h3>
        <p className="max-w-[20rem] text-sm fg-muted">
          Streamline project quickly using plug-and-play building blocks.
        </p>
      </div>
      <div className="grid grid-cols-[250px_1fr] gap-4">
        <div className="flex flex-col gap-1">
          <button className="flex w-full items-center justify-between rounded-[4px] bg-[#292929] bg-gradient-to-b from-[rgba(255,255,255,13%)] to-[rgba(255,255,255,10%)] px-2 py-1 text-[11.5px] font-normal leading-[16px] text-white shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.8)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#007DF0] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2e2e2e]">
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
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040] focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#007DF0]">
                <Image
                  src="/webflow-icons/Settings.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Settings
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040] focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#007DF0]">
                <Image
                  src="/webflow-icons/Subscriptions.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Subscriptions
              </button>
              <button className="flex items-center justify-between gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040] focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#007DF0]">
                <div className="flex items-center gap-1">
                  <Image
                    src="/webflow-icons/Localization.svg"
                    alt="Account"
                    width={16}
                    height={16}
                  />
                  Language
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.29287 8.00004L6.64642 5.35359L7.35353 4.64648L10.7071 8.00004L7.35353 11.3536L6.64642 10.6465L9.29287 8.00004Z"
                    fill="white"
                    fillOpacity="0.67"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-between gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040] focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#007DF0]">
                <div className="flex items-center gap-1">
                  <Image
                    src="/webflow-icons/Appearance.svg"
                    alt="Account"
                    width={16}
                    height={16}
                  />
                  Appearance
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.29287 8.00004L6.64642 5.35359L7.35353 4.64648L10.7071 8.00004L7.35353 11.3536L6.64642 10.6465L9.29287 8.00004Z"
                    fill="white"
                    fillOpacity="0.67"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full border-b border-muted" />
            <div className="flex flex-col">
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040] focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#007DF0]">
                <Image
                  src="/webflow-icons/HelpCircle.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Help & Support
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040] focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#007DF0]">
                <Image
                  src="/webflow-icons/Info.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                About
              </button>
              <button
                className="pointer-events-none flex items-center gap-1 px-2 py-1 text-[11.5px] fg-base hover:bg-[#404040] focus:outline-none"
                tabIndex={-1}
              >
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
            <button className="rounded-[4px] bg-primary px-2 py-1 text-[11.5px] leading-[16px] shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,80%)] fg-base hover:bg-primary-hover focus:outline-none focus-visible:ring-1 focus-visible:ring-[#007DF0] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2e2e2e]">
              Button
            </button>
            <button className="rounded-[4px] bg-muted bg-gradient-to-b from-[rgba(255,255,255,13%)] to-[rgba(255,255,255,10%)] px-2 py-1 text-[11.5px] leading-[16px] shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,80%)] fg-base hover:from-[rgba(255,255,255,19%)] hover:to-[rgba(255,255,255,16%)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#007DF0] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2e2e2e]">
              Button
            </button>
            <button className="rounded-[4px] px-2 py-1 text-[11.5px] leading-[16px] shadow-[inset_0_0_0_1px_rgba(255,255,255,13%)] fg-base hover:bg-[#404040] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#007DF0] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2e2e2e]">
              Button
            </button>
            <button className="rounded-[4px] px-2 py-1 text-[11.5px] leading-[16px] fg-base hover:bg-gradient-to-b hover:from-[rgba(255,255,255,19%)] hover:to-[rgba(255,255,255,16%)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#007DF0] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2e2e2e]">
              Button
            </button>
          </div>
          <div className="mt-4 rounded-[4px] bg-[#353535] px-2 py-2 shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,80%)]">
            <div className="relative flex items-start gap-1 pr-2 text-[11.5px] leading-[16px] fg-base">
              <button className="absolute right-0 top-0 flex items-center rounded-[4px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#007DF0] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2e2e2e]">
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
                <button className="mt-1.5 flex items-center rounded-[4px] fg-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-[#007DF0] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2e2e2e]">
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
                  } focus:outline-none focus-visible:ring-1 focus-visible:ring-[#007DF0] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2e2e2e]`}
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
                className="accent-primary relative h-3 w-3 cursor-pointer appearance-none rounded-full bg-critical shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] checked:before:absolute checked:before:left-1/2 checked:before:top-1/2 checked:before:h-1 checked:before:w-1 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:rounded-full checked:before:bg-white checked:before:content-[''] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#007DF0] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2e2e2e]"
                defaultChecked
              />
              <input
                type="checkbox"
                id="checkbox1"
                name="checkboxGroup"
                className="relative h-3 w-3 cursor-pointer appearance-none rounded-sm bg-input shadow-[inset_0_0_0_1px_rgba(255,255,255,0.19)] checked:bg-primary checked:bg-[url('/webflow-icons/CheckboxCheck.svg')] checked:bg-cover checked:bg-center checked:bg-no-repeat checked:shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#007DF0] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2e2e2e]"
                defaultChecked
              />
            </div>
          </div>
          <div className="relative mt-4 flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="peer w-full rounded-md bg-input py-1 pl-7 pr-2 text-[11.5px] shadow-[inset_0_0_0_1px_rgba(255,255,255,13%)] fg-subtle placeholder:fg-subtle focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#007DF0] focus:fg-base"
            />
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fg-muted peer-focus:fg-base"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.56338 4C5.59538 4 4 5.59538 4 7.56338s1.59538 3.56342 3.56338 3.56342 3.56342-1.59542 3.56342-3.56342C11.1268 5.59538 9.53138 4 7.56338 4ZM3 7.56338C3 5.04309 5.04309 3 7.56338 3c2.52032 0 4.56342 2.04309 4.56342 4.56338 0 1.08001-.3752 2.0724-1.0024 2.85392l2.7292 2.7291-.7072.7072-2.7291-2.7292c-.78152.6272-1.77391 1.0024-2.85392 1.0024C5.04309 12.1268 3 10.0837 3 7.56338Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[rgba(41,41,41,1)] to-[rgba(41,41,41,0)]" />
      <div className="to--[rgba(41,41,41,0)] pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-24 bg-gradient-to-t from-[rgba(41,41,41,1)]" />
    </Card>
  );
};

export { BentoComponents };
