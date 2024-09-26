import React, { useState, useEffect } from "react";
import SectionContainer from "../Container/SectionContainer";

const MobileGallery = ({ images }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const images = [
    "https://bigdaddy.in/wp-content/uploads/2023/07/bd-cb4.jpg",
    "https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
    "https://images.unsplash.com/photo-1606176952634-3f76be66c514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1626775238053-4315516eedc9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706129867447-b4f156c46641?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706129867447-b4f156c46641?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1698525809613-c6eb1c25bc0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <SectionContainer heading={"GALLERY"} desc={""}>
      <div className="relative">
        <img
          loading="lazy"
          src="/Elipse.webp"
          className="w-full object-cover absolute z-[-4]"
        />

        {/* Show Carousel for Mobile Devices */}
        <div className="block lg:hidden">
          <MobileGallery images={images} />
        </div>

        {/* Show Grid Gallery for Larger Devices */}
        <div className="hidden lg:grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
          <div>
            <img
              loading="lazy"
              src={images[0]}
              className="w-full h-auto hover:scale-110 transition duration-300 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <img
                loading="lazy"
                src={images[1]}
                className="w-full h-[250px] object-cover hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src={images[2]}
                className="w-full h-[250px] object-cover hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
          </div>
          <div>
            <img
              loading="lazy"
              src={images[3]}
              className="w-full h-[650px] object-cover hover:scale-110 transition duration-300 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <img
                loading="lazy"
                src={images[4]}
                className="w-full h-[250px] object-cover hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src={images[5]}
                className="w-full h-[250px] object-cover hover:scale-110 transition duration-300 cursor-pointer"
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
      </div>
    </SectionContainer>
  );
};

export default Gallery;