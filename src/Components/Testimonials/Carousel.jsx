import React, { useRef, useState, useEffect, useCallback } from "react";

const Carousel = ({ fullWidth = true, className = "p-0", children }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const handleScroll = useCallback(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.scrollWidth / (totalSlides + 2);
      const scrollPosition = sliderRef.current.scrollLeft;

      // Looping logic
      if (scrollPosition <= slideWidth / 2) {
        sliderRef.current.scrollLeft = slideWidth * totalSlides;
      } else if (scrollPosition >= slideWidth * (totalSlides + 0.5)) {
        sliderRef.current.scrollLeft = slideWidth;
      }

      const index = Math.round(scrollPosition / slideWidth) - 1;
      setCurrentIndex(index < 0 ? totalSlides - 1 : index >= totalSlides ? 0 : index);
    }
  }, [totalSlides]);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    sliderElement.addEventListener("scroll", handleScroll);
    return () => sliderElement.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const slideWidth = sliderRef.current.scrollWidth / (totalSlides + 2);
    sliderRef.current.scrollLeft = slideWidth;
  }, [children, totalSlides]);

  const handleDragStart = useCallback((clientX) => {
    setIsDragging(true);
    setStartX(clientX - sliderRef.current.getBoundingClientRect().left);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = "grabbing";
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    sliderRef.current.style.cursor = "grab";
  }, []);

  const handleDragMove = useCallback((clientX) => {
    if (!isDragging) return;
    const x = clientX - sliderRef.current.getBoundingClientRect().left;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseDown = (e) => handleDragStart(e.pageX);
  const handleMouseUp = handleDragEnd;
  const handleMouseLeave = handleDragEnd;
  const handleMouseMove = (e) => {
    e.preventDefault();
    handleDragMove(e.pageX);
  };

  const handleTouchStart = (e) => handleDragStart(e.touches[0].clientX);
  const handleTouchEnd = handleDragEnd;
  const handleTouchMove = (e) => {
    e.preventDefault();
    handleDragMove(e.touches[0].clientX);
  };

  const scrollToSlide = useCallback((index) => {
    if (sliderRef.current && totalSlides > 0) {
      const slideWidth = sliderRef.current.scrollWidth / (totalSlides + 2);
      sliderRef.current.scrollTo({
        left: (index + 1) * slideWidth,
        behavior: "smooth",
      });
    }
  }, [totalSlides]);

  const slides = React.Children.toArray(children);
  const clonedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  return (
    <div className={`carousel-container ${fullWidth ? "w-screen" : "w-full"} overflow-hidden`}>
      <div
        className={`${className} flex gap-8 overflow-x-hidden select-none cursor-grab whitespace-nowrap ${
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
        {clonedSlides.map((slide, index) => (
          <div
            key={index}
            className="inline-block min-w-full sm:min-w-[400px] max-h-[400px] lg:min-w-[620px] rounded-lg overflow-hidden transition-transform duration-300"
            style={{ flex: "0 0 auto" }}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-6 h-1 rounded-full ${
              index === currentIndex ? "bg-slate-300/90" : "bg-slate-100"
            }`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;