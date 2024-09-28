import React, { useState, useRef } from "react";
import Highlights from "../Components/Highlights/Highlights";
import Games from "../Components/Games/Games";
import Faq from "../Components/FAQ/Faq";
import Entertainment from "../Components/Entertainement/Entertainment";

const customFaqData = [
  {
    id: 1,
    question: "Is there a dress code for visiting the casino?",
    answer: "Yes, we have a smart casual dress code policy which means no shorts, sleeveless shirts, flip-flops, or sandals are allowed. Additionally, guests are not allowed to wear hats or sunglasses inside the casino.",
  },
  {
    id: 2,
    question: "Are there any age restrictions for visiting the casino?",
    answer: "Yes, guests must be at least 21 years old to enter the casino.",
  },
  {
    id: 3,
    question: "What types of games are available at the casino?",
    answer: "We offer a variety of games including slot machines, table games such as blackjack, baccarat, roulette, and craps, as well as live poker and sports betting.",
  },
  {
    id: 5,
    question: "Are there any dining options available at the casino?",
    answer: "Yes, we have a fine dining option with world-class chef, the name of the area is moulin rouge",
  },
];

const CasinoPage = () => {
  const [videoWithSound, setVideoWithSound] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("./video.mp4");
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  const handleVideoClick = () => {
    setVideoWithSound(true);
    setCurrentVideo("./reel-box-small.mp4");
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.muted = false;
      
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          if (videoContainerRef.current && videoContainerRef.current.requestFullscreen) {
            videoContainerRef.current.requestFullscreen();
          } else if (videoContainerRef.current && videoContainerRef.current.webkitRequestFullscreen) {
            videoContainerRef.current.webkitRequestFullscreen();
          }
        }).catch(error => {
          console.error("Autoplay was prevented:", error);
        });
      }
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevent this click from triggering the video click handler
    setVideoWithSound(false);
    setCurrentVideo("./video.mp4");
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.muted = true;
      videoRef.current.play();
      
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-start w-full max-w-full min-h-screen bg-bg-primary">
      <div className="relative flex flex-col items-center justify-start w-full h-full max-w-full overflow-x-hidden">
        <div className="flex flex-col md:flex-row gap-10 mt-32 md:mt-40 justify-center items-center w-full px-4 md:px-24">
          {/* Content on the left */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl md:text-5xl font-bold tracking-wider leading-tight gradient-text text-left mb-4">
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
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div 
              ref={videoContainerRef}
              className="relative w-full aspect-video cursor-pointer"
              onClick={handleVideoClick}
            >
              <video
                ref={videoRef}
                src={currentVideo}
                className={`absolute inset-0 w-full h-full object-cover ${
                  videoWithSound ? 'object-contain bg-black' : 'object-cover'
                }`}
                autoPlay
                loop
                muted={!videoWithSound}
                playsInline
              />

              {/* Play button overlay (only when muted) */}
              {!videoWithSound && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 bg-black bg-opacity-50 rounded-full">
                    <img
                      src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/video_play.png"
                      alt="Play"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              )}

              {/* Close button (only when playing with sound) */}
              {videoWithSound && (
                <div
                  onClick={handleCloseClick}
                  className="absolute top-4 right-4 cursor-pointer p-2 bg-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110 z-10"
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
        <Faq faqData={customFaqData} />
        {/* Entertainment */}
        <Entertainment/>
      </div>
    </div>
  );
};

export default CasinoPage;