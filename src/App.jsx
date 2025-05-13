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

import ProductDetailesComponent from "./components/custom/Proudctcomponentes/ProductDetailesComponent";
import ProductDetailesPage from "./Pages/ProductDetailesPage";
import ChiefsDetailesPage from "./Pages/ChiefsDetailesPage";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import Payment from "./Pages/Payment";


 
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


    
  {/* <MainMeals/>

  <WhyUsComponents/>

   <ChifsRating/>
   <HowItIsWorkComponent/>  */}
      {/* <Menu /> */}
      <CookerMenuParent />


   <HowItIsWorkComponent/> 

   <ProductDetailesPage/> 
   
   <ChiefsDetailesPage/>
   
   <Cart/>

   <CheckOut/> */}

   <Payment/>



   </>
     
  );
}

export default App;
