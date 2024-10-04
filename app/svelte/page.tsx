import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <>
      <section className="py-6">
        <div className="max-w-[960px] mx-auto flex gap-8 items-center">
          <div>
            <Link href="/">
              <Image src="/logo.svg" alt="Fumadocs" width={32} height={32} />
            </Link>
          </div>
          <nav className="flex gap-2">
            <Button href="/svelte/docs">Docs</Button>
            <Button href="/svelte/docs/accordion">Components</Button>
            <Button href="/svelte/pricing">Pricing</Button>
            <Button href="/svelte/faqs">FAQs</Button>
          </nav>
          <div className="flex gap-2">
            <Button href="/svelte/preview">Preview</Button>
            <Button href="/svelte/get-access">Get Access</Button>
          </div>
        </div>
      </section>
      <main className="flex h-screen flex-col justify-center text-center">
        <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
        <p className="text-fd-muted-foreground">
          You can open{" "}
          <Link
            href="/svelte/docs"
            className="text-fd-foreground font-semibold underline"
          >
            /docs
          </Link>
          {""}
          and see the documentation.
        </p>
      </main>
    </>
  );
}
