// Journey.js
import React, { useState, useRef } from "react";
import SectionContainer from "../Container/SectionContainer";
import Pause from "../../assets/pauseIcon.svg";
import Resume from "../../assets/resumeIcon.svg";
import Video5 from "/1727416059684570.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Journey = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleButtonClick = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const windoWidth = useMediaQuery();
  const top = useTransform(
    scrollYProgress,
    windoWidth < 600 ? [0, 0.0001, 0.0002] : [0, 0.18, 0.2],
    windoWidth < 600 ? ["0px", "0px", "0px"] : ["200px", "200px", "0px"]
  );
  const scaleText = useTransform(
    scrollYProgress,
    windoWidth < 600 ? [0, 0.0001, 0.0002] : [0, 0.18, 0.2],
    windoWidth < 600 ? ["1", "1", "1"] : ["0.7", "0.6", "1"]
  );

  return (
    <SectionContainer
      heading={"Your Journey at Phoenix"}
      desc={
        "Check out our experience video on the games, interiors, and unlimited fun that our casino has to offer."
      }
    >
      <motion.div
        style={{ y: top, scale: scaleText }}
        className="relative w-full max-w-6xl mx-auto overflow-hidden sm:px-0"
        ref={targetRef}
      >
        <video
          loading="lazy"
          ref={videoRef}
          className="w-full h-auto relative transition-all duration-500 ease-in-out hover:scale-125 hover:rotate-3 cursor-pointer"
          autoPlay
          muted
          loop
        >
          <source src="https://res.cloudinary.com/dr7lgt33k/video/upload/f_auto:video,q_auto/buacsfdlc6nm2a4boujz" type="video/mp4" />
        </video>
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-4 border rounded-full border-white/10"
          onClick={handleButtonClick}
        >
          <span className="w-16 h-16 rounded-full border border-white/10 bg-white bg-opacity-[0.04] flex items-center justify-center">
            {!isPlaying ? (
              <img src={Resume} alt="Play" />
            ) : (
              <img src={Pause} alt="Pause" />
            )}
          </span>
        </button>
      </motion.div>
    </SectionContainer>
  );
};

export default Journey;
