import React from "react";
import SectionContainer from "../Container/SectionContainer";
import Entertainment1 from "../../assets/Entertainment/Entertainment1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/pagination"; // Import Pagination styles
import { Pagination, Autoplay } from "swiper"; // Import required modules

const Entertainment = () => {
  const EntertainmentImages = [
    {
      id: 1,
      Img: Entertainment1,
      title:
        "World Class Restaurant, with India's Top Chef, enjoy a delicious meal at our in-house restaurant.",
    },
    {
      id: 2,
      Img: Entertainment1,
      title:
        "Entertainment never comes to a stop at Phoenix Casino, live dances, shows on our stage 24/7 365 days.",
    },
    {
      id: 3,
      Img: Entertainment1,
      title:
        "Take a break from all the winning, and enjoy a nice hookah session in the hookah lounge.",
    },
    {
      id: 4,
      Img: Entertainment1,
      title:
        "World Class Restaurant, with India's Top Chef, enjoy a delicious meal at our in-house restaurant.",
    },
    {
      id: 5,
      Img: Entertainment1,
      title:
        "Entertainment never comes to a stop at Phoenix Casino, live dances, shows on our stage 24/7 365 days.",
    },
    {
      id: 6,
      Img: Entertainment1,
      title:
        "Take a break from all the winning, and enjoy a nice hookah session in the hookah lounge.",
    },
  ];

  return (
    <SectionContainer heading={"Unlimited Entertainment"}>
      <div className="relative w-full h-64">
        {" "}
        {/* Set height for visibility */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }} // Enable clickable pagination
          autoplay={{ delay: 3000 }}
          loop={true}
          className="h-full"
          touchRatio={1} // Ensure touch sensitivity
        >
          {EntertainmentImages.map((image) => (
            <SwiperSlide
              key={image.id}
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <img
                  src={image.Img}
                  alt={image.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <p className="mt-4 text-lg font-semibold text-white">
                  {image.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination Below Images */}
        <div className="flex justify-center mt-4">
          {EntertainmentImages.map((_, index) => (
            <button
              key={index}
              className="mx-2 w-4 h-4 rounded-full bg-gray-500 hover:bg-gray-700 focus:outline-none"
              onClick={() => {
                const swiperInstance = document.querySelector(".swiper").swiper;
                swiperInstance.slideTo(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Entertainment;
