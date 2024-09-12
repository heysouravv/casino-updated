import SectionContainer from "../Container/SectionContainer";
// Carousel used in gallery
import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handlePrevClick = () => {
    setSelectedImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Auto-scroll every 3 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedImage]);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`cursor-pointer ${
              selectedImage === index ? "border-4 border-blue-500" : ""
            }`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <div className="absolute flex items-center space-x-2 transform -translate-y-1/2 top-1/2">
        <button onClick={handlePrevClick}>&lt;</button>
        <button onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
};

const Gallery = () => {
  const images = [
    "https://bigdaddy.in/wp-content/uploads/2023/07/bd-cb4.jpg",
    "https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
    "https://images.unsplash.com/photo-1606176952634-3f76be66c514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Repeated for the sake of the example
    "https://images.unsplash.com/photo-1626775238053-4315516eedc9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706129867447-b4f156c46641?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706129867447-b4f156c46641?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1698525809613-c6eb1c25bc0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <SectionContainer heading={"GALLERY"} desc={""}>
      <img
        loading="lazy"
        src="/Elipse.webp"
        className="w-full h-[650px] object-cover absolute z-10 "
      />

      <div className="z-20 grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
        <div>
          <img
            loading="lazy"
            src={images[0]}
            className="w-full h-auto  hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <img
              loading="lazy"
              src={images[1]}
              className="w-full h-[250px] object-cover  hover:scale-110 transition duration-300 cursor-pointer"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src={images[2]}
              className="w-full h-[250px] object-cover  hover:scale-110 transition duration-300 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            src={images[3]}
            className="w-full h-[650px] object-cover  hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <img
              loading="lazy"
              src={images[4]}
              className="w-full h-[250px] object-cover  hover:scale-110 transition duration-300 cursor-pointer"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src={images[5]}
              className="w-full h-[250px] object-cover  hover:scale-110 transition duration-300 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            src={images[6]}
            className="w-full h-auto hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Gallery;
