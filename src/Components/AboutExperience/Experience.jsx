import React from "react";
import ExperienceContainer from "./ExperienceContainer";
import SectionContainer from "../Container/SectionContainer";

const Experience = () => {
  return (
    <SectionContainer
      heading={"About our Luxury Experience"}
      desc={
        "We pride ourselves on being one of Goa's most luxurious casinos in Hilton Goa Resort, Saipem, Candolim. Join us to experience fun, entertainment, and unlimited luck at our Casino. "
      }
    >
      <ExperienceContainer />

      {/* gradient right */}
      <img
        src="/Elipse2.webp"
        loading="lazy"
        className="absolute hidden object-cover w-full h-full lg:block -left-96"
        alt="Background gradient"
      />

      {/* gradient left */}
      {/* Commented out gradient left image */}
    </SectionContainer>
  );
};

export default Experience;