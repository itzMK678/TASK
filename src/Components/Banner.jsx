import React from "react";
import banner1 from "../assets/banner1.jpg";

const Banner = () => {
  return (
    <div
      className="
        w-full
        max-w-full
        mt-10
        overflow-hidden
        rounded-xl
        shadow-lg
      "
    >
      <img
        src={banner1}
        alt="Banner"
        className="block w-full max-w-full h-auto"
      />
    </div>
  );
};

export default Banner;