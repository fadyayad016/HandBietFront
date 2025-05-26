import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faGear, faHeart, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

const SideMenuBottom = () => {
  return (
    <>
    <div className="bg-amber-300 py-4 w-full fixed bottom-0 md:hidden flex justify-between items-center px-6 z-1 rounded-2xl" dir="rtl">
        <div className="flex flex-col cursor-pointer">
            <FontAwesomeIcon className=" " icon={faHouse} />
            <p className="ms-3 mt-2 ">الرئيسية</p>
        </div>
        <div className="flex flex-col cursor-pointer">
            <FontAwesomeIcon className="" icon={faCartShopping} />
            <p className="ms-3 mt-2">طلباتي</p>
        </div>
        <div className="flex flex-col cursor-pointer">
            <FontAwesomeIcon className="" icon={faUser} />
            <p className="ms-3 mt-2">الحساب</p>
        </div>
        <div className="flex flex-col cursor-pointer">
            <FontAwesomeIcon className="" icon={faGear} />
            <p className="ms-3 mt-2">الاعدادات</p>
        </div>
    </div>
    </>
  )
}

export default SideMenuBottom