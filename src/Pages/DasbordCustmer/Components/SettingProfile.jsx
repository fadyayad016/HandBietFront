import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImg from "../../../../public/UserProfile.png";
import { faCamera, faTrash } from "@fortawesome/free-solid-svg-icons";

const SettingProfile = () => {
    return (
        <>
            <div className="bg-white p-4 rounded-xl shadow-md my-4">

                <p className="font-bold mb-4">معلوماتي الشخصية</p>
                <form action="">
                    <div className="flex gap-4 mb-4 ">
                        <div className=" w-1/2 ">
                            <label className="block mb-2 text-sm text-gray-500">الاسم الاول</label>
                            <input type="text" id="name" className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="ادخل الاسم الاول" required />
                        </div>
                        <div className="w-1/2 ">
                            <label className="block mb-2 text-sm text-gray-500">اسم العائلة</label>
                            <input type="text" id="name" className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="ادخل اسم العائلة" required />
                        </div>
                    </div>

                    <div className=" w-full mb-4 ">
                        <label className="block mb-2 text-sm text-gray-500">البريد الالكتروني</label>
                        <input type="email" id="name" className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="ادخل البريد الالكتروني" required />
                    </div>
                    <div className="w-full mb-4 ">
                        <label className="block mb-2 text-sm text-gray-500">رقم الهاتف</label>
                        <input type="tel" id="name" className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="ادخل رقم الجوال" required />
                    </div>
                    <div className="w-full text-left mb-6 ">
                        <button className="btn px-3 py-2 bg-[#F97316] rounded-2xl">حفظ التغيرات</button>
                    </div>
                </form>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md my-4">
                <p className="font-bold mb-4">صورة الملف الشخصي</p>
                <div className="flex gap-3 items-center">
                    <img className="size-20" src={profileImg} alt="صوة شخصية" />
                    <div>
                        <button className="btn px-3 py-2 block mb-2 text-[#F97316] bg-white border border-[#F97316] rounded-2xl">
                            <FontAwesomeIcon icon={faCamera} />
                            <span className="ms-2">تغيير الصورة</span>
                        </button>
                        <button className="btn px-3 py-2 block text-gray-500 bg-white border border-gray-500 rounded-2xl">
                            <FontAwesomeIcon icon={faTrash} />
                            <span className="ms-2">ازالة الصورة</span>
                        </button>
                    </div>
                </div>

            </div>

        </>
    )
}
export default SettingProfile;