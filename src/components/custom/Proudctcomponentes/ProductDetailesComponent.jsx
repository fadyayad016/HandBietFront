import React from 'react'
import MealDetailes from "./MealDetailes";
import SimilarMeals from './SimilarMeals';


const ProductDetailesComponent = () => {
    return (

        <div dir='rtl'>


            {/* navigation */}
            <nav class="flex mt-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a href="#" class="inline-flex items-center hover:text-hoverColor text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:text-white">
                            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            الرئيسيه
                        </a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-hoverColor md:ms-2 dark:text-gray-400 dark:hover:text-white">الوجبات</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ms-1 text-sm font-medium hover:text-hoverColor text-gray-500 md:ms-2 dark:text-gray-400 ">كبسه  دجاج</span>
                        </div>
                    </li>
                </ol>
            </nav>



            <div className="grid grid-cols-1 py-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 my-5 mx-10">

                {/* Main Image */}
                <div className='w-auto bg-white border border-gray-200 rounded-lg shadow-sm col-span-2 '>

                    <img className='h-auto  rounded-lg' src={"/public/ProductDetailesImages/detailesImage1.png"} alt="" />
                    <table className='h-auto mt-5'>
                        <tr>
                            <td>
                                <img className='h-auto max-w-full rounded-lg' src={"/public/ProductDetailesImages/detailesImage2.png"} alt="" />
                            </td>

                            <td>
                                <img className='h-auto max-w-full rounded-lg' src={"/public/ProductDetailesImages/detailesImage3.png"} alt="" />
                            </td>

                            <td>
                                <img className='h-auto max-w-full rounded-lg' src={"/public/ProductDetailesImages/detailesImage4.png"} alt="" />
                            </td>

                            <td>
                                <img className='h-auto max-w-full rounded-lg' src={"/public/ProductDetailesImages/detailesImage5.png"} alt="" />
                            </td>
                        </tr>

                    </table>

                </div>


                {/* Detailes  */}
                <div className=' px-8 py-6 bg-white border border-gray-200 rounded-lg shadow-sm'>

                    <span class="bg-red-200 text-mainColor text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">توصيل سريع </span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">الاكثر مبيعا</span>




                    {/* Header - Product Name and Price */}
                    <div className="flex flex-row justify-between mb-8">
                        <h1 className="text-3xl font-bold text-right">كبسة دجاج</h1>
                        <div className="text-orange-500 font-bold text-2xl">75 <span className="text-sm">ر.س</span></div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-start mb-4">

                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {/* Stars would be actual star components/icons */}
                                {[...Array(4)].map((_, index) => (
                                    <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>


                            <div className="text-gray-500 text-sm">(تقييم)</div>

                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex justify-end mb-6">
                        <p className="text-right text-gray-700">
                            كبسة دجاج تقليدية مع أرز بسمتي عالي الجودة وخلطة توابل مميزة من 3 أشخاص.
                        </p>
                    </div>

                    {/* Quantity */}
                    <div className="text-right font-semibold text-lg mb-2">الكمية</div>
                    <div className="flex  mb-8">
                        <div className="flex border rounded-lg overflow-hidden">
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
                                <span className="text-gray-700">+</span>
                            </button>
                            <div className="flex items-center justify-center px-6 py-2 border-x">
                                <span className="text-lg">1</span>
                            </div>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
                                <span className="text-gray-700">-</span>
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="flex flex-col gap-4">
                        <button className="w-full bg-orange-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600">
                            <span className="text-lg font-medium">أضف إلى السلة</span>
                            <svg className="w-7 h-7  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                            </svg>

                        </button>

                        {/* Delivery Info */}
                        <div className="flex justify-between items-center text-gray-600 mt-4 border-t pt-4">


                            <div className="flex items-center">
                                <svg class="w-[27px] h-[27px] text-mainColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                </svg>
                                <span className="mx-1">20دقيقة</span>
                            </div>

                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5" />
                                </svg>
                                <span className="mx-1 text-right">متوفر في منطقتك</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



           

           
        </div>
    )
}

export default ProductDetailesComponent