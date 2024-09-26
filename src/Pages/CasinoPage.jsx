import React, { useState } from "react";
import Highlights from "../Components/Highlights/Highlights";
import Games from "../Components/Games/Games";
import Faq from "../Components/FAQ/Faq";
import Entertainment from "../Components/Entertainement/Entertainment";

const CasinoPage = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setVideoPlaying(true);
  };

  const handleCloseClick = () => {
    setVideoPlaying(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-start w-full max-w-full min-h-screen bg-bg-primary">
      <div className="relative flex flex-col items-center justify-start w-full h-full max-w-full overflow-x-hidden">
        <div className="flex flex-col md:flex-row gap-20 md:gap-10 mt-60 md:mt-26 justify-center items-center w-full md:px-24">
          {/* Content on the left */}
          <div className="flex-1 flex flex-col justify-center px-4 md:px-8">
            <h3 className="text-3xl md:text-5xl font-bold tracking-wider leading- gradient-text text-left mb-4">
              Goa's Most <br />
              Luxurious Casino
            </h3>
            <p className="text-white/50 text-left">
              We are proud to be one of Goa's most luxurious casinos, our tag
              line "Where Luxury Begins and Fortunes Rise" speaks for itself.
              Located in a 5 Star Hotel Double Tree by Hilton, Candolim, we
              offer unforgettable casino experience for our visitors
            </p>
          </div>

          {/* Video on the right */}
          <div className="relative flex-1 flex items-center justify-center">
            {/* Video container */}
            <div className="relative w-full h-64 md:h-96">
              {/* Video thumbnail */}
              {!videoPlaying && (
                <div className="relative w-full h-full group">
                  <img
                    src="https://bigdaddy.in/wp-content/uploads/2023/07/Trip-Advisor-text-adjusted.jpg"
                    alt="TripAdvisor"
                    className="w-full h-full object-cover"
                  />
                  <div
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    <div className="flex items-center justify-center group-hover:bg-slate-500 group-hover:py-2 px-5 transition-all duration-300 rounded-3xl">
                      <div className="p-1 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110">
                        <img
                          src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/video_play.png"
                          alt="Play"
                          className="w-20 h-30 group-hover:w-6 group-hover:h-6"
                        />
                      </div>
                      <span className="text-gray-900 font-medium group-hover:block hidden">
                        Play
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Video iframe */}
              {videoPlaying && (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/FNsd2O4QbIQ?rel=0&amp;enablejsapi=1"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full"
                  title="Big Daddy Casino Video"
                />
              )}

              {/* Close button */}
              {videoPlaying && (
                <div
                  onClick={handleCloseClick}
                  className="absolute top-4 right-4 cursor-pointer p-2 bg-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/cross.svg"
                    alt="Close"
                    className="w-4 h-4"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Highlights */}
        <Highlights />
        {/* Games */}
        <Games />
        {/* Faq */}
        <Faq />
        {/* Entertainment */}
        <Entertainment/>
      </div>
    </div>
  );
};

export default CasinoPage;
