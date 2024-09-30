'use client'

import React, { useState } from "react";
import { Coins, Utensils, Wine, Mic } from 'lucide-react';
import packages from "../../../public/packages.webp";

const PackageFeature = ({ Icon, text }) => (
  <div className="flex flex-col items-center justify-center text-center p-2">
    <Icon className="w-6 h-6 mb-2" />
    <span className="text-xs sm:text-sm">{text}</span>
  </div>
);

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-4 text-lg sm:text-xl font-semibold text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {isOpen && <div className="py-4">{children}</div>}
    </div>
  );
};

const Packages = () => {
  const packageData = [
    {
      type: "regular",
      title: "Regular Package",
      stagEntry: "2,000",
      coupleEntry: "3,000",
      stagOTPC: "1,000",
      coupleOTPC: "2,000",
      features: [
        { icon: Wine, text: "Unlimited Basic Alcohol" },
        { icon: Utensils, text: "Unlimited Buffet" },
        { icon: Mic, text: "Live Entertainment" },
      ],
    },
    {
      type: "premium",
      title: "Premium Package",
      stagEntry: "3,000",
      coupleEntry: "5,000",
      stagOTPC: "3,000",
      coupleOTPC: "5,000",
      features: [
        { icon: Wine, text: "Unlimited Premium Alcohol" },
        { icon: Utensils, text: "Unlimited Buffet" },
        { icon: Mic, text: "Live Entertainment" },
      ],
    },
    {
      type: "elite",
      title: "Elite Package",
      stagEntry: "7,000",
      coupleEntry: "10,000",
      stagOTPC: "7,000",
      coupleOTPC: "12,000",
      features: [
        { icon: Wine, text: "Unlimited Top Quality Alcohol" },
        { icon: Utensils, text: "Unlimited Buffet" },
        { icon: Mic, text: "Live Entertainment" },
      ],
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-black text-white px-2 sm:px-4 py-7">
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:pt-[24px] sm:pb-[24px] gap-6">
          <h1 className="lg:text-[52px] uppercase py-10 text-3xl gradient-text leading-normal font-extrabold">
            Our Packages
          </h1>
          <div className="flex flex-col lg:flex-row align-center">
            <div className="w-full lg:w-1/2 lg:pr-8">
              <div className="space-y-4">
                {packageData.map((pkg) => (
                  <AccordionItem key={pkg.type} title={pkg.title}>
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row justify-between mb-2">
                        <div>
                          <p className="text-lg sm:text-xl font-bold">Stag Entry: ₹{pkg.stagEntry}</p>
                          <p className="text-sm text-gray-400">With ₹{pkg.stagOTPC} OTPC</p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <p className="text-lg sm:text-xl font-bold">Couple Entry: ₹{pkg.coupleEntry}</p>
                          <p className="text-sm text-gray-400">With ₹{pkg.coupleOTPC} OTPC</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {pkg.features.map((feature, index) => (
                        <PackageFeature key={index} Icon={feature.icon} text={feature.text} />
                      ))}
                    </div>
                    <a
                      href="/packages"
                      className="inline-block bg-gradient-to-r from-[#E7C980] to-[#9E8253] text-black font-bold py-2 px-4 rounded hover:opacity-90 transition-opacity duration-300"
                    >
                      Know More
                    </a>
                  </AccordionItem>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative h-64 lg:h-full">
                <img
                  src={packages}
                  alt="Casino interior"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;