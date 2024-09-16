import React, { useRef, useState, useEffect } from "react";
import SectionContainer from "../Container/SectionContainer";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Entertainment = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide
  const swiperRef = useRef(null); // Ref to access Swiper instance

  const EntertainmentImages = [
    {
      id: 1,
      Img: "https://bigdaddy.in/wp-content/uploads/2023/05/01-5-1.png",
      title: "Casino",
      description:
        "With over 20+ Games from Roulette, Poker, Slots, Flush & much more, win extravagantly at the Phoenix casino",
    },
    {
      id: 2,
      Img: "https://bigdaddy.in/wp-content/uploads/2023/05/Multilevel-Fun-Kids-room.png",
      title: "VIP Room",
      description:
        "A special VIP Room crafted for High net-worth individuals with private service",
    },
    {
      id: 3,
      Img: "https://bigdaddy.in/wp-content/uploads/2023/07/sheesha-lounge1.jpg",
      title: "Hook Lounge",
      description:
        "Take a break from all the winning, and enjoy a nice hookah session in the hookah lounge",
    },
    {
      id: 4,
      Img: "https://bigdaddy.in/wp-content/uploads/2023/07/Daddys-Club-1a1.jpg",
      title: "Moulin Rouge - Restaurant",
      description:
        "World Class Restaurant, with India's Top Chef, enjoy a delicious meal at our inhouse restaurant",
    },
    {
      id: 5,
      Img: "https://bigdaddy.in/wp-content/uploads/2023/05/Multilevel-Fun-Aishorum-1.png",
      title: "Perfromance Stage",
      description:
        "Entertainment never comes to a stop at Phoenix Casino, live dances, shows on our stage 24/7 365 days....",
    },
  ];

  // Function to handle slide change
  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.swiper.activeIndex);
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      swiperInstance.on("slideChange", handleSlideChange); // Listen to slide change
    }
    return () => {
      swiperInstance?.off("slideChange", handleSlideChange); // Clean up event listener on unmount
    };
  }, []);

  return (
    <SectionContainer heading={"Unlimited Entertainments"}>
      <div className="relative w-full">
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          loop={true}
          className="h-full"
          onSlideChange={handleSlideChange} // Call handleSlideChange on slide change
        >
          {EntertainmentImages.map((image) => (
            <div className="flex justify-center items-center">
              <SwiperSlide
                key={image.id}
                className="flex flex-col lg:flex-row text-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto"
              >
                <div className="lg:w-1/2">
                  <img
                    src={image.Img}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="lg:w-1/2 p-6 flex flex-col justify-center">
                  <h5 className="text-xl font-semibold mb-4">{image.title}</h5>
                  <p className="text-base text-gray-700">{image.description}</p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        {/* Custom Pagination Below Images */}
        <div className="flex justify-center mt-4 space-x-2">
          {EntertainmentImages.map((_, index) => (
            <span
              key={index}
              className={`w-6 h-1 bg-gray-200 rounded-full cursor-pointer transition-colors duration-300 transform ${
                activeIndex === index ? "bg-blue-500" : "bg-black"
              } ${activeIndex === index ? "scale-125" : "hover:scale-125"}`}
              onClick={() => swiperRef.current?.swiper.slideTo(index)}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Entertainment;
