import React from "react";
import Script from "next/script";

const PricingPage = () => {
  return (
    <>
      <Script
        src="https://app.lemonsqueezy.com/js/lemon.js"
        strategy="lazyOnload"
      />
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Pricing Plans
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="border rounded-lg p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Free</h2>
            <p className="text-3xl font-bold mb-6">
              $0<span className="text-base font-normal">/month</span>
            </p>
            <ul className="mb-8 flex-grow">
              <li className="mb-2">✓ Basic features</li>
              <li className="mb-2">✓ Limited usage</li>
              <li className="mb-2">✓ Community support</li>
            </ul>
            <a
              href="https://nikolamulti.lemonsqueezy.com/buy/8a19bd68-1f7e-49c3-8cbf-bb9e5dbe2624"
              className="lemonsqueezy-button bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center"
            >
              Buy Solo License
            </a>
          </div>

          {/* Pro Plan */}
          <div className="border rounded-lg p-6 flex flex-col ">
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <p className="text-3xl font-bold mb-6">
              $29<span className="text-base font-normal">/month</span>
            </p>
            <ul className="mb-8 flex-grow">
              <li className="mb-2">✓ All Free features</li>
              <li className="mb-2">✓ Advanced analytics</li>
              <li className="mb-2">✓ Priority support</li>
              <li className="mb-2">✓ API access</li>
            </ul>
            <a
              href="https://nikolamulti.lemonsqueezy.com/buy/668e4977-c0b7-4464-84be-303c67c6e9f7"
              className="lemonsqueezy-button bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center"
            >
              Buy Team License
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
