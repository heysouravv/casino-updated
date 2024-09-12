import React, { useEffect } from "react";
import SectionContainer from "../Container/SectionContainer";
import Entertainment1 from "../../assets/Entertainment/Entertainment1.jpg";
import Entertainment2 from "../../assets/Entertainment/Entertainment2.webp";
import Entertainment3 from "../../assets/Entertainment/Entertainment3.webp";
import Splide from "@splidejs/splide"; // Import Splide

import "@splidejs/splide/dist/css/splide.min.css"; // Import Splide CSS

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
      Img: Entertainment2,
      title:
        "Entertainment never comes to a stop at Phoenix Casino, live dances, shows on our stage 24/7 365 days.",
    },
    {
      id: 3,
      Img: Entertainment3,
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
      Img: Entertainment2,
      title:
        "Entertainment never comes to a stop at Phoenix Casino, live dances, shows on our stage 24/7 365 days.",
    },
    {
      id: 6,
      Img: Entertainment3,
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
    const splide = new Splide(".splide", {
      type: "slide",
      perPage: 6, // Set per page to 3
      pagination: true, // Enable pagination
      arrows: true,
      autoplay: true,
      drag: true,
      gap: 30,
      breakpoints: {
        640: {
          perPage: 1, // Show 1 slide on small screens
        },
        1024: {
          perPage: 2, // Show 2 slides on medium screens
        },
      },
    }).mount();

    // Cleanup on component unmount
    return () => splide.destroy();
  }, []);

  return (
    <SectionContainer heading={"Unlimited Entertainment"}>
      <div className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {EntertainmentImages.map(({ Img, title, id }) => (
              <li className="splide__slide" key={id}>
                <div className="flex flex-col items-start gap-3 min-w-full max-h-[600px] lg:min-w-[580px] hover:scale-110 transition">
                  <img
                    src={Img}
                    loading="lazy"
                    alt=""
                    className="w-full h-auto sm:max-h-[240px] max-h-[185px] lg:max-h-[600px] object-cover"
                  />
                  {/* Uncomment if you want to display titles */}
                  {/* <span className="text-lg font-normal text-white lg:text-xl">
                    {title}
                  </span> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="splide__pagination mt-4">
        {/* Pagination will be rendered here */}
      </div>
    </SectionContainer>
  );
};

export default Entertainment;
