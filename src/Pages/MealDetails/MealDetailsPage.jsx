import React from "react";
import ProductDetailesComponent from "./Components/ProductDetailesComponent";
import MealDetailes from "./Components/MealDetailes";
import SimilarMeals from "./Components/SimilarMeals";
import { useParams } from "react-router";
import { useGetMealQuery } from "../../features/api/mealsApi";

export default function MealDetailsPage() {
  const { id } = useParams();
  const { data: data, isLoading } = useGetMealQuery(id);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ProductDetailesComponent
            mealDetails={data}
          ></ProductDetailesComponent>
          <MealDetailes mealDetails={data}></MealDetailes>
          <SimilarMeals></SimilarMeals>
        </>
      )}
    </>
  );
}
