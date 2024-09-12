import React from "react";
import Gradient from "../../assets/backgroundGradient.svg";
import Exp1 from "../../assets/Exp1.mp4";
import Exp3 from "../../assets/Exp3.mp4";
import Exp2 from "../../assets/Exp2.mp4";
import ExperienceContainer from "./ExperienceContainer";
import SectionContainer from "../Container/SectionContainer";

const Experience = () => {
  const Experiences = [
    {
      title: `Endless Excitement`,
      text: `From 10+ games, hook lounge, Exciting cocktails, live dance & more... experience endless entertainment.`,
      vid: "/GIF/Exp1.gif",
    },

    {
      title: `Limitless Luck`,
      text: `Experience winning like never before at goa's most luxurious and private casino, choose from a range of games.`,
      vid: "/GIF/Exp2.gif",
    },

    {
      title: `Festive Fun`,
      text: ` With regular celebrity visits & live events and performances, we pride ourselves on the festive fun at our casino experience.`,
      vid: "/GIF/Exp3.gif",
    },
  ];

  return (
    <SectionContainer
      heading={"About our Luxury Experience"}
      desc={
        "We pride ourselves on being one of Goa's most luxurious casinos in Double Tree by Hilton, Candolim. Join us to experience fun, entertainment, and unlimited luck at our Casino. "
      }
    >
      <div className="flex flex-wrap items-center justify-center w-full h-full overflow-hidden md:justify-start lg:justify-between 3xl:justify-center 3xl:gap-24">
        {Experiences.map(({ title, text, vid }, id) => (
          <ExperienceContainer text={text} title={title} vid={vid} key={id} />
        ))}
      </div>

      {/* gradient right */}
      <img
        src="/Elipse2.webp"
        loading="lazy"
        className="absolute hidden object-cover w-full h-full lg:block -left-96"
      ></img>

      {/* gradient left */}
      {/* <img
                src={Gradient}
                className='absolute top-[10%] -left-[0%] w-[440px] h-[449px] '>
            </img> */}
    </SectionContainer>
  );
};

export default Experience;
