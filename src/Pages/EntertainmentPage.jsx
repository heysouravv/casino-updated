import React from "react";
import LargestSection from "../Components/Container/LargeSection";
import ExperienceContainer from "../Components/AboutExperience/ExperienceContainer";
import ThankYouEntertainersSection from "../Components/ThankYouEntertainer/ThankYouEntertainerSection";


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
          heading="Welcome to the Show"
          description="What's a memorable night without some music, some dancing and some flair?! At Big Daddy casino, we make sure that every day you spend in here is a party! Special performances, celebrity appearances, professional dancers and performers are just the beginning of what we have in store for you!"
          imageUrl="https://bigdaddy.in/wp-content/uploads/2023/08/star-studded-930_550-2.jpg"
          videoUrl="https://www.youtube.com/embed/gHBBP5sLDSY"
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
