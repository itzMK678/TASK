import React, { useState } from "react";
import {
  Search,
  MapPin,
  Truck,
  UserRound,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Contact from "./Contact";
import logo from "../assets/Logo.jpeg";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);

  // ================= LANGUAGE =================
  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(nextLang);

    document.body.dir = nextLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="relative w-full max-w-full overflow-x-clip bg-[#F7F7FA] border border-b-gray-300">

      {/* =====================================================
          TOP OFFER BAR
      ====================================================== */}
      <div className="w-full bg-black py-2 text-center text-xs text-white sm:text-sm">
        Best offers on best quality
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <div
        className="
          flex
          w-full
          max-w-full
          items-center
          gap-2
          p-2

          min-[375px]:gap-3
          min-[375px]:p-3

          sm:gap-5
          sm:p-4
        "
      >

        {/* ================= LOGO ================= */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="Frugo Logo"
            className="
              h-10
              w-auto
              object-contain

              min-[375px]:h-12

              sm:h-16
            "
          />
        </div>

        {/* ================= SEARCH ================= */}
        <div
          className="
            relative
            min-w-0
            flex-1
          "
        >
          <input
            type="text"
            placeholder={t("search_placeholder")}
            className="
              w-full
              min-w-0
              rounded-md
              border
              border-gray-400
              bg-white
              py-2
              pl-3
              pr-8
              text-xs
              outline-none

              min-[375px]:text-sm

              sm:py-2
              sm:pl-5
              sm:pr-10
              sm:text-base
            "
          />

          <Search
            className="
              absolute
              right-2
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-gray-400

              min-[375px]:right-3

              sm:h-5
              sm:w-5
            "
          />
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-2

            min-[375px]:gap-3

            sm:gap-6
            sm:mx-3
          "
        >

          {/* LANGUAGE */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="
              cursor-pointer
              rounded
              border
              px-2
              py-1
              text-[10px]
              hover:bg-gray-200

              min-[375px]:px-2
              min-[375px]:text-xs

              sm:px-3
              sm:text-sm
            "
          >
            {i18n.language === "en" ? "اردو" : "English"}
          </button>

          {/* CONTACT */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className={`
              flex
              shrink-0
              cursor-pointer
              flex-col
              items-center
              justify-center
              transition-colors

              ${
                open
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }
            `}
          >
            <UserRound
              className="
                h-5
                w-5

                min-[375px]:h-6
                min-[375px]:w-6
              "
            />

            <span
              className="
                mt-0.5
                text-[9px]

                min-[375px]:text-[10px]

                sm:mt-1
                sm:text-sm
              "
            >
              Contact
            </span>
          </button>
        </div>
      </div>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}
      <div
        className="
          flex
          w-full
          max-w-full
          flex-wrap
          gap-3
          overflow-hidden
          border
          border-t-0
          border-b-gray-300
          pb-3
          pl-3
          text-xs
          font-medium
          text-gray-400

          min-[375px]:gap-4
          min-[375px]:pl-4
          min-[375px]:text-sm

          sm:gap-6
          sm:pl-5
          sm:text-[15px]
        "
      >

        <p className="cursor-pointer border-r pr-3 hover:text-black min-[375px]:pr-4 sm:pr-6">
          {t("Body Kits")}
        </p>

        <p className="cursor-pointer border-r pr-3 hover:text-black min-[375px]:pr-4 sm:pr-6">
          {t("Engine parts")}
        </p>

        <p className="cursor-pointer border-r pr-3 hover:text-black min-[375px]:pr-4 sm:pr-6">
          {t("Tyres")}
        </p>

        <p className="cursor-pointer border-r pr-3 hover:text-black min-[375px]:pr-4 sm:pr-6">
          {t("Assesories")}
        </p>

      </div>

      {/* =====================================================
          LOCATION + DELIVERY
      ====================================================== */}
      <div
        className="
          flex
          w-full
          max-w-full
          items-start
          justify-between
          gap-2
          px-2
          pt-3

          min-[375px]:px-3

          sm:mx-3
          sm:items-center
          sm:px-0
        "
      >

        {/* LOCATION */}
        <div
          className="
            flex
            min-w-0
            max-w-[48%]
            items-center
            overflow-hidden
            rounded-md
            border
            border-gray-300
          "
        >

          <div className="flex h-8 shrink-0 items-center justify-center bg-gray-100 px-2">
            <MapPin
              size={18}
              className="text-black"
            />
          </div>

          <select
            className="
              h-8
              min-w-0
              max-w-full
              flex-1
              bg-white
              px-1
              text-[10px]
              text-gray-700
              outline-none

              min-[375px]:px-2
              min-[375px]:text-xs

              sm:text-sm
            "
            defaultValue="Bahawalpur"
          >
            <option value="Bahawalpur">
              {t("bahawalpur")}
            </option>

            <option value="Bahawalnagar">
              {t("bahawalnagar")}
            </option>

            <option value="Lahore">
              {t("lahore")}
            </option>

            <option value="Islamabad">
              {t("islamabad")}
            </option>
          </select>
        </div>

        {/* DELIVERY */}
        <div
          className="
            flex
            min-w-0
            max-w-[48%]
            flex-wrap
            items-center
            justify-end
            gap-1
          "
        >

          <div
            className="
              flex
              h-8
              shrink-0
              items-center
              rounded-md
              bg-[#db325e]
              p-1
              text-white
            "
          >
            <Truck className="h-5 w-5" />

            <div className="ml-1 text-[9px] font-semibold min-[375px]:text-[10px] sm:text-xs">
              {t("delivery_date")}
            </div>
          </div>

          <div
            className="
              text-right
              text-[9px]
              font-bold
              text-[#db325e]

              min-[375px]:text-[10px]

              sm:text-xs
            "
          >
            {t("delivery_time")}
          </div>

        </div>
      </div>

      {/* =====================================================
          CONTACT POPUP
      ====================================================== */}
      {open && (
        <div
          className="
            absolute
            left-1
            right-1
            top-full
            z-[100]
            w-auto
            max-w-none

            min-[375px]:left-2
            min-[375px]:right-2

            sm:left-auto
            sm:right-2
            sm:w-[400px]
          "
        >
          <Contact />
        </div>
      )}

    </div>
  );
};

export default Navbar;