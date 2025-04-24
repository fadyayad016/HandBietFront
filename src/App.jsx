import React from "react";


import MainMeals from "./components/custom/HomePageComponents/MainMeals";
import WhyUsComponents from "./components/custom/HomePageComponents/WhyUsComponents";
import ChifsRating from "./components/custom/HomePageComponents/ChifsRating";
import HowItIsWorkComponent from "./components/custom/HomePageComponents/HowItIsWorkComponent";
import BestChefs from "./components/custom/HomePageComponents/BestChefs";
function App() {
  return (
    <>
 <MainMeals/>
 <br />
 <BestChefs/> 
<br />
  <WhyUsComponents/>
   <ChifsRating/>
   <HowItIsWorkComponent/> 
   </>
     
  );
}

export default App;
