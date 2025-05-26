import React, { useState } from "react";

import { Dropdown, DropdownItem } from "flowbite-react";
import { PaginationComponent } from "./Pagination";
import { useNavigate } from "react-router";
import { useAddToCartMutation } from "../../../features/api/cartApi";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegHeart } from "react-icons/fa";
import {
  useAddToFavouriteMutation,
  useDeleteFavouriteMutation,
} from "../../../features/api/favouriteApi";
import { useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";

const FoodMenu = ({ meals, favouriteData }) => {
  const user = useSelector((state) => state.auth.user);
  const [addToCart] = useAddToCartMutation();
  const [addToFavourite] = useAddToFavouriteMutation();
  const [deleteFavourite] = useDeleteFavouriteMutation();
  const navegate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [mealsPerPage, setMealsPerPage] = useState(meals.slice(currentPage, 9));

  const handleAddToCart = (id) => {
    if (!user)
      toast.warning("You must be logged in to add to cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    addToCart({ mealId: id, quantity: 1 });
  };

  const toggleFavourite = (meal, event) => {
    event.stopPropagation();
    if (favouriteData.some((fav) => fav._id === meal._id)) {
      deleteFavourite(meal._id);
    } else {
      addToFavourite(meal._id);
    }
  };
  const onPageChange = (page) => {
    console.log(page);
    page--;
    console.log(page);
    setCurrentPage(page);
    setMealsPerPage(meals.slice(page * 9, page * 9 + 9));
  };
  console.log(meals);
  return (
    <>
      <div className="m-4 bg-white flex flex-row justify-between items-center h-13 ">
        <span className=" text-md font-bold   lg:font-extrabold lg:text-2xl p-0.5">
          الوجبات المتاحة
        </span>

        <div className="flex flex-row justify-end items-center pe-5">
          <span className=" text-xs  lg:text-1xl lg:font-bold ">
            ترتيب حسب :
          </span>

          <Dropdown
            label=" "
            className="bg-white text-black px-2 m-0 "
            size="sm"
            renderTrigger={() => (
              <a class="bg-[#f97316] text-white text-xs cursor-pointer  font-semibold px-2.5 py-0.5 rounded-sm dark:bg-orange-200 dark:text-orange-800 ms-3">
                الأجدد
              </a>
            )}
          >
            <DropdownItem className="rounded-2xl">الأقل سعرا</DropdownItem>
            <DropdownItem className="rounded-2xl ">الأكثر طلبا</DropdownItem>
            <DropdownItem className="rounded-2xl ">الأقدم</DropdownItem>
            <DropdownItem className="rounded-2xl ">الأسوأ</DropdownItem>
          </Dropdown>
        </div>
        <div className="flex flex-row justify-end items-center pe-5">
          <span className=" text-xs  lg:text-1xl lg:font-bold">
            نوع الوجبة :
          </span>

          <Dropdown
            label=" "
            className="bg-white text-black px-2 m-0 "
            size="sm"
            renderTrigger={() => (
              <a class="bg-[#f97316] text-white text-xs cursor-pointer  font-semibold px-2.5 py-0.5 rounded-sm dark:bg-orange-200 dark:text-orange-800 ms-3">
                الكل
              </a>
            )}
          >
            <DropdownItem className="rounded-2xl">فطور</DropdownItem>
            <DropdownItem className="rounded-2xl ">غداء</DropdownItem>
            <DropdownItem className="rounded-2xl ">عشاء</DropdownItem>
            <DropdownItem className="rounded-2xl ">حلويات</DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div
        className="grid  items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pe-8 "
        dir="rtl"
      >
        {mealsPerPage.map((meal) => (
          <div
            key={meal._id}
            class="w-full relative bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ms-5"
            onClick={() => navegate(`/meals/${meal._id}`)}
          >
            <button
              onClick={(event) => toggleFavourite(meal, event)}
              type="button"
              className="absolute top-3 z-1 right-4 text-red-500 text-xl bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow  hover:bg-red-100 hover:scale-105 transition duration-300"
            >
              {favouriteData?.some((fav) => fav._id === meal._id) ? (
                <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
              ) : (
                <FaRegHeart style={{ color: "red" }} />
              )}
            </button>
            <a href="#" className="relative">
              <img
                class=" rounded-t-lg w-full h-48 object-cover "
                src={meal?.images[0]}
                alt="product image"
              />
              <span
                class={`absolute top-2 left-0 bg-orange-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full`}
              >
                الاكثر طلبا
              </span>
            </a>
            <div class="px-5 pb-5 pt-4 ">
              <a href="#" className="flex items-center justify-between">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {meal.name}
                </h5>
                <span class="text-md font-bold text-[#f97316] dark:text-white">
                  {meal.price}
                </span>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <span class="bg-orange-100  max-w-64 truncate text-orange-800 text-xs font-semibold px-1 py-0.5 rounded-sm dark:bg-orange-200 dark:text-orange-800 ms-0">
                  {meal.description}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[...Array(5)].map((_, index) => {
                      let starOn = index < meal.rating;
                      if (starOn) {
                        return (
                          <svg
                            key={index}
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        );
                      } else {
                        return (
                          <svg
                            key={index}
                            className="w-4 h-4 text-gray-200 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        );
                      }
                    })}
                  </div>
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-orange-200 dark:text-orange-800 ms-3">
                    {meal.rating}
                  </span>
                </div>

                <a
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(meal._id);
                  }}
                  class="text-white cursor-pointer bg-mainColor hover:bg-hoverColor focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  اضف الي العربه ←
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PaginationComponent
        numberOfPages={Math.ceil(meals.length / 9)}
        currentPage={currentPage + 1}
        onPageChange={onPageChange}
      ></PaginationComponent>

      {/* <nav
        aria-label="Page navigation example"
        className="flex justify-center mt-5 mb-5"
      >
        <ul class="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-white border border-orange-300 bg-[#f97316] hover:bg-orange-100 hover:text-orange-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Next</span>
              <svg
                class="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav> */}
    </>
  );
};

export default FoodMenu;
