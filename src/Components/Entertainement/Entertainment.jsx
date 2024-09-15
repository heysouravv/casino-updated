import React, { useEffect, useState } from "react";
import SectionContainer from "../Container/SectionContainer";
import Entertainment1 from "../../assets/Entertainment/Entertainment1.jpg";
import Entertainment2 from "../../assets/Entertainment/Entertainment2.webp";
import Entertainment3 from "../../assets/Entertainment/Entertainment3.webp";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Entertainment = () => {
  const [splide, setSplide] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
    {
      id: 7,
      Img: Entertainment1,
      title:
        "World Class Restaurant, with India's Top Chef, enjoy a delicious meal at our in-house restaurant.",
    },
  ];

  useEffect(() => {
    // Initialize Splide after the component mounts
    const splideInstance = new Splide(".splide", {
      type: "slide",
      perPage: 1, // Display 1 slide per page
      pagination: false, // Disable default pagination
      arrows: true,
      autoplay: true,
      drag: true,
      gap: 20,
      breakpoints: {
        640: {
          perPage: 1, // Show 1 slide on small screens
        },
        1024: {
          perPage: 1, // Show 1 slide on medium screens
        },
      },
    }).mount();

    // Update current slide when Splide changes
    splideInstance.on("moved", (newIndex) => {
      setCurrentSlide(newIndex);
    });

    setSplide(splideInstance);

    // Cleanup on component unmount
    return () => splideInstance.destroy();
  }, []);

  // Function to handle pagination dash click
  const handlePaginationClick = (index) => {
    if (splide) {
      splide.go(index);
    }
  };

  return (
    <SectionContainer heading={"Unlimited Entertainment"}>
      <div className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {EntertainmentImages.map(({ Img, title, id }, index) => (
              <li
                className="splide__slide flex flex-col lg:flex-row items-center"
                key={id}
              >
                <div className="flex-shrink-0 w-full lg:w-1/2">
                  <img
                    src={Img}
                    loading="lazy"
                    alt={title}
                    className="w-full h-auto object-cover max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] hover:scale-110 transition-all duration-300  cursor-pointer"
                  />
                </div>
                <div className="flex-1 p-4 lg:p-8 lg:pl-8 lg:w-1/2 lg:hover:scale-110 transition-all duration-300 cursor-pointer">
                  <p className="text-base sm:text-lg lg:text-xl font-medium text-white">
                    {title}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Custom Pagination Dashes */}
      <div className="flex justify-center space-x-2 mt-4">
        {EntertainmentImages.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-1 bg-gray-300 cursor-pointer hover:bg-blue-600 ${
              currentSlide === index ? "bg-blue-500" : ""
            }`}
            style={{ borderRadius: "9999px" }} // For rounded dashes
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Entertainment;
