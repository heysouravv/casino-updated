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
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${selectedImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="w-full h-64 object-cover"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
      {/* Pagination Dashes */}
      <div className="absolute inset-x-0 top-60 flex justify-center space-x-2 mt-8">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-1 bg-gray-300 hover:bg-blue-600 ${
              selectedImage === index ? "bg-blue-500" : ""
            }`}
            style={{ borderRadius: "9999px" }} // For rounded dashes
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
      {/* Navigation Buttons */}
      {/* <div className="absolute inset-y-0 left-0 flex items-center pl-4">
        <button
          className="bg-gray-700 text-white p-2"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
        <button
          className="bg-gray-700 text-white p-2"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div> */}
    </div>
  );
};

export default Carousel;
