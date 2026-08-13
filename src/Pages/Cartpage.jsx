import React from "react";
import Cart from "../Components/Cart";

const Cartpage = () => {
  return (
    <div className=" absolute w-full bg-red-400">
      <Cart className="relative top-1 z-3 " />
    </div>
  );
};

export default Cartpage;
