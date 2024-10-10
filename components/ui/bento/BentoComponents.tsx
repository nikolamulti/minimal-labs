import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

const BentoComponents: React.FC = () => {
  return (
    <Card className="col-span-4 row-span-1 h-[20rem] overflow-hidden rounded-[12px] p-6 md:col-span-4 lg:col-span-7">
      <div className="mb-6 flex flex-col gap-1">
        <h3 className="text-base font-semibold fg-base">Pre-made components</h3>
        <p className="text-sm fg-muted">
          Streamline project quickly using plug-and-play building blocks.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <button className="flex w-full items-center justify-between rounded-[4px] bg-[#292929] bg-gradient-to-b from-[rgba(255,255,255,13%)] to-[rgba(255,255,255,10%)] px-2 py-1 text-[11.5px] text-sm font-normal leading-[16px] text-white shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.8)]">
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
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] text-sm fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/Settings.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Settings
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] text-sm fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/Subscriptions.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Subscriptions
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] text-sm fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/Localization.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Language
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] text-sm fg-base hover:bg-[#404040]">
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
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] text-sm fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/HelpCircle.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                Help & Support
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] text-sm fg-base hover:bg-[#404040]">
                <Image
                  src="/webflow-icons/Info.svg"
                  alt="Account"
                  width={16}
                  height={16}
                />
                About
              </button>
              <button className="flex items-center gap-1 px-2 py-1 text-[11.5px] text-sm fg-base hover:bg-[#404040]">
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
          <div>
            <button className="rounded-[4px] bg-primary px-2 py-1 text-[11.5px] leading-[16px] shadow-[inset_0_0.5px_0.5px_0_rgba(255,255,255,0.2)] drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.8)] fg-base hover:bg-primary-hover">
              Button
            </button>
            <button className="rounded-[4px] px-2 py-1 text-[11.5px] leading-[16px] fg-base">
              Button
            </button>
            <button className="rounded-[4px] px-2 py-1 text-[11.5px] leading-[16px] fg-base">
              Button
            </button>
            <button className="rounded-[4px] px-2 py-1 text-[11.5px] leading-[16px] fg-base">
              Button
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[rgba(41,41,41,1)] to-[rgba(41,41,41,0)]" />
    </Card>
  );
};

export { BentoComponents };
