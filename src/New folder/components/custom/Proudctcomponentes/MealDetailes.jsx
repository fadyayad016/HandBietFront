
import React from 'react';
import { useState } from 'react';

export default function MealDetailes() {

  const accordionData = [
    {
      title: "الوصف",
      content: "كبسة الدجاج من أشهر الأكلات الشعبية في المملكة العربية السعودية ودول الخليج العربي. هذه الوجبة المميزة من الطاهي تحضر بوصفة عائلية توارثتها الأجيال، حيث يتم طهي الدجاج مع خلطة من التوابل الخاصة ثم يضاف إليه الأرز البسمتي عالي الجودة لينضج معاً ويعطي نكهة لا تقاوم."
    },
    {
      title: "طريقة التحضير",
      content: "يتم تحضير الكبسة بسلق الدجاج مع البصل والثوم وخلطة التوابل حتى ينضج تماماً، ثم يضاف الأرز المنقوع مسبقاً ويترك لينضج على نار هادئة. تقدم الكبسة مع صلصة الطماطم الطازجة والدقوس (صلصة الباذنجان) والسلطة الخضراء."
    },
    {
      title: "التقيمات",
      content: "حازت هذه الوجبه علي  تقيم  عالي  من العملاء بنسبه 4.2 ⭐️"
    }
  ];
  const [openSection, setOpenSection] = useState(accordionData);

  console.log(openSection);

  return (
    <div className="mt-8 space-y-5 mx-10" dir='rtl'>

      <h1 className="text-xl px-5 font-bold text-center">  معلومات المنتج </h1>

      {openSection.map((item, index) => (
        <div key={index} className="  rounded-lg">
          <h3 className="font-medium text-mainColor">{item.title}</h3>

          {/* <hr /> */}

          <p className="p-4 bg-gray-50 text-dark">
            {item.content}
          </p>
        </div>
      ))
      }
    </div>
  );
}
