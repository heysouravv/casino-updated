import React from "react";
import Packages from "../Components/Packages/UpdatedPackage";
import Faq from "../Components/FAQ/Faq";
import PolicyTabs from "../Components/Policy/PolicyTabs";
import ExperienceContainer from "../Components/AboutExperience/ExperienceContainer";


const customFaqData = [
  {
    id: 1,
    question: "Is there a dress code for visiting the casino?",
    answer: "Yes, we have a smart casual dress code policy which means no shorts, sleeveless shirts, flip-flops, or sandals are allowed. Additionally, guests are not allowed to wear hats or sunglasses inside the casino.",
  },
  {
    id: 2,
    question: "Are there any age restrictions for visiting the casino?",
    answer: "Yes, guests must be at least 21 years old to enter the casino.",
  },
  {
    id: 3,
    question: "What types of games are available at the casino?",
    answer: "We offer a variety of games including slot machines, table games such as blackjack, baccarat, roulette, and craps, as well as live poker and sports betting.",
  },
  {
    id: 5,
    question: "Are there any dining options available at the casino?",
    answer: "Yes, we have a fine dining option with world-class chef, the name of the area is moulin rouge",
  },
];

const customExperiences = [
  {
    title: `Food & Drinks`,
    vid: "/024-champagne.svg",
  },
  {
    title: `Games`,
    vid: "/020-jackpot.svg",
  },
  {
    title: `Entertaiment`,
    vid: "/017-big win.svg",
  },
];

const PackagesPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full max-w-full min-h-screen bg-bg-primary">
      <div className="relative flex flex-col items-center justify-start w-full h-full max-w-full overflow-x-hidden">
        {/* Increased padding-top for all screen sizes, with extra space on mobile */}
        <div className="w-full px-4 md:px-8 pt-32 sm:pt-36 md:pt-40 lg:pt-44">
          {/* Packages Component with increased margin-bottom */}
          <div className="mb-2 sm:mb-28 md:mb-32">
            <Packages />
          </div>
          {/* Experience section with increased margin-bottom */}
          <div className="mb-24 sm:mb-26 md:mb-26">
            <h3 className="comm-heading text-3xl lg:text-[42px] uppercase gradient-text leading-normal font-extrabold mb-10">
              Highlights
            </h3>
            <ExperienceContainer experiences={customExperiences} />
          </div>
          <div className="sm:mb-28 md:mb-32">
            <PolicyTabs />
          </div>
          {/* Faq Component with increased margin-bottom */}
          <div className="mb-24 sm:mb-28 md:mb-32">
          <Faq faqData={customFaqData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;