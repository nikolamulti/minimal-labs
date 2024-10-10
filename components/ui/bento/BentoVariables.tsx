import React from "react";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

const BentoVariables: React.FC = () => {
  return (
    <Card className="col-span-4 row-span-1 flex h-full min-h-[20rem] flex-col gap-6 overflow-hidden p-6 md:col-span-4 lg:col-span-5">
      <div className="flex flex-col items-start gap-4 pt-4">
        <div className="">
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 flex-col rounded border border-muted bg-bold p-0.5">
                <Image
                  src="/webflow-icons/VariableTextSize.svg"
                  alt="font"
                  width={16}
                  height={16}
                />
              </div>
              <div className="content-center text-xs fg-muted">
                font-family-body
              </div>
            </div>
          </div>
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 rounded border border-muted bg-primary-hover"></div>
              <div className="content-center text-xs fg-muted">
                bg-primary-hover
              </div>
            </div>
          </div>
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 flex-col rounded border border-muted bg-bold p-0.5">
                <Image
                  src="/webflow-icons/VariableSize.svg"
                  alt="font"
                  width={16}
                  height={16}
                />
              </div>
              <div className="content-center text-xs fg-muted">spacing-12x</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 rounded border border-muted bg-primary"></div>
              <div className="content-center text-xs fg-muted">bg-primary</div>
            </div>
          </div>
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 flex-col rounded border border-muted bg-bold p-0.5">
                <Image
                  src="/webflow-icons/VariableTextSize.svg"
                  alt="font"
                  width={16}
                  height={16}
                />
              </div>
              <div className="content-center text-xs fg-muted">
                font-size-xl
              </div>
            </div>
          </div>
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 rounded border border-muted bg-purple"></div>
              <div className="content-center text-xs fg-muted">bg-purple</div>
            </div>
          </div>
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 flex-col rounded border border-muted bg-bold p-0.5">
                <Image
                  src="/webflow-icons/VariableTextSize.svg"
                  alt="font"
                  width={16}
                  height={16}
                />
              </div>
              <div className="content-center text-xs fg-muted">
                line-height-md
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 rounded border border-muted bg-pink-pressed"></div>
              <div className="content-center text-xs fg-muted">
                bg-pink-pressed
              </div>
            </div>
          </div>
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 flex-col rounded border border-muted bg-bold p-0.5">
                <Image
                  src="/webflow-icons/VariableTextSize.svg"
                  alt="font"
                  width={16}
                  height={16}
                />
              </div>
              <div className="content-center text-xs fg-muted">
                line-height-md
              </div>
            </div>
          </div>
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 flex-col rounded border border-muted bg-bold p-0.5">
                <Image
                  src="/webflow-icons/VariableSize.svg"
                  alt="font"
                  width={16}
                  height={16}
                />
              </div>
              <div className="content-center text-xs fg-muted">spacing-1x</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 flex-col rounded border border-muted bg-bold p-0.5">
                <Image
                  src="/webflow-icons/VariableSize.svg"
                  alt="font"
                  width={16}
                  height={16}
                />
              </div>
              <div className="content-center text-xs fg-muted">icon-xl</div>
            </div>
          </div>
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 flex-col rounded border border-muted bg-bold p-0.5">
                <Image
                  src="/webflow-icons/VariableTextSize.svg"
                  alt="font"
                  width={16}
                  height={16}
                />
              </div>
              <div className="content-center text-xs fg-muted">
                font-size-sm
              </div>
            </div>
          </div>
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 flex-col rounded border border-muted bg-bold p-0.5">
                <Image
                  src="/webflow-icons/VariableSize.svg"
                  alt="font"
                  width={16}
                  height={16}
                />
              </div>
              <div className="content-center text-xs fg-muted">spacing-8x</div>
            </div>
          </div>
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 rounded border border-muted bg-warning-hover"></div>
              <div className="content-center text-xs fg-muted">
                bg-warning-hover
              </div>
            </div>
          </div>
          <div className="inline-flex gap-3 text-nowrap rounded-md border border-muted bg-default align-baseline">
            <div className="align-center inline-flex gap-1.5 p-1">
              <div className="h-5 w-5 flex-col rounded border border-muted bg-bold p-0.5">
                <Image
                  src="/webflow-icons/VariableSize.svg"
                  alt="font"
                  width={16}
                  height={16}
                />
              </div>
              <div className="content-center text-xs fg-muted">spacing-1x</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold fg-base">Variables & Styles</h3>
        <p className="text-sm fg-muted">
          Streamline project quickly using plug-and-play building blocks.
        </p>
      </div>
    </Card>
  );
};

export { BentoVariables };
