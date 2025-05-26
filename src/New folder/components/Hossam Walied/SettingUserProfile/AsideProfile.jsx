import { faCartShopping, faCreditCard, faGear, faHeart, faHouse, faLocationDot, faRightFromBracket, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImg from "../../../../public/UserProfile.png";

const AsideProfile = () => {
    return (
        <>
            <div className="flex items-center justify-center pb-2">
                <FontAwesomeIcon className="bg-amber-500 p-4 rounded-3xl" icon={faUtensils} />
                <p className="text-amber-500 ms-3 hidden md:block">HandBiet</p>
            </div>
            <hr className="my-4" />
            <div className="flex items-center">
                <img src={profileImg} alt="profile image" />
                <div className="ms-3  hidden md:flex flex-col">
                    <p className="font-bold">امل محمد</p>
                    <p className="text-gray-400">عميل منذ 2022</p>
                </div>
            </div>
            <hr className="my-4" />
            <div>
                <div className="flex items-center cursor-pointer text-[#F97316] bg-amber-300 p-2 mb-2 rounded-lg">
                    <FontAwesomeIcon className="" icon={faHouse} />
                    <p className="ms-3 hidden md:block">الصفحة الرئيسية</p>
                </div>
                <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p className="ms-3 hidden md:block">طلباتي</p>
                </div>
                <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2">
                    <FontAwesomeIcon icon={faHeart} />
                    <p className="ms-3 hidden md:block">المفضلة</p>
                </div>
                <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="ms-3 hidden md:block">عناويني</p>
                </div>
                <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2">
                    <FontAwesomeIcon icon={faCreditCard} />
                    <p className="ms-3 hidden md:block">طرق الدفع</p>
                </div>
                <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2">
                    <FontAwesomeIcon icon={faGear} />
                    <p className="ms-3 hidden md:block">الاعدادات</p>
                </div>
            </div>

            <div className="absolute bottom-4 w-full px-4">
                <hr className="my-4" />
                <div className="flex items-center cursor-pointer text-[#6B7280] p-2 mb-2 ">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <p className="ms-3 hidden md:block">تسجيل الخروج</p>
                </div>
            </div>
        </>
    )
}
export default AsideProfile;