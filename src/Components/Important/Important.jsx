import React from "react";

const Important = () => {
  return (
    <section className="bg-black py-12 px-12">
      <div className="container mx-auto px-4 w-full ">
        <h3 className=" text-2xl md:text-5xl font-bold mb-16 text-center gradient-text">
          Important
        </h3>

        {/* Food & Beverage */}
        <div className="flex flex-col md:flex-row mb-32 gap-12">
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <img
              src="https://bigdaddy.in/wp-content/uploads/2023/06/065A4304.jpg"
              alt="Food & Beverage"
              className=" h-auto rounded-lg shadow-lg hover:rotate-2 transition-all duration-300 md:block hidden"
              loading="lazy"
            />
          </div>
          <div className="flex-1 text-white space-y-10">
            <h4 className=" text-2xl md:text-5xl font-semibold mb-10">
              Food &amp; Beverage
            </h4>
            <p className="md:w-80 mx-auto text-left text-gray-600">
              Discover perfection through our packages, offering endless snacks,
              live chaat counter, a varied multi-cuisine buffet dinner, and a
              choice of alcoholic and non-alcoholic beverages as per the entry
              package. Embark on a remarkable culinary journey with us.
            </p>
          </div>
        </div>

        {/* Dress Code */}
        <div className="flex flex-col md:flex-row mb-32">
          <div className="flex-1 text-white">
            <h4 className=" text-2xl md:text-5xl font-semibold mb-10">
              Dress Code
            </h4>
            <p className="md:w-80 mx-auto text-left text-gray-600">
              At Big Daddy, gentlemen can opt for formal or smart casual attire
              such as jeans, collared shirts, and shoes (no shorts or
              flip-flops). Ladies, please avoid flip-flops; comfortable evening
              wear is perfect. Thank you for enhancing our venue's ambiance.
            </p>
          </div>
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <img
              src="https://bigdaddy.in/wp-content/uploads/2023/08/drees-code-bg1.jpg"
              alt="Dress Code"
              className="w-full h-auto rounded-lg shadow-lg hover:rotate-2 transition-all duration-300 md:block hidden"
              loading="lazy"
            />
          </div>
        </div>

        {/* Kids Room */}
        <div className="flex flex-col md:flex-row mb-8">
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <img
              src="https://bigdaddy.in/wp-content/uploads/2023/08/kids-room-bg.jpg"
              alt="Kids Room"
              className="w-full h-auto rounded-lg shadow-lg hover:rotate-2 transition-all duration-300 md:block hidden"
              loading="lazy"
            />
          </div>
          <div className="flex-1 text-white">
            <h4 className=" text-2xl md:text-5xl font-semibold mb-10">
              Kids Room
            </h4>
            <p className="md:w-80 mx-auto text-left text-gray-600">
              Kids Room exclusively for kids aged 14 and below, first-come
              basis. Kids can also enjoy at Level 4 Restaurant. Post-Restaurant
              hours, Kids Zone welcomes female children, ensuring well-rounded
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Important;
