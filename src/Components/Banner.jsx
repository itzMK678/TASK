import React from "react";
import banner1 from "../assets/banner1.jpg";

const Banner = () => {
  return (
    <div className="w-full mt-60 overflow-hidden rounded-2xl shadow-lg">
      <img
        src={banner1}
        alt="Banner"
        className="w-full h-auto block"
      />
    </div>
  );
};

export default Banner;