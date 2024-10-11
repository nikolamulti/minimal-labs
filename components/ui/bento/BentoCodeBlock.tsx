"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/Card";

const BentoCodeBlock: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Checkbox");

  return (
    <Card className="relative col-span-8 row-span-1 mx-auto h-[20rem] max-w-[40rem] overflow-hidden p-6 lg:col-span-7">
      <div className="flex max-w-[25rem] flex-col gap-1">
        <h3 className="text-lg font-semibold fg-base">Source code</h3>
        <p className="text-sm fg-muted">
          Get access to all of the source code from our versatile Webflow app
          components.
        </p>
      </div>
      <div className="bottom-0 left-6 right-0 top-10 mt-6 min-h-[14.75rem] w-[40rem] grow overflow-hidden rounded-lg border border-muted bg-default">
        <div className="flex border-b border-muted">
          <div className="flex text-sm font-medium">
            {["Checkbox", "Button"].map((tab) => (
              <div
                key={tab}
                className={`cursor-pointer p-3 text-sm ${
                  activeTab === tab
                    ? "border-b border-muted bg-muted fg-base"
                    : "fg-muted hover:bg-[#404040]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}.svelte
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 leading-[1.05]">
          <pre className="m-0 p-0">
            <code className="m-0 p-0 text-sm">
              <span className="text-[#FFDE5B]">
                <span className="text-[#FFFFFF80]">&lt;</span>script
              </span>{" "}
              <span className="text-[#C4AFFF]">lang</span>
              <span className="text-[#FFFFFF]">=</span>
              <span className="text-[#FFBC86]">"ts"</span>
              <span className="text-[#FFDE5B]">
                <span className="text-[#FFFFFF80]">&gt;</span>
              </span>
              <br /> <span className="text-[#C4AFFF]">import</span> &#123;
              <span className="text-[#A7D1FF]"> {activeTab} </span>&#125;{" "}
              <span className="text-[#C4AFFF]">from</span>{" "}
              <span className="text-[#FFBC86]">
                '@/components/{activeTab.toLowerCase()}'
              </span>
              ;
              <br /> <span className="text-[#C4AFFF]">import</span> &#123;
              <span className="text-[#A7D1FF]"> Label </span>&#125;{" "}
              <span className="text-[#C4AFFF]">from</span>{" "}
              <span className="text-[#FFBC86]">'@/components/label'</span>
              ;
              <br />
              <span className="text-[#FFDE5B]">
                <span className="text-[#FFFFFF80]">&lt;/</span>script
                <span className="text-[#FFFFFF80]">&gt;</span>
              </span>
              <br />
              <br />
              <span className="text-[#A7D1FF]">
                <span className="text-[#FFFFFF80]">&lt;</span>
                {activeTab}
              </span>{" "}
              <span className="text-[#C4AFFF]">id</span>
              <span className="text-[#FFFFFF]">=</span>
              <span className="text-[#FFBC86]">"option-1"</span>{" "}
              <span className="text-[#A7D1FF]">orientation</span>
              <span className="text-[#FFFFFF]">=</span>
              <span className="text-[#FFBC86]">"horizontal"</span>
              <span className="text-[#FFDE5B]">
                <span className="text-[#FFFFFF80]">&gt;</span>
              </span>
              <br />{" "}
              <span className="text-[#A7D1FF]">
                <span className="text-[#FFFFFF80]">&lt;</span>Label
              </span>{" "}
              <span className="text-[#C4AFFF]">for</span>
              <span className="text-[#FFFFFF]">=</span>
              <span className="text-[#FFBC86]">"option-1"</span>
              <span className="text-[#FFDE5B]">
                <span className="text-[#FFFFFF80]">&gt;</span>
              </span>
              <span className="text-[#FFFFFF]">Option 1</span>
              <span className="text-[#A7D1FF]">
                <span className="text-[#FFFFFF80]">&lt;/</span>Label
                <span className="text-[#FFFFFF80]">&gt;</span>
              </span>
              <br />
              <span className="text-[#FFDE5B]">
                <span className="text-[#FFFFFF80]">&lt;</span>/{activeTab}
                <span className="text-[#FFFFFF80]">&gt;</span>
              </span>
            </code>
          </pre>
        </div>
      </div>
    </Card>
  );
};

export { BentoCodeBlock };
