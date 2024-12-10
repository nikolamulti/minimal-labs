import Image from "next/image";
import Link from "next/link";

interface DocsComponentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export function DocsComponentCard({
  title,
  description,
  imageSrc,
  href,
}: DocsComponentCardProps) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg bg-muted bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(31,31,31,0)] py-1 pl-1 pr-3 shadow-[inset_0_1px_0_0_#FFFFFF1F] drop-shadow-[0_1px_2px__rgba(0,0,0,0.40)] transition-[background-image] duration-1000 ease-in-out hover:from-[rgba(255,255,255,0.08)]"
    >
      <div className="flex flex-row gap-3 text-left">
        <Image
          src={imageSrc}
          alt={title}
          width={64}
          height={64}
          className="rounded m-0"
        />
        <div className="flex flex-col gap-0.5 self-center">
          <h4 className="text-sm font-semibold fg-base mt-0 mb-0">{title}</h4>
          <p className="text-xs fg-muted mb-0 font-medium">{description}</p>
        </div>
      </div>
    </Link>
  );
}
