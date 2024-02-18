import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { slides } from "./data/data";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlid = currentIndex === 0;
    setCurrentIndex(isFirstSlid ? slides.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };
  return (
    <div className="flex flex-col w-full h-screen m-auto justify-center bg-gradient-to-t from-[#5ee7df] to-[#b490ca] p-4 pb-16">
      <div className="relative max-w-[1640px] w-full h-full shadow-xl">
        <div
          className="bg-cover bg-center duration-500 z-50 w-full h-full rounded-xl "
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
          }}
        />
        {/* Left slider bytton */}
        <div
          onClick={prevSlide}
          className="text-white absolute top-[50%] left-4 -translate-x-0 translate-y-[-50%] cursor-pointer bg-black/50 p-2 rounded-full text-2xl"
        >
          <BsChevronCompactLeft size={20} className="" />
        </div>
        {/* Right slider bytton */}
        <div
          onClick={nextSlide}
          className="text-white absolute top-[50%] right-4 -translate-x-0 translate-y-[-50%] cursor-pointer bg-black/50 p-2 rounded-full text-2xl"
        >
          <BsChevronCompactRight size={20} className="" />
        </div>
      </div>
      <div className="w-full flex justify-center gap-2 mt-4">
        {slides.map((slid, slideindex) => (
          <div
            className={`cursor-pointer text-gray-600/50  hover:scale-150 hover:text-gray-600/70 ${
              currentIndex === slideindex ? "scale-125 text-gray-700/70" : ""
            }`}
            onClick={() => setCurrentIndex(slideindex)}
            key={slideindex}
          >
            <RxDotFilled size={25} />
          </div>
          // cursor-pointer text-gray-600/50 active:text-gray-800 hover:scale-150 hover:text-gray-600/70
        ))}
      </div>
    </div>
  );
}

export default App;
