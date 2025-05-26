import React from "react";
import FoodMenu from "./Components/FoodMenu";
import { useGetMealsQuery } from "../../features/api/mealsApi";
import Loading from "../../components/Loading";
import { useGetFavouriteQuery } from "../../features/api/favouriteApi";

const BrowseMenu = () => {
  // const { data, isLoading, isError, error } = useGetMealsQuery();
  const { data, error, isLoading, isFetching, isSuccess, isError } =
    useGetMealsQuery();
  const { data: favouriteData, isLoading: isLoadingFavourite } =
    useGetFavouriteQuery();

  return (
    <>
      {isLoading && <Loading></Loading>}
      {isFetching && <div>Fetching...</div>}
      {isError && <div>Error: {JSON.stringify(error)}</div>}
      {/* {isSuccess && <div>{JSON.stringify(data)}</div>} */}
      {/* {console.log(isSuccess)} */}
      {/* {JSON.stringify(data)} */}

      <div className="bg-gray-100 pt-10 " dir="rtl">
        <div>
          <form class="max-w-md mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <input
                type="text"
                id="default-search"
                className="block w-full p-3  ps-10 text-sm text-gray-900 border border-gray-300 rounded-4xl bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                placeholder="ابحث عن وجبة ،طبق أو مكون ..."
                required
              />

              <div class="absolute inset-y-0 end-5 flex items-center ps-3 ">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="col-span-1">
          <SideMenu />
        </div> */}
        {isSuccess && !isLoadingFavourite && (
          <FoodMenu meals={data} favouriteData={favouriteData} />
        )}
      </div>
    </>
  );
};

export default BrowseMenu;
