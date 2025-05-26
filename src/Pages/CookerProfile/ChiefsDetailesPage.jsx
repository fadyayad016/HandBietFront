import React from "react";
import ChiefName from "./Components/ChiefName";
import ChiefMeals from "./Components/ChiefMeals";
import CustomerRating from "./Components/CustomerRating";
import ChiefStory from "./Components/ChiefStory";

const ChiefsDetailesPage = () => {
  return (
    <div dir="rtl" className="px-4 sm:px-6 lg:px-8 my-5 bg-[#f8f8f8]">
      <ChiefName />
      <ChiefMeals />
      <CustomerRating />
      <ChiefStory />
    </div>
  );
};

export default ChiefsDetailesPage;
