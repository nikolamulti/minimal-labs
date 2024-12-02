import Image from "next/image";
import { Card } from "@/components/marketing/ui/Card";

const BentoThemes: React.FC = () => {
  return (
    <Card className="relative col-span-8 mx-auto h-[20rem] max-w-[40rem] overflow-hidden p-6 lg:col-span-5">
      <div className="mb-6 flex max-w-[25rem] flex-col gap-1">
        <h3 className="text-lg font-semibold fg-base">All 3 modes available</h3>
        <p className="text-sm fg-muted">
          Compatible with native Webflow designer themes and their changes.
        </p>
      </div>
      <div className="relative w-[60rem]">
        <Image
          src="/bento-app-shell-brighter.png"
          alt="Webflow app brighter theme"
          width={800}
          height={400}
          className="absolute left-0 top-0 z-10 transition-all duration-300 lg:hover:-translate-y-2"
        />
        <Image
          src="/bento-app-shell-default.png"
          alt="Webflow app default theme"
          width={800}
          height={400}
          className="absolute left-[56px] top-[40px] z-20 transition-all duration-300 lg:hover:-translate-y-2"
        />
        <Image
          src="/bento-app-shell-darker.png"
          alt="Webflow app darker theme"
          width={800}
          height={400}
          className="absolute left-[112px] top-[80px] z-30 transition-all duration-300 lg:hover:-translate-y-2"
        />
      </div>
    </Card>
  );
};

export { BentoThemes };
