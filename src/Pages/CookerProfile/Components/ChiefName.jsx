import React from 'react'

const ChiefName = () => {
  return (
    <div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-10">

        {/* card */}
        <div class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

          {/* name ang image */}
          <div class="flex items-center mb-4 justify-between">

            <div class="flex  mb-4">
              <img class="w-20 h-20 me-4 rounded-full" src="/public/ChifsRatingImages/chief1.png" alt="" />
              <div class="font-medium dark:text-white">
                <p>الشيف عادل </p>

                {/* stars */}
                <div className="flex  space-x-1 rtl:space-x-reverse my-3">
                  {[...Array(4)].map((_, index) => (
                    <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                  <span className='text-gray-500 text-sm'>4.7 (128 تقييم)</span>
                </div>

                {/* badges */}
                <div className='flex-wrap text-sm'>
                  <span className=' inline-flex items-center'>
                    <svg className="w-4 h-4 text-mainColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                    </svg>
                    الرياض, العليا
                  </span>

                  <span className='mx-3 inline-flex items-center'>
                    <svg className="w-4 h-4 text-mainColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    متاح للطلب 7 ايام
                  </span>

                  <span className='mx-3 inline-flex items-center'>

                    <svg className="w-4 h-4 text-mainColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                      <path fill-rule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd" />
                      <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                    </svg>

                    طاه منذ 2022

                  </span>
                </div>
              </div>
            </div>

            {/* chief percentage */}
            <div className='bg-[#fff7ed] w-75 py-2 text-sm text-center flex flex-col md:flex-row lg:flex-nowrap  justify-between'>
              <span >
                <p className='text-mainColor text-l'>328</p>
                <p >وجبات مباعه</p>
              </span>
              <span>
                <p className='text-mainColor'> 97% </p>
                <p> رضا العملاء</p>
              </span>

              <span>
                <p className='text-mainColor'> 45 </p>
                <p> زبون دائم</p>
              </span>
            </div>
          </div>

          {/* detailes */}
          <p class="mb-2 text-gray-500 dark:text-gray-400">"
            طاهٍ محترف متخصص في المأكولات السعودية والخليجية التقليدية. أقدم وجبات منزلية بلمسة عصرية
            باستخدام أفضل المكونات الطازجة. وصفات توارثتها من عائلتي مع الحفاظ على الأصالة والجودة."
          </p>

        </div>
      </div>

      <p>تخصصات الطاهي</p>
      <div className='ms-15 my-2'>
        <span className='border border-mainColor text-mainColor text-xs font-medium me-10 px-2.5 py-0.5 rounded-full  inline-flex items-center'>


          <svg className="w-4 h-4 text-dark dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.4427 9.88469 9.93591 7.50961c.81449-.81448.80559-2.06903-.02046-2.89511-.82608-.82607-2.08062-.83494-2.89511-.02046-.4791.47911-.71525 1.20118-.56606 1.82948-.6283-.14919-1.35037.08695-1.82948.56606-.81448.81448-.80561 2.06903.02047 2.89511.82607.82611 2.08062.83491 2.8951.02046l2.50233 2.29305m.8063-1.38c1.83-1.8299 5.1241-1.22213 7.1925.8462 2.0684 2.0684 2.3191 4.6228.2978 6.6441-1.0322 1.0321-2.1287 1.6094-3.2302 1.6518.5878-1.3405.2254-2.5874-.8127-3.2811-.918-.6135-2.1806-.7802-3.5479.179-1.10401-2.0578-1.30393-4.6355.1005-6.04Z" />
          </svg>

          المشويات
        </span>

        <span className='border border-mainColor text-mainColor text-xs font-medium me-10 px-2.5 py-0.5 rounded-full  inline-flex items-center'>


          <svg className="w-4 h-4 text-dark dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 19v-9c-1.5 0-2-1.5-2-2.49997 0-.99997.5-2 2-2.50003 2.36416-.64329 4.2009-.97557 6-.98904 1.7991.01347 3.6358.34575 6 .98904 1.5.50003 2 1.50006 2 2.50003C20 8.5 19.5 10 18 10v9c0 .5523-.4477 1-1 1H7c-.55228 0-1-.4477-1-1Z" />
          </svg>

          الأطباق التقليدية
        </span>


        <span className='border border-mainColor text-mainColor text-xs font-medium me-10 px-2.5 py-0.5 rounded-full  inline-flex items-center'>
          <svg className="w-4 h-4 text-dark dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.83892 12.4543s1.24988-3.08822-.21626-5.29004C8.15656 4.96245 4.58671 4.10885 4.39794 4.2436c-.18877.13476-1.11807 3.32546.34803 5.52727 1.4661 2.20183 5.09295 2.68343 5.09295 2.68343Zm0 0C10.3389 13.4543 12 15 12 18v2c0-2-.4304-3.4188 2.0696-5.9188m0 0s-.4894-2.7888 1.1206-4.35788c1.6101-1.56907 4.4903-1.54682 4.6701-1.28428.1798.26254.4317 2.84376-1.0809 4.31786-1.61 1.5691-4.7098 1.3243-4.7098 1.3243Z" />
          </svg>
          وجبات صحية
        </span>



        <span className='border border-mainColor text-mainColor text-xs font-medium me-10 px-2.5 py-0.5 rounded-full  inline-flex items-center'>


          <svg className="w-4 h-4 text-dark dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 6H8m8 0s3 2.5 3 5m-3-5V3H8v3m0 0s-3 2.5-3 5v8.002C5 20.6589 6.34315 22 8 22h8c1.6569 0 3-1.3411 3-2.998V11m0 0h-8v7h8v-7ZM6 6h12" />
          </svg>

          أطباق عائلية
        </span>



        <span className='border border-mainColor text-mainColor text-xs font-medium me-10 px-2.5 py-0.5 rounded-full  inline-flex items-center'>


          <svg className="w-4 h-4 text-dark dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.011 13H20c-.367 2.5551-2.32 4.6825-4.9766 5.6162V20H8.97661v-1.3838C6.31996 17.6825 4.36697 15.5551 4 13h14.011Zm0 0c1.0995-.0059 1.989-.8991 1.989-2 0-.8637-.5475-1.59948-1.3143-1.87934M18.011 13H18m0-3.99997c.2409 0 .4718.04258.6857.12063m0 0c.8367-1.0335.7533-2.67022-.2802-3.50694-1.0335-.83672-2.5496-.6772-3.3864.35631-.293-1.50236-1.7485-2.15377-3.2509-1.8607-1.5023.29308-2.48263 1.74856-2.18956 3.25092C8.9805 6.17263 7.6182 5.26418 6.15462 6.00131 4.967 6.59945 4.45094 8.19239 5.04909 9.38002m0 0C4.37083 9.66467 4 10.3357 4 11.1174 4 12.1571 4.84288 13 5.88263 13m-.83354-3.61998c.2866-.12029 1.09613-.40074 2.04494.3418m5.27497-.89091c1.0047-.4589 2.1913-.01641 2.6502.98832" />
          </svg>

          المأكولات السعودية
        </span>


        <span className='border border-mainColor text-mainColor text-xs font-medium me-10 px-2.5 py-0.5 rounded-full  inline-flex items-center'>


          <svg className="w-4 h-4 text-dark dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5241 12.4701H8c-1.65685 0-3-1.3432-3-3.00001V8.00003h5m3.5241 4.47007c1.6367 0 2.733 1.6825 2.072 3.1798-.3623.8206-1.1749 1.3501-2.072 1.3501H11c-1.10457 0-2 .8955-2 2v1h6.5m-1.9759-7.5299L15.5 7.76388m-5.5.23615c1.8455-1.2511 3.0772-1.40822 5.5-.23615m-5.5.23615v4.47007L8 14m7.5-6.23612c3.1804-.24503 5.5559 2.36222 4.7544 5.44972-.1054.4062-.2247.8398-.3594 1.3107.0165.8114-.0058 1.4881-.0632 2.0873C19.6315 18.7026 17.6006 20 15.5 20m0 0-1.2042-3.1354M15.6675 14h4.3753M10 4.00003H6c-1.10457 0-2 .89543-2 2s.89543 2 2 2" />
          </svg>

          المأكولات الجديده
        </span>


        <span className='border border-mainColor text-mainColor text-xs font-medium me-10 px-2.5 py-0.5 rounded-full  inline-flex items-center'>


          <svg className="w-4 h-4 text-dark dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 2.66667-1 2.66666 1L12 11l2.6667 1 2.6666-1L20 12m-1 5H5v1c0 1.1046.89543 2 2 2h10c1.1046 0 2-.8954 2-2v-1ZM5 9.00003h14v-1c0-2.20914-1.7909-4-4-4H9c-2.20914 0-4 1.79086-4 4v1ZM18.5 14h-13c-.82843 0-1.5.6716-1.5 1.5 0 .8285.67157 1.5 1.5 1.5h13c.8284 0 1.5-.6715 1.5-1.5 0-.8284-.6716-1.5-1.5-1.5Z" />
          </svg>


          المأكولات المصريه

        </span>


        <span className='border border-mainColor text-mainColor text-xs font-medium me-10 px-2.5 py-0.5 rounded-full  inline-flex items-center'>
          <svg className="w-4 h-4 text-dark dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12c0 1.6 3.35786 4 7.5 4 4.1421 0 6.9231-3.2 7.5-4-.5769-.8-3.3579-4-7.5-4C9.35786 8 6 10.4 6 12Zm0 0L3 9m3 3-3 3m12.9866-3.3723h.01m-1.9995-3.61229c-1.7265 3.30199-1.7113 5.02539-.0015 7.96929m-4.6104-.7956L7.7 17.4c-.49443.6592-.02401 1.6.80004 1.6H10c1 0 2.7576-3.0256 2.7576-3.0256M9 5l3.056 3.09696" />
          </svg>

          سي فود
        </span>


        <span className='border border-mainColor text-mainColor text-xs font-medium me-10 px-2.5 py-0.5 rounded-full  inline-flex items-center'>
          <svg className="w-4 h-4 text-dark dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 6H8m8 0s3 2.5 3 5m-3-5V3H8v3m0 0s-3 2.5-3 5v8.002C5 20.6589 6.34315 22 8 22h8c1.6569 0 3-1.3411 3-2.998V11m0 0h-8v7h8v-7ZM6 6h12" />
          </svg>

          المكرونات
        </span>



      </div>

    </div>
  )
}

export default ChiefName