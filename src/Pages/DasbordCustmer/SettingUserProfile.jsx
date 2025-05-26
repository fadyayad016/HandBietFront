import {
  faBell,
  faLocationDot,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import AsideProfile from "./Components/AsideProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SettingProfile from "./Components/SettingProfile";
import PasswordSetting from "./Components/PasswordSetting";
import AddressSetting from "./Components/AddressSetting";
import NotificationSettings from "./Components/NotificationSettings";
import AsideBottonProfile from "./Components/AsideBottonProfile";

const SettingUserProfile = () => {
  return (
    <>
      <div className="w-full flex" dir="rtl">
        <aside className="w-1/5 bg-white p-4 relative min-h-screen hidden md:block">
          <AsideProfile />
        </aside>
        <div className="w-full md:w-4/5 bg-gray-100 p-4 pb-20">
          <h1 className="text-2xl font-bold mb-2">اعدادات الحساب</h1>
          <p className="text-gray-400">
            ادارة معلومات حسابك واعدادات التفضيلات
          </p>
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
          {/* <SettingProfile /> */}
          {/* <PasswordSetting /> */}
          <AddressSetting />
          {/* <NotificationSettings /> */}

          <AsideBottonProfile />
        </div>
      </div>
    </>
  );
};
export default SettingUserProfile;
