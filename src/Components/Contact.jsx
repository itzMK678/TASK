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
    <div className="min-h-screen overflow-hidden bg-gray-100 px-6 py-12">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Contact Us
        </h1>

        <p className="mt-3 text-gray-500">
          Get in touch with us through any of the options below.
        </p>
      </div>

      {/* Main Slider */}
      <div className="mx-auto max-w-5xl">

        {/* Icons */}
        <div className="mb-10 flex justify-center gap-5 md:gap-10">

          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 md:h-20 md:w-20 ${
                  activeIndex === index
                    ? "scale-125 bg-black text-white shadow-xl"
                    : "bg-white text-gray-600 shadow hover:scale-110 hover:text-black"
                }`}
              >
                <Icon size={28} />
              </button>
            );
          })}

        </div>

        {/* Slider */}
        <div className="relative mx-auto max-w-xl">

          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >

              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="min-w-full px-8 py-12 text-center md:px-16"
                  >

                    {/* Big Icon */}
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                      <Icon size={45} />
                    </div>

                    {/* Title */}
                    <h2 className="mt-7 text-2xl font-bold text-gray-900">
                      {item.title}
                    </h2>

                    {/* Clickable Text */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-lg font-semibold text-blue-600 underline hover:text-blue-800"
                    >
                      {item.text}
                    </a>

                    <p className="mt-4 text-sm text-gray-500">
                      Click the link above to continue
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

          {/* Navigation */}
          <div className="mt-7 flex items-center justify-center gap-4">

            <button
              onClick={prevSlide}
              className="rounded-full bg-white px-5 py-3 shadow transition hover:bg-gray-200"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Next
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">

            {contactItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-black"
                    : "w-2 bg-gray-400"
                }`}
              />
            ))}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;