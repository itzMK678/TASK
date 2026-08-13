import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

const Banner = () => {
  const images = [banner1, banner2]; // use imports
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
