import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionContainer from "../Container/SectionContainer";
import premium from "../../assets/premium.svg";
import regular from "../../assets/regular.svg";
import vip from "../../assets/vip.svg";


const PackageFeature = ({ Icon, text }) => (
  <li className="flex items-center gap-3 text-sm text-white sm:text-base">
    <img src={`/${Icon}.svg`} className="w-4 h-4 lg:w-6 lg:h-6" alt="" />
    <span>{text}</span>
  </li>
);

const PackageCard = ({ pkg, hoveredPackage, setHoveredPackage }) => {
  const navigate = useNavigate();
  const getPackageImage = (type) => {
    switch (type) {
      case "day":
      case "regular":
        return regular;
      case "premium":
        return premium;
      case "elite":
      case "phoenixVIP":
        return vip;
      default:
        return regular;
    }
  };

  const getBackgroundImage = (type) => {
    switch (type) {
      case "day":
      case "regular":
        return "/Cube.webp";
      case "premium":
        return "/Coin.webp";
      case "elite":
      case "phoenixVIP":
        return "/Diamond.webp";
      default:
        return "/Cube.webp";
    }
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log("Button clicked for package:", pkg.title);
    navigate('/contact');
  };

  const isHovered = hoveredPackage === pkg.type;

  return (
    <div className="w-full p-2 mb-6 sm:mb-0">
      <div
        className={`highlight-box relative flex flex-col h-full p-4 sm:p-6 rounded-lg cursor-pointer backdrop-blur-md border border-[#E7C980] overflow-hidden transition-all duration-300 ease-in-out`}
        onMouseEnter={() => setHoveredPackage(pkg.type)}
        onMouseLeave={() => setHoveredPackage(null)}
      >
        <div className="mb-4">
          <img src={getPackageImage(pkg.type)} alt={`${pkg.title} Package`} className="w-full h-auto" />
        </div>

        <ul className="flex-grow mb-4 flex flex-col items-start gap-2 z-10">
          {pkg.features.map((feature, index) => (
            <PackageFeature key={index} Icon={feature.icon} text={feature.text} />
          ))}
        </ul>
        <div className="mt-auto z-20">
          <div className="text-lg font-extrabold leading-normal uppercase lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#F2C75E] to-[#CE9639] mb-2">
            <p>{pkg.title}</p>
          </div>
          {pkg.price ? (
            <div className="text-xl text-white mb-2">
              <p>₹{pkg.price}</p>
            </div>
          ) : (
            <div className="text-white mb-2">
              <p>Stag: ₹{pkg.stagEntry}</p>
              <p>Couple: ₹{pkg.coupleEntry}</p>
            </div>
          )}
          <div className="text-sm text-white mb-1">
            {pkg.otpc ? `OTPC: ₹${pkg.otpc}` : `OTPC: Stag ₹${pkg.stagOTPC}, Couple ₹${pkg.coupleOTPC}`}
          </div>
          <div className="text-sm text-white mb-3">Band Color: {pkg.bandColor}</div>
          <button className="w-full py-2 rounded shadow-lg text-base font-bold text-bg-primary bg-gradient-to-r from-[#F2C75E] to-[#CE9639] z-30 relative"
            onClick={handleButtonClick}>
            Book Now
          </button>
        </div>
        <img
          src={getBackgroundImage(pkg.type)}
          loading="lazy"
          alt=""
          className="absolute right-0 w-1/3 bottom-0 z-0 opacity-30"
        />
      </div>
    </div>
  );
};

const Packages = () => {
  const [hoveredPackage, setHoveredPackage] = useState(null);
  const [visiblePackages, setVisiblePackages] = useState(3);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);

  const packageData = [
    {
      type: "regular",
      title: "Regular Package",
      stagEntry: "2000",
      coupleEntry: "3000",
      stagOTPC: "1000",
      coupleOTPC: "2000",
      bandColor: "Blue",
      features: [
        { icon: "Drink", text: "Unlimited Basic Alcohol" },
        { icon: "Chef", text: "Unlimited Buffet" },
        { icon: "Mic", text: "Live Entertainment" },
      ],
    },
    {
      type: "premium",
      title: "Premium Package",
      stagEntry: "3000",
      coupleEntry: "5000",
      stagOTPC: "3000",
      coupleOTPC: "5000",
      bandColor: "Green / COD RED / Orange",
      features: [
        { icon: "Drink", text: "Unlimited Premium Alcohol" },
        { icon: "Chef", text: "Unlimited Buffet" },
        { icon: "Mic", text: "Live Entertainment" },
      ],
    },
    {
      type: "elite",
      title: "Elite Package",
      stagEntry: "7000",
      coupleEntry: "10,000",
      stagOTPC: "10,000",
      coupleOTPC: "12,000",
      bandColor: "Silver / COD Gold",
      features: [
        { icon: "Drink", text: "Unlimited Top Quality Alcohol" },
        { icon: "Chef", text: "Unlimited Buffet" },
        { icon: "Mic", text: "Live Entertainment" },
      ],
    },
    {
      type: "phoenixVIP",
      title: "Phoenix VIP Package",
      price: "10,000",
      otpc: "15,000",
      bandColor: "Purple / COD Black",
      features: [
        { icon: "Drink", text: "Unlimited Expensive Alcohol" },
        { icon: "Chef", text: "Unlimited Buffet" },
        { icon: "Mic", text: "Live Entertainment" },
      ],
    },
    {
      type: "day",
      title: "Day Package",
      price: "1,500",
      otpc: "1000",
      bandColor: "Yellow",
      features: [
        { icon: "Drink", text: "Unlimited Basic Alcohol" },
        { icon: "Chef", text: "Unlimited Buffet" },
        { icon: "Mic", text: "Live Entertainment" },
      ],
    },
  ];

  const loadMorePackages = useCallback(() => {
    setVisiblePackages(prev => Math.min(prev + (isDesktop ? 3 : 1), packageData.length));
  }, [isDesktop, packageData.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    const handleScroll = () => {
      if (!isDesktop) {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (windowHeight + scrollTop >= documentHeight - 100) {
          loadMorePackages();
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop, loadMorePackages]);

  return (
    <div className="w-full bg-black">
      <SectionContainer heading={"OUR PACKAGES"} desc={""}>
        <section id="package-section" className="relative min-h-[800px]">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {packageData.slice(0, visiblePackages).map((pkg, index) => (
                <div key={pkg.type} className="transform transition-all duration-500">
                  <PackageCard
                    pkg={pkg}
                    hoveredPackage={hoveredPackage}
                    setHoveredPackage={setHoveredPackage}
                  />
                </div>
              ))}
            </div>
            {visiblePackages < packageData.length && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMorePackages}
                  className="px-6 py-2 bg-gradient-to-r from-[#F2C75E] to-[#CE9639] text-black font-bold rounded-full hover:opacity-90 transition-opacity"
                >
                  Load More Packages
                </button>
              </div>
            )}
          </div>
        </section>
      </SectionContainer>
    </div>
  );
};

export default Packages;