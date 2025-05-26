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
  FaTimes,
  FaPrint,
} from "react-icons/fa";
import { NavLink } from "react-router";

const OrderManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("new");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  const acceptOrder = (orderId) => {
    alert(`تم قبول الطلب رقم ${orderId}`);
    // API call would go here
  };

  const rejectOrder = (orderId) => {
    if (confirm(`هل أنت متأكد من رفض الطلب رقم ${orderId}؟`)) {
      alert(`تم رفض الطلب رقم ${orderId}`);
      // API call would go here
    }
  };

  const markAsReady = (orderId) => {
    alert(`تم تحديد الطلب رقم ${orderId} كجاهز للتسليم`);
    // API call would go here
  };

  const completeOrder = (orderId) => {
    alert(`تم تسليم الطلب رقم ${orderId}`);
    // API call would go here
  };

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedOrder(null);
  };

  // Sample orders data
  const orders = {
    new: [
      {
        id: "1254",
        customer: {
          name: "سارة محمد",
          phone: "0567891234",
          address: "الرياض - حي المروج",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80",
        },
        meals: ["كبسة لحم", "مندي دجاج"],
        quantity: 2,
        amount: "150  ج.م",
        time: "منذ 15 دقيقة",
        status: {
          text: "جديد",
          color: "bg-yellow-100",
          textColor: "text-yellow-800",
        },
      },
      {
        id: "1253",
        customer: {
          name: "خالد عبدالله",
          phone: "0567891235",
          address: "الرياض - حي العليا",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80",
        },
        meals: ["بيتزا", "سلطة يونانية"],
        quantity: 2,
        amount: "110  ج.م",
        time: "منذ 25 دقيقة",
        status: {
          text: "جديد",
          color: "bg-yellow-100",
          textColor: "text-yellow-800",
        },
      },
    ],
    preparing: [
      {
        id: "1252",
        customer: {
          name: "أحمد علي",
          phone: "0567891236",
          address: "الرياض - حي النخيل",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80",
        },
        meals: ["مندي دجاج", "سلطة"],
        quantity: 2,
        amount: "90  ج.م",
        time: "منذ ساعة",
        status: {
          text: "قيد التحضير",
          color: "bg-blue-100",
          textColor: "text-blue-800",
        },
      },
    ],
    ready: [
      {
        id: "1251",
        customer: {
          name: "نورة سعد",
          phone: "0567891237",
          address: "الرياض - حي الورود",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80",
        },
        meals: ["كبسة لحم", "مشروبات"],
        quantity: 3,
        amount: "175  ج.م",
        time: "منذ ساعتين",
        status: {
          text: "جاهز للتسليم",
          color: "bg-green-100",
          textColor: "text-green-800",
        },
      },
    ],
    completed: [
      {
        id: "1250",
        customer: {
          name: "لينا فهد",
          phone: "0567891238",
          address: "الرياض - حي الصحافة",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80",
        },
        meals: ["برجر لحم", "بطاطس"],
        quantity: 2,
        amount: "85  ج.م",
        time: "بالأمس",
        status: {
          text: "مكتمل",
          color: "bg-gray-100",
          textColor: "text-gray-800",
        },
      },
    ],
    cancelled: [
      {
        id: "1249",
        customer: {
          name: "ياسر ناصر",
          phone: "0567891239",
          address: "الرياض - حي السفارات",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80",
        },
        meals: ["بيتزا", "مشروبات"],
        quantity: 3,
        amount: "120  ج.م",
        time: "بالأمس",
        status: {
          text: "ملغي",
          color: "bg-red-100",
          textColor: "text-red-800",
        },
      },
    ],
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
          <nav className="p-8  ">
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
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                إدارة الطلبات
              </h1>
              <p className="text-gray-600">عرض وتتبع جميع طلبات العملاء</p>
            </div>

            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200">
              <div className="flex space-x-8 space-x-reverse">
                <button
                  onClick={() => changeTab("new")}
                  className={`py-2 px-1 text-sm font-medium ${
                    activeTab === "new"
                      ? "border-b-3 border-orange-500 text-orange-600 font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  الطلبات الجديدة
                  <span className="bg-orange-100 text-orange-800 rounded-full px-2 py-0.5 text-xs ml-2">
                    5
                  </span>
                </button>
                <button
                  onClick={() => changeTab("preparing")}
                  className={`py-2 px-1 text-sm font-medium ${
                    activeTab === "preparing"
                      ? "border-b-3 border-orange-500 text-orange-600 font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  قيد التحضير
                  <span className="bg-blue-100 text-blue-800 rounded-full px-2 py-0.5 text-xs ml-2">
                    3
                  </span>
                </button>
                <button
                  onClick={() => changeTab("ready")}
                  className={`py-2 px-1 text-sm font-medium ${
                    activeTab === "ready"
                      ? "border-b-3 border-orange-500 text-orange-600 font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  جاهزة للتسليم
                  <span className="bg-green-100 text-green-800 rounded-full px-2 py-0.5 text-xs ml-2">
                    2
                  </span>
                </button>
                <button
                  onClick={() => changeTab("completed")}
                  className={`py-2 px-1 text-sm font-medium ${
                    activeTab === "completed"
                      ? "border-b-3 border-orange-500 text-orange-600 font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  مكتملة
                </button>
                <button
                  onClick={() => changeTab("cancelled")}
                  className={`py-2 px-1 text-sm font-medium ${
                    activeTab === "cancelled"
                      ? "border-b-3 border-orange-500 text-orange-600 font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  ملغاة
                </button>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        رقم الطلب
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        العميل
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        الوجبات
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        المبلغ
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        الوقت
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        الحالة
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        الإجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders[activeTab].map((order) => (
                      <tr
                        key={order.id}
                        className="hover:bg-gray-50 transition duration-150 ease-in-out"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            #{order.id}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={order.customer.image}
                                alt={order.customer.name}
                              />
                            </div>
                            <div className="mr-4">
                              <div className="text-sm font-medium text-gray-900">
                                {order.customer.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {order.customer.address}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {order.meals.join("، ")}
                          </div>
                          <div className="text-sm text-gray-500">
                            {order.quantity} وجبة
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {order.amount}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {order.time}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${order.status.color} ${order.status.textColor}`}
                          >
                            {order.status.text}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {activeTab === "new" && (
                            <>
                              <button
                                onClick={() => acceptOrder(order.id)}
                                className="text-green-600 hover:text-green-900 mr-3"
                              >
                                قبول
                              </button>
                              <button
                                onClick={() => rejectOrder(order.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                رفض
                              </button>
                            </>
                          )}
                          {activeTab === "preparing" && (
                            <button
                              onClick={() => markAsReady(order.id)}
                              className="text-orange-600 hover:text-orange-900"
                            >
                              تحديد كجاهز
                            </button>
                          )}
                          {activeTab === "ready" && (
                            <button
                              onClick={() => completeOrder(order.id)}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              تم التسليم
                            </button>
                          )}
                          {(activeTab === "completed" ||
                            activeTab === "cancelled") && (
                            <button
                              onClick={() => viewOrderDetails(order)}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              عرض التفاصيل
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Order Details Modal */}
      {modalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  تفاصيل الطلب #{selectedOrder.id}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">
                    معلومات العميل
                  </h4>
                  <p className="text-sm text-gray-600">
                    {selectedOrder.customer.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedOrder.customer.phone}
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedOrder.customer.address}
                  </p>
                  <p className="text-sm text-gray-600">
                    شارع الملك فهد، عمارة 12
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">
                    معلومات الطلب
                  </h4>
                  <p className="text-sm text-gray-600">
                    رقم الطلب: #{selectedOrder.id}
                  </p>
                  <p className="text-sm text-gray-600">التاريخ: 15 مايو 2023</p>
                  <p className="text-sm text-gray-600">الوقت: 12:30 م</p>
                  <p className="text-sm text-gray-600">
                    طريقة الدفع: عند الاستلام
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">ملخص الطلب</h4>
                  <p className="text-sm text-gray-600">
                    عدد الوجبات: {selectedOrder.quantity}
                  </p>
                  <p className="text-sm text-gray-600">
                    المجموع: {selectedOrder.amount}
                  </p>
                  <p className="text-sm text-gray-600">رسوم التوصيل: 10 ج.م</p>
                  <p className="text-sm font-medium text-gray-900">
                    الإجمالي: {parseInt(selectedOrder.amount) + 10} ج.م
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">
                  الوجبات المطلوبة
                </h4>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    <div className="p-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
                          className="w-12 h-12 rounded-md object-cover ml-3"
                          alt="كبسة لحم"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            كبسة لحم
                          </p>
                          <p className="text-xs text-gray-500">
                            أرز بسمتي مع لحم ضأن
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          85 ج.م
                        </p>
                        <p className="text-xs text-gray-500">الكمية: 1</p>
                      </div>
                    </div>

                    <div className="p-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
                          className="w-12 h-12 rounded-md object-cover ml-3"
                          alt="مندي دجاج"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            مندي دجاج
                          </p>
                          <p className="text-xs text-gray-500">
                            دجاج مع أرع بخاري
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          65 ج.م
                        </p>
                        <p className="text-xs text-gray-500">الكمية: 1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 space-x-reverse">
                <button
                  onClick={closeModal}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
                >
                  إغلاق
                </button>
                <button className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg flex items-center">
                  <FaPrint className="ml-2" />
                  طباعة الفاتورة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
