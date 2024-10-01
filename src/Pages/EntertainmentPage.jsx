import React from "react";
import LargestSection from "../Components/Container/LargeSection";
import ExperienceContainer from "../Components/AboutExperience/ExperienceContainer";
import ThankYouEntertainersSection from "../Components/ThankYouEntertainer/ThankYouEntertainerSection";
import home from "../../public/home-gallery-6.webp"

const customExperiences = [
  {
    title: `Endless Excitement`,
    vid: "/013-poker-cards.svg",
  },
  {
    title: `Limitless Luck`,
    vid: "/002-roulette.svg",
  },
  {
    title: `Festive Fun`,
    vid: "/017-big win.svg",
  },
];

const EntertainmentPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full max-w-full min-h-screen bg-bg-primary">
      <div className="relative flex flex-col items-center justify-start w-full h-full max-w-full overflow-x-hidden">
        <LargestSection
          heading="Our Recent Event's"
          description="With Live entertainment, games, drinks, dancer's & celebrities, our events are top notch."
          imageUrl={home}
          videoUrl="https://res.cloudinary.com/dr7lgt33k/video/upload/f_auto:video,q_auto/buacsfdlc6nm2a4boujz"
        />
        <div className="largest-info text-center py-10 sm:py-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="comm-heading text-3xl lg:text-[42px] uppercase gradient-text leading-normal font-extrabold mb-10">
              Highlights
            </h3>
              <ExperienceContainer experiences={customExperiences} />
            </div>
        </div>
        <ThankYouEntertainersSection/>
        </div>
      </div>
  );
};

export default EntertainmentPage;
