import React from "react";

const HowHandBietWorks = () => {
  return (
    <div className="w-full bg-[#FFFFFF] py-12 px-6 text-center">
      <h1 className="text-xl font-bold text-[#000000] mb-4">
       ؟HandBiet كيف يعمل 
      </h1>
      <p className="text-sm text-[#4B5563] mb-12">
        ثلاث خطوات بسيطة لتجربة طعام منزلي رائع
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
      

<div className="flex flex-col items-center">
  <img
    src="/public/HowHandBietWorks/receive.png"
    alt="Step 3 Logo"
    className="w-14 h-14 mb-4"
  />
  <h3 className=" font-bold text-[#1F2937] mb-2">
    استلم واستمتع
  </h3>
  <p className="text-[#4B5563] text-sm">
    استلم وجبتك الطازجة المعدة منزلياً واستمتع بها
  </p>
</div>

<div className="hidden md:block w-25 h-1 bg-[#A15C38] mx-4"></div>   
        <div className="flex flex-col items-center">
          <img
            src="/public/HowHandBietWorks/order.png"
            alt="Step 2 Logo"
            className="w-14 h-14 mb-4"
            />
          <h3 className="font-bold text-[#1F2937] mb-2">اطلب وجبتك</h3>
          <p className="text-[#4B5563] text-sm">
          حدد وقت التوصيل واكمل عملية الدفع بسهولة
          </p>
        </div>


   

        <div className="hidden md:block w-25 h-1 bg-[#A15C38] mx-4"></div>        
        <div className="flex flex-col items-center">
          <img
            src="/public/HowHandBietWorks/search.png"
            alt="Step 1 Logo"
            className="w-14 h-14 mb-4"
            />
          <h3 className=" font-bold text-[#1F2937] mb-2">ابحث واختر</h3>
          <p className="text-[#4B5563] text-sm">
            تصفح قوائم الطهاة في منطقتك واختر الوجبة التي تريدها
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowHandBietWorks;