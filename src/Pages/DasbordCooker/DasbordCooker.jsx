import { useState } from "react";
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
import { NavLink } from "react-router";

const ChefDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      dir="rtl"
      className="text-gray-800"
      style={{ fontFamily: "'Tajawal', sans-serif" }}
    >
      <div className="flex h-screen overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <div
          className={`sidebar bg-white w-64 flex-shrink-0 shadow-lg ${
            sidebarOpen ? "block" : "hidden"
          } md:block transition-all duration-300 ease-in-out`}
        >
          <nav className="p-8   ">
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
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                مرحباً بك، الطاهي أحمد!
              </h1>
              <p className="text-gray-600">
                هذه نظرة عامة على أدائك وطلباتك الحالية.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Orders Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 hover:[&>div>div:last-child]:scale-110">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">اجمالي الطلبات</p>
                    <h3 className="text-2xl font-bold mt-1">18</h3>
                    {/* <p className="text-green-500 text-sm mt-2">
                      <FaArrowUp className="inline mr-1" /> 12% من الأمس
                    </p> */}
                  </div>
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600 transition duration-200">
                    <FaOrders className="text-xl" />
                  </div>
                </div>
              </div>

              {/* Earnings Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500 hover:[&>div>div:last-child]:scale-110">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">الأرباح</p>
                    <h3 className="text-2xl font-bold mt-1">1,245 ج.م</h3>
                    {/* <p className="text-green-500 text-sm mt-2">
                      <FaArrowUp className="inline mr-1" /> 8% من الأمس
                    </p> */}
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 transition duration-200">
                    <FaWallet className="text-xl" />
                  </div>
                </div>
              </div>

              {/* Rating Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 hover:[&>div>div:last-child]:scale-110">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">التقييم العام</p>
                    <h3 className="text-2xl font-bold mt-1">4.7</h3>
                    <div className="flex mt-2">
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStarHalfAlt className="text-yellow-400" />
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full text-green-600 transition duration-200">
                    <FaStar className="text-xl" />
                  </div>
                </div>
              </div>

              {/* Pending Orders Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500 hover:[&>div>div:last-child]:scale-110">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">طلبات قيد الانتظار</p>
                    <h3 className="text-2xl font-bold mt-1">5</h3>
                    <p className="text-red-500 text-sm mt-2">
                      <FaClock className="inline mr-1" /> تحتاج معالجة
                    </p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600 transition duration-200">
                    <FaClock className="text-xl" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                إجراءات سريعة
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-orange-50 border border-gray-200 hover:border-orange-300">
                  <FaPlusCircle className="text-orange-500 text-2xl mb-2 mx-auto" />
                  <p className="text-sm font-medium">إضافة وجبة جديدة</p>
                </button>
                <button className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-blue-50 border border-gray-200 hover:border-blue-300">
                  <FaEdit className="text-blue-500 text-2xl mb-2 mx-auto" />
                  <p className="text-sm font-medium">تعديل القائمة</p>
                </button>
                <button className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-green-50 border border-gray-200 hover:border-green-300">
                  <FaBell className="text-green-500 text-2xl mb-2 mx-auto" />
                  <p className="text-sm font-medium">تحديث الحالة</p>
                </button>
                <button className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-purple-50 border border-gray-200 hover:border-purple-300">
                  <FaChartPie className="text-purple-500 text-2xl mb-2 mx-auto" />
                  <p className="text-sm font-medium">عرض الإحصائيات</p>
                </button>
              </div>
            </div> */}

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-800">
                  الطلبات الأخيرة
                </h2>
                <a href="#" className="text-orange-600 text-sm font-medium">
                  عرض الكل
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-right text-gray-500 border-b border-gray-200">
                      <th className="pb-3 pr-4">رقم الطلب</th>
                      <th className="pb-3 px-4">الزبون</th>
                      <th className="pb-3 px-4">الوجبات</th>
                      <th className="pb-3 px-4">المجموع</th>
                      <th className="pb-3 px-4">الحالة</th>
                      <th className="pb-3 pl-4">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Order 1 */}
                    <tr className="transition duration-150 ease-in-out hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-sm">
                      <td className="py-4 pr-4 font-medium">#HB-78451</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-start">
                          <span>محمد عبدالله</span>
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80"
                            className="w-6 h-6 rounded-full object-cover mr-2"
                            alt="Customer"
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex justify-start">
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                            كبسة لحم
                          </span>
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs mr-1">
                            سلطة
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">85 ج.م</td>
                      <td className="py-4 px-4">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                          قيد التحضير
                        </span>
                      </td>
                      <td className="py-4 pl-4">
                        <div className="flex space-x-2 space-x-reverse">
                          <button className="text-orange-600 hover:text-orange-800">
                            <FaEye />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <FaCheck />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Order 2 */}
                    <tr className="transition duration-150 ease-in-out hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-sm">
                      <td className="py-4 pr-4 font-medium">#HB-78450</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-start">
                          <span>نورة السعد</span>
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80"
                            className="w-6 h-6 rounded-full object-cover mr-2"
                            alt="Customer"
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex justify-start">
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                            مندي دجاج
                          </span>
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs mr-1">
                            شوربة
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">65 ج.م</td>
                      <td className="py-4 px-4">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          في الطريق
                        </span>
                      </td>
                      <td className="py-4 pl-4">
                        <div className="flex space-x-2 space-x-reverse">
                          <button className="text-orange-600 hover:text-orange-800">
                            <FaEye />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <FaCheck />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Order 3 */}
                    <tr className="transition duration-150 ease-in-out hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-sm">
                      <td className="py-4 pr-4 font-medium">#HB-78449</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-start">
                          <span>خالد الحربي</span>
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80"
                            className="w-6 h-6 rounded-full object-cover mr-2"
                            alt="Customer"
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex justify-start">
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                            برجر لحم
                          </span>
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs mr-1">
                            بطاطس
                          </span>
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs mr-1">
                            مشروب
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">45 ج.م</td>
                      <td className="py-4 px-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          مكتمل
                        </span>
                      </td>
                      <td className="py-4 pl-4">
                        <div className="flex space-x-2 space-x-reverse">
                          <button className="text-orange-600 hover:text-orange-800">
                            <FaEye />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <FaCheck />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Order 4 */}
                    <tr className="transition duration-150 ease-in-out hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-sm">
                      <td className="py-4 pr-4 font-medium">#HB-78448</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-start">
                          <span>سارة النهدي</span>
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80"
                            className="w-6 h-6 rounded-full object-cover mr-2"
                            alt="Customer"
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex justify-start">
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                            بيتزا
                          </span>
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs mr-1">
                            سلطة
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">75 ج.م</td>
                      <td className="py-4 px-4">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                          ملغي
                        </span>
                      </td>
                      <td className="py-4 pl-4">
                        <div className="flex space-x-2 space-x-reverse">
                          <button className="text-orange-600 hover:text-orange-800">
                            <FaEye />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <FaCheck />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
  );
};

export default ChefDashboard;
