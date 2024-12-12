"use client";
import React, { useState } from "react";
import { Card } from "@/components/marketing/ui/Card";

const BentoCodeBlock: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Avatar");

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
            <div
              className={`cursor-pointer p-3 text-sm ${
                activeTab === "Avatar"
                  ? "border-b border-muted bg-muted fg-base"
                  : "fg-muted hover:bg-[#404040]"
              }`}
              onClick={() => setActiveTab("Avatar")}
            >
              Avatar.svelte
            </div>
            <div
              className={`cursor-pointer p-3 text-sm ${
                activeTab === "Button"
                  ? "border-b border-muted bg-muted fg-base"
                  : "fg-muted hover:bg-[#404040]"
              }`}
              onClick={() => setActiveTab("Button")}
            >
              Button.svelte
            </div>
          </div>
        </div>
        <div className="p-4 leading-[1.05]">
          <pre className="m-0 p-0">
            <code className="m-0 p-0 text-sm">
              {activeTab === "Avatar" ? (
                <>
                  <span className="text-[#FFDE5B]">
                    <span className="text-[#FFFFFF80]">&lt;</span>script
                  </span>{" "}
                  <span className="text-[#C4AFFF]">lang</span>
                  <span className="text-[#FF9C9C]">=</span>
                  <span className="text-[#FFBC86]">&quot;ts&quot;</span>
                  <span className="text-[#FFDE5B]">
                    <span className="text-[#FFFFFF80]">&gt;</span>
                  </span>
                  <br /> <span className="text-[#FF9C9C]">import</span> &#123;
                  <span className="text-[#FFFFFF]"> Avatar </span>&#125;{" "}
                  <span className="text-[#FF9C9C]">from</span>{" "}
                  <span className="text-[#FFBC86]">&#039;bits-ui&#039;</span>;
                  <br /> <span className="text-[#FF9C9C]">import</span> &#123;
                  <span className="text-[#FFFFFF]"> Account </span>&#125;{" "}
                  <span className="text-[#FF9C9C]">from</span>{" "}
                  <span className="text-[#FFBC86]">
                    &#039;$lib/components/icons&#039;
                  </span>
                  ;
                  <br />
                  <br /> <span className="text-[#FF9C9C]">type</span>{" "}
                  <span className="text-[#C4AFFF]">$$Props</span>{" "}
                  <span className="text-[#FF9C9C]">=</span>{" "}
                  <span className="text-[#C4AFFF]">Avatar.Props</span>{" "}
                  <span className="text-[#FF9C9C]">&</span> &#123;
                  <br /> {"  "}
                  <span className="text-[#FFFFFF]">image</span>
                  <span className="text-[#FF9C9C]">?:</span>{" "}
                  <span className="text-[#A7D1FF]">string</span>{" "}
                  <span className="text-[#FF9C9C]">|</span>{" "}
                  <span className="text-[#A7D1FF]">null</span>;
                  <br /> {"  "}
                  <span className="text-[#FFFFFF]">fallback</span>
                  <span className="text-[#FF9C9C]">?:</span>{" "}
                  <span className="text-[#A7D1FF]">string</span>{" "}
                  <span className="text-[#FF9C9C]">|</span>{" "}
                  <span className="text-[#A7D1FF]">null</span>;
                  <br /> {"  "}
                </>
              ) : (
                <>
                  <span className="text-[#FFDE5B]">
                    <span className="text-[#FFFFFF80]">&lt;</span>script
                  </span>{" "}
                  <span className="text-[#C4AFFF]">lang</span>
                  <span className="text-[#FF9C9C]">=</span>
                  <span className="text-[#FFBC86]">&quot;ts&quot;</span>
                  <span className="text-[#FFDE5B]">
                    <span className="text-[#FFFFFF80]">&gt;</span>
                  </span>
                  <br /> <span className="text-[#FF9C9C]">import</span> &#123;
                  <span className="text-[#FFFFFF]"> Button </span>&#125;{" "}
                  <span className="text-[#FF9C9C]">from</span>{" "}
                  <span className="text-[#FFBC86]">&#039;bits-ui&#039;</span>;
                  <br /> <span className="text-[#FF9C9C]">import</span> &#123;
                  <span className="text-[#FFFFFF]"> Spinner </span>&#125;{" "}
                  <span className="text-[#FF9C9C]">from</span>{" "}
                  <span className="text-[#FFBC86]">
                    &#039;$lib/components/spinner&#039;
                  </span>
                  ;
                  <br /> <span className="text-[#FF9C9C]">import</span> &#123;
                  <span className="text-[#FF9C9C]"> type </span>
                  <span className="text-[#FFFFFF]">ComponentType </span>
                  &#125; <span className="text-[#FF9C9C]">from</span>{" "}
                  <span className="text-[#FFBC86]">&#039;svelte&#039;</span>;
                  <br />
                  <br /> <span className="text-[#FF9C9C]">type</span>{" "}
                  <span className="text-[#C4AFFF]">$$Props</span>{" "}
                  <span className="text-[#FF9C9C]">=</span>{" "}
                  <span className="text-[#C4AFFF]">Button.Props</span>{" "}
                  <span className="text-[#FF9C9C]">&</span> &#123;
                  <br /> {"  "}
                  <span className="text-[#FFFFFF]">variant</span>
                  <span className="text-[#FF9C9C]">?:</span>{" "}
                  <span className="text-[#FFBC86]">&#039;default&#039;</span>{" "}
                  <span className="text-[#FF9C9C]">|</span>{" "}
                  <span className="text-[#FFBC86]">&#039;primary&#039;</span>{" "}
                  <span className="text-[#FF9C9C]">|</span>{" "}
                  <span className="text-[#FFBC86]">&#039;critical&#039;</span>{" "}
                  <span className="text-[#FF9C9C]">|</span>{" "}
                  <span className="text-[#FFBC86]">&#039;outline&#039;</span>{" "}
                  <span className="text-[#FF9C9C]">|</span>{" "}
                  <span className="text-[#FFBC86]">&#039;ghost&#039;</span>;
                  <br />
                  <span className="text-[#FFDE5B]">
                    <span className="text-[#FFFFFF80]">&lt;/</span>script
                    <span className="text-[#FFFFFF80]">&gt;</span>
                  </span>
                  <br />
                  <br />
                  <span className="text-[#A7D1FF]">
                    <span className="text-[#FFFFFF80]">&lt;</span>Button.Root
                  </span>{" "}
                  <span className="text-[#C4AFFF]">class</span>
                  <span className="text-[#FFFFFF]">=</span>
                  <span className="text-[#FFBC86]">&quot;wfs-button&quot;</span>
                  <span className="text-[#FFDE5B]">
                    <span className="text-[#FFFFFF80]">&gt;</span>
                  </span>
                  <br /> <span className="text-[#FFFFFF]">Click me</span>
                  <br />
                  <span className="text-[#FFDE5B]">
                    <span className="text-[#FFFFFF80]">&lt;/</span>Button.Root
                    <span className="text-[#FFFFFF80]">&gt;</span>
                  </span>
                </>
              )}
            </code>
          </pre>
        </div>
      </div>
    </Card>
  );
};

export { BentoCodeBlock };
