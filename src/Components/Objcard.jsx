import React from "react";
import { ShoppingBasket } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { useTranslation } from "react-i18next";
 
const Objcard = ({ obj }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className="w-[250px] bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="absolute m-2 px-3 py-1 bg-[#f3e6e2] text-gray-800 text-xs font-bold rounded-full">
        SALE {obj.discountPercent}%
      </div>
      <div className="relative w-full h-53 overflow-hidden">
        <img
          src={obj.image}
          alt={obj.name}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-[12px]">{t("city")}: {obj.city}</p>
        <h2 className="text-gray-900 font-semibold text-[18px]">{obj.name}</h2>
        <p className="text-gray-600 text-sm"> {t("weight")}: {obj.Weight}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-md font-semibold text-gray-900">
            AED{obj.realPrice}
          </span>
          <span className="text-sm line-through text-gray-400">
            AED{obj.cutPrice}
          </span>
        </div>
        <button
          onClick={() => dispatch(addToCart(obj))}
          className="mt-4 gap-1 w-full flex justify-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
         {t("add_to_cart")} <ShoppingBasket size={16} className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default Objcard;
