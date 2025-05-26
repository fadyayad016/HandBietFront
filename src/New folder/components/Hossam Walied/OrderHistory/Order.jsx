import meal from '../../../../public/برجر.png'
import { faBell, faCarSide, faClock, faComment, faCommentDots, faFilter, faLocationDot, faLock, faPhone, faRotateRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Order =({orderCase})=>{
    return(
        <>
            <div className="bg-white p-4 rounded-xl shadow-md my-4 flex justify-between">
                        <div className="flex">
                            <div className="relative">
                            <img src={meal} className="size-30 rounded-2xl" alt="meal" />
                            <span className="absolute -top-1 -right-5 px-2 py-1 text-sm bg-green-200 text-green-600 rounded-xl shadow">تم التوصيل</span>
                            </div>
                            
                            <div className="ms-2 leading-relaxed">
                                <p className="font-bold mt-2">كبسة دجاج مع  ارز بسمتي</p>
                                <p className="text-gray-500 my-2">من الطاهية نور</p>
                                <p className="text-amber-400">@@@@@</p>
                            </div>
                        </div>
                        <div className="leading-relaxed text-left">
                            <p className="font-bold mt-2 mb-2">ر.س</p>
                            <p className="text-gray-500">2023</p>
                            {
                                orderCase==='done' &&(
                                    <div className="mt-2">
                                <button className="bg-gray-100 p-2 rounded-xl"><FontAwesomeIcon icon={faRotateRight} /> اعادة الطلب</button>
                                <button className="bg-gray-100 p-2 ms-4 rounded-xl"><FontAwesomeIcon icon={faCommentDots} /> تقييم</button>
                            </div>
                                )
                            }
                            {
                                orderCase==='waiting' &&(
                                    <div className="mt-2">
                                <button className="bg-gray-100 p-2 rounded-xl"><FontAwesomeIcon icon={faClock} /> قيد التجهيز</button>
                                <button className="bg-gray-100 p-2 ms-4 rounded-xl"><FontAwesomeIcon icon={faPhone}  /> اتصال بالطاهي</button>
                            </div>
                                )
                            }
                            {
                                orderCase==='inWay' &&(
                                    <div className="mt-2">
                                <button className="bg-gray-100 p-2 rounded-xl"><FontAwesomeIcon icon={faCarSide} /> تتبع الطلب</button>
                                <button className="bg-gray-100 p-2 ms-4 rounded-xl"><FontAwesomeIcon icon={faPhone}  /> اتصال بالسائق</button>
                            </div>
                                )
                            }
                            
                        </div>

                    </div>
        </>
    )
}
export default Order