import React from "react";
import { useState } from "react";

export default function MealDetailes({ mealDetails }) {
  const accordionData = [
    {
      title: "الوصف",
      content: mealDetails.description,
    },
    {
      title: "مكونات",
      content: mealDetails.ingredients,
    },
    {
      title: "طباخ الوجبة",
      content: mealDetails.cook.firstName + " " + mealDetails.cook.lastName,
    },
  ];
  const [openSection, setOpenSection] = useState(accordionData);

  console.log(openSection);

  return (
    <div className="mt-8 space-y-5 mx-10" dir="rtl">
      <h1 className="text-xl px-5 font-bold text-center"> معلومات المنتج </h1>

      {openSection.map((item, index) => (
        <div key={index} className="  rounded-lg">
          <h3 className="font-medium text-mainColor">{item.title}</h3>

          {/* <hr /> */}

          <p className="p-4 bg-gray-50 text-dark">{item.content}</p>
        </div>
      ))}
    </div>
  );
}
