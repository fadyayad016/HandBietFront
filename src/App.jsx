import React from "react";


import MainMeals from "./components/custom/HomePageComponents/MainMeals";
import WhyUsComponents from "./components/custom/HomePageComponents/WhyUsComponents";
import ChifsRating from "./components/custom/HomePageComponents/ChifsRating";
import HowItIsWorkComponent from "./components/custom/HomePageComponents/HowItIsWorkComponent";
import BestChefs from "./components/custom/HomePageComponents/BestChefs";
import CustomersOpinions from "./components/custom/HomePageComponents/CustomersOpinions";
import Header from "./components/custom/HomePageComponents/Header";
// import ContactUsPage from "./components/custom/ContactUs/ContactUsPage";
// import WhyJoinTop from "./components/Hossam Walied/custom/WhyJoin/WhyJoinTop";
import SettingUserProfile from "./components/Hossam Walied/SettingUserProfile/SettingUserProfile";
// import UserHomePage from "./components/Hossam Walied/custom/UserHome/UserHomePage";
import CommonQuestionPage from './components/Hossam Walied/CommonQuestionPage/CommonQuestionPage';
import ContactUsPage from "./components/Hossam Walied/ContactUs/ContactUsPage";
import UserHomePage from './components/Hossam Walied/UserHome/UserHomePage';
import WhyJoinTop from './components/Hossam Walied/WhyJoin/WhyJoinTop';
function App() {
  return (
    <>
    <Header/>
    <br />
 <MainMeals/>
 <br />
 <BestChefs/> 
<br />
<HowHandBietWorks/>
<br />
<CustomersOpinions/>
<ReadyToExperience/>
<Footer/>
  <WhyUsComponents/>
   <ChifsRating/>
   <HowItIsWorkComponent/>  

   {/* <CommonQuestionPage/> */}
   {/* <ContactUsPage/> */}
   {/* <WhyJoinTop/> */}
   {/* <SettingUserProfile/> */}
   <UserHomePage/>
   </>
     
  );
}

export default App;
