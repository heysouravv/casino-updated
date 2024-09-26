import React from "react";

const defaultExperiences = [
  {
    title: `Endless Excitement`,
    text: `From 10+ games, hook lounge, Exciting cocktails, live dance & more... experience endless entertainment.`,
    vid: "/013-poker-cards.svg",
  },
  {
    title: `Limitless Luck`,
    text: `Experience winning like never before at goa's most luxurious and private casino, choose from a range of games.`,
    vid: "/002-roulette.svg",
  },
  {
    title: `Festive Fun`,
    text: ` With regular celebrity visits & live events and performances, we pride ourselves on the festive fun at our casino experience.`,
    vid: "/017-big win.svg",
  },
];

const ExperienceItem = ({ vid, title, text }) => {
  const isSvg = vid.endsWith('.svg');

  return (
    <div className="flex flex-col lg:w-[calc(100%/3-32px)] md:w-[calc(100%/2-32px)] w-full items-center justify-start max-w-md gap-8 px-2">
      {isSvg ? (
        <img
          src={vid}
          alt={title}
          className="w-16 h-16 sm:w-24 sm:h-24 mb-4 mt-4"
          style={{
            filter: 'invert(84%) sepia(39%) saturate(438%) hue-rotate(332deg) brightness(101%) contrast(92%)'
          }}
        />
      ) : (
        <img
          src={vid}
          alt={title}
          className="max-w-[186px] max-h-[172px]"
        />
      )}
      <div className="flex flex-col items-center justify-start w-full gap-4">
        <h1 className="lg:text-3xl text-xl text-[#E7C980] font-bold">
          {title}
        </h1>
        <h4 className="w-full max-w-5xl text-[#ABABAB] text-base lg:text-xl text-center">
          {text}
        </h4>
      </div>
    </div>
  );
};

const ExperienceContainer = ({ experiences = defaultExperiences }) => {
  return (
    <div className="flex flex-wrap items-center justify-center w-full h-full overflow-hidden md:justify-start lg:justify-between 3xl:justify-center 3xl:gap-24">
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </div>
  );
};

export default ExperienceContainer;