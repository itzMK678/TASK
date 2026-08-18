import React, { useState } from "react";
import {
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

const contactItems = [
  {
    id: 1,
    name: "Location",
    icon: MapPin,
    title: "Visit Our Store",
    text: "Lahore, Pakistan",
    link: "https://maps.google.com/?q=Lahore,Pakistan",
  },
  {
    id: 2,
    name: "WhatsApp",
    icon: MessageCircle,
    title: "Chat With Us",
    text: "03326325661",
    link: "https://wa.me/923326325661",
  },
  {
    id: 3,
    name: "Facebook",
    icon: Facebook,
    title: "Follow Us",
    text: "Auto Parts Pakistan",
    link: "https://facebook.com/",
  },
  {
    id: 4,
    name: "Instagram",
    icon: Instagram,
    title: "Follow Our Instagram",
    text: "@autopartspakistan",
    link: "https://instagram.com/",
  },
];

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === contactItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? contactItems.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="
        box-border
        w-full
        max-w-full
        min-w-0
        overflow-hidden
        rounded-xl
        border
        border-gray-300
        bg-gray-200
        p-2

        min-[375px]:p-3

        sm:rounded-2xl
        sm:p-4
      "
    >

      {/* =====================================================
          HEADING
      ====================================================== */}
      <div
        className="
          flex
          w-full
          flex-col
          items-center
          justify-center
          px-1
          py-4
          text-center

          min-[375px]:py-5

          sm:py-6
        "
      >
        <h1
          className="
            text-base
            font-bold
            text-gray-900

            min-[375px]:text-lg

            sm:text-2xl
          "
        >
          Contact Us
        </h1>

        <p
          className="
            mt-1
            w-full
            max-w-[260px]
            text-[10px]
            leading-4
            text-gray-600

            min-[375px]:max-w-[300px]
            min-[375px]:text-xs

            sm:max-w-md
            sm:text-sm
          "
        >
          Get in touch with us through any of the options below.
        </p>
      </div>

      {/* =====================================================
          ICONS
      ====================================================== */}
      <div
        className="
          grid
          w-full
          grid-cols-2
          place-items-center
          gap-3
          px-1
          py-3

          min-[375px]:gap-4
          min-[375px]:py-4

          sm:flex
          sm:flex-wrap
          sm:justify-evenly
          sm:gap-5
        "
      >
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={item.name}
              className={`
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300

                min-[375px]:h-12
                min-[375px]:w-12

                sm:h-14
                sm:w-14

                ${
                  activeIndex === index
                    ? "scale-110 bg-black text-white shadow-lg"
                    : "bg-white text-gray-600 shadow hover:scale-105 hover:text-black"
                }
              `}
            >
              <Icon
                className="
                  h-5
                  w-5

                  min-[375px]:h-6
                  min-[375px]:w-6

                  sm:h-7
                  sm:w-7
                "
              />
            </button>
          );
        })}
      </div>

      {/* =====================================================
          SLIDER
      ====================================================== */}
      <div className="w-full min-w-0 overflow-hidden rounded-lg bg-white shadow">

        <div
          className="
            flex
            w-full
            min-w-0
            transition-transform
            duration-500
            ease-in-out
          "
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  box-border
                  min-w-full
                  max-w-full
                  shrink-0
                  px-3
                  py-5
                  text-center

                  min-[375px]:px-4
                  min-[375px]:py-6

                  sm:px-6
                  sm:py-8
                "
              >

                {/* MAIN ICON */}
                <div
                  className="
                    mx-auto
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100

                    min-[375px]:h-14
                    min-[375px]:w-14

                    sm:h-16
                    sm:w-16
                  "
                >
                  <Icon
                    className="
                      h-5
                      w-5

                      min-[375px]:h-6
                      min-[375px]:w-6

                      sm:h-8
                      sm:w-8
                    "
                  />
                </div>

                {/* TITLE */}
                <h2
                  className="
                    mt-2
                    text-sm
                    font-bold
                    leading-tight
                    text-gray-900

                    min-[375px]:text-base

                    sm:mt-3
                    sm:text-xl
                  "
                >
                  {item.title}
                </h2>

                {/* LINK */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mx-auto
                    mt-1
                    block
                    max-w-[180px]
                    break-words
                    px-1
                    text-[10px]
                    font-semibold
                    leading-4
                    text-blue-600
                    underline
                    hover:text-blue-800

                    min-[375px]:max-w-[220px]
                    min-[375px]:text-xs

                    sm:max-w-none
                    sm:text-sm
                  "
                >
                  {item.text}
                </a>

                {/* DESCRIPTION */}
                <p
                  className="
                    mx-auto
                    mt-1
                    max-w-[180px]
                    text-[9px]
                    leading-3
                    text-gray-500

                    min-[375px]:max-w-[220px]
                    min-[375px]:text-[10px]

                    sm:mt-3
                    sm:max-w-none
                    sm:text-sm
                  "
                >
                  Click the link above to continue
                </p>

              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}
      <div
        className="
          mt-3
          flex
          items-center
          justify-center
          gap-3

          min-[375px]:mt-4

          sm:mt-6
          sm:gap-4
        "
      >
        {/* PREVIOUS */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous contact"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-white
            text-xs
            shadow
            transition
            hover:bg-gray-200

            min-[375px]:h-9
            min-[375px]:w-9

            sm:h-10
            sm:w-10
          "
        >
          ←
        </button>

        {/* NEXT */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next contact"
          className="
            flex
            items-center
            gap-1
            rounded-full
            bg-black
            px-3
            py-2
            text-[10px]
            font-semibold
            text-white
            transition
            hover:bg-gray-800

            min-[375px]:px-4
            min-[375px]:text-xs

            sm:px-5
            sm:py-2.5
            sm:text-sm
          "
        >
          Next

          <ArrowRight
            className="
              h-3
              w-3

              min-[375px]:h-4
              min-[375px]:w-4
            "
          />
        </button>
      </div>

      {/* =====================================================
          DOTS
      ====================================================== */}
      <div
        className="
          mt-3
          flex
          justify-center
          gap-1.5

          min-[375px]:mt-4
          min-[375px]:gap-2

          sm:mt-5
        "
      >
        {contactItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to ${item.name}`}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-300

              ${
                activeIndex === index
                  ? "w-5 bg-black sm:w-8"
                  : "w-1.5 bg-gray-400 sm:w-2"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
};

export default Contact;