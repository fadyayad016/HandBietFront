import React from "react";


import MainMeals from "./components/custom/HomePageComponents/MainMeals";
import WhyUsComponents from "./components/custom/HomePageComponents/WhyUsComponents";
import ChifsRating from "./components/custom/HomePageComponents/ChifsRating";
import HowItIsWorkComponent from "./components/custom/HomePageComponents/HowItIsWorkComponent";
import BestChefs from "./components/custom/HomePageComponents/BestChefs";
import CustomersOpinions from "./components/custom/HomePageComponents/CustomersOpinions";
import Header from "./components/custom/HomePageComponents/Header";
import FoodMenu from "../src/components/Ammar Adel/Components/FoodMenu";
import Menu from "./components/Ammar Adel/Pages/menu";
import CookerMenuParent from "./components/Ammar Adel/Pages/CookerMenuParent";

 
function App() {
  return (
    <>
      {/* <Header/>
    <br />
 <MainMeals/>
 <br />
 <BestChefs/> 
<br />
<CustomersOpinions/>

  <WhyUsComponents/>
   <ChifsRating/>
   <HowItIsWorkComponent/>  */}
      {/* <Menu /> */}
      <CookerMenuParent />
    </>

  );
}

export default App;
