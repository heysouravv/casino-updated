import React, { useState } from "react";
import SectionContainer from "../Container/SectionContainer";
import premium from "../../assets/premium.svg";
import regular from "../../assets/regular.svg";
import vip from "../../assets/vip.svg";

const Packages = () => {
  const [hoveredPackage, setHoveredPackage] = useState(null);

  const getContainerStyle = (packageType) => ({
    height: "100%",
    backdropFilter: "blur(10px)",
    border: "1px solid #E7C980",
    padding: "2rem",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "background 0.5s ease",
  });

  return (
    <div className="w-full">
      <SectionContainer heading={"OUR PACKAGES"} desc={""}>
        <section className="relative">
          <div className="container pb-4 mx-auto">
            <div className="flex flex-wrap h-full lg:h-[700px] items-end w-full justify-center">
              {/* Regular Package */}
              <div className="p-2 lg:p-4 lg:w-1/3 w-full sm:w-3/4 h-[580px] md:h-[720px]">
                <div
                  className="highlight-box relative"
                  style={getContainerStyle("regular")}
                  onMouseEnter={() => setHoveredPackage("regular")}
                  onMouseLeave={() => setHoveredPackage(null)}
                >
                  <div className="high-img">
                    <img src={regular} alt="Regular Package" />
                  </div>

                  <ul className="leading-relaxed mb-3 flex justify-center flex-col items-start gap-[14px] z-10">
                    <li className="flex items-start justify-center gap-5 text-sm text-white whitespace-nowrap sm:text-lg">
                      <img
                        src="/Drink.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Unlimited House Brand Drinks
                    </li>
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Chef.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Unlimited Buffet Dinner
                    </li>
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Mic.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Live Entertainment
                    </li>
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Card.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Promotional Voucher ₹1000
                    </li>
                  </ul>
                  <div className="absolute bottom-0 left-0 flex flex-col justify-start w-full gap-3 px-10 pb-8 leading-none text-left z-20">
                    <div className="text-lg font-extrabold leading-normal uppercase lg:text-2xl gradient-text">
                      <p className="">Regular Package</p>
                    </div>
                    <div className="lg:text-[20px] uppercase text-3xl gradient-text leading-normal font-extrabold">
                      <p className=" text-white">₹3500</p>
                    </div>
                    <div className="mt-2">
                      <button className="flex capitalize items-center justify-center px-7 py-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.40)] text-base font-bold text-bg-primary bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] z-30 relative">
                        Book Now
                      </button>
                    </div>
                  </div>
                  <img
                    src="/Cube.webp"
                    loading="lazy"
                    alt=""
                    className="absolute right-0 w-2/5 -bottom-0 z-0"
                  />
                </div>
              </div>

              {/* Premium Package */}
              <div className="p-2 lg:p-4 lg:w-1/3 w-full sm:w-3/4 h-[600px] md:h-[720px]">
                <div
                  className="highlight-box relative"
                  style={getContainerStyle("premium")}
                  onMouseEnter={() => setHoveredPackage("premium")}
                  onMouseLeave={() => setHoveredPackage(null)}
                >
                  <div className="high-img">
                    <img src={premium} alt="Premium Package" />
                  </div>

                  <ul className="flex flex-col items-start justify-center gap-4 mb-3 leading-relaxed z-10">
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Drink.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Unlimited House Brand Drinks
                    </li>
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Chef.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Unlimited Buffet Dinner
                    </li>
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Mic.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Live Entertainment
                    </li>
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Card.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Promotional Voucher ₹1000
                    </li>
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Mocktail.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Exclusive 'High Tide' access
                    </li>
                  </ul>
                  <div className="absolute bottom-0 left-0 flex flex-col justify-start w-full gap-3 px-10 pb-8 leading-none text-left z-20">
                    <div className="font-extrabold leading-normal uppercase lg:text-xl gradient-text">
                      <p className="">PREMIUM PACKAGE</p>
                    </div>
                    <div className="text-xl text-white">
                      <p className="">₹3500</p>
                    </div>
                    <div className="mt-2">
                      <button className="flex capitalize items-center justify-center px-7 py-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.40)] text-base font-bold text-bg-primary bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] z-30 relative">
                        Book Now
                      </button>
                    </div>
                  </div>
                  <img
                    src="/Coin.webp"
                    loading="lazy"
                    alt=""
                    className="absolute bottom-0 right-0 w-2/5 z-0"
                  />
                </div>
              </div>

              {/* VIP Package */}
              <div className="p-2 lg:p-4 lg:w-1/3 w-full sm:w-3/4 h-[600px] md:h-[720px]">
                <div
                  className="highlight-box relative"
                  style={getContainerStyle("vip")}
                  onMouseEnter={() => setHoveredPackage("vip")}
                  onMouseLeave={() => setHoveredPackage(null)}
                >
                  <div className="high-img">
                    <img src={vip} alt="VIP Package" />
                  </div>

                  <ul className="leading-relaxed mb-3 flex justify-center items-start flex-col gap-[14px] z-10">
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Drink.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Unlimited House Brand Drinks
                    </li>
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Chef.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Unlimited Buffet Dinner
                    </li>
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Mic.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Live Entertainment
                    </li>
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Card.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Promotional Voucher ₹2000
                    </li>
                    <li className="flex items-start justify-center gap-5 text-sm text-white sm:text-lg">
                      <img
                        src="/Mocktail.svg"
                        className="w-4 h-4 lg:w-8 lg:h-8"
                        alt=""
                      />
                      Exclusive 'VIP Lounge' access
                    </li>
                  </ul>
                  <div className="absolute bottom-0 left-0 flex flex-col justify-start w-full gap-3 px-10 pb-8 leading-none text-left z-20">
                    <div className="text-lg font-extrabold leading-normal uppercase lg:text-2xl gradient-text">
                      <p className="">VIP PACKAGE</p>
                    </div>
                    <div className="text-xl text-white">
                      <p className="">₹5000</p>
                    </div>
                    <div className="mt-2">
                      <button className="flex capitalize items-center justify-center px-7 py-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.40)] text-base font-bold text-bg-primary bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] z-30 relative">
                        Book Now
                      </button>
                    </div>
                  </div>
                  <img
                    src="/Diamond.webp"
                    loading="lazy"
                    alt=""
                    className="absolute bottom-0 right-0 w-2/5 z-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionContainer>
    </div>
  );
};

export default Packages;
