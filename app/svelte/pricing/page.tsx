import { Nav, CallToAction, Footer, FAQs, Pricing } from "@/components";

export default function PricingPage() {
  return (
    <div className="bg-base">
      <Nav />
      <main>
        <Pricing />
        <FAQs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
