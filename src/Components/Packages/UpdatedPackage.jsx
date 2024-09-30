import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionContainer from "../Container/SectionContainer";
import premium from "../../assets/premium.svg";
import regular from "../../assets/regular.svg";
import vip from "../../assets/vip.svg";

const FullPageModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-md"></div>
      <div className="bg-[#1c1c1c] rounded-lg max-w-2xl w-full mx-4 z-10 border border-[#E7C980]">
        <div className="flex justify-between items-center border-b border-[#E7C980] p-4">
          <h3 className="text-2xl font-bold text-[#E7C980]">{title}</h3>
          <button onClick={onClose} className="text-[#E7C980] hover:text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 text-white max-h-[80vh] overflow-y-auto">
          {content}
        </div>
      </div>
    </div>
  );
};

const PackageFeature = ({ Icon, text, alcoholBrands, onShowBrands }) => {
  const isAlcoholFeature = alcoholBrands !== undefined && alcoholBrands !== null;

  return (
    <li className="flex items-center gap-3 text-sm text-white sm:text-base">
      <img src={`/${Icon}.svg`} className="w-4 h-4 lg:w-6 lg:h-6" alt="" />
      {isAlcoholFeature ? (
        <button 
          className="text-[#E7C980] underline"
          onClick={() => onShowBrands(alcoholBrands)}
        >
          {text}
        </button>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
};

const PackageCard = ({ pkg, hoveredPackage, setHoveredPackage, onShowBrands }) => {
  const navigate = useNavigate();

  const getPackageImage = (type) => {
    switch (type) {
      case "premium":
        return premium;
      case "elite":
        return vip;
      default:
        return regular;
    }
  };

  const getBackgroundImage = (type) => {
    switch (type) {
      case "regular":
        return "/Cube.webp";
      case "premium":
        return "/Coin.webp";
      case "elite":
        return "/Diamond.webp";
      default:
        return "/Cube.webp";
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

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

        <div className="z-20 mb-4">
          <div className="text-lg font-extrabold leading-normal uppercase lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#F2C75E] to-[#CE9639] mb-2">
            <p>{pkg.title}</p>
          </div>
          <div className="text-white mb-2">
            <p>Stag: ₹{pkg.stagEntry} (With ₹{pkg.stagOTPC} OTPC)</p>
            <p>Couple: ₹{pkg.coupleEntry} (With ₹{pkg.coupleOTPC} OTPC)</p>
          </div>
        </div>

        <ul className="flex-grow mb-4 flex flex-col items-start gap-2 z-10">
          {pkg.features.map((feature, index) => (
            <PackageFeature 
              key={index} 
              Icon={feature.icon} 
              text={feature.text} 
              alcoholBrands={feature.alcoholBrands}
              onShowBrands={onShowBrands}
            />
          ))}
        </ul>
        <div className="mt-auto z-20">
          <button className="w-full py-2 rounded shadow-lg text-base font-bold text-bg-primary bg-gradient-to-r from-[#F2C75E] to-[#CE9639] z-30 relative"
            onClick={handleButtonClick}>
            Book Now
          </button>
        </div>
        <img
          src={getBackgroundImage(pkg.type)}
          loading="lazy"
          alt=""
          className="absolute right-0 w-1/3 bottom-0 z-0 opacity-30 pointer-events-none"
        />
      </div>
    </div>
  );
};

const Packages = () => {
  const [hoveredPackage, setHoveredPackage] = useState(null);
  const [visiblePackages, setVisiblePackages] = useState(3);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packageData = [
    {
      type: "regular",
      title: "Regular Package",
      stagEntry: "2,000",
      coupleEntry: "3,000",
      stagOTPC: "1,000",
      coupleOTPC: "2,000",
      features: [
        { icon: "Chef", text: "Unlimited Buffet" },
        { icon: "Drink", text: "Unlimited Alcohol", alcoholBrands: {
          "Whiskey": "Blenders, Signature, Rockford",
          "Vodka": "Romanov",
          "Rum": "Old Monk, Bacardi white/Black, Cabo",
          "Gin": "Blue Riband",
          "Brandy": "Honey Bee, Mansion House",
          "Beer": "Kingfisher, Tuborg",
          "Feni": "Big Boss Coconut/Cashew"
        }},
        { icon: "Mic", text: "Live Entertainment" },
      ],
    },
    {
      type: "premium",
      title: "Premium Package",
      stagEntry: "3,000",
      coupleEntry: "5,000",
      stagOTPC: "3,000",
      coupleOTPC: "5,000",
      features: [
        { icon: "Chef", text: "Unlimited Buffet" },
        { icon: "Drink", text: "Unlimited Alcohol", alcoholBrands: {
          "Whiskey": "Vat 69, Black Dog, Oak Smith Gold, 100 Pipers, Black & White, Red Label & Ballantines",
          "Vodka": "Smirnoff Regular",
          "Rum": "Old Monk, Bacardi white/Black, Cabo",
          "Gin": "Blue Riband, Greater than",
          "Brandy": "Honey Bee, Mansion House, Morpheus xo",
          "Beer": "Kingfisher, Tuborg, Kingfisher ultra, Budweiser",
          "Feni": "Big Boss Coconut/Cashew",
          "Breezer": "",
          "Wine": "Amora White/Amora Red/Langoor Red & White wine, Rose wine & Port wine",
          "Vermouth": "Martini, Campari",
          "Energy Drink": "As per stock available",
          "Liqueur": "Kahlua, Triple sec"
        }},
        { icon: "Mic", text: "Live Entertainment" },
      ],
    },
    {
      type: "elite",
      title: "Elite Package",
      stagEntry: "7,000",
      coupleEntry: "10,000",
      stagOTPC: "7,000",
      coupleOTPC: "12,000",
      features: [
        { icon: "Chef", text: "Unlimited Buffet" },
        { icon: "Drink", text: "Unlimited Alcohol", alcoholBrands: {
          "Whiskey": "Black Label, Chivas Regal 12 yrs, Singleton 12 yrs, Glenfiddich 12 yrs",
          "Vodka": "Absolut, Ciroc & Ketel One",
          "Rum": "Old Monk, Bacardi white/Black, Cabo, Coconut Rum",
          "Gin": "Blue Riband, Gordons & Bombay Sapphire",
          "Brandy": "Honey Bee, Mansion House, Morpheus xo",
          "Beer": "House Brands + Premium & Heineken",
          "Feni": "Big Boss Coconut/Cashew",
          "Breezer": "",
          "Cognac": "St Remy Authentic, St. Remy VSOP",
          "Wine": "Yellow tail and Jacob Greek",
          "Vermouth": "Martini, Campari",
          "Energy Drink": "Red Bull",
          "Liqueur": "Kahlua, Triple sec & Baileys",
          "Sparkling Wine": "Frizzano/Zampa Brut"
        }},
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

  const handleShowBrands = (brands) => {
    setModalContent(
      <div className="space-y-4">
        {Object.entries(brands).map(([category, brandList]) => (
          <div key={category}>
            <h4 className="text-[#E7C980] font-bold text-lg">{category}</h4>
            <p className="text-white">{brandList}</p>
          </div>
        ))}
      </div>
    );
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-black">
      <SectionContainer heading={"OUR PACKAGES"} desc={""}>
        <section id="package-section" className="relative">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {packageData.slice(0, visiblePackages).map((pkg, index) => (
                <div key={pkg.type} className="transform transition-all duration-500">
                  <PackageCard
                    pkg={pkg}
                    hoveredPackage={hoveredPackage}
                    setHoveredPackage={setHoveredPackage}
                    onShowBrands={handleShowBrands}
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
      <FullPageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Available Alcohol Brands"
        content={modalContent}
      />
    </div>
  );
};

export default Packages;