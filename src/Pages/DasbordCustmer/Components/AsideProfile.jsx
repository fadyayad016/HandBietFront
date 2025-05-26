import {
  faCartShopping,
  faCreditCard,
  faGear,
  faHeart,
  faHouse,
  faLocationDot,
  faRightFromBracket,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImg from "../../../../public/UserProfile.png";
// import {
//   Sidebar,
//   SidebarCollapse,
//   SidebarItem,
//   SidebarItemGroup,
//   SidebarItems,
// } from "flowbite-react";
// import {
//   HiArrowSmRight,
//   HiChartPie,
//   HiInbox,
//   HiShoppingBag,
//   HiTable,
//   HiUser,
// } from "react-icons/hi";

import {
  Avatar,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
const AsideProfile = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <div className="flex items-center">
        <Avatar
          img={user?.profileImage}
          onError={profileImg}
          rounded
          size="md"
        ></Avatar>
        <div className="ms-3  hidden md:flex flex-col">
          <p className="font-bold">
            {user?.firstName + " " + user?.lastName || "Empty"}
          </p>
          <p className="text-gray-400">{user?.email || "Empty"}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <NavLink
          to="/user-dashboard"
          end
          className={({ isActive }) =>
            isActive
              ? "flex items-center cursor-pointer bg-orange-400 text-white p-2 mb-2 rounded-lg"
              : "flex items-center cursor-pointer text-[#6B7280] hover:bg-orange-200 hover:text-black hover:rounded-lg p-2 mb-2"
          }
        >
          <FontAwesomeIcon className="" icon={faHouse} />
          <p className="ms-3 hidden md:block">الصفحة الرئيسية</p>
        </NavLink>
        <NavLink
          to="/user-dashboard/order-history"
          className={({ isActive }) =>
            isActive
              ? "flex items-center cursor-pointer bg-orange-400 text-white p-2 mb-2 rounded-lg"
              : "flex items-center cursor-pointer text-[#6B7280] hover:bg-orange-200 hover:text-black hover:rounded-lg p-2 mb-2"
          }
        >
          <>
            <FontAwesomeIcon icon={faCartShopping} />
            <p className="ms-3 hidden md:block">طلباتي</p>
          </>
        </NavLink>
        <NavLink
          to="/user-dashboard/favourite"
          className={({ isActive }) =>
            isActive
              ? "flex items-center cursor-pointer bg-orange-400 text-white p-2 mb-2 rounded-lg"
              : "flex items-center cursor-pointer text-[#6B7280] hover:bg-orange-200 hover:text-black hover:rounded-lg p-2 mb-2"
          }
        >
          <FontAwesomeIcon icon={faHeart} />
          <p className="ms-3 hidden md:block">المفضلة</p>
        </NavLink>
        <NavLink
          to="/user-dashboard/setting-profile"
          className={({ isActive }) =>
            isActive
              ? "flex items-center cursor-pointer bg-orange-400 text-white p-2 mb-2 rounded-lg"
              : "flex items-center cursor-pointer text-[#6B7280] hover:bg-orange-200 hover:text-black hover:rounded-lg p-2 mb-2"
          }
        >
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="ms-3 hidden md:block">عناويني</p>
        </NavLink>
        {/* <NavLink  to="/user-dashboard/order-history"
          className={({ isActive }) =>
            isActive
              ? "flex items-center cursor-pointer bg-orange-400 text-white p-2 mb-2 rounded-lg"
              : "flex items-center cursor-pointer text-[#6B7280] hover:bg-orange-200 hover:text-black hover:rounded-lg p-2 mb-2"
          }>
          <FontAwesomeIcon icon={faCreditCard} />
          <p className="ms-3 hidden md:block">طرق الدفع</p>
        </NavLink> */}
        <NavLink
          to="/user-dashboard/setting-profile"
          className={({ isActive }) =>
            isActive
              ? "flex items-center cursor-pointer bg-orange-400 text-white p-2 mb-2 rounded-lg"
              : "flex items-center cursor-pointer text-[#6B7280] hover:bg-orange-200 hover:text-black hover:rounded-lg p-2 mb-2"
          }
        >
          <FontAwesomeIcon icon={faGear} />
          <p className="ms-3 hidden md:block">الاعدادات</p>
        </NavLink>
      </div>
      {/* <Sidebar aria-label="Sidebar with content separator example">
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPie}>
              Dashboard
            </SidebarItem>
            <SidebarItem href="#" icon={HiViewBoards}>
              Kanban
            </SidebarItem>
            <SidebarItem href="#" icon={HiInbox}>
              Inbox
            </SidebarItem>
            <SidebarItem href="#" icon={HiUser}>
              Users
            </SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBag}>
              Products
            </SidebarItem>
            <SidebarItem href="#" icon={HiArrowSmRight}>
              Sign In
            </SidebarItem>
            <SidebarItem href="#" icon={HiTable}>
              Sign Up
            </SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPie}>
              Upgrade to Pro
            </SidebarItem>
            <SidebarItem href="#" icon={HiViewBoards}>
              Documentation
            </SidebarItem>
            <SidebarItem href="#" icon={BiBuoy}>
              Help
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar> */}
      <div className="absolute bottom-4 w-full px-4">
        <hr className="my-4" />
        <div className="flex items-center cursor-pointer text-[#6B7280] p-2 mb-2 ">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <p className="ms-3 hidden md:block">تسجيل الخروج</p>
        </div>
      </div>
    </>
  );
};
export default AsideProfile;
