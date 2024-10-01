import React from 'react';

const ThankYouEntertainersSection = () => {
  const entertainers = [
    { name: "", description: "", image: "/placeholder.png" },
    { name: "", description: "", image: "/placeholder.png" },
    { name: "", description: "", image: "/placeholder.png" },
    { name: "", description: "", image: "/placeholder.png" },
    { name: "", description: "", image: "/placeholder.png" },
    // { name: "Sonu Nigam", description: "Indian singer at Big Bash 2024", image: "https://bigdaddy.in/wp-content/uploads/2024/09/282A7062.jpg" },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-1 lg:col-span-1">
            <h2 className="text-4xl gradient-text leading-normal font-extrabold mb-4 text-left">Thank You For Entertaining Us</h2>
            <p className="w-full max-w-5xl text-base text-white lg:text-xl mt-6 text-left"></p>
            {/* <a href="https://bigdaddy.in/contact-us/" className="bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
              Book Now
            </a> */}
          </div>
          {entertainers.map((entertainer, index) => (
            <div key={index} className="relative overflow-hidden group aspect-w-4 aspect-h-3">
              <img 
                src={entertainer.image} 
                alt={entertainer.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold">{entertainer.name}</h3>
                <p className="text-sm text-gray-300">{entertainer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThankYouEntertainersSection;