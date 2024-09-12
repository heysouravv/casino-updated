import React from "react";
import SectionContainer from "../Container/SectionContainer";
import Object from "../../assets/OBJECTS.svg";
import Heart from "../../assets/CardCurvedHeart.svg";
import Spade from "../../assets/CardCurvedSpade.svg";

const Cta = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-10 sm:py-16 lg:py-20 bg-bg-primary">
      <div className="relative flex flex-col items-center justify-center w-11/12 max-w-[1300px] gap-6 py-10 sm:py-12 lg:py-20 bg-[#111011] border border-[#E7C980]">
        {/* heading */}
        <div className="relative z-10 flex flex-col items-center justify-start gap-4 max-w-full sm:max-w-[771px] w-full text-center px-4 sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] uppercase gradient-text leading-normal font-extrabold">
            {"Welcome to GOLDEN LIFE"}
          </h1>
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
            {
              "With Extensive Luxury and Unlimited Winning, Phoenix Casino is an unforgettable experience, visit us today!"
            }
          </h4>
        </div>

        {/* book now button */}
        <button className="flex capitalize items-center justify-center px-5 py-2 sm:px-7 sm:py-3 shadow-md text-sm sm:text-base font-bold text-bg-primary bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)]">
          Book Now
        </button>

        {/* all objects */}
        <img
          loading="lazy"
          src={Object}
          className="absolute top-0 right-0 z-10 hidden w-full h-full max-w-full md:block"
          alt="Decorative objects"
        />

        {/* adding a layer in small width devices */}
        <div
          className="absolute top-0 right-0 z-20 hidden w-full h-full bg-bg-primary/40 md:block lg:hidden"
          aria-hidden="true"
        ></div>

        {/* curved cards for mobile */}
        <img
          loading="lazy"
          src={Heart}
          className="absolute top-0 -left-4 z-0 block w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:hidden"
          alt="Heart card"
        />
        {/* curved spade card for mobile */}
        <img
          loading="lazy"
          src={Spade}
          className="absolute bottom-0 -right-4 z-0 block w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:hidden"
          alt="Spade card"
        />
      </div>
    </div>
  );
};

export default Cta;
