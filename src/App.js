import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Skeleton from "./components/Skeleton";
// import { slides } from "./data/data";
import img01 from "./img/01.jpg";
import img02 from "./img/02.jpg";
import img03 from "./img/03.jpg";
import img04 from "./img/04.jpg";
import img05 from "./img/05.jpg";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages([img01, img02, img03, img04, img05]);
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlid = currentIndex === 0;
    setCurrentIndex(isFirstSlid ? images.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };
  return (
    <div className="flex flex-col w-full h-screen m-auto justify-center items-center bg-gradient-to-t from-[#5ee7df] to-[#b490ca] p-4 pb-16">
      <div className="relative max-w-[1640px] w-full h-full shadow-xl ">
      
        {!images[currentIndex] ? (
          <Skeleton />
        ) : (
          <div
            className="bg-cover bg-center duration-500 w-full h-full rounded-xl "
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
            }}
          />
        )}

        {/* Left slider bytton */}
        <div
          onClick={prevSlide}
          className="text-white absolute top-[50%] left-4 -translate-x-0 translate-y-[-50%] cursor-pointer bg-black/50 p-2 rounded-full"
        >
          <BsChevronCompactLeft size={20} />
        </div>
        {/* Right slider bytton */}
        <div
          onClick={nextSlide}
          className="text-white absolute top-[50%] right-4 -translate-x-0 translate-y-[-50%] cursor-pointer bg-black/50 p-2 rounded-full"
        >
          <BsChevronCompactRight size={20} />
        </div>
      </div>
      <div className="w-full flex justify-center gap-2 mt-4">
        {images.map((slid, slideindex) => (
          <div
            className={`cursor-pointer text-gray-600/50  hover:scale-150 hover:text-gray-600/70 ${
              currentIndex === slideindex ? "scale-125 text-gray-700/70" : ""
            }`}
            onClick={() => setCurrentIndex(slideindex)}
            key={slideindex}
          >
            <RxDotFilled size={25} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
