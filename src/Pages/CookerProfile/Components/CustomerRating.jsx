import { faHeart, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CustomerRating = () => {
  return (
    <div className=" my-9">
      <div className='flex justify-between mt-20'>
        
        <h4 className=" "> تقييمات العملاء </h4>
        <div className=''>
          <a href="#" className="text-white bg-mainColor hover:bg-hoverColor hover:border-hoverColor focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
            dark:focus:ring-blue-800  "> عرض المزيد من التقييمات ←
          </a>
        </div>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10">
        {/* card 1 */}
        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

          {/* name ang image */}
          <div class="flex items-center mb-4 justify-between">

            <div class="font-medium dark:text-white">
              <p>عمار عادل </p>


              {/* stars */}
              <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
                {[...Array(4)].map((_, index) => (
                  <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                <p className=' text-gray-500 text-xs'>(منذ 3 ايام)</p>
              </div>

            </div>

            <div className=' text-mainColor text-xl'>
              <FontAwesomeIcon icon={faHeart} />
            </div>

          </div>


          {/* comments */}
          <p className=''>أفضل كبسة جربتها!</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">"الطعم رائع جداً والنكهة أصيلة. الدجاج كان طرياً جداً والأرز معطر بالتوابل بشكل ممتاز. بالتأكيد سأطلبها مرة
            أخرى وأرشحها للجميع."</p>

          <span className='text-gray-500 text-xs'>
            <FontAwesomeIcon icon={faUtensils} className='w-6 h-6 text-gray-800 dark:text-white  inline-flex items-center' />
            طلب: كبسة دجاج
          </span>

        </div>


        {/* card 2 */}
        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

          {/* name ang image */}
          <div class="flex items-center mb-4 justify-between">

            <div class="font-medium dark:text-white">
              <p>محمد حسين </p>


              {/* stars */}
              <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
                {[...Array(4)].map((_, index) => (
                  <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                <p className=' text-gray-500 text-xs'>(منذ  اسبوع)</p>
              </div>

            </div>

            <div className=' text-mainColor text-xl'>
              <FontAwesomeIcon icon={faHeart} />
            </div>

          </div>


          {/* comments */}
          <p className=''> نكهة ممتازة !</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">"  المنسف لذيذ جداً والنكهة مميزة. الكمية كافية لشخصين. كان ينقصها فقط بعض صلصة الدقوس، لكن
            بشكل عام تجربة رائعة."</p>

          <span className='text-gray-500 text-xs'>
            <FontAwesomeIcon icon={faUtensils} className='w-6 h-6 text-gray-800 dark:text-white  inline-flex items-center' />
            طلب: منسف لحم
          </span>
        </div>


      </div>

      <div className="flex items-center justify-center mt-8">
        <a href="#" className="text-mainColor border border-mainColor hover:text-hoverColor hover:border-hoverColor focus:ring-4 
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
         dark:focus:ring-blue-800  "> عرض المزيد من التقييمات ←
        </a>
      </div>


    </div>

  )
}

export default CustomerRating