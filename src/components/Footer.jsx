import React from "react";
// facebook, instagram, linkedin, twitter awome-icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faE,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Right Section: Contact Us */}
        <div className="text-right mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-4 text-center">اتصل بنا</h3>{" "}
          <ul className="space-y-2 flex flex-col items-end">
            <li className="flex items-center text-gray-400">
              +20 123 456 789
              <FontAwesomeIcon
                className="w-5 h-5 ms-1 text-mainColor"
                icon={faPhone}
              ></FontAwesomeIcon>
            </li>
            <li className="flex items-center text-gray-400">
              info@handbiet.com
              <FontAwesomeIcon
                className="w-5 h-5 ms-1 text-mainColor"
                icon={faEnvelope}
              ></FontAwesomeIcon>
            </li>
            <li className="flex items-center text-gray-400">
              أسيوط. مصر
              <FontAwesomeIcon
                className="w-5 h-5 ms-1 text-mainColor"
                icon={faLocationDot}
              ></FontAwesomeIcon>
            </li>
          </ul>
        </div>

        {/* Right Section: Quick Links */}
        <div className="text-right">
          <h3 className="text-lg font-bold mb-4">للعملاء</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                تصفح الوجبات
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                كيفية الطلب
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                وسائل الدفع
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                سياسة الاسترجاع
              </a>
            </li>
          </ul>
        </div>

        <div className="text-right">
          <h3 className="text-lg font-bold mb-4">للطهاة</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                كيف يعمل
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                المزايا
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                الشروط والاحكام
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                الاسئلة الشائعة
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Logo and Description */}
        <div className="text-right">
          <div className="flex items-center justify-end mb-2">
            <span className="text-xl font-bold">HandBiet</span>
            <img
              src="/Header/icon cover.png"
              alt="HandBiet Logo"
              className="w-8 h-12 ms-2"
            />
          </div>
          <p className="text-sm text-gray-400">
            منصة رائدة لربط الطهاة المنزليين
          </p>
          <p className="text-sm text-gray-400">
            بمحبى الطعام الاصيل فى جمهورية مصر العربية
          </p>
          <div className="flex space-x-4 rtl:space-x-reverse mt-4 justify-end">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-300"
            >
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-300"
            >
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-300"
            >
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="text-center text-gray-400">
          جميع الحقوق محفوظة . HandBiet@2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
