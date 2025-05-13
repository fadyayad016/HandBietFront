
import React, { useState } from 'react';

const Payment = () => {
    const [selectedMethod, setSelectedMethod] = useState('pay-on-delivery');
    const [paymetToggle, setPaymetToggle] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        cardNumber: '',
        expiration: '',
        cvv: ''
    });

    const handleMethodChange = (id) => {
        setSelectedMethod(id);
        setPaymetToggle(id === 'credit-card');
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const validateForm = () => {
        const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
        const cvvPattern = /^\d{3}$/;
        const expirationPattern = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;

        if (!formData.fullName.trim()) {
            alert('يرجى إدخال الاسم الكامل');
            return false;
        }

        if (!visaPattern.test(formData.cardNumber)) {
            alert('رقم البطاقة غير صالح. يجب أن يكون رقم فيزا صالح');
            return false;
        }

        if (!expirationPattern.test(formData.expiration)) {
            alert('تاريخ الانتهاء غير صالح. استخدم الصيغة MM/YY');
            return false;
        }

        const [month, year] = formData.expiration.split('/');
        const expDate = new Date(`20${year}`, month - 1);
        const currentDate = new Date();
        if (expDate < currentDate) {
            alert('البطاقة منتهية الصلاحية');
            return false;
        }

        if (!cvvPattern.test(formData.cvv)) {
            alert('CVV غير صالح. يجب أن يكون 3 أرقام');
            return false;
        }

        return true;
    };

    const handlePayment = (e) => {
        e.preventDefault();
        if (selectedMethod === 'credit-card' && !validateForm()) {
            return;
        }
        alert('تمت معالجة الدفع بنجاح');
        // Add your payment processing logic here
    };

    const paymentOptions = [
       
        {
            id: 'pay-on-delivery',
            label: 'كاش',
            description: 'سوف يتم اضافه 15 رس ضريبه توصيل',
            icon: (
                <svg class="w-6 h-6 text-mainColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            )
        }, {
            id: 'credit-card',
            label: 'بطاقه الائتمان',
            description: 'فيزا / ماستر كارد',
            icon: (
                <svg class="w-6 h-6 text-mainColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z" />
                </svg>
            )
        }
    ];

    return (
        <div dir='rtl' className="px-2 sm:px-6 lg:px-2 my-5">

            {/* header Steps */}
            <div className='flex justify-center'>
                <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
                    <li class="after:border-4 flex items-center text-green-500 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-green-500 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                        <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                            <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            السله
                        </span>
                    </li>
                    <li class="after:border-4 flex items-center text-green-500 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-green-500 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                        <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                            <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            التوصيل
                        </span>
                    </li>
                    <li class="flex shrink-0 items-center text-mainColor">
                        <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        الدفع
                    </li>
                </ol>
            </div>

            <hr />

            <section class="bg-white antialiased dark:bg-gray-900 md:p-5">
                <div class="px-4 2xl:px-0">
                    <div class="mx-auto max-w-10xl">
                        <div className='flex inline-flex mt-5'>
                            <svg class="w-6 h-6 text-mainColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
                            </svg>
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">الدفع</h2>
                        </div>


                        {/* Confirme Address */}
                        <div className=" my-3 w-full-xl ">
                            <div className='flex justify-between mt-8 '>

                                <div className='flex inline-flex '>
                                    <svg class="w-6 h-6 text-mainColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5" />
                                    </svg>

                                    <h2 class="text-l font-semibold text-gray-900 dark:text-white">عنوان التوصيل</h2>
                                </div>

                                {/* Edit Button */}
                                <button className="flex inline-flex text-mainColor hover:text-hoverColor text-sm  ">
                                    <svg class="w-4 h-4  dark:text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                    </svg>
                                    تعديل
                                </button>

                            </div>

                            {/* address */}
                            <div class=" p-6 border bg-gray-50 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">


                                <div className='flex inline-flex '>
                                    <svg class="w-6 h-6 text-mainColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                                    </svg>
                                    <h2 class="text-l font-semibold text-gray-900 dark:text-white">  العنوان الاساسي</h2>
                                </div>

                                <div className='ms-6'>
                                    <p className=''>19 شارع مصنع سييدالرئيسى امام المطافي</p>
                                    <p className='mb-1 text-gray-500 dark:text-gray-400'>محافظه اسيوط</p>

                                    <div className='flex inline-flex text-gray-500'>
                                        <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                                        </svg>
                                        <p>0201098855715+</p>
                                    </div>
                                </div>


                            </div>
                        </div>



                        {/* Choose Paymennt Methoud */}
                        <div className="space-y-4 mt-5  ">
                            <h3 className="text-l font-semibold text-gray-900 dark:text-white">طريقه الدفع</h3>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:w-10xl">
                                {paymentOptions.map((option) => (
                                    <div
                                        key={option.id}
                                        className={`rounded-lg border bg-gray-50 p-4 ps-4 dark:bg-gray-800 ${selectedMethod === option.id ? 'border-mainColor' : 'border-gray-200 dark:border-gray-700'}`}
                                        onClick={() => handleMethodChange(option.id)}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-5 items-center">
                                                <input
                                                    id={option.id}
                                                    aria-describedby={`${option.id}-text`}
                                                    type="radio"
                                                    name="payment-method"
                                                    checked={selectedMethod === option.id}
                                                    onChange={() => { }}
                                                    className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-mainColor dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-gray-700 dark:text-gray-300">{option.icon}</span>
                                                <div className="ms-4 text-sm">
                                                    <label htmlFor={option.id} className="font-medium leading-none text-gray-900 dark:text-white">
                                                        {option.label}
                                                    </label>
                                                    <p id={`${option.id}-text`} className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                                                        {option.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div class="mt-20 sm:mt-8 lg:flex lg:items-start ">
                            {paymetToggle ? (
                                <form action="#" class="w-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-2xl lg:p-8 me-4">
                                    <div className='flex inline-flex'>
                                        <svg class="w-6 h-6 text-mainColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z" />
                                        </svg>
                                        <p className='mb-5 ms-2'>معلومات البطاقه:</p>
                                    </div>
                                    <div class="mb-6 grid grid-cols-1 gap-6.5">
                                        <div class="col-span-2 sm:col-span-1">
                                            <label htmlFor="full_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                                الاسم كاملا (كما يظهر علي البطاقه)<span className='text-red-500'>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="full_name"
                                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder="Bonnie Green"
                                                required
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div class="col-span-2 sm:col-span-1">
                                            <label htmlFor="card-number-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                                رقم البطاقه<span className='text-red-500'>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="card-number-input"
                                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder="xxxx-xxxx-xxxx-xxxx"
                                                required
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="card-expiration-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                                موعد الانتهاء<span className='text-red-500'>*</span>
                                            </label>
                                            <div class="relative">
                                                <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                                                    <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <input
                                                    id="card-expiration-input"
                                                    type="text"
                                                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                                    placeholder="12/23"
                                                    required
                                                    value={formData.expiration}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="cvv-input" class="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                                                CVV<span className='text-red-500'>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="cvv-input"
                                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder="•••"
                                                required
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <div class="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-2xl lg:p-8 me-4 text-center">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">تم اختيار الدفع عند التسليم</p>
                                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">سيتم إضافة 15 رس كرسوم توصيل</p>
                                </div>
                            )}

                            <div class="mt-2 sm:mt-8 lg:mt-0 border rounded-lg p-10 shadow-lg ">
                                <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-full xl:max-w-full">
                                    <div class="">
                                        <div class=" divide-y divide-gray-200 dark:divide-gray-800">
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
                                                <dd class="text-base font-medium text-gray-900 dark:text-white">10 رس</dd>
                                            </dl>
                                            <dl class="flex items-center justify-between gap-4 py-3">
                                                <dt class="text-base font-bold text-gray-900 dark:text-white">المجموع</dt>
                                                <dd class="text-base font-bold text-gray-900 dark:text-white">8,392.00 رس</dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="space-y-3">
                                        <hr />
                                        <div>
                                            <label htmlFor="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">اضافه قسيمه او كود خصم</label>
                                            <div class="flex max-w-md items-center gap-4">
                                                <input
                                                    type="text"
                                                    id="voucher"
                                                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                    placeholder=""
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    class="flex items-center justify-center rounded-lg bg-mainColor px-5 py-2.5 text-sm font-medium text-white hover:bg-hoverColor focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                >
                                                    تطبيق
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            onClick={handlePayment}
                                            class="flex w-full items-center justify-center rounded-lg bg-mainColor hover:bg-hoverColor px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        >
                                            الدفع
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-4 flex items-center justify-center gap-8">
                                    <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="" />
                                    <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="" />
                                    <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
                                    <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
                                    <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
                                    <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="" />
                                    <svg class="w-10 h-10 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path
                                            fill="currentColor"
                                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Payment;
