import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

// Assume ProfileIcon is imported correctly
import ProfileIcon from "../../assets/profileIcon.svg";


const Testimonial = ({ message, name }) => {
  return (
    <div className="flex flex-col bg-[rgba(5,5,4,0.30)] rounded-2xl border border-[#E7C980] h-full items-center justify-between w-full py-10 p-10 transition duration-500">
      <h4 className="w-full text-xl sm:text-base font-normal text-white mb-5 overflow-hidden line-clamp-4">
        "{message}"
      </h4>
      <div className="flex items-center justify-center py-5 w-full gap-2 mt-auto">
        <img src={ProfileIcon} loading="lazy" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
        <h4 className="text-l sm:text-sm font-normal text-white">
          {name}
        </h4>
      </div>
    </div>
  )
}



const WhatPeopleSay = () => {
  const PeopleReviews = [
    {
      id: 1,
      title: "Fantastic casino experience! Friendly staff, exciting games, and an amazing atmosphere.",
      name: "Rohit Sharma",
    },
    {
      id: 2,
      title: "Great ambiance and friendly staff. Will definitely come back!",
      name: "Priya Gupta",
    },
    {
      id: 3,
      title: "An unforgettable night with friends! The games were thrilling.",
      name: "Amit Verma",
    },
    {
      id: 4,
      title: "Best casino experience I've ever had! Highly recommend it.",
      name: "Sneha Reddy",
    },
    {
      id: 5,
      title: "The food and entertainment were top-notch!",
      name: "Rahul Mehta",
    },
    {
      id: 6,
      title: "I had a blast! The games were exciting and the service was excellent.",
      name: "Anjali Singh",
    },
    {
      id: 7,
      title: "A perfect place for a night out with friends. Loved it!",
      name: "Vikram Joshi",
    },
    {
      id: 8,
      title: "The atmosphere is electric! Can't wait to visit again.",
      name: "Deepika Kaur",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-black text-white px-2 sm:px-4 py-16">
      <style jsx>{`
      .custom-padding {
        padding-top: 48px;
        padding-bottom: 48px;
      }
    `}</style>
      <div className="bg-black w-full max-w-7xl mx-auto custom-padding">
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] uppercase mb-6 sm:mb-8 lg:mb-10 gradient-text leading-normal font-extrabold">
          What People Say
        </h2>
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="mySwiper"
          >
            {PeopleReviews.map(({ name, title, id }) => (
              <SwiperSlide key={id}>
                <Testimonial name={name} message={title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhatPeopleSay;