import { faBagShopping, faCartShopping, faCreditCard, faGear, faHeart, faHouse, faLocationDot, faRightFromBracket, faSignal, faUser, faUtensils , } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const SideMenu = () => {
    return (
        <>
           

<div className='bg-white w-full h-full rounded-xl shadow-lg mt-0 '>
<div className="flex items-center justify-baseline pb-2 pt-2 bg-white">
                <FontAwesomeIcon className="bg-amber-500 p-4  rounded-3xl" icon={faUtensils} />
                <p className="text-amber-500 ms-3">HandBiet</p>
            </div>
            <hr className="my-4" />
            <div className="flex items-center bg-white">
                <img src= 'Ammar.png' alt="profile image" className='size-2' />
                <div className="ms-3  hidden md:flex flex-col">
                    <p className="font-bold">الطاهي محمد</p>
                    <p className="text-gray-400">عميل منذ 2022</p>
                </div>
            </div>
            <hr className="my-4" /> 
            <div>
                <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2 rounded-lg hover:bg-gray-200">
                    <FontAwesomeIcon className="" icon={faHouse} />
                    <p className="ms-3 hidden md:block ">الصفحة الرئيسية</p>
                </div>
                <div className="flex items-center cursor-pointer text-[#F97316] bg-amber-300 p-2 mb-2 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faUtensils} />
                    <p className="ms-3 hidden md:block">قائمة الطعام </p>
                </div>
                <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faBagShopping} />
                    <p className="ms-3 hidden md:block">الطلبات</p>
                </div>
                <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faSignal} />
                    <p className="ms-3 hidden md:block">الاحصائيات</p>
                </div>
                <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faUser} />
                    <p className="ms-3 hidden md:block">الحساب</p>
                </div>
                <div className="flex items-center cursor-pointer text-[#6B7280]  p-2 mb-2 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faGear} />
                    <p className="ms-3 hidden md:block">الاعدادات</p>
                </div>
            </div>

            <div className="absolute bottom-4 w-full px-4">
                <hr className="my-4" />
                <div className="flex items-center cursor-pointer text-[#6B7280] p-2 mb-2  hover:bg-gray-200 ">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <p className="ms-3 hidden md:block">تسجيل الخروج</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default SideMenu