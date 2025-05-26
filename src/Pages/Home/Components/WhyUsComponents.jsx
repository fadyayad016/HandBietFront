import React from 'react'

const WhyUsComponents = () => {
    return (
        <div dir='rtl' className="px-4 sm:px-6 lg:px-8 my-5 ms-20">

            <h1 className='text-l font-bold text-center'>لماذا تنضم الي HandBite؟</h1>
            <h3 className='text-sm text-gray-500 text-center mt-3'>نقدم لك كل ما تحتاجه لتحويل موهبتك في الطهي إلى مشروع ناجح</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 my-10">



                {/* card 1 */}
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                    <img src={"/public/WhyUsIcons/icon1.png"} alt="" className='w-10 h-10 text-gray-500 dark:text-gray-400 mb-3' />

                    <h5 class="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">دخل إضافي</h5>

                    <p class="mb-3 text-xs text-gray-500 dark:text-gray-400">احصل على دخل إضافي من خلال بيع وجباتك دون الحاجة إلى
                    مغادرة منزلك أو تغيير روتينك اليومي.</p>

                </div>


                {/* card 2 */}
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                    <img src={"/public/WhyUsIcons/icon2.png"} alt="" className='w-10 h-10 text-gray-500 dark:text-gray-400 mb-3' />

                    <h5 class="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">جمهور جاهز</h5>

                    <p class="mb-3 text-xs text-gray-500 dark:text-gray-400">استفد من قاعدة عملائنا الكبيرة الذين يبحثون عن وجبات منزلية
                    أصيلة ومميزة.</p>

                </div>


                {/* card 3 */}
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                    <img src={"/public/WhyUsIcons/icon3.png"} alt="" className='w-10 h-10 text-gray-500 dark:text-gray-400 mb-3' />

                    <h5 class="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">خدمة التوصيل</h5>

                    <p class="mb-3 text-xs text-gray-500 dark:text-gray-400">نحن نتعامل مع التوصيل نيابة عنك، ما عليك سوى التركيز على
                    إعداد وجباتك المميزة.</p>

                </div>


                {/* card 4 */}
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                    <img src={"/public/WhyUsIcons/icon4.png"} alt="" className='w-10 h-10 text-gray-500 dark:text-gray-400 mb-3' />

                    <h5 class="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">تتبع الأداء</h5>

                    <p class="mb-3 text-xs text-gray-500 dark:text-gray-400">احصل على إحصائيات مفصلة عن مبيعاتك وتقييمات العملاء
                    لتحسين أدائك باستمرار.</p>

                </div>



                {/* card 5 */}
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                    <img src={"/public/WhyUsIcons/icon5.png"} alt="" className='w-10 h-10 text-gray-500 dark:text-gray-400 mb-3' />

                    <h5 class="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">دفع آمن</h5>

                    <p class="mb-3 text-xs text-gray-500 dark:text-gray-400">استلم أموالك بشكل آمن وسريع بعد كل عملية بيع ناجحة. </p>

                </div>




                {/* card 6 */}
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                    <img src={"/public/WhyUsIcons/icon6.png"} alt="" className='w-10 h-10 text-gray-500 dark:text-gray-400 mb-3' />

                    <h5 class="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">دعم فني</h5>

                    <p class="mb-3 text-xs text-gray-500 dark:text-gray-400">فريق دعم فني متاح على مدار الساعة لمساعدتك في أي استفسار أو
                    مشكلة تواجهك. </p>

                </div>



            </div>
        </div>
    )
}

export default WhyUsComponents