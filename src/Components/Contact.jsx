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
    setActiveIndex((prev) => (prev + 1) % contactItems.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + contactItems.length) % contactItems.length
    );
  };

  return (
    <section
      className="
        box-border w-full max-w-full overflow-hidden
        rounded-lg border bg-gray-100

        px-1 py-4
        min-[240px]:px-2 min-[240px]:py-5
        min-[320px]:px-3 min-[320px]:py-6
        min-[380px]:px-3 min-[380px]:py-7

        sm:rounded-2xl sm:px-5 sm:py-10
        md:px-8 md:py-12
        lg:px-10 lg:py-14
      "
    >
      {/* ================= HEADING ================= */}
      <div
        className="
          mx-auto mb-5 w-full max-w-2xl text-center

          min-[240px]:mb-6
          min-[320px]:mb-7

          sm:mb-10
          md:mb-12
        "
      >
        <h1
          className="
            text-lg font-bold leading-tight text-gray-900

            min-[240px]:text-xl
            min-[320px]:text-2xl
            min-[380px]:text-3xl

            sm:text-4xl
            lg:text-5xl
          "
        >
          Contact Us
        </h1>

        <p
          className="
            mx-auto mt-1
            max-w-[180px]
            text-[9px] leading-3 text-gray-500

            min-[240px]:mt-2
            min-[240px]:max-w-[210px]
            min-[240px]:text-[10px]

            min-[320px]:max-w-[260px]
            min-[320px]:text-xs

            min-[380px]:max-w-sm
            min-[380px]:text-sm

            sm:mt-3 sm:max-w-xl sm:text-base
            md:text-lg
          "
        >
          Get in touch with us through any of the options below.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto w-full max-w-5xl min-w-0">
        {/* ================= CONTACT ICONS ================= */}
        <div
          className="
            mb-4 flex w-full min-w-0 justify-center gap-1

            min-[240px]:gap-1.5
            min-[320px]:gap-2
            min-[380px]:mb-6 min-[380px]:gap-3

            sm:mb-9 sm:gap-6
            md:gap-8
            lg:gap-10
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
                  flex shrink-0 items-center justify-center
                  rounded-full
                  transition-all duration-300

                  h-7 w-7

                  min-[240px]:h-8 min-[240px]:w-8
                  min-[320px]:h-9 min-[320px]:w-9
                  min-[380px]:h-11 min-[380px]:w-11

                  sm:h-14 sm:w-14
                  md:h-16 md:w-16
                  lg:h-20 lg:w-20

                  ${
                    activeIndex === index
                      ? "scale-110 bg-black text-white shadow-lg md:scale-125"
                      : "bg-white text-gray-600 shadow hover:scale-105 hover:text-black"
                  }
                `}
              >
                <Icon
                  className="
                    h-3.5 w-3.5

                    min-[240px]:h-4 min-[240px]:w-4
                    min-[320px]:h-[17px] min-[320px]:w-[17px]
                    min-[380px]:h-5 min-[380px]:w-5

                    sm:h-6 sm:w-6
                    md:h-7 md:w-7
                  "
                />
              </button>
            );
          })}
        </div>

        {/* ================= CARD ================= */}
        <div className="mx-auto w-full max-w-[520px] min-w-0">
          <div
            className="
              w-full max-w-full overflow-hidden
              rounded-lg bg-white shadow

              min-[320px]:rounded-xl

              sm:rounded-2xl
              md:rounded-3xl md:shadow-2xl
            "
          >
            {/* ================= SLIDER ================= */}
            <div
              className="
                flex min-w-0
                transition-transform duration-500 ease-in-out
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
                      box-border min-w-full max-w-full
                      px-2 py-5
                      text-center

                      min-[240px]:px-3 min-[240px]:py-6
                      min-[320px]:px-4 min-[320px]:py-7
                      min-[380px]:px-5 min-[380px]:py-8

                      sm:px-8 sm:py-10
                      md:px-12 md:py-12
                      lg:px-16
                    "
                  >
                    {/* ================= MAIN ICON ================= */}
                    <div
                      className="
                        mx-auto flex
                        h-10 w-10
                        items-center justify-center
                        rounded-full bg-gray-100

                        min-[240px]:h-12 min-[240px]:w-12
                        min-[320px]:h-14 min-[320px]:w-14
                        min-[380px]:h-16 min-[380px]:w-16

                        sm:h-20 sm:w-20
                        md:h-24 md:w-24
                      "
                    >
                      <Icon
                        className="
                          h-5 w-5

                          min-[240px]:h-6 min-[240px]:w-6
                          min-[320px]:h-7 min-[320px]:w-7
                          min-[380px]:h-8 min-[380px]:w-8

                          sm:h-9 sm:w-9
                          md:h-11 md:w-11
                        "
                      />
                    </div>

                    {/* ================= TITLE ================= */}
                    <h2
                      className="
                        mx-auto mt-2
                        max-w-[170px]
                        text-sm font-bold
                        leading-tight
                        text-gray-900

                        min-[240px]:mt-3
                        min-[240px]:text-base
                        min-[240px]:max-w-[190px]

                        min-[320px]:text-lg
                        min-[320px]:max-w-[220px]

                        min-[380px]:mt-4
                        min-[380px]:text-xl

                        sm:mt-6
                        sm:max-w-none
                        sm:text-2xl

                        md:mt-7
                        md:text-3xl
                      "
                    >
                      {item.title}
                    </h2>

                    {/* ================= LINK ================= */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mx-auto mt-1
                        block max-w-[165px]
                        break-words px-0.5
                        text-[9px]
                        font-semibold
                        leading-4
                        text-blue-600
                        underline
                        hover:text-blue-800

                        min-[240px]:max-w-[190px]
                        min-[240px]:text-[10px]

                        min-[320px]:max-w-[220px]
                        min-[320px]:text-xs

                        min-[380px]:text-base

                        sm:mt-4
                        sm:max-w-none
                        sm:text-lg
                      "
                    >
                      {item.text}
                    </a>

                    {/* ================= DESCRIPTION ================= */}
                    <p
                      className="
                        mx-auto mt-1
                        max-w-[160px]
                        text-[8px]
                        leading-3
                        text-gray-500

                        min-[240px]:max-w-[180px]
                        min-[240px]:text-[9px]

                        min-[320px]:mt-2
                        min-[320px]:max-w-[200px]
                        min-[320px]:text-[10px]

                        min-[380px]:max-w-[230px]
                        min-[380px]:text-xs

                        sm:mt-4
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

          {/* ================= NAVIGATION ================= */}
          <div
            className="
              mt-3
              flex items-center justify-center gap-2

              min-[240px]:mt-3
              min-[320px]:gap-2.5
              min-[380px]:mt-4 min-[380px]:gap-3

              sm:mt-7 sm:gap-4
            "
          >
            {/* Previous */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous contact"
              className="
                flex h-7 w-7
                items-center justify-center
                rounded-full
                bg-white
                text-[10px]
                shadow
                transition
                hover:bg-gray-200

                min-[240px]:h-8 min-[240px]:w-8
                min-[320px]:h-9 min-[320px]:w-9
                min-[380px]:h-10 min-[380px]:w-10

                sm:h-auto
                sm:w-auto
                sm:px-5
                sm:py-3
                sm:text-base
              "
            >
              ←
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={nextSlide}
              className="
                flex items-center
                gap-1
                rounded-full
                bg-black
                px-2.5
                py-1.5
                text-[9px]
                font-semibold
                text-white
                transition
                hover:bg-gray-800

                min-[240px]:px-3
                min-[240px]:py-1.5

                min-[320px]:gap-1.5
                min-[320px]:px-4
                min-[320px]:py-2

                min-[380px]:px-5
                min-[380px]:py-2.5

                sm:gap-2
                sm:px-6
                sm:py-3
                sm:text-base
              "
            >
              Next

              <ArrowRight
                className="
                  h-2.5 w-2.5

                  min-[240px]:h-3 min-[240px]:w-3
                  min-[320px]:h-3.5 min-[320px]:w-3.5
                  min-[380px]:h-4 min-[380px]:w-4
                "
              />
            </button>
          </div>

          {/* ================= DOTS ================= */}
          <div
            className="
              mt-3
              flex justify-center gap-1

              min-[320px]:mt-3
              min-[380px]:mt-4 min-[380px]:gap-1.5

              sm:mt-6 sm:gap-2
            "
          >
            {contactItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to ${item.name}`}
                className={`
                  h-1 rounded-full
                  transition-all duration-300

                  min-[320px]:h-1.5
                  sm:h-2

                  ${
                    activeIndex === index
                      ? "w-4 bg-black min-[320px]:w-5 min-[380px]:w-6 sm:w-8"
                      : "w-1 bg-gray-400 min-[320px]:w-1.5 sm:w-2"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;