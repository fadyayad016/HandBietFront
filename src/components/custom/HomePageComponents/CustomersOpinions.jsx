import React from 'react';

const CustomersOpinions = () => {
    return (
        <div dir="rtl" className="px-4 sm:px-6 lg:px-8 my-5 ms-10">
            <h1 className="text-xl font-bold text-center">آراء عملائنا</h1>
            <h3 className="text-sm text-gray-500 text-center mt-3">
                ما يقوله عملاؤنا عن تجربتهم مع HandBiet
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 my-10">
                {/* Card 1 */}
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-start mb-2">
                        <img
                            className="w-10 h-10 me-4 rounded-full"
                            src="/public/ChifsRatingImages/chef.png"
                            alt="محمد"
                        />
                        <p className="font-medium dark:text-white">محمد</p>
                    </div>
                    <div className="flex items-center justify-start space-x-1 rtl:space-x-reverse mb-4">
                        {[...Array(5)].map((_, index) => (
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
                    </div>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                        "جربت عدة وجبات مع HandBiet وكانت جميعها ممتازة الطعم يشبه طعام المنزل تماما ولكن بمستوى احترافى التوصيل سريع والطعام ساخن وطازج."
                    </p>
                </div>

                {/* Card 2 */}
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-start mb-2">
                        <img
                            className="w-10 h-10 me-4 rounded-full"
                            src="/public/ChifsRatingImages/chef 1.png"
                            alt="نورا"
                        />
                        <p className="font-medium dark:text-white">نورا</p>
                    </div>
                    <div className="flex items-center justify-start space-x-1 rtl:space-x-reverse mb-4">
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
                            className="w-4 h-4 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                        "أحب فكرة دعم الطهاة المحليين. وجبات الطاهية سارة كانت لذيذة جدا وتذكرنى بطعام والدتى. الأسعار معقولة والجودة ممتازة."
                    </p>
                </div>

                {/* Card 3 */}
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-start mb-2">
                        <img
                            className="w-10 h-10 me-4 rounded-full"
                            src="/public/ChifsRatingImages/chef 2.png"
                            alt="خالد"
                        />
                        <p className="font-medium dark:text-white">خالد</p>
                    </div>
                    <div className="flex items-center justify-start space-x-1 rtl:space-x-reverse mb-4">
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
                            className="w-4 h-4 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                        "كنت مشغولا جدا فى الأسبوع الماضى وطلبت عدة وجبات من HandBiet. كانت حل مثالى لوجبات صحية ولذيذة بدون الحاجة للطبخ. سأستمر فى استخدام الخدمة بالتأكيد."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CustomersOpinions;