
import { faCartShopping, faCreditCard, faGear, faHeart, faHouse, faLocationDot, faRightFromBracket, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import profileImg from "../../../../public/UserProfile.png";

import React from 'react'

export default function AsideBottonProfile() {
  return (
    <>
    <div className="bg-white py-4 w-full fixed bottom-0 md:hidden flex justify-between items-center px-6" dir="rtl">
        <div className="flex flex-col">
            <FontAwesomeIcon className="" icon={faHouse} />
            <p className="ms-3 mt-2">الرئيسية</p>
        </div>
        <div className="flex flex-col">
            <FontAwesomeIcon className="" icon={faCartShopping} />
            <p className="ms-3 mt-2">طلباتي</p>
        </div>
        <div className="flex flex-col">
            <FontAwesomeIcon className="" icon={faHeart} />
            <p className="ms-3 mt-2">المفضلة</p>
        </div>
        <div className="flex flex-col">
            <FontAwesomeIcon className="" icon={faGear} />
            <p className="ms-3 mt-2">الاعدادات</p>
        </div>
    </div>
</>
  )
}
