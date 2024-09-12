import React, { useEffect, useState, useRef, useMemo } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useScroll, useTransform, motion } from "framer-motion";
import BgVideo from "../../assets/bgVideo.mp4";
import Wheel from "../../assets/chakra.webp";
import VerticalPheonixCasino from "../../assets/pheonixCasinoGoaVertical.svg";
import HeartCardA from "../../assets/cardHeartA.svg";
import SpadeLeftCard from "../../assets/cardSpadeLeftA.svg";
import DiamondCardA from "../../assets/cardDiamondA.svg";
import SpadeRightCard from "../../assets/cardSpadeA.svg";
import Curtain from "../../assets/curtain.webp";
import Heading from "../../assets/heading.webp";
import HeadingMobile from "../../assets/headingMobile.webp";
import BlurredDiceRight from "../../assets/goldDiceBlurred.svg";
import BlurredDiceLeft from "../../assets/diceBlurredLeft.svg";
import RightCoin from "../../assets/coinRight.svg";
import BlurredCoin from "../../assets/blurreCoin.svg";
import BronzeCoin from "../../assets/leftBronzeCoin.svg";
import GoldCoin from "../../assets/goldenCoinRight.svg";
import WheelArrow from "../../assets/wheelArrow.svg";
import LoadingGif from "../../assets/LoadingLogo.gif";

