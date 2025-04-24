import React from 'react'

const HowItIsWorkComponent = () => {
    return (
        <div dir='rtl' className="px-4 sm:px-6 lg:px-8 my-5 ms-20">

            <h1 className='text-l font-bold text-center'>كيف يعمل  HandBite؟</h1>
            <h3 className='text-sm text-gray-500 text-center mt-3'> خطوات بسيطة لبدء بيع وجباتك المنزلية</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 my-10 text-center">

                {/* card 1 */}
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                    <div className="flex justify-center mb-4">
                        <div className='bg-[#ffedd5] w-10 h-10 rounded-full text-[#f97316] flex items-center justify-center'>
                            <span>1</span>
                        </div>
                    </div>

                    <h5 className="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">سجل حسابك </h5>
                    <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">أنشئ حسابك في دقائق وأضف معلوماتك الأساسية ووثائقك الرسمية.</p>
                </div>




                {/* card 2 */}
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                    <div className="flex justify-center mb-4">
                        <div className='bg-[#ffedd5] w-10 h-10 rounded-full text-[#f97316] flex items-center justify-center'>
                            <span>2</span>
                        </div>
                    </div>

                    <h5 className="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white"> أضف وجباتك</h5>
                    <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">قم بتحميل صور وجباتك المميزة وحدد السعر والكمية المتاحة.</p>
                </div>





                {/* card 3 */}
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                    <div className="flex justify-center mb-4">
                        <div className='bg-[#ffedd5] w-10 h-10 rounded-full text-[#f97316] flex items-center justify-center'>
                            <span>3</span>
                        </div>
                    </div>

                    <h5 className="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">ابدأ البيع </h5>
                    <p className="mb-3 text-xs text-gray-500 dark:text-gray-400"> سنقوم بتسويق وجباتك وتوصيلها للعملاء، واستلم أرباحك بسهولة. </p>
                </div>

            </div>
        </div>
    )
}

export default HowItIsWorkComponent