import React from 'react'

const ChifsRating = () => {
    return (
        <div dir='rtl' className="px-4 sm:px-6 lg:px-8 my-5 ms-10">

            <h1 className='text-l font-bold text-center'>ماذا يقول طهاه HandBite؟</h1>
            <h3 className='text-sm text-gray-500 text-center mt-3'>انضم إلى آلاف الطهاة الذين حوّلوا شغفهم إلى مصدر دخل</h3>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 my-10">


                {/* card 1 */}
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                    {/* name ang image */}
                    <div class="flex items-center mb-4">
                        <img class="w-10 h-10 me-4 rounded-full" src="/public/ChifsRatingImages/chief1.png" alt="" />
                        <div class="font-medium dark:text-white">
                            <p>الشيف عادل </p>
                            <p class="block text-sm text-[#f97316] dark:text-gray-400"> طاهي منزلي منذ 2022</p>
                        </div>
                    </div>

                    {/* comment */}
                    <p class="mb-2 text-gray-500 dark:text-gray-400">"HandBite      غيرت حياتي! كنت أطهو فقط لعائلتي، والآن لدي عملاء دائمون وأحقق دخلًا ممتازًا من شغفي بالطهي." </p>

                    {/* stars */}
                    <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
                        {[...Array(4)].map((_, index) => (
                            <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    </div>
                </div>



                {/* card 2 */}
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    {/* name ang image */}
                    <div class="flex items-center mb-4">
                        <img class="w-10 h-10 me-4 rounded-full" src="/public/ChifsRatingImages/chief2.png" alt="" />
                        <div class="font-medium dark:text-white">
                            <p>الشيف سيد </p>
                            <p class="block text-sm text-[#f97316] dark:text-gray-400"> طاهي منزلي منذ 2024</p>
                        </div>
                    </div>

                    {/* comment */}
                    <p class="mb-2 text-gray-500 dark:text-gray-400">"HandBite       سهل ومريح. لا أقلق بشأن التسويق أو التوصيل، فقط أركز على إعداد أفضل وجباتي." </p>

                    {/* stars */}
                    <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
                        {[...Array(4)].map((_, index) => (
                            <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    </div>
                </div>






                {/* card 3 */}
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    {/* name ang image */}
                    <div class="flex items-center mb-4">
                        <img class="w-10 h-10 me-4 rounded-full" src="/public/ChifsRatingImages/chief3.png" alt="" />
                        <div class="font-medium dark:text-white">
                            <p>الشيف احمد </p>
                            <p class="block text-sm text-[#f97316] dark:text-gray-400"> طاهي منزلي منذ 2020</p>
                        </div>
                    </div>

                    {/* comment */}
                    <p class="mb-2 text-gray-500 dark:text-gray-400">"   بفضلHandBite، استطعت تحويل موهبتي إلى مشروع ناجح  عميلًا دائمًا وأحقق أرباحًا ممتازة." </p>

                    {/* stars */}
                    <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
                        {[...Array(4)].map((_, index) => (
                            <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    </div>
                </div>



            </div>
        </div>

    )
}

export default ChifsRating