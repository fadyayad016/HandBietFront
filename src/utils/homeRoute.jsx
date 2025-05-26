import { useSelector, useDispatch } from "react-redux";

import { NavLink, useLocation, useNavigate } from "react-router";
import { logout } from "../features/slices/authSlice";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import CartComponent, { FavouriteComponent } from "../test";
const HeaderRoute = () => {
  const { user, accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const guestHeader = (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section*/}
        <div className="flex items-center space-x-4">
          {/* <a
            href="#"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            سجل الآن
          </a> */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                : "text-black hover:text-orange-500 font-medium"
            }
          >
            تسجيل الدخول
          </NavLink>

          <NavLink
            to="/cookerHomePage"
            className={({ isActive }) =>
              isActive
                ? "hidden"
                : "bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            }
          >
            كن طاهي
          </NavLink>
        </div>

        {/* Middle Section */}
        <nav className="  flex space-x-6">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-mainColor font-bold"
                : "text-black hover:text-orange-500"
            }
          >
            تواصل معنا
          </NavLink>
          {/* <a href="#" className="text-gray-700 hover:text-orange-500">
            تواصل معنا
          </a> */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-mainColor font-bold"
                : "text-black hover:text-orange-500"
            }
          >
            من نحن
          </NavLink>
          {/* <a href="#" className="text-gray-700 hover:text-orange-500">
            الطهاة
          </a> */}
          <NavLink
            to="/meals"
            className={({ isActive }) =>
              isActive
                ? "text-mainColor font-bold"
                : "text-black hover:text-orange-500"
            }
          >
            الوجبات
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-mainColor font-bold"
                : "text-black hover:text-orange-500"
            }
          >
            الرئيسية
          </NavLink>
        </nav>

        {/* Right Section */}

        <div className="flex items-center">
          <span className="text-orange-500 text-xl font-bold me-2">
            HandBiet
          </span>
          <img
            src="/Header/icon cover.png"
            alt="HandBiet Logo"
            className="w-8 h-12"
          />
        </div>
      </div>
    </header>
  );

  const userHeader = (
    <header className="bg-white shadow-sm z-50 py-4 px-6 border-b border-gray-200 sticky top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section*/}
        <div id="user-nav" class="flex items-center space-x-4">
          <div class="dropdown relative">
            <Dropdown
              renderTrigger={() => (
                <button class="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
                  <i class="fas fa-chevron-down text-xs"></i>
                  <span className="text-md text-center pb-1">
                    {user?.firstName + " " + user?.lastName}
                  </span>
                  <Avatar
                    img={user?.profilePicture}
                    size="sm"
                    alt={user?.firstName + " " + user?.lastName}
                    onError={(e) => (e.target.src = "/avatarDefault.png")}
                    rounded
                  />
                </button>
              )}
              label={`${user?.firstName} ${user?.lastName}`}
              clearTheme
              theme={{
                arrowIcon: "ml-2 h-4 w-4",
                content: "py-1 focus:outline-none",
                floating: {
                  animation: "transition-opacity",
                  arrow: {
                    base: "absolute z-10 h-2 w-2 rotate-45",
                    style: {
                      dark: "bg-gray-900 dark:bg-gray-700",
                      light: "bg-white",
                      auto: "bg-white dark:bg-gray-700",
                    },
                    placement: "-4px",
                  },
                  base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
                  content: "py-1 text-sm text-gray-700 dark:text-gray-200",
                  divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
                  header:
                    "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
                  hidden: "invisible opacity-0",
                  item: {
                    container: "",
                    base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
                    icon: "me-2 h-4 w-4",
                  },
                  style: {
                    dark: "bg-gray-900 text-white dark:bg-gray-700",
                    light: "border border-gray-200 bg-white text-gray-900",
                    auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
                  },
                  target: "w-fit",
                },
                inlineWrapper: "flex items-center",
              }}
            >
              <DropdownHeader>
                {/* <span className="block text-sm">Bonnie Green</span> */}
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </DropdownHeader>
              <DropdownItem
                dir="rtl"
                icon={HiViewGrid}
                as={NavLink}
                to="/user-dashboard"
              >
                حسابي
              </DropdownItem>
              <DropdownItem
                dir="rtl"
                icon={HiCog}
                as={NavLink}
                to="/user-dashboard/setting-profile"
              >
                الإعدادات
              </DropdownItem>
              {/* <DropdownItem icon={HiCurrencyDollar}>Earnings</DropdownItem> */}
              <DropdownDivider />
              <DropdownItem dir="rtl" icon={HiLogout} onClick={handleLogout}>
                تسجيل الخروج
              </DropdownItem>
            </Dropdown>
            {/* <button class="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
                <span id="username">محمد</span>
                <i class="fas fa-user-circle text-2xl"></i>
                <i class="fas fa-chevron-down text-xs"></i>
              </button> */}
            {/* <div class="dropdown-menu absolute hidden start-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                حسابي
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                طلباتي
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                المفضلة
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                الإعدادات
              </a>
              <a
                href="#"
                id="logout-btn"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                تسجيل الخروج
              </a>
            </div> */}
          </div>
          <CartComponent></CartComponent>
          <FavouriteComponent></FavouriteComponent>
          {/* <div href="#" class="relative text-gray-700 hover:text-orange-500">
            <i class="fas fa-shopping-cart text-xl"></i>
            <span class="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </div> */}
          {/* <a href="#" class="relative text-gray-700 hover:text-orange-500">
            <i class="fas fa-heart text-2xl"></i>
            <span class="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              5
            </span>
          </a> */}
        </div>

        {/* Middle Section */}
        <nav className="  flex space-x-6">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-mainColor font-bold"
                : "text-black hover:text-orange-500"
            }
          >
            تواصل معنا
          </NavLink>
          {/* <a href="#" className="text-gray-700 hover:text-orange-500">
            تواصل معنا
          </a> */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-mainColor font-bold"
                : "text-black hover:text-orange-500"
            }
          >
            من نحن
          </NavLink>
          {/* <a href="#" className="text-gray-700 hover:text-orange-500">
            من نحن
          </a> */}
          {/* <a href="#" className="text-gray-700 hover:text-orange-500">
            الطهاة
          </a> */}

          <NavLink
            to="/meals"
            className={({ isActive }) =>
              isActive
                ? "text-mainColor font-bold"
                : "text-black hover:text-orange-500"
            }
          >
            الوجبات
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-mainColor font-bold"
                : "text-black hover:text-orange-500"
            }
          >
            الرئيسية
          </NavLink>
        </nav>

        {/* Right Section */}

        <div className="flex items-center">
          <span className="text-orange-500 text-xl font-bold me-2">
            HandBiet
          </span>
          <img
            src="/Header/icon cover.png"
            alt="HandBiet Logo"
            className="w-8 h-12"
          />
        </div>
      </div>
    </header>
  );

  return accessToken && user ? userHeader : guestHeader;
};

export default HeaderRoute;
