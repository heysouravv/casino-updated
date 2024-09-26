import React from 'react';

const YouCantMissSection = () => {
  const cards = [
    {
      image: "https://bigdaddy.in/wp-content/uploads/2024/09/282A0744.jpg",
      title: "Breathtaking Acrobatics"
    },
    {
      image: "https://bigdaddy.in/wp-content/uploads/2024/09/282A7669.jpg",
      title: "Stunning International Artists Every Weekend"
    },
    {
      image: "https://bigdaddy.in/wp-content/uploads/2024/09/282A4043.jpg",
      title: "Bubble Show"
    }
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="comm-heading lg:text-[42px] uppercase text-3xl gradient-text leading-normal font-extrabold text-center">You Can't Miss</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="relative h-[400px] overflow-hidden group">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouCantMissSection;