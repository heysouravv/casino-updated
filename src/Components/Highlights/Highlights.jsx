import React from "react";
import pokerCards from "../../../public/013-poker-cards.svg";
import games from "../../../public/025-dices.svg";
import hookah from "../../../public/024-champagne.svg";
import livePerformance from "../../../public/011-bowling.svg";
import moulineRouge from "../../../public/028-slot machine.svg";
import vipRooms from "../../../public/001-poker cards.svg";

const highlightItems = [
  { title: "20+ Games", icon: games },
  { title: "Hookah Lounge", icon: hookah },
  { title: "Taash Room", icon: pokerCards },
  { title: "Live Performance", icon: livePerformance },
  { title: "Mouline Rouge", icon: moulineRouge },
  { title: "VIP Rooms", icon: vipRooms }
];

const Highlights = () => {
  return (
    <section className="py-10 mt-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#e7c980] to-[#9e8253]">
          Highlights
        </h3>
        <div className="grid grid-cols-1 gap-24 md:gap-x-60 md:gap-y-48 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-16">
          {highlightItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden text-center transform hover:scale-105 hover:border-t-[1px] hover:py-5 hover:rounded-full duration-300 cursor-pointer">
              <img
                src={item.icon}
                alt={item.title}
                className="w-24 h-24 mx-auto transition-transform transform hover:scale-110 invert"
                style={{
                  filter: 'invert(84%) sepia(39%) saturate(438%) hue-rotate(332deg) brightness(101%) contrast(92%)'
                }}
              />
              <h4 className="text-lg md:text-xl font-bold mt-4 text-white">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;