import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AsideBottonProfile from "../SettingUserProfile/AsideBottonProfile";
import AsideProfile from "../SettingUserProfile/AsideProfile";
import {
  faBell,
  faFilter,
  faHeart,
  faLocationDot,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import mealImg from "../../../../public/برجر.png";

const FavouritePage = () => {
  return (
    <>
      <div className="w-full flex" dir="rtl">
        <aside className="w-1/5 bg-white p-4 relative min-h-screen hidden md:block">
          <AsideProfile />
        </aside>
        <div className="w-full md:w-4/5 bg-gray-100 p-4 pb-20">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">مفضلاتي</h1>
              <p className="text-gray-400">
                الوجبات والطهاه الذين حفظتهم في قائمة المفضلة
              </p>
            </div>
            <div className="text-left mb-6">
              <button className="btn px-3 py-2 bg-[#F97316] rounded-2xl text-white">
                <FontAwesomeIcon icon={faFilter} />
                <span className="ms-2">تصفية المفضلة</span>
              </button>
            </div>
          </div>
          <div className="bg-white p-1 rounded-xl shadow-md my-4 flex gap-3">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="relative rounded-xl border border-gray-200 p-2 shadow hover:shadow-lg transition">
              <button className="absolute top-3 left-4 text-red-500 text-xl bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow  hover:bg-red-100 hover:scale-105 transition duration-300">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <img
                src={mealImg}
                alt="nmm"
                className="rounded-lg h-40 w-full object-cover"
              />
              <div className="p-2 text-right">
                <div className="flex justify-between items-center mt-2">
                  <p className="font-semibold">hkk</p>
                  <span className="text-orange-500 text-sm">hkkl</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">من jkk</p>
                <button className="mt-2 w-full text-center bg-orange-100 text-orange-500 rounded-md py-1 text-sm">
                  أضف للسلة
                </button>
              </div>
            </div>

            <div className="relative rounded-xl border border-gray-200 p-2 shadow hover:shadow-lg  transition">
              <button className="absolute top-3 left-4 text-red-500 text-xl bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow  hover:bg-red-100 hover:scale-105 transition duration-300">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <img
                src={mealImg}
                alt="nmm"
                className="rounded-lg h-40 w-full object-cover"
              />
              <div className="p-2 text-right">
                <div className="flex justify-between items-center mt-2">
                  <p className="font-semibold">hkk</p>
                  <span className="text-orange-500 text-sm">hkkl</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">من jkk</p>
                <button className="mt-2 w-full text-center bg-orange-100 text-orange-500 rounded-md py-1 text-sm">
                  أضف للسلة
                </button>
              </div>
            </div>
            <div className="relative rounded-xl border border-gray-200 p-2 shadow hover:shadow-lg transition">
              <button className="absolute top-3 left-4 text-red-500 text-xl bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow  hover:bg-red-100 hover:scale-105 transition duration-300">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <img
                src={mealImg}
                alt="nmm"
                className="rounded-lg h-40 w-full object-cover"
              />
              <div className="p-2 text-right">
                <div className="flex justify-between items-center mt-2">
                  <p className="font-semibold">hkk</p>
                  <span className="text-orange-500 text-sm">hkkl</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">من jkk</p>
                <button className="mt-2 w-full text-center bg-orange-100 text-orange-500 rounded-md py-1 text-sm">
                  أضف للسلة
                </button>
              </div>
            </div>
            <div className="relative rounded-xl border border-gray-200 p-2 shadow hover:shadow-lg transition">
              <button className="absolute top-3 left-4 text-red-500 text-xl bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow  hover:bg-red-100 hover:scale-105 transition duration-300">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <img
                src={mealImg}
                alt="nmm"
                className="rounded-lg h-40 w-full object-cover"
              />
              <div className="p-2 text-right">
                <div className="flex justify-between items-center mt-2">
                  <p className="font-semibold">hkk</p>
                  <span className="text-orange-500 text-sm">hkkl</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">من jkk</p>
                <button className="mt-2 w-full text-center bg-orange-100 text-orange-500 rounded-md py-1 text-sm">
                  أضف للسلة
                </button>
              </div>
            </div>
            <div className="relative rounded-xl border border-gray-200 p-2 shadow hover:shadow-lg transition ">
              <button className="absolute top-3 left-4 text-red-500 text-xl bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow  hover:bg-red-100 hover:scale-105 transition duration-300">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <img
                src={mealImg}
                alt="nmm"
                className="rounded-lg h-40 w-full object-cover"
              />
              <div className="p-2 text-right">
                <div className="flex justify-between items-center mt-2">
                  <p className="font-semibold">hkk</p>
                  <span className="text-orange-500 text-sm">hkkl</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">من jkk</p>
                <button className="mt-2 w-full text-center bg-orange-100 text-orange-500 rounded-md py-1 text-sm">
                  أضف للسلة
                </button>
              </div>
            </div>
          </div>
        </div>
        <AsideBottonProfile />
      </div>
    </>
  );
};
export default FavouritePage;
