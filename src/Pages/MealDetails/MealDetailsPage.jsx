import React from "react";
import ProductDetailesComponent from "./Components/ProductDetailesComponent";
import MealDetailes from "./Components/MealDetailes";
import SimilarMeals from "./Components/SimilarMeals";

export default function MealDetailsPage() {
  return (
    <>
      <ProductDetailesComponent></ProductDetailesComponent>
      <MealDetailes></MealDetailes>
      <SimilarMeals></SimilarMeals>
    </>
  );
}
