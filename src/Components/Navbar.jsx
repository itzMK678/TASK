import React from "react";
import { Search, MapPin, Truck, UserRound, ShoppingBasket } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/Logo.jpeg";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Toggle between English and Arabic
  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLang);
    document.body.dir = nextLang === "ar" ? "rtl" : "ltr";
  };

  return (
    
    <div className="bg-[#F7F7FA] border border-b-gray-300">
    <div className="bg-black w-full text-white text-center py-2">
  Best offers on best quality
</div>

      <div className="flex items-center justify-between p-4"> 
        <div className="logo bg-[#F7F7FA]">
          <img src={logo} alt="Frugo Logo" className="h-16 bg-[#F7F7FA]" />
        </div>

        <div className="search relative w-3/4 bg-white text-gray-400">
          <input
            type="text"
            placeholder={t("search_placeholder")}
            className="w-full border border-gray-400 rounded-md py-2 pl-5 pr-4"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        <div className="flex gap-10 mx-3 items-center">
          {/* Language toggle button */}
          <div
            className="cursor-pointer px-3 py-1 border rounded hover:bg-gray-200"
            onClick={toggleLanguage}
          >
            {i18n.language === "en" ? "اردو" : "English"}
          </div>
      <div className="relative group cursor-pointer flex flex-col items-center justify-center hover:text-blue-500">
  <UserRound className="h-6 w-6" />

  <span className="mt-1 text-sm">
    Contact
  </span>

  <div className="absolute top-full mt-3 hidden group-hover:block z-50">
    <div className="relative rounded-lg bg-gray-900 px-4 py-2 text-sm text-white shadow-xl">
      03326325661

      {/* Arrow */}
      <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900"></div>
    </div>
  </div>
</div>
          <ShoppingBasket />
        </div>
      </div>

      <div className="pl-5 flex pb-3 gap-6 text-[15px] text-gray-400 font-medium border border-t-0 border-b-gray-300">
        <p className=" pr-6 border-r cursor-pointer hover:text-black">{t("Body Kits")}</p>
        <p className=" pr-6 border-r cursor-pointer hover:text-black">{t("Engine parts")}</p>
        <p className="pr-6 border-r cursor-pointer hover:text-black">{t("Tyres")}</p>
        <p className=" pr-6 border-r cursor-pointer hover:text-black">{t("Assesories")}</p>
      </div>

      <div className="flex mx-3 mt-3 justify-between">
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden ml-4 mb-2 w-fit">
          <div className="bg-gray-100 px-2 h-8 flex items-center justify-center">
            <MapPin size={18} className="h-full text-black" />
          </div>
          <select
            className="flex-1 h-8 px-2 text-gray-700 focus:outline-none cursor-pointer"
            defaultValue={t("abu_dhabi")}
          >
            <option value="Bahawalpur">{t("bahawalpur")}</option>
            <option value="Bahawalnagar">{t("bahawalnagar")}</option>
            <option value="Lahore">{t("lahore")}</option>
            <option value="Islamabad">{t("islamabad")}</option>
          </select>
        </div>

        <div className="flex">
          <div className="flex h-8 bg-[#db325e] p-1 rounded-md text-white">
            <Truck />
            <div className="ml-1  mt-1 text-[12px] font-semibold">
              {t("delivery_date")}
            </div>
          </div>
          <div className="mx-2   text-[#db325e] text-[12px] font-bold mt-2">
            {t("delivery_time")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
