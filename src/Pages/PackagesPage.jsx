import React from "react";
import Packages from "../Components/Packages/UpdatedPackage";
import Faq from "../Components/FAQ/Faq";
import Experience from "../Components/AboutExperience/Experience";
import PolicyTabs from "../Components/Policy/PolicyTabs";

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
          <div className="sm:mb-28 md:mb-32">
            <Experience />
          </div>
          <div className="mb-24 sm:mb-28 md:mb-32">
            <PolicyTabs />
          </div>
          {/* Faq Component with increased margin-bottom */}
          <div className="mb-24 sm:mb-28 md:mb-32">
            <Faq />
          </div>

        </div>
      </div>
    </div>
  );
};

export default PackagesPage;