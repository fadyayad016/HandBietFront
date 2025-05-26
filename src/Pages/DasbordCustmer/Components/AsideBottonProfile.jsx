import {
  faCartShopping,
  faGear,
  faHeart,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function AsideBottonProfile() {
//   return (
//     <>
//     <div className="bg-amber-300 py-4 w-full fixed bottom-0 left-0 md:hidden flex justify-between items-center px-6 " dir="rtl">
//         <div className="flex flex-col">
//             <FontAwesomeIcon className="" icon={faHouse} />
//             <p className="ms-3 mt-2">الرئيسية</p>
//         </div>
//         <div className="flex flex-col">
//             <FontAwesomeIcon className="" icon={faCartShopping} />
//             <p className="ms-3 mt-2">طلباتي</p>
//         </div>
//         <div className="flex flex-col">
//             <FontAwesomeIcon className="" icon={faHeart} />
//             <p className="ms-3 mt-2">المفضلة</p>
//         </div>
//         <div className="flex flex-col">
//             <FontAwesomeIcon className="" icon={faGear} />
//             <p className="ms-3 mt-2">الاعدادات</p>
//         </div>
//     </div>
// </>
//   )
// }

export default function AsideBottonProfile() {
  const items = [
    { icon: faHouse, label: "الرئيسية" },
    { icon: faCartShopping, label: "طلباتي" },
    { icon: faHeart, label: "المفضلة" },
    { icon: faGear, label: "الإعدادات" },
  ];

  return (
    <div
      className="bg-amber-300 py-4 w-full fixed bottom-0 left-0 md:hidden flex justify-between items-center px-6 z-50"
      dir="rtl"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center group transition-all duration-300 ease-in-out hover:scale-110 hover:text-white cursor-pointer"
        >
          <FontAwesomeIcon
            className="text-lg transition-colors duration-300 group-hover:text-white"
            icon={item.icon}
          />
          <p className="mt-2 text-sm transition-colors duration-300 group-hover:text-white">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
