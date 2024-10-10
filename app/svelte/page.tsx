import {
  Nav,
  CallToAction,
  Footer,
  FAQs,
  Pricing,
  WhatsIncluded,
  Components,
  Features,
  Benefits,
} from "@/components";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="relative bg-base">
      <div className="pointer-events-none absolute left-0 z-50 hidden h-full w-[15rem] bg-gradient-to-l from-[#1E1E1E] to-[#1B1B1B] 2xl:block" />
      <div className="pointer-events-none absolute right-0 z-50 hidden h-full w-[15rem] bg-gradient-to-r from-[#1E1E1E] to-[#1B1B1B] 2xl:block" />
      <Nav />
      <main>
        <Hero />
        <WhatsIncluded />
        <Components />
        <Features />
        <Benefits />
        <Pricing />
        <FAQs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
