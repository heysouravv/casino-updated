import React from "react";
import Entertainment from "../Components/Entertainement/Entertainment";
import SectionContainer from "../Components/Container/SectionContainer";
import LargestSection from "../Components/Container/LargeSection";
import YouCantMissSection from "../Components/YouCantMIss/YouCantMiss";
import ThankYouEntertainersSection from "../Components/ThankYouEntertainer/ThankYouEntertainerSection";
import WhatPeopleSay from "../Components/Testimonials/WhatPeopleSay";
import Faq from "../Components/FAQ/Faq";

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
        <YouCantMissSection/>
        <ThankYouEntertainersSection/>
        <WhatPeopleSay/>
        <Faq/>
        </div>
      </div>
  );
};

export default EntertainmentPage;
