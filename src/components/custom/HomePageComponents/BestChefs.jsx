import React from 'react';

const BestChefs = () => {
    return (
        <div dir="rtl" className="px-4 sm:px-6 lg:px-8 my-5 ms-10">
            <h1 className="text-xl font-bold ">أفضل الطهاة المنزليين</h1>
            <h3 className="text-sm text-gray-500 mt-3">
                تعرف على الطهاة الموهوبين في منطقتك الذين يعدون أشهى الوجبات
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 my-10">
                   
                    {/* Card 1 */}
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-30 h-30 mb-4 rounded-full"
                            src="/public/ChifsRatingImages/chef 3.png"
                            alt="Chef Ahmed"
                        />
                        <p className="font-medium dark:text-white">الطاهية سارة</p>
                        <p className="text-sm text-[#f97316] dark:text-gray-400">
متخصصة فى المأكولات العربية  </p>
                    </div>
                    <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse mt-2">
                        {[...Array(4)].map((_, index) => (
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
                        ))}

         {/* Empty star */}
    <svg
        className="w-4 h-4 text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
    >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
                        <span className="text-gray-500 text-xs font-semibold px-2.5 py-0.5 rounded-sm">(127)</span>

                    </div>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
اطباقى مستوحاة من التراث العربى مع لمسة عصرية                     </p>
<a href="#" className="mt-4 px-4 py-2 bg-[#f97316] hover:bg-orange-500  text-white rounded-lg flex items-center justify-center  w-fit mx-auto  space-x-2 group">                        عرض الوجبات 
                        <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </a>


                </div>

                
                {/* Card 2 */}
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-30 h-30 mb-4 rounded-full"
                            src="/public/ChifsRatingImages/chef 2.png"
                            alt="Chef Ahmed"
                        />
                        <p className="font-medium dark:text-white">الطاهي أحمد</p>
                        <p className="text-sm text-[#f97316] dark:text-gray-400">
                        خبير فى المأكولات العالمية                        
                        </p>
                    </div>
                    <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse mt-2">
                        {[...Array(4)].map((_, index) => (
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
                        ))}
                        <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M11 0l3.09 6.26L22 7.27l-5 4.87L18.18 20 11 16.27 3.82 20 5 12.14 0 7.27l7.91-1.01L11 0z" />
                        </svg>
                        <span className="text-gray-500 text-xs font-semibold px-2.5 py-0.5 rounded-sm">(154)</span>

                    </div>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                    اقدم نكهات عالمية بأسلوبى الخاص
                    </p>
                    <a href="#" className="mt-7 px-4 py-2 bg-[#f97316] hover:bg-orange-500  text-white rounded-lg flex items-center justify-center  w-fit mx-auto  space-x-2 group">                        عرض الوجبات 
                        <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </a>
                </div>

              {/* Card 3 */}
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-30 h-30 mb-4 rounded-full"
                            src="/public/ChifsRatingImages/chef.png"
                            alt="Chef Ahmed"
                        />
                        <p className="font-medium dark:text-white">الطاهي نور</p>
                        <p className="text-sm text-[#f97316] dark:text-gray-400">
متخصص فى الحلويات والمعجنات                         </p>
                    </div>
                    <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse mt-2">
                        {[...Array(3)].map((_, index) => (
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
                        ))}
                        <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M11 0l3.09 6.26L22 7.27l-5 4.87L18.18 20 11 16.27 3.82 20 5 12.14 0 7.27l7.91-1.01L11 0z" />
                        </svg>
        {/* Empty star */}
    <svg
        className="w-4 h-4 text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
    >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
                        <span className="text-gray-500 text-xs font-semibold px-2.5 py-0.5 rounded-sm">(98)</span>

                    </div>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
حلوياتى تحكى قصة حبى للفن والطعام                     </p>
<a href="#" className="mt-4 px-4 py-2 bg-[#f97316] hover:bg-orange-500  text-white rounded-lg flex items-center justify-center  w-fit mx-auto  space-x-2 group">                        عرض الوجبات 
                        <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </a>
                </div>


{/* Card 4 */}
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-30 h-30 mb-4 rounded-full"
                            src="/public/ChifsRatingImages/chef 1.png"
                            alt="Chef Ahmed"
                        />
                        <p className="font-medium dark:text-white">الطاهي على</p>
                        <p className="text-sm text-[#f97316] dark:text-gray-400">
متخصص فى الاطباق النباتية                        </p>
                    </div>
                    <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse mt-2">
                        {[...Array(4)].map((_, index) => (
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
                        ))}
     {/* Empty star */}
    <svg
        className="w-4 h-4 text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
    >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
                        <span className="text-gray-500 text-xs font-semibold px-2.5 py-0.5 rounded-sm">(112)</span>

                    </div>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
اثبت ان النباتى يمكن ان يكون لذيذا ومغذيا                    </p>
<a href="#" className="mt-4 px-4 py-2 bg-[#f97316] hover:bg-orange-500  text-white rounded-lg flex items-center justify-center  w-fit mx-auto  space-x-2 group">                        عرض الوجبات 
                        <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </a>
                </div>

            </div>
            <a href="#" className="mt-7 px-4 py-3 bg-[#f97316] hover:bg-orange-500  text-white rounded-lg flex items-center justify-center  w-fit mx-auto  space-x-2 group">                        
            عرض جميع الطهاة
                <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </a>
        </div>
    );
};

export default BestChefs;