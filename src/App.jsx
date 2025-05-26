import React from "react";
import CookerMenuParent from "./Pages/DasbordCooker/CookerMenuParent";
import ContactUsPage from "./Pages/ContactUs/ContactUsPage";
import WhyJoinTop from "./Pages/Home/Components/WhyJoinTop";
import AboutUsAntherOne from "./Pages/About/AboutUs";
import AllQuestions from "./Pages/CommonQuestion/AllQuestions";
import FrequentlyQuestionsPage from "./components/FrequentlyQuestionsPage";
import ProductDetailesComponent from "./Pages/MealDetails/Components/ProductDetailesComponent";
import SimilarMeals from "./Pages/MealDetails/Components/SimilarMeals";
import MealDetailsPage from "./Pages/MealDetails/MealDetailsPage";
import Cart from "./Pages/Payment/Cart";
import CheckOut from "./Pages/Payment/CheckOut";
import Payment from "./Pages/Payment/Payment";
import ChifsRating from "./Pages/Home/Components/ChifsRating";
import CustomersOpinions from "./Pages/Home/Components/CustomersOpinions";
import HowHandBietWorks from "./Pages/Home/Components/HowHandBietWorks";
import HowItIsWorkComponent from "./Pages/Home/Components/HowItIsWorkComponent";
import WhyUsComponents from "./Pages/Home/Components/WhyUsComponents";
import ReadyToExperience from "./Pages/Home/Components/ReadyToExperience";
import MainMeals from "./Pages/Home/Components/MainMeals";
import ImgHome from "./Pages/Home/Components/ImgHome";
import BestChefs from "./Pages/Home/Components/BestChefs";
import HomePhoto from "./Pages/Home/Components/HomePhoto";
import Header from "./components/Header";
import Loading from "./components/Loading";
import BrowseMenu from "./Pages/BrowseMenu/BrowseMenu";
import UserProfilePage from "./Pages/DasbordCustmer/UserProfilePage";
import CommonQuestionPage from "./Pages/CommonQuestion/CommonQuestionPage";
import AboutUsPage from "./Pages/About/AboutUsPage";
import FavouritePage from "./Pages/DasbordCustmer/FavouritePage";
import OrderHistoryPage from "./Pages/DasbordCustmer/OrderHistoryPage";
import SettingUserProfile from "./Pages/DasbordCustmer/SettingUserProfile";
import ContactUs from "./Pages/ContactUs/ContactUs";
import MealDetailes from "./Pages/MealDetails/Components/MealDetailes";
import ChiefsDetailesPage from "./Pages/CookerProfile/ChiefsDetailesPage";
import CookerHomePage from "./Pages/Home/CookerHomePage";
import UserHomePage from "./Pages/Home/UserHomePage";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginForm from "./Pages/Login/LoginForm";
import RegisterForm from "./Pages/Register/RegisterForm";
import HeaderRoute from "./utils/homeRoute";
import { ToastContainer } from "react-toastify";
// import { useGetUserQuery } from "./features/api/authApi";

function App() {
  // const { isLoading } = useGetUserQuery(0, {
  //   skip: !localStorage.getItem("accessToken"),
  // });
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  return (
    <>
      <BrowserRouter>
        <HeaderRoute></HeaderRoute>
        <Routes>
          <Route path="/" element={<UserHomePage />} />
          <Route path="/cookerHomePage" element={<CookerHomePage />} />
          <Route path="/meals" element={<BrowseMenu />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/meals/:id" element={<MealDetailes />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/questions" element={<CommonQuestionPage />} />
          <Route path="/chief/:id" element={<ChiefsDetailesPage />} />
          <Route path="/user-dashboard" element={<UserProfilePage />} />
          <Route path="/user-dashboard/favourite" element={<FavouritePage />} />
          <Route
            path="/user-dashboard/order-history"
            element={<OrderHistoryPage />}
          />
          <Route
            path="/user-dashboard/setting-profile"
            element={<SettingUserProfile />}
          />
        </Routes>
        <ToastContainer />
        {/* <Loading></Loading> */}
        {/* <BrowseMenu></BrowseMenu> */}
        {/* <CookerMenuParent></CookerMenuParent> */}
        {/* <UserProfilePage></UserProfilePage> */}
        {/* <ContactUsPage></ContactUsPage> */}
        {/* <CommonQuestionPage></CommonQuestionPage> */}
        {/* <AboutUsPage></AboutUsPage> */}
        {/* <FavouritePage></FavouritePage> */}
        {/* <OrderHistoryPage></OrderHistoryPage> */}
        {/* <SettingUserProfile></SettingUserProfile> */}
        {/* <WhyJoinTop></WhyJoinTop> */}
        {/* <AboutUsAntherOne></AboutUsAntherOne> */}
        {/* <AboutUsPage></AboutUsPage> */}
        {/* <AllQuestions></AllQuestions> */}
        {/* <ContactUs></ContactUs> */}
        {/* <FrequentlyQuestionsPage></FrequentlyQuestionsPage> */}
        {/* <MealDetailsPage></MealDetailsPage> */}
        {/* <ChiefsDetailesPage></ChiefsDetailesPage> */}
        {/* <Cart></Cart>
      <CheckOut></CheckOut>
      <Payment></Payment> */}
        {/* <UserHomePage></UserHomePage> */}
        {/* <CookerHomePage></CookerHomePage> */}
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
