import React from "react";

const ReadyToExperience = () => {
  return (
    <div
      className="w-full h-[270px] bg-[#F97316] flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-3xl font-bold text-[#FFFFFF] mb-4">
        جاهز لتجربة طعام منزلي رائع؟
      </h1>
      <p className="text-lg text-[#FFFFFF] mb-6">
        انضم إلى آلاف العملاء الذين يثقون بنا لتوفير وجبات منزلية لذيذة
      </p>
      <a
        href="#"
        className="flex items-center justify-center bg-[#FFFFFF] text-[#F97316] font-bold py-2 px-6 rounded-full hover:bg-gray-200"
      >    <span className="ml-2 text-[#F97316] text-xl">&larr;</span>

          ابدأ الآن
      </a>
    </div>
  );
};

export default ReadyToExperience;