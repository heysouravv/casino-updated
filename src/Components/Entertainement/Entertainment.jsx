import React, { useEffect, useRef } from "react";
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { SwiperSlide } from "swiper/react";
import casino from "../../../public/casino.webp";
import VIP from "../../../public/vip-room.webp";
import Performance from "../../../public/Performance-Stage.webp";

// Import Swiper styles
import 'swiper/css';

const EntertainmentSections = [
  {
    id: 1,
    Img: casino,
    title: "CASINO",
    description:
      "A selection of popular casino games, ranging from indian teen patti to american roulette, offering a variety of stakes for all players across 3 levels",
  },
  {
    id: 2,
    Img: VIP,
    title: "VIP ROOM",
    description:
      "Experience exclusive luxury in our VIP Room, designed for high-stakes players and those seeking a more intimate gaming environment.",
  },
  {
    id: 3,
    Img: Performance,
    title: "PERFORMANCE STAGE",
    description:
      "Enjoy live entertainment on our Performance Stage, featuring a variety of acts from music to magic, enhancing your casino experience.",
  },
];

export default function Entertainment() {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      modules: [Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          centeredSlides: false,
        },
      },
    });

    // Cleanup function
    return () => {
      if (swiperRef.current && swiperRef.current.destroy) swiperRef.current.destroy();
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-black text-white px-2 sm:px-8 py-10">
      <div className="bg-black w-full max-w-7xl mx-auto">
        <h1 className="lg:text-[52px] uppercase py-10 text-3xl gradient-text leading-normal font-extrabold">
          Unlimited Entertainment
        </h1>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {EntertainmentSections.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col h-full">
                  <img src={item.Img} alt={item.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
                  <h2 className="text-2xl font-bold mb-2 text-white-400">{item.title}</h2>
                  <p className="text-gray-300 text-sm flex-grow">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}