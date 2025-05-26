import {
  faClockRotateLeft,
  faHeart,
  faPercent,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import AsideProfile from "./Components/AsideProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import foodImage from "../../../public/برجر.png";
import AsideBottonProfile from "./Components/AsideBottonProfile";

const UserProfilePage = () => {
  return (
    <>
      <div className="w-full flex justify-center mb-20 md:mb-0" dir="rtl">
        <aside className="w-1/5 bg-white p-4 relative min-h-screen hidden md:block">
          <AsideProfile />
        </aside>
        <div className="md:w-4/5 bg-gray-100 p-4">
          <div className="bg-amber-300 p-4 rounded-b-md shadow-md my-4">
            <h1 className="text-xl font-bold mb-2">مرحبا بك امل!</h1>
            <p className="text-gray-400">
              ماذا تريد أن تأكل اليوم؟ لدينا توصيات لذيذة من أجلك
            </p>
          </div>

          <div className=" mb-4 md:flex md:gap-4">
            <div className="md:w-1/2 w-full flex gap-4">
              <div className="w-1/2 bg-white p-4 rounded-md shadow-md flex flex-col items-center justify-between mb-4">
                <FontAwesomeIcon
                  className="text-amber-600 bg-amber-400 p-4 rounded-3xl"
                  icon={faUtensils}
                />
                <p>اطلب الان</p>
              </div>
              <div className="w-1/2 bg-white p-4 rounded-md shadow-md flex flex-col items-center justify-between mb-4">
                <FontAwesomeIcon
                  className="text-blue-600 bg-blue-200 p-4 rounded-3xl"
                  icon={faClockRotateLeft}
                />
                <p>طلبات سابقة</p>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex gap-4">
              <div className="w-1/2 bg-white p-4 rounded-md shadow-md flex flex-col items-center justify-between mb-4">
                <FontAwesomeIcon
                  className="text-indigo-600 bg-indigo-200 p-4 rounded-3xl"
                  icon={faHeart}
                />
                <p>المفضلة</p>
              </div>
              <div className="w-1/2 bg-white p-4 rounded-md shadow-md flex flex-col items-center justify-between mb-4">
                <FontAwesomeIcon
                  className="text-green-600 bg-green-200 p-4 rounded-3xl"
                  icon={faPercent}
                />
                <p>العروض</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 pb-8 rounded-md shadow-md mb-4">
            <div className=" flex justify-between">
              <h2 className="text-lg font-bold mb-2">طلباتك الاخيرة</h2>
              <button className="text-amber-600">عرض المزيد</button>
            </div>
            <div className="flex justify-between mt-4 bg-gray-200 p-4 rounded-md shadow-md">
              <div className="flex gap-3">
                <img className="size-20" src={foodImage} alt="" />
                <div>
                  <p className="font-bold">كبسة دجاج من الرز البسمتي</p>
                  <p className="text-[#6B7280]">من الطاهية نورة</p>
                  <p className="text-[#6B7280]">3 س</p>
                </div>
              </div>
              <div>
                <p className="p-2 bg-blue-200 text-blue-600 rounded-2xl">
                  قيد التحضير
                </p>
                <p className="text-[#6B7280]">H12567</p>
                <p className="text-[#6B7280]">2023</p>
              </div>
            </div>
            <div className="flex justify-between mt-4 bg-gray-200 p-4 rounded-md shadow-md">
              <div className="flex gap-3">
                <img className="size-20" src={foodImage} alt="" />
                <div>
                  <p className="font-bold">كبسة دجاج من الرز البسمتي</p>
                  <p className="text-[#6B7280]">من الطاهية نورة</p>
                  <p className="text-[#6B7280]">3 س</p>
                </div>
              </div>
              <div>
                <p className="p-2 bg-green-200 text-green-600 rounded-2xl">
                  مكتمل
                </p>
                <p className="text-[#6B7280]">H12567</p>
                <p className="text-[#6B7280]">2023</p>
              </div>
            </div>
          </div>
          <div className="p-4 w-full md:flex md:gap-3">
            <div className="bg-white w-full p-4 pb-8 rounded-md shadow-md mb-4">
              <div className=" flex justify-between mb-4">
                <h2 className="text-lg font-bold mb-2">مفضلاتك</h2>
                <button className="text-amber-600">عرض المزيد</button>
              </div>
              <div className="flex gap-3">
                <div className="w-1/2 ">
                  <img src={foodImage} alt="" />
                  <p className="font-bold">بيتزا بيتزا</p>
                  <p className="text-gray-600">من الطاهي خالد</p>
                </div>
                <div className="w-1/2 ">
                  <img src={foodImage} alt="" />
                  <p className="font-bold">بيتزا بيتزا</p>
                  <p className="text-gray-600">من الطاهي خالد</p>
                </div>
              </div>
            </div>
            <div className="bg-white w-full p-4 pb-8 rounded-md shadow-md mb-4">
              <div className=" flex justify-between">
                <h2 className="text-lg font-bold mb-2">مقترحات لك</h2>
                <button className="text-amber-600">عرض المزيد</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AsideBottonProfile />
    </>
  );
};
export default UserProfilePage;
