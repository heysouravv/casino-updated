import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/pheonixCasinoGoaVertical.svg";
import Calling from "./Calling";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const links = [
    { href: "/", title: "Home" },
    { href: "/casino", title: "Casino" },
    { href: "/entertainment", title: "Entertainment" },
    { href: "/packages", title: "Packages" },
    { href: "/contact", title: "Contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth <= 640;
      const threshold = isMobile ? 50 : 100;
      setScrolled(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookNow = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`py-[5px] fixed top-0 right-0 w-full items-center z-[100] flex justify-center transition-all duration-75 ease-in-out ${
        scrolled ? "bg-bg-primary shadow-xl drop-shadow-2xl" : "bg-transparent"
      }`}
    >
      <nav className="z-[100] flex flex-col items-center justify-between w-full max-w-screen-xl px-4 mx-auto md:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link to="/" aria-label="Home" className="flex items-center justify-center">
            <img src={Logo} alt="logo" className="w-28 h-28 sm:w-auto" />
          </Link>
          <div className="flex items-center justify-center gap-2 lg:hidden">
            <button 
              onClick={handleBookNow}
              className="flex capitalize items-center justify-center px-4 py-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.40)] text-sm font-bold text-bg-primary bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] rounded"
            >
              Book Now
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none focus:bg-transparent relative z-[1002]"
            >
              {!isMenuOpen ? (
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 transition-transform duration-300 transform rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 6l12 12M18 6l-12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex transition duration-500 ease-in-out md:h-max h-screen ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "opacity-0 lg:opacity-100 translate-x-full lg:translate-x-0 lg:px-0 px-5"
          } lg:static absolute right-0 top-0 z-20 lg:gap-y-0 gap-y-3 flex-col lg:bg-transparent bg-black w-full lg:auto max-w-md px-6 py-4 rounded-lg lg:rounded-none lg:flex-grow justify-center lg:flex-row items-start lg:items-center gap-x-5 md:gap-x-8 lg:max-w-4xl`}
        >
          {links.map((link, id) => (
            <Link
              to={link.href}
              key={id}
              className={`relative text-md font-normal transition-all duration-300 text-white group uppercase`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
              <span
                className={`absolute left-0 bottom-0 block h-1 rounded-lg bg-yellow-500 transition-all duration-300 ${
                  currentPath === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
          <Calling phoneNumber="+919960006806" title="+919960006806" className="hidden lg:flex" />
          <button 
            onClick={handleBookNow}
            className="hidden lg:flex capitalize items-center w-40 justify-center px-7 py-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.40)] text-base font-bold text-bg-primary bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)]"
          >
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
}