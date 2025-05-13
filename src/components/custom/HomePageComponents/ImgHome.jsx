import React from "react";

const ImgHome = () => {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/public/Home/img.png')" }} 
    >
      <div className="absolute inset-0 bg-opacity-50 flex items-center">
        <div className="text-right text-white md:w-1/2 px-8 ml-auto">
          <h1 className="text-5xl text-center font-bold mb-4">طعم المنزل بلمسة احترافية</h1>
          <p className="text-lg  text-center mb-6">
            اكتشف أفضل الوجبات المنزلية المعدة بأيدي طهاة محليين موهوبين في منطقتك
          </p>
          <div className="flex items-center rtl:space-x-reverse">
            <a
              href="#"
              className="flex items-center justify-center bg-[#F97316] text-white font-bold py-2 px-6 rounded-l-full hover:bg-[#e2620f]"
            > بحث 
            
              <img
                src="/public/Home/search.png" 
                alt="Search Icon"
                className="w-5 h-5 mr-2"
              />
              
            </a>
            <input
              type="text"
              placeholder="ابحث عن وجبة أو طاهٍ"
              className="py-2 px-4 rounded-r-full w-2/3 text-black bg-white border border-gray-300 text-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgHome;