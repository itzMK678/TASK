import React from "react";
import { ShoppingBasket } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { useTranslation } from "react-i18next";

const Objcard = ({ obj, onClick }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div
      onClick={onClick}
      className="
        relative
        w-full
        max-w-[280px]
        mx-auto
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Sale Badge */}
      <div className="absolute left-3 top-3 z-10 rounded-full bg-[#f3e6e2] px-3 py-1 text-xs font-bold text-gray-800">
        SALE {obj.discountPercent}%
      </div>

      {/* Product Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={obj.image}
          alt={obj.name}
          className="
            h-full
            w-full
            object-contain
            p-3
            transition-transform
            duration-300
            hover:scale-110
          "
        />
      </div>

      {/* Product Information */}
      <div className="p-4">
        <p className="text-[12px] text-gray-500">
          {t("city")}: {obj.city}
        </p>

        <h2 className="mt-1 text-[18px] font-semibold text-gray-900">
          {obj.name}
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          {t("weight")}: {obj.Weight}
        </p>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-md font-semibold text-gray-900">
            Rs {obj.realPrice}
          </span>

          <span className="text-sm text-gray-400 line-through">
            Pkr {obj.cutPrice}
          </span>
        </div>

        {/* Add To Cart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(obj));
          }}
          className="
            mt-4
            flex
            w-full
            items-center
            justify-center
            gap-1
            rounded-md
            bg-black
            py-2
            text-white
            transition
            hover:bg-gray-800
          "
        >
          {t("add_to_cart")}
          <ShoppingBasket size={16} />
        </button>
      </div>
    </div>
  );
};

export default Objcard;