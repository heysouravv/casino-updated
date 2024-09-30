  // const images = [
  //   "https://res.cloudinary.com/dr7lgt33k/image/upload/f_auto,q_auto/pvyf85bbwgrvmemzy2dg",
  //   "https://res.cloudinary.com/dr7lgt33k/image/upload/f_auto,q_auto/vrvbse6pmjmtvgwmsfw6",
  //   "https://res.cloudinary.com/dr7lgt33k/image/upload/f_auto,q_auto/so8nglfw0mnvmtrhneve",
  //   "https://res.cloudinary.com/dr7lgt33k/image/upload/f_auto,q_auto/rcf17sxqtx9ntbvwmosz",
  //   "https://res.cloudinary.com/dr7lgt33k/image/upload/f_auto,q_auto/vlaw77sojn7wmaxhxkou",
  //   "https://res.cloudinary.com/dr7lgt33k/image/upload/f_auto,q_auto/zvpcgjmddkbwfosb5ymv",
  //   "https://res.cloudinary.com/dr7lgt33k/image/upload/f_auto,q_auto/tngj6mvpgpd9cj87566o",
  // ];
import React, { useState, useEffect, useCallback } from "react";
import SectionContainer from "../Container/SectionContainer";

const GalleryImage = React.memo(({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageSrc(src);
  }, [src]);

  if (!imageSrc) return <div className={`${className} bg-gray-200`} />;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} transition-opacity duration-300`}
      loading="lazy"
    />
  );
});

const MobileGallery = React.memo(({ images }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <GalleryImage
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

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
          className="w-full h-auto hover:scale-110 transition duration-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <GalleryImage
            src={images[1]}
            alt="Gallery image 2"
            className="w-full h-[250px] object-cover hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
        <div>
          <GalleryImage
            src={images[2]}
            alt="Gallery image 3"
            className="w-full h-[250px] object-cover hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div>
        <GalleryImage
          src={images[3]}
          alt="Gallery image 4"
          className="w-full h-[650px] object-cover hover:scale-110 transition duration-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <GalleryImage
            src={images[4]}
            alt="Gallery image 5"
            className="w-full h-[250px] object-cover hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
        <div>
          <GalleryImage
            src={images[5]}
            alt="Gallery image 6"
            className="w-full h-[250px] object-cover hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div>
        <GalleryImage
          src={images[6]}
          alt="Gallery image 7"
          className="w-full h-auto hover:scale-110 transition duration-300 cursor-pointer"
        />
      </div>
    </div>
  ), [images]);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <SectionContainer heading={"GALLERY"} desc={""}>
      <div className="relative">
        <GalleryImage
          src="/Elipse.webp"
          alt="Background"
          className="w-full object-cover absolute z-[-4]"
        />

        {/* Show Carousel for Mobile Devices */}
        <div className="block lg:hidden">
          <MobileGallery images={images} />
        </div>

        {/* Show Grid Gallery for Larger Devices */}
        {renderDesktopGallery()}
      </div>
    </SectionContainer>
  );
};

export default Gallery;