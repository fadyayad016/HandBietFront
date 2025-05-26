import React, { useState } from "react";
import CookerMenu from "./Components/CookerMenu";
import SideMenu from "./Components/SideMenu";
import SideMenuBottom from "./Components/SideMenuBottom";
import PopupModaledit from "./Components/PopupModaledit";
import {
  FaChartLine,
  FaCog,
  FaHome,
  FaShoppingBag,
  FaSignOutAlt,
  FaStar,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { NavLink } from "react-router";

const CookerMenuParent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <div
        dir="rtl"
        className="text-gray-800"
        style={{ fontFamily: "'Tajawal', sans-serif" }}
      >
        <div className="flex bg-gray-50">
          {/* Sidebar */}
          <div
            className={`sidebar bg-white w-64 flex-shrink-0 shadow-lg ${
              sidebarOpen ? "block" : "hidden"
            } md:block transition-all duration-300 ease-in-out`}
          >
            <nav className="p-8  sticky top-1/12">
              <div className="mb-8 ">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  القائمة الرئيسية
                </h3>
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      end
                      to="/cooker-dashboard/"
                      className={({ isActive }) =>
                        isActive
                          ? " cursor-pointer  mb-2 rounded-lg flex items-center p-2 text-orange-600 bg-orange-50 "
                          : "  cursor-pointer  hover:text-black hover:rounded-lg mb-2 flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                      }
                    >
                      <>
                        <FaHome className="ml-3" />

                        <p className="ms-3 hidden md:block">الرئيسية</p>
                      </>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      end
                      to="/cooker-dashboard/menu"
                      className={({ isActive }) =>
                        isActive
                          ? " cursor-pointer  mb-2 rounded-lg flex items-center p-2 text-orange-600 bg-orange-50 "
                          : "  cursor-pointer  hover:text-black hover:rounded-lg mb-2 flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                      }
                    >
                      <>
                        <FaUtensils className="ml-3" />

                        <p className="ms-3 hidden md:block">قائمة الطعام</p>
                      </>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      end
                      to="/cooker-dashboard/orders"
                      className={({ isActive }) =>
                        isActive
                          ? " cursor-pointer  mb-2 rounded-lg flex items-center p-2 text-orange-600 bg-orange-50 "
                          : "  cursor-pointer  hover:text-black hover:rounded-lg mb-2 flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                      }
                    >
                      <>
                        <FaShoppingBag className="ml-3" />

                        <p className="ms-3 hidden md:block">الطلبات</p>
                      </>
                    </NavLink>
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

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            {/* Main Content */}
            <main className="p-6">
              <CookerMenu />
            </main>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
          <div className="flex justify-around">
            <a
              href="#"
              className="flex flex-col items-center justify-center p-3 text-orange-600"
            >
              <FaHome />
              <span className="text-xs mt-1">الرئيسية</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center justify-center p-3 text-gray-600"
            >
              <FaUtensils />
              <span className="text-xs mt-1">قائمة الطعام</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center justify-center p-3 text-gray-600"
            >
              <FaShoppingBag />
              <span className="text-xs mt-1">الطلبات</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center justify-center p-3 text-gray-600"
            >
              <FaUser />
              <span className="text-xs mt-1">حسابي</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default CookerMenuParent;
