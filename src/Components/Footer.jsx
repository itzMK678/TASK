import React from "react";
import logo from "../assets/Logo.jpeg";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-black pt-7">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Logo" className="w-28 h-28 object-contain" />
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold mb-4">{t("connect_with_us")}</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-4">{t("contact_us")}</h3>
          <p className="flex items-center gap-2 mb-2">
            <Phone className="w-5 h-5" /> +92 111111111
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5" /> none@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-1">{t("quick_links")}</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-600">{t("about")}</a></li>
            <li><a href="#" className="hover:text-pink-600">{t("blogs")}</a></li>
            <li><a href="#" className="hover:text-pink-600">{t("return_policy")}</a></li>
            <li><a href="#" className="hover:text-pink-600">{t("terms_conditions")}</a></li>
            <li><a href="#" className="hover:text-pink-600">{t("privacy_policy")}</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <a href="https://mamoon-dev.vercel.app/">
        <div className="py-2 text-center text-[13px] mt-5 text-gray-400 border-t border-gray-300">
          <div className="text-gray-400 hover:text-pink-600">
            {t("developed_by_mamoon")}
          </div>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
