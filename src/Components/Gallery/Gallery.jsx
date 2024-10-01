import React, { useState, useEffect, useCallback, useRef } from "react";
import SectionContainer from "../Container/SectionContainer";

const GalleryImage = React.memo(({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full object-cover ${className}`}
      loading="lazy"
    />
  );
});

const MobileGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    touchEndX.current = null; // Reset touchEnd
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
    
    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div 
      className="relative w-full overflow-hidden h-64"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="flex transition-transform duration-300 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const images = [
    "/1 2.webp",
    "/home-gallery-1.webp",
    "/home-gallery-2.webp",
    "/home-gallery-3.webp",
    "/home-gallery-4.webp",
    "/home-gallery-5.webp",
    "/home-gallery-6.webp",
  ];

  const renderDesktopGallery = useCallback(() => (
    <div className="hidden lg:grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
      <div>
        <GalleryImage
          src={images[0]}
          alt="Gallery image 1"
          className="h-auto hover:scale-110 transition duration-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <GalleryImage
            src={images[1]}
            alt="Gallery image 2"
            className="h-[250px] hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
        <div>
          <GalleryImage
            src={images[2]}
            alt="Gallery image 3"
            className="h-[250px] hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div>
        <GalleryImage
          src={images[3]}
          alt="Gallery image 4"
          className="h-[650px] hover:scale-110 transition duration-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <GalleryImage
            src={images[4]}
            alt="Gallery image 5"
            className="h-[250px] hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
        <div>
          <GalleryImage
            src={images[5]}
            alt="Gallery image 6"
            className="h-[250px] hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div>
        <GalleryImage
          src={images[6]}
          alt="Gallery image 7"
          className="h-auto hover:scale-110 transition duration-300 cursor-pointer"
        />
      </div>
    </div>
  ), [images]);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <SectionContainer heading="GALLERY" desc="">
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <GalleryImage
            src="/Elipse.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-30">
          {/* Show Carousel for Mobile Devices */}
          <div className="block lg:hidden">
            <MobileGallery images={images} />
          </div>

          {/* Show Grid Gallery for Larger Devices */}
          {renderDesktopGallery()}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Gallery;