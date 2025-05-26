import React from 'react'






const CheckOut = () => {


    

    return (
        <div dir='rtl' className="px-4 sm:px-6 lg:px-8 my-5 ">


            <div className='flex justify-center'>
                {/* Steps */}
                <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
                    <li class="after:border-4 flex items-center text-green-500 after:mx-6  after:hidden after:h-1 after:w-full after:border-b after:border-green-500 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                        <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                            <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            السله
                        </span>
                    </li>

                    <li class="after:border-1 flex items-center text-mainColor after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                        <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                            <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            التوصيل
                        </span>
                    </li>

                    <li class="flex shrink-0 items-center">
                        <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        الدفع
                    </li>
                </ol>
            </div>

            <hr />

            <section class="bg-white py- antialiased dark:bg-gray-900 md:p-5">

                <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                        <div class="min-w-0 flex-1 space-y-8">
                            <div class="space-y-4">
                                <div className='flex inline-flex'>
                                    <svg class="w-6 h-6 text-mainColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5" />
                                    </svg>

                                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white">معلومات التوصيل</h2>
                                </div>

                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                    {/* name */}
                                    <div>
                                        <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> الاسم <span className='text-red-500'>*</span></label>
                                        <input type="text" id="your_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="راضي  باشا" required />
                                    </div>


                                    {/* email */}

                                    <div>
                                        <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> الايميل<span className='text-red-500'>*</span> </label>
                                        <input type="email" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="XX@gmail.com" required />
                                    </div>

                                    {/* country */}

                                    <div>
                                        <div class="mb-2 flex items-center gap-2">
                                            <label for="select-country-input-3" class="block text-sm font-medium text-gray-900 dark:text-white"> الدوله  <span className='text-red-500'>*</span> </label>
                                        </div>
                                        <select id="select-country-input-3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                            <option selected>مصر</option>
                                            <option value="SA">السعوديه</option>

                                        </select>
                                    </div>

                                    {/* city */}

                                    <div>
                                        <div class="mb-2 flex items-center gap-2">
                                            <label for="select-city-input-3" class="block text-sm font-medium text-gray-900 dark:text-white"> المدينه <span className='text-red-500'>*</span> </label>
                                        </div>
                                        <select id="select-city-input-3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                            <option selected>اسيوط</option>
                                            <option value="CA">القاهره</option>

                                        </select>
                                    </div>









                                    <div>
                                        <label for="erea" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> الحي <span className='text-red-500'>*</span> </label>
                                        <input type="text" id="erea" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder=" حي مصنع سييد" required />
                                    </div>

                                    <div>
                                        <label for="street" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">  الشارع <span className='text-red-500'>*</span> </label>
                                        <input type="text" id="street" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="ش 15 المتفرع من ميدان المصحف" required />
                                    </div>

                                    <div>
                                        <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> المبني <span className='text-red-500'>*</span> </label>
                                        <input type="text" id="vat_number" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder=" عماره 2 شقه 9" required />
                                    </div>


                                    {/* Phone */}
                                    <div>
                                        <label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> رقم التليفون <span className='text-red-500'>*</span> </label>


                                        <div class="flex items-center">
                                            <select id="select-country-input-3" className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                <option value="EG" selected>+02 EGY</option>
                                                <option value="SA">+996 KSA</option>
                                            </select>

                                            <div class="relative w-full">
                                                <input type="text" id="phone-input" class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" pattern="^(\+201|01|00201)[0-2,5]{1}[0-9]{8}" placeholder="123-456-7890" required />
                                            </div>
                                        </div>
                                    </div>




                                    {/* New address */}
                                    <div class="sm:col-span-2">
                                        <button type="submit" class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                                            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                                            </svg>
                                            اضف عنوان اخر
                                        </button>
                                    </div>
                                </div>
                            </div>                      
                        </div>


                        {/* Money */}
                        <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                            <div class="flow-root">
                                <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">المجموع الفرعي</dt>
                                        <dd class="text-base font-medium text-gray-900 dark:text-white"> 8,094.00 رس</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">خصم</dt>
                                        <dd class="text-base font-medium text-green-500">25 رس</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">رسوم التوصيل</dt>
                                        <dd class="text-base font-medium text-gray-900 dark:text-white">10  رس</dd>
                                    </dl>


                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-bold text-gray-900 dark:text-white">المجموع</dt>
                                        <dd class="text-base font-bold text-gray-900 dark:text-white">8,392.00  رس</dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="space-y-3">
                                <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-mainColor px-5 py-2.5 text-sm font-medium text-white hover:bg-hoverColor focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">اكمال الدفع</button>


                                <hr />
                                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">يجب انشاء حساب حتي تتم عمليه الطلب والدفع
                                    <br />
                                    <a href="#" title="" class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">سجل الدخول او  انشئ حسابك الان</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default CheckOut