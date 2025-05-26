import React from "react";
import CookerMenu from "./Components/CookerMenu";
import SideMenu from "./Components/SideMenu";
import SideMenuBottom from "./Components/SideMenuBottom";
import PopupModaledit from "./Components/PopupModaledit";

const CookerMenuParent = () => {
  return (
    <>
      <div className="bg-gray-100 h-full  mx-auto   grid grid-cols-6" dir="rtl">
        <div className="col-span-1 hidden md:block ">
          {" "}
          <SideMenu />
        </div>
        <div className="col-span-6   md:hidden">
          {" "}
          <SideMenuBottom />
        </div>

        <div className="col-span-6 md:col-span-5 w-full md:w-full">
          {" "}
          <CookerMenu />
        </div>
      </div>
    </>
  );
};

export default CookerMenuParent;
