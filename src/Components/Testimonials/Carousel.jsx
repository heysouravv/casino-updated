import React, { useRef, useState, useEffect } from "react";

const Carousel = ({ fullWidth = true, className = "p-0", children }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  useEffect(() => {
    setCurrentIndex(0);
  }, [children]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.getBoundingClientRect().left);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      sliderRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      sliderRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.getBoundingClientRect().left;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(
      e.touches[0].clientX - sliderRef.current.getBoundingClientRect().left
    );
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x =
      e.touches[0].clientX - sliderRef.current.getBoundingClientRect().left;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const scrollToSlide = (index) => {
    if (sliderRef.current && totalSlides > 0) {
      const slideWidth = sliderRef.current.scrollWidth / totalSlides;
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePaginationClick = (index) => {
    scrollToSlide(index);
  };

  return (
    <div
      className={`carousel-container ${fullWidth ? "w-screen" : "w-full"}`}
      style={{ overflow: "hidden" }}
    >
      <div
        id="carousel"
        className={`${className} snap no-scrollbar whitespace-nowrap flex gap-8 overflow-x-hidden select-none cursor-grab mx-auto ${
          fullWidth ? "w-screen" : "w-full"
        } h-auto transform will-change-transform transition-transform duration-300 ease-in-out`}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {React.Children.map(children, (slide, index) => (
          <div
            key={index}
            className="inline-block min-w-full sm:min-w-[400px] max-h-[400px] lg:min-w-[620px] rounded-lg overflow-hidden transition-transform duration-300"
            style={{ flex: "none" }} // Ensure slides do not stretch
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Dot Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`mx-1 w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
