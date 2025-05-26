import React from "react";
import HomePhoto from "./Components/HomePhoto";
import MainMeals from "./Components/MainMeals";
import BestChefs from "./Components/BestChefs";
import HowHandBietWorks from "./Components/HowHandBietWorks";
import HowItIsWorkComponent from "./Components/HowItIsWorkComponent";
import CustomersOpinions from "./Components/CustomersOpinions";

export default function UserHomePage() {
  return (
    <>
      <HomePhoto></HomePhoto>
      <hr className="py-4" />
      <MainMeals></MainMeals>
      <BestChefs></BestChefs>
      {/* <HowHandBietWorks></HowHandBietWorks> */}
      <HowItIsWorkComponent></HowItIsWorkComponent>
      <CustomersOpinions></CustomersOpinions>
    </>
  );
}
