import AsideBottonProfile from "./Components/AsideBottonProfile";
import AsideProfile from "./Components/AsideProfile";
// import meal from '../../../../public/برجر.png'
import PaginationRTL from "./Components/PaginationRTL";
import Order from "./Components/Order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faFilter,
  faLocationDot,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const OrderHistoryPage = () => {
  return (
    <>
      <div className="w-full flex" dir="rtl">
        <aside className="w-1/5 bg-white p-4 relative min-h-screen hidden md:block">
          <AsideProfile />
        </aside>
        <div className="w-full md:w-4/5 bg-gray-100 p-4 pb-20">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">سجل الطلبات</h1>
              <p className="text-gray-400">عرض جميع طلباتك السابقة والحالية</p>
            </div>
            <div className="text-left mb-6">
              <button className="btn px-3 py-2 bg-[#F97316] rounded-2xl text-white">
                <FontAwesomeIcon icon={faFilter} />
                <span className="ms-2">تصفية الطلبات</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-1 rounded-xl shadow-md my-4 flex gap-3 ">
            <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2">
              <FontAwesomeIcon icon={faUser} />
              <p className="ms-3">الملف الشخصي</p>
            </div>
            <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2">
              <FontAwesomeIcon icon={faLock} />
              <p className="ms-3">كلمة المرور</p>
            </div>
            <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="ms-3">العناويين</p>
            </div>
            <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2">
              <FontAwesomeIcon icon={faBell} />
              <p className="ms-3">الاشعارات</p>
            </div>
          </div>

          <Order orderCase="done" />
          <Order orderCase="waiting" />
          <Order orderCase="inWay" />

          <PaginationRTL />
        </div>
        <AsideBottonProfile />
      </div>
    </>
  );
};
export default OrderHistoryPage;