const Hero = () => {
  const vidRef = useRef(null);
  const [isShow, setIsShow] = useState(true);
  const [vidLoaded, setVidLoaded] = useState(false);

  const windoWidth = useMediaQuery();
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const top = useTransform(
    scrollYProgress,
    [0, 0.57, 0.575, 0.583, 0.585, 0.585],
    windoWidth < 600
      ? ["35%", "35%", "35%", "35%", "70%", "70%"]
      : ["19%", "19%", "19%", "19%", "60%", "60%"]
  );

  const scaleText = useTransform(
    scrollYProgress,
    [0, 0.57, 0.575, 0.58, 0.585],
    ["1", "1", 1, "1", "1"]
  );

  const display = useTransform(
    scrollYProgress,
    [0, 0.54, 0.583, 0.585],
    ["block", "block", "block", "none"]
  );

  const background = useTransform(
    scrollYProgress,
    [0, 0.54, 0.585],
    ["transparent", "transparent", "#030303"]
  );

  const yAfterLogo = useTransform(
    scrollYProgress,
    [0, 0.54, 0.55, 0.582, 0.585, 0.585, 0.585],
    ["200px", "200px", "200px", "200px", "0px", "0px", "0px"]
  );

  const scaleAfterLogo = useTransform(
    scrollYProgress,
    [0, 0.54, 0.582, 0.585, 0.585],
    ["0.4", 0.8, "0.8", 1, "1"]
  );

  const opacityAfterLogo = useTransform(
    scrollYProgress,
    [0, 0.582, 0.585, 0.585],
    ["0", "0", 1, "1"]
  );

  useEffect(() => {
    if (isShow) {
      const timeoutDuration = windoWidth < 600 ? 60000 : 2800;
      const timeoutId = setTimeout(() => setIsShow(false), timeoutDuration);
      return () => clearTimeout(timeoutId);
    }
  }, [isShow, windoWidth]);

  useEffect(() => {
    const handleVideoLoaded = () => setVidLoaded(true);
    const videoElement = vidRef.current;

    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleVideoLoaded);

      if (videoElement.readyState >= 3) {
        handleVideoLoaded();
      }
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleVideoLoaded);
      }
    };
  }, []);

  const headingImage = useMemo(
    () => (windoWidth < 600 ? HeadingMobile : Heading),
    [windoWidth]
  );

  return (
    <section
      ref={targetRef}
      className="w-full h-[20vh] sm:h-[350vh] relative no-scrollbar"
    >
      <motion.div
        className="sticky top-0 right-0 flex items-start justify-start w-full h-screen no-scrollbar"
        style={{ background }}
      >
        {!vidLoaded && (
          <div className="min-w-full back flex items-center justify-center sticky top-0 sm:justify-center min-h-screen bg-black z-[100]">
            <img
              src={LoadingGif}
              alt=""
              className="w-11/12 max-w-[200px] z-[120]"
            />
          </div>
        )}

        <div className="relative flex flex-col items-center justify-between w-full h-screen overflow-hidden">
          {isShow && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0] }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: {
                  type: "spring",
                  stiffness: 400,
                  damping: 80,
                  duration: windoWidth < 600 ? 10.2 : 0.05,
                  delay: windoWidth < 600 ? 53.6 : 2.6,
                },
              }}
              className="min-w-full back flex items-center justify-end sm:justify-center min-h-screen bg-black z-[100]"
            >
              <motion.div
                initial={{ y: windoWidth < 600 ? 50 : 0, scale: 0.8 }}
                animate={{
                  y: windoWidth < 600 ? [50, -20] : [0, -140],
                  scale: [0.8, 1],
                }}
                exit={{ y: 50, scale: 0.4 }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                  y: {
                    type: "spring",
                    stiffness: 400,
                    damping: 80,
                    duration: 0.4,
                    delay: windoWidth < 600 ? 2.2 : 2.2,
                  },
                  scale: {
                    type: "spring",
                    stiffness: 400,
                    damping: 80,
                    duration: 0.4,
                    delay: windoWidth < 600 ? 43.5 : 2.2,
                  },
                }}
                className="relative flex flex-col items-center justify-center gap-4"
              >
                <img
                  src={headingImage}
                  alt=""
                  className="w-11/12 max-w-max z-[120]"
                />
              </motion.div>
            </motion.div>
          )}
          <motion.div
            initial={{ y: 100, scale: 0.6 }}
            animate={{ y: [100, 0], scale: [0.8, 1] }}
            exit={{ y: 50, scale: 0.4 }}
            style={{ top, scale: scaleText }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`relative ${
              isShow ? "z-[120]" : "z-50"
            } flex flex-col items-center justify-center gap-4 transition-all duration-[600ms]`}
          >
            <img
              src={headingImage}
              alt=""
              className="w-11/12 max-w-max z-[120]"
            />
          </motion.div>

          <motion.div
            style={{ display }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-screen object-cover top-0 right-0 absolute z-[1]"
          >
            <video
              ref={vidRef}
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              preload="auto"
              src={BgVideo}
              type="video/mp4"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <section className="items-start justify-between hidden w-full sm:flex">
            <motion.div
              initial={{ x: "200vh", opacity: 0 }}
              animate={{ x: "0vh", opacity: 1 }}
              style={{ display, rotateY: 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-[60vh] left-[-7%] w-full h-screen"
            >
              <img
                src={Wheel}
                alt=""
                className="relative w-80 h-full rotate-[14deg]"
              />
            </motion.div>
            <motion.div
              style={{ display }}
              initial={{ y: "90vh", opacity: 0 }}
              animate={{ y: "0vh", opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <img src={Curtain} alt="" className="relative w-80 h-full" />
            </motion.div>
            <motion.div
              initial={{ y: "20vh", opacity: 0 }}
              animate={{ y: "0vh", opacity: 1 }}
              style={{ display }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-[20%] right-[-15%] z-[100]"
            >
              <img
                src={VerticalPheonixCasino}
                alt=""
                className="relative w-full h-full max-w-[250px]"
              />
            </motion.div>
          </section>

          <motion.div
            initial={{ y: "0px", opacity: 1 }}
            animate={{ y: ["0px", "20px"], opacity: [1, 0.8] }}
            exit={{ y: "50px", opacity: 0 }}
            transition={{
              y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
              opacity: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              },
            }}
            className="absolute bottom-[-10%] left-[-15%] z-20"
          >
            <img src={BlurredDiceRight} alt="" className="w-32 h-32" />
          </motion.div>
          <motion.div
            initial={{ y: "0px", opacity: 1 }}
            animate={{ y: ["0px", "20px"], opacity: [1, 0.8] }}
            exit={{ y: "50px", opacity: 0 }}
            transition={{
              y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
              opacity: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              },
            }}
            className="absolute bottom-[-10%] right-[-15%] z-20"
          >
            <img src={BlurredDiceLeft} alt="" className="w-32 h-32" />
          </motion.div>

          <motion.div
            initial={{ y: "0px", opacity: 1 }}
            animate={{ y: ["0px", "10px"], opacity: [1, 0.8] }}
            exit={{ y: "50px", opacity: 0 }}
            transition={{
              y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
              opacity: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              },
            }}
            className="absolute bottom-[-20%] left-[-15%] z-20"
          >
            <img src={RightCoin} alt="" className="w-32 h-32" />
          </motion.div>

          <motion.div
            style={{
              opacity: opacityAfterLogo,
              y: yAfterLogo,
              scale: scaleAfterLogo,
            }}
            initial={{ opacity: 0, y: "200px", scale: 0.4 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: "200px", scale: 0.4 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute z-20 bottom-[-10%] right-[5%]"
          >
            <img src={GoldCoin} alt="" className="w-32 h-32" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
