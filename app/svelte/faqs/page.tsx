import { Nav, CallToAction, Footer, FAQs } from "@/components";

export default function FAQsPage() {
  return (
    <div className="bg-base">
      <Nav />
      <main>
        <FAQs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
