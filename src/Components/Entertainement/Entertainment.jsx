import React, { useEffect } from "react";
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';

const EntertainmentSections = [
  {
    id: 1,
    Img: "https://bigdaddy.in/wp-content/uploads/2023/05/01-5-1.png",
    title: "CASINO",
    description:
      "A selection of popular casino games, ranging from indian teen patti to american roulette, offering a variety of stakes for all players across 3 levels",
  },
  {
    id: 2,
    Img: "https://bigdaddy.in/wp-content/uploads/2023/05/Multilevel-Fun-Kids-room.png",
    title: "KIDS ROOM",
    description:
      "Brought your little players along? Drop them off in the special kids' area where they can have their own fun under special supervision, of course!",
  },
  {
    id: 3,
    Img: "https://bigdaddy.in/wp-content/uploads/2023/05/Multilevel-Fun-Kids-room.png",
    title: "VIP ROOM",
    description:
      "Experience exclusive luxury in our VIP Room, designed for high-stakes players and those seeking a more intimate gaming environment.",
  },
  {
    id: 4,
    Img: "https://bigdaddy.in/wp-content/uploads/2023/07/sheesha-lounge1.jpg",
    title: "HOOK LOUNGE",
    description:
      "Relax and unwind in our Hook Lounge, featuring a wide selection of flavored hookahs in a comfortable, atmospheric setting.",
  },
  {
    id: 5,
    Img: "https://bigdaddy.in/wp-content/uploads/2023/05/Multilevel-Fun-Aishorum-1.png",
    title: "PERFORMANCE STAGE",
    description:
      "Enjoy live entertainment on our Performance Stage, featuring a variety of acts from music to magic, enhancing your casino experience.",
  },
];

export default function Entertainment() {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
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
        768: {
          slidesPerView: 2,
        },
      },
    });

    // Cleanup function
    return () => {
      if (swiper && swiper.destroy) swiper.destroy();
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-black text-white px-2 sm:px-8 py-16">
      <div className="bg-black w-full max-w-7xl mx-auto">
        <h1 className="lg:text-[52px] uppercase py-10 text-3xl gradient-text leading-normal font-extrabold">
          Unlimited Entertaiment
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