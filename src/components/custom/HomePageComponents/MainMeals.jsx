import React from 'react'

const MainMeals = () => {
    return (
        <div dir='rtl' className="px-4 sm:px-6 lg:px-8">

            <h1 className="text-2xl sm:text-3xl font-bold  mb-4">الوجبات المميزة</h1>
            <h4 className="text-lg sm:text-xl  mb-8">استمتع بأشهى الوجبات المعدة منزلياً بأيدي أمهر الطهاة</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


                {/* Card 1 */}
                <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" class="relative ">

                        <img className="p-2 rounded-t-lg w-full h-48 object-cover" src={""} alt="product image" />
                        {/* <span class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">Badge</span> */}
                        <span class="absolute top-4 left-3 bg-[#f97316] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">الاكثر طلبا</span>
                        <span class="absolute top-4 left-23 bg-[#f97316] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">مميز</span>

                    </a>


                    <div className="px-5 pb-5">
                        <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> سلطة الكينوا الصحية</h2>
                        <h5 className="text-l font-medium tracking-tight text-gray-900 dark:text-white">سلطة غنية بالبروتين والخضروات الطازجة</h5>

                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {[...Array(4)].map((_, index) => (
                                    <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">3.3</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">رس 599</span>
                            <a href="#" className="text-white bg-[#f97316] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">اضف الي العربه ←</a>
                        </div>
                    </div>
                </div>

                {/* Card 1 */}
                <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" class="relative ">

                        <img className="p-2 rounded-t-lg w-full h-48 object-cover" src={"/public/باستا.png"} alt="product image" />
                        {/* <span class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">Badge</span> */}
                        <span class="absolute top-4 left-3 bg-[#f97316] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">الاكثر طلبا</span>
                        <span class="absolute top-4 left-23 bg-[#f97316] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">مميز</span>

                    </a>


                    <div className="px-5 pb-5">
                        <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">باستا ألفريدو</h2>
                        <h5 className="text-l font-medium tracking-tight text-gray-900 dark:text-white">باستا كريمية مع صلصة الجبن الأبيض</h5>

                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {[...Array(4)].map((_, index) => (
                                    <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">4.9</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">رس 195</span>
                            <a href="#" className="text-white bg-[#f97316] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">اضف الي العربه ←</a>
                        </div>
                    </div>
                </div>


                 {/* Card 1 */}
                 <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" class="relative ">

                        <img className="p-2 rounded-t-lg w-full h-48 object-cover" src={"/public/برجر.png"} alt="product image" />
                        {/* <span class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">Badge</span> */}
                        <span class="absolute top-4 left-3 bg-[#f97316] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">الاكثر طلبا</span>
                        <span class="absolute top-4 left-23 bg-[#f97316] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">مميز</span>

                    </a>


                    <div className="px-5 pb-5">
                        <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> برجر لحم مشوي </h2>
                        <h5 className="text-l font-medium tracking-tight text-gray-900 dark:text-white"> برجر لحم بقري مع خضار طازجة</h5>

                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {[...Array(4)].map((_, index) => (
                                    <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">4.2</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">رس 380</span>
                            <a href="#" className="text-white bg-[#f97316] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">اضف الي العربه ←</a>
                        </div>
                    </div>
                </div>



                {/* Card 1 */}
                <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" class="relative ">

                        <img className="p-2 rounded-t-lg w-full h-48 object-cover" src={"/public/بيتزا.png"} alt="product image" />
                        {/* <span class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">Badge</span> */}
                        <span class="absolute top-4 left-3 bg-[#f97316] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">الاكثر طلبا</span>
                        <span class="absolute top-4 left-23 bg-[#f97316] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">مميز</span>

                    </a>


                    <div className="px-5 pb-5">
                        <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">بيتزا خضار</h2>
                        <h5 className="text-l font-medium tracking-tight text-gray-900 dark:text-white">بيتزا بالخضار المشوية وجبنة موزاريلا</h5>

                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {[...Array(4)].map((_, index) => (
                                    <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">3.9</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">رس 400</span>
                            <a href="#" className="text-white bg-[#f97316] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">اضف الي العربه ←</a>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex items-center justify-center mt-8">
            <a href="#" className="text-white bg-[#f97316] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ">رؤيه جميع المنتجات ←</a>
            </div>
        </div>
        
    )
}

export default MainMeals