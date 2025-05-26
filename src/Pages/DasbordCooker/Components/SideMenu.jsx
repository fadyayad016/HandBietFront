import {
  faBagShopping,
  faGear,
  faHouse,
  faRightFromBracket,
  faSignal,
  faUser,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaHome,
  FaUtensils,
  FaShoppingBag,
  FaChartLine,
  FaStar,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaBars,
  FaPlusCircle,
  FaEdit,
  FaCheck,
  FaEye,
  FaClock,
  FaArrowUp,
  FaStarHalfAlt,
  FaShoppingBag as FaOrders,
  FaWallet,
  FaChartPie,
} from "react-icons/fa";

const SideMenu = () => {
  return (
    <>
      <div
        className={`sidebar bg-white w-64 flex-shrink-0 shadow-lg ${"block"} md:block transition-all duration-300 ease-in-out`}
      >
        <nav className="p-4">
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              القائمة الرئيسية
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-orange-600 bg-orange-50 rounded-lg"
                >
                  <FaHome className="ml-3" />
                  <span>الرئيسية</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <FaUtensils className="ml-3" />
                  <span>قائمة الطعام</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <FaShoppingBag className="ml-3" />
                  <span>الطلبات</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <FaChartLine className="ml-3" />
                  <span>الإحصائيات</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <FaStar className="ml-3" />
                  <span>التقييمات</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              الإعدادات
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <FaUser className="ml-3" />
                  <span>الحساب</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <FaCog className="ml-3" />
                  <span>الإعدادات</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <FaSignOutAlt className="ml-3" />
                  <span>تسجيل الخروج</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
