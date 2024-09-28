'use client'

import React, { useState } from "react";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import SectionContainer from "../Container/SectionContainer";
import { Coins, Utensils, Wine, Mic } from 'lucide-react';
import image5 from "../../../public/5.webp";
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
      type: "day",
      title: "Day Package",
      price: "1,500",
      otpc: "1000",
      bandColor: "Yellow",
      features: [
        { icon: Wine, text: "Unlimited Basic Alcohol" },
        { icon: Utensils, text: "Unlimited Buffet" },
        { icon: Mic, text: "Live Entertainment" },
      ],
    },
    {
      type: "regular",
      title: "Regular Package",
      stagEntry: "2000",
      coupleEntry: "3000",
      stagOTPC: "1000",
      coupleOTPC: "2000",
      bandColor: "Blue",
      features: [
        { icon: Wine, text: "Unlimited Basic Alcohol" },
        { icon: Utensils, text: "Unlimited Buffet" },
        { icon: Mic, text: "Live Entertainment" },
      ],
    },
    {
      type: "premium",
      title: "Premium Package",
      stagEntry: "3000",
      coupleEntry: "5000",
      stagOTPC: "3000",
      coupleOTPC: "5000",
      bandColor: "Green / COD RED / Orange",
      features: [
        { icon: Wine, text: "Unlimited Premium Alcohol" },
        { icon: Utensils, text: "Unlimited Buffet" },
        { icon: Mic, text: "Live Entertainment" },
      ],
    },
    {
      type: "elite",
      title: "Elite Package",
      stagEntry: "7000",
      coupleEntry: "10,000",
      stagOTPC: "10,000",
      coupleOTPC: "12,000",
      bandColor: "Silver / COD Gold",
      features: [
        { icon: Wine, text: "Unlimited Top Quality Alcohol" },
        { icon: Utensils, text: "Unlimited Buffet" },
        { icon: Mic, text: "Live Entertainment" },
      ],
    },
    {
      type: "phoenixVIP",
      title: "Phoenix VIP Package",
      price: "10,000",
      otpc: "15,000",
      bandColor: "Purple / COD Black",
      features: [
        { icon: Wine, text: "Unlimited Expensive Alcohol" },
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
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 lg:pr-8">
              <div className="space-y-4">
                {packageData.map((pkg) => (
                  <AccordionItem key={pkg.type} title={pkg.title}>
                    <div className="mb-4">
                      {pkg.price ? (
                        <h4 className="text-3xl sm:text-4xl font-bold">₹{pkg.price}</h4>
                      ) : (
                        <>
                          <p className="text-xl sm:text-2xl font-bold">Stag: ₹{pkg.stagEntry}</p>
                          <p className="text-xl sm:text-2xl font-bold">Couple: ₹{pkg.coupleEntry}</p>
                        </>
                      )}
                      <p className="text-xs sm:text-sm mt-1">
                        Includes {pkg.otpc || pkg.stagOTPC} OTPC
                        {pkg.coupleOTPC && ` (Couple: ${pkg.coupleOTPC} OTPC)`}
                      </p>
                      <p className="text-xs sm:text-sm">Band Color: {pkg.bandColor}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
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