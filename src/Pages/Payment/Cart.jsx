import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  useAddToCartMutation,
  useDeleteCartItemMutation,
  useGetCartQuery,
} from "../../features/api/cartApi";
import Loading from "../../components/Loading";
import { useGetMealsQuery } from "../../features/api/mealsApi";
import { useAddToFavouriteMutation } from "../../features/api/favouriteApi";

const Cart = () => {
  const { data: cart, isLoading } = useGetCartQuery();
  const [addToCart] = useAddToCartMutation();

  const [
    addToFavourite,
    { isSuccess: isSuccessFavourite, data: dataFavourite },
  ] = useAddToFavouriteMutation();
  const [deleteFromCart] = useDeleteCartItemMutation();
  const {
    data: meals,
    isLoading: isLoadingMeals,
    isFetching,
    isError,
  } = useGetMealsQuery();
  const getRandomItems = (array, num) => {
    if (num >= array.length) return array;
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  const totalPrice = cart?.items
    .reduce((sum, item) => sum + item.meal?.price * item.quantity, 0)
    .toFixed(2);
  const handleIncrement = (id) => {
    addToCart({ mealId: id, quantity: 1 });
  };

  const handleDecrement = (id) => {
    addToCart({ mealId: id, quantity: -1 });
  };
  const handleAddToFavourite = (id) => {
    addToFavourite(id)
      .unwrap()
      .then(() => {
        console.log(dataFavourite);
        console.log(isSuccessFavourite);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div dir="rtl" className="px-4 sm:px-6 lg:px-8 my-5 ">
          <div className="flex justify-center">
            {/* Steps */}
            <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
              <li class="after:border-1 flex items-center text-mainColor after:mx-6 after:hidden after:h-2 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                  <svg
                    class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  السله
                </span>
              </li>

              <li class="after:border-1 flex items-center text-gray-700 after:mx-6 after:hidden after:h-2 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                  <svg
                    class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  التوصيل
                </span>
              </li>

              <li class="flex shrink-0 items-center">
                <svg
                  class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                الدفع
              </li>
            </ol>
          </div>

          <hr />

          <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div class="mx-auto">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl flex inline-flex">
                <svg
                  className="w-8 h-8 text-mainColor dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
                    clip-rule="evenodd"
                  />
                </svg>
                سله التسوق
              </h2>

              <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                  <div class="space-y-6">
                    {/* card 1 */}
                    {cart.items.map((item) => (
                      <div
                        key={item.meal._id}
                        class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                      >
                        <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <a href="#" class="shrink-0 md:order-1">
                            <img
                              class="h-30 w-40 object-contain dark:hidden rounded-lg"
                              src={
                                item.meal.images[0]
                                  ? item.meal.images[0]
                                  : "https://via.placeholder.com/150"
                              }
                              alt="imac image"
                            />
                          </a>

                          <label for="counter-input" class="sr-only">
                            Choose quantity:
                          </label>
                          <div class="flex items-center justify-between md:order-3 md:justify-end my-3">
                            <div class="flex items-center ">
                              <button
                                onClick={() => {
                                  handleDecrement(item.meal._id);
                                }}
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="counter-input"
                                class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <svg
                                  class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 2"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h16"
                                  />
                                </svg>
                              </button>
                              <input
                                type="text"
                                id="counter-input"
                                data-input-counter
                                class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                placeholder=""
                                value={item.quantity}
                                required
                              />
                              <button
                                onClick={() => handleIncrement(item.meal._id)}
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="counter-input"
                                class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <svg
                                  class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 1v16M1 9h16"
                                  />
                                </svg>
                              </button>
                            </div>

                            <div class="text-end md:order-4 md:w-32">
                              <p class="text-base font-bold text-gray-900 dark:text-white">
                                {item.meal.price} جنية
                              </p>
                            </div>
                          </div>

                          <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a
                              href="#"
                              class="text-base font-medium text-gray-900 hover:underline dark:text-white"
                            >
                              {item.meal.name}
                            </a>

                            <div class="flex items-center gap-4">
                              <button
                                type="button"
                                class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                              >
                                <svg
                                  class="me-1.5 h-5 w-5 hover:text-red-500"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                  />
                                </svg>
                                الاضافه للمفضله
                              </button>

                              <button
                                type="button"
                                onClick={() => deleteFromCart(item.meal._id)}
                                class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="me-1.5"
                                />
                                ازاله
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* order summery */}

                <div class="mx-auto mt-6 max-w-2xl flex-1 space-y-6 lg:mt-0 lg:w-full sticky top-2/12">
                  <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    <p class="text-xl font-semibold text-gray-900 dark:text-white flex inline-flex">
                      <svg
                        class="w-6 h-6 text-mainColor dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      ملخص الطلب{" "}
                    </p>

                    <div class="space-y-4">
                      <div class="space-y-2">
                        <dl class="flex items-center justify-between gap-4">
                          <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                            السعر الاساسي
                          </dt>
                          <dd class="text-base font-medium text-gray-900 dark:text-white">
                            {totalPrice} جنية
                          </dd>
                        </dl>

                        <dl class="flex items-center justify-between gap-4">
                          <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                            خصم
                          </dt>
                          <dd class="text-red-500 font-medium text-green-600">
                            -00.00 جنية
                          </dd>
                        </dl>
                        {/* 
                        <dl class="flex items-center justify-between gap-4">
                          <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                            رسوم التوصيل
                          </dt>
                          <dd class="text-base font-medium text-gray-900 dark:text-white">
                            99 رس
                          </dd>
                        </dl>

                        <dl class="flex items-center justify-between gap-4">
                          <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                            ضريبه
                          </dt>
                          <dd class="text-base font-medium text-gray-900 dark:text-white">
                            799 رس
                          </dd>
                        </dl> */}
                      </div>

                      <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                        <dt class="text-base font-bold text-gray-900 dark:text-white">
                          المجموع
                        </dt>
                        <dd class="text-green-500 font-bold text-gray-900 dark:text-white">
                          {totalPrice} جنية
                        </dd>
                      </dl>
                    </div>

                    <a
                      href="#"
                      class="flex w-full items-center justify-center rounded-lg bg-mainColor hover:bg-hoverColor 
                                                    px-5 py-2.5 text-sm font-medium text-white 
                                                    focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600
                                                     bg-mainColor hover:bg-hoverColor dark:focus:ring-primary-800"
                    >
                      متابعه الي الدفع ←
                    </a>

                    <div class="flex items-center justify-center gap-2">
                      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {" "}
                        او{" "}
                      </span>
                      <a
                        href="#"
                        title=""
                        class="inline-flex items-center gap-2 text-sm font-medium text-primary-500 no-underline hover:underline dark:text-primary-500"
                      >
                        استمر في التسوق ←
                      </a>
                    </div>
                  </div>

                  {/* Discout */}

                  <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    <form class="space-y-4">
                      <div>
                        <label
                          for="voucher"
                          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white flex inline-flex"
                        >
                          <svg
                            class="w-6 h-6 text-mainColor dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M20.29 8.567c.133.323.334.613.59.85v.002a3.536 3.536 0 0 1 0 5.166 2.442 2.442 0 0 0-.776 1.868 3.534 3.534 0 0 1-3.651 3.653 2.483 2.483 0 0 0-1.87.776 3.537 3.537 0 0 1-5.164 0 2.44 2.44 0 0 0-1.87-.776 3.533 3.533 0 0 1-3.653-3.654 2.44 2.44 0 0 0-.775-1.868 3.537 3.537 0 0 1 0-5.166 2.44 2.44 0 0 0 .775-1.87 3.55 3.55 0 0 1 1.033-2.62 3.594 3.594 0 0 1 2.62-1.032 2.401 2.401 0 0 0 1.87-.775 3.535 3.535 0 0 1 5.165 0 2.444 2.444 0 0 0 1.869.775 3.532 3.532 0 0 1 3.652 3.652c-.012.35.051.697.184 1.02ZM9.927 7.371a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2h-.01Zm5.889 2.226a1 1 0 0 0-1.414-1.415L8.184 14.4a1 1 0 0 0 1.414 1.414l6.218-6.217Zm-2.79 5.028a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          كود الخصم
                        </label>
                        <input
                          type="text"
                          id="voucher"
                          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="ادخل كود الخصم"
                        />
                      </div>
                      <button
                        type="submit"
                        class="flex w-full items-center justify-center rounded-lg bg-mainColor hover:bg-hoverColor px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        تطبيق{" "}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* may Like */}

          <div class=" mt-8 ">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex inline-flex">
              <svg
                class="w-6 h-6 text-mainColor dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12.2605 3.79368c-.281-.22353-.5975-.3898-.9173-.5062-.7024-.25567-1.49918-.30568-2.24095-.18661-1.15818.18592-2.51613.88193-2.97474 2.22764-.40442.04107-.77944.1442-1.12195.31017-.59942.29046-1.02697.73841-1.32274 1.22999C3.11436 7.81349 3 8.97014 3 9.78568c0 .89142.27124 1.65012.76053 2.21432H20.3218c.0101-.0125.0201-.0251.0301-.0379.4919-.6324.6411-1.4185.6479-2.12509.1233-1.32715-.3036-2.47-1.0971-3.27874-.6018-.6132-1.3829-1.00304-2.2193-1.15392-.431-1.19435-1.444-2.10209-2.8973-2.26254-.9135-.10087-1.819.19102-2.5256.65187ZM9 8c0-.55228.44772-1 1-1h.01c.5523 0 1 .44772 1 1s-.4477 1-1 1H10c-.55228 0-1-.44772-1-1Zm4 0c0-.55228.4477-1 1-1h.01c.5523 0 1 .44772 1 1s-.4477 1-1 1H14c-.5523 0-1-.44772-1-1Zm-7 2c0-.55228.44772-1 1-1h.01c.55228 0 1 .44772 1 1 0 .5523-.44772 1-1 1H7c-.55228 0-1-.4477-1-1Zm5 0c0-.55228.4477-1 1-1h.01c.5523 0 1 .44772 1 1 0 .5523-.4477 1-1 1H12c-.5523 0-1-.4477-1-1Zm5 0c0-.55228.4477-1 1-1h.01c.5523 0 1 .44772 1 1 0 .5523-.4477 1-1 1H17c-.5523 0-1-.4477-1-1Z"
                  clip-rule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M20.6134 14.6222c.1145-.3088-.1249-.6222-.4542-.6222H3.84086c-.32935 0-.56875.3134-.45429.6222.76918 2.0753 2.462 3.7423 4.59004 4.6741V20c0 .5523.44772 1 1 1h6.04679c.5523 0 1-.4477 1-1v-.7037c2.128-.9318 3.8209-2.5988 4.59-4.6741Z"
                />
              </svg>
              قد يعجبك ايضا
            </h3>

            <div class=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {/* card 1 */}
              {isFetching ? (
                <div class="space-y-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-2  dark:border-gray-700 dark:bg-gray-800">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-200 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                meals.slice(0, 3).map((meal) => (
                  <div
                    key={meal?._id}
                    class="relative space-y-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-2  dark:border-gray-700 dark:bg-gray-800"
                  >
                    {/* <button
                      onClick={() => console.log(meal._id)}
                      type="button"
                      className="absolute top-3 left-4 text-red-500 text-xl bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow  hover:bg-red-100 hover:scale-105 transition duration-300"
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button> */}
                    <a href="#" class="overflow-hidden rounded">
                      <img
                        class="mx-auto h-40 w-150 object-contain"
                        src={meal?.images[0] || ""}
                        alt="imac image"
                      />
                    </a>
                    <div className="mt-2">
                      <a
                        href="#"
                        class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                      >
                        {meal?.name}
                      </a>
                      <p class="mt-2 text-base font-normal  max-w-64 truncate text-gray-500 dark:text-gray-400">
                        {meal?.description}
                      </p>
                    </div>
                    <div>
                      <p class="text-lg font-bold text-gray-900 dark:text-white">
                        <span class="text-lg font-bold leading-tight text-mainColor dark:text-red-500">
                          {meal?.price} جنية
                        </span>

                        {/* <span class="line-through mx-3 text-red-600">
                          {" "}
                          399,99{" "}
                        </span> */}
                      </p>
                    </div>
                    <div class="mt-6 flex items-center gap-2.5">
                      <button
                        onClick={() => handleAddToFavourite(meal?._id)}
                        data-tooltip-target="favourites-tooltip-1"
                        type="button"
                        class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        <svg
                          class="h-5 w-5 hover:text-red-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                          ></path>
                        </svg>
                      </button>

                      <div
                        id="favourites-tooltip-1"
                        role="tooltip"
                        class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                      >
                        Add to favourites
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>

                      <button
                        onClick={() => handleIncrement(meal?._id)}
                        type="button"
                        class="inline-flex w-full items-center justify-center rounded-lg  px-5 py-2.5 text-sm font-medium  text-white bg-mainColor hover:bg-hoverColor focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <svg
                          class="-ms-2 me-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
