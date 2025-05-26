import React from "react";
import WhyJoinTop from "./Components/WhyJoinTop";
import ReadyToExperience from "./Components/ReadyToExperience";
import ChifsRating from "./Components/ChifsRating";
import WhyUsComponents from "./Components/WhyUsComponents";

export default function CookerHomePage() {
  return (
    <>
      <WhyJoinTop></WhyJoinTop>
      <WhyUsComponents></WhyUsComponents>
      <ChifsRating></ChifsRating>
      <ReadyToExperience></ReadyToExperience>
    </>
  );
}
