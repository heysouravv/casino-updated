import React from "react";

const Calling = ({ phoneNumber, title }) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      className="text-lg font-normal text-white transition-all duration-300 group hover:scale-105 font-sans "
    >
      {title}
      <span className="block max-w-0 group-hover:max-w-full h-1 rounded-lg bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] transition-all duration-500"></span>
    </button>
  );
};

export default Calling;
