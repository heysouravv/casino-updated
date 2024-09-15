import React from "react";

const Highlights = () => {
  return (
    <section className="py-10 mt-20">
      <div className="container mx-auto px-4">
        <h3 className=" text-3xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#e7c980] to-[#9e8253]">
          Highlights
        </h3>
        <div className="grid grid-cols-1 gap-24 md:gap-x-60 md:gap-y-48 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-16">
          <div className="relative overflow-hidden text-center transform hover:scale-105 hover:border-t-[1px] hover:py-5 hover:rounded-full duration-300 cursor-pointer">
            <img
              src="https://bigdaddy.in/wp-content/uploads/2023/05/01-6.png"
              alt="15+ Games"
              className="w-24 h-24 object-cover mx-auto transition-transform transform hover:scale-110"
            />
            <h4 className=" text-lg md:text-xl font-bold mt-4 text-white">
              20+ Games
            </h4>
          </div>

          <div className="relative overflow-hidden text-center transform hover:scale-105 hover:border-t-[1px] hover:py-5 hover:rounded-full duration-300 cursor-pointer">
            <img
              src="https://bigdaddy.in/wp-content/uploads/2023/05/02-6.png"
              alt="1100+ Gaming Positions"
              className="w-24 h-24 object-cover mx-auto transition-transform transform hover:scale-110"
            />
            <h4 className="text-lg md:text-xll font-bold mt-4 text-white">
              Hookah Lounge
            </h4>
          </div>

          <div className="relative overflow-hidden text-center transform hover:scale-105 hover:border-t-[1px] hover:py-5 hover:rounded-full duration-300 cursor-pointer">
            <img
              src="https://bigdaddy.in/wp-content/uploads/2023/05/03-4.png"
              alt="Extensive Games"
              className="w-24 h-24 object-cover mx-auto transition-transform transform hover:scale-110"
            />
            <h4 className="text-lg md:text-xl font-bold mt-4 text-white">
              Taash Room
            </h4>
          </div>

          <div className="relative overflow-hidden text-center transform hover:scale-105 hover:border-t-[1px] hover:py-5 hover:rounded-full duration-300 cursor-pointer">
            <img
              src="https://bigdaddy.in/wp-content/uploads/2023/05/04-1-1.png"
              alt="VVIP Gaming"
              className="w-24 h-24 object-cover mx-auto transition-transform transform hover:scale-110"
            />
            <h4 className="text-lg md:text-xl font-bold mt-4 text-white">
              Live Performance
            </h4>
          </div>

          <div className="relative overflow-hidden text-center transform hover:scale-105 hover:border-t-[1px] hover:py-5 hover:rounded-full duration-300 cursor-pointer">
            <img
              src="https://bigdaddy.in/wp-content/uploads/2023/05/05-1-1.png"
              alt="3 Floors of Gaming"
              className="w-24 h-24 object-cover mx-auto transition-transform transform hover:scale-110"
            />
            <h4 className="text-lg md:text-xl font-bold mt-4 text-white">
              Mouline Rouge
            </h4>
          </div>

          <div className="relative overflow-hidden text-center transform hover:scale-105 hover:border-t-[1px] hover:py-5 hover:rounded-full duration-300 cursor-pointer">
            <img
              src="https://bigdaddy.in/wp-content/uploads/2023/05/06-1-1.png"
              alt="Open 24X7"
              className="w-24 h-24 object-cover mx-auto transition-transform transform hover:scale-110"
            />
            <h4 className="text-lg md:text-xl font-bold mt-4 text-white">
              VIP Rooms
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
