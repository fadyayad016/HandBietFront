import React from 'react'

const ChiefStory = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  ">
        {/* card 1 */}
        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

          {/* name  */}
          <div class="flex items-center mb-4 justify-between">
            <p className="font-medium dark:text-white"> قصة الطاهي </p>
          </div>

          <div className="grid  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 ">

            {/* comments */}
            <div >
              <p className='text-gray-500 text-l my-5'>- بدأت رحلتي مع الطهي منذ الصغر في مطبخ العائلة، حيث تعلمت أسرار الطهي من والدتي وجدتي. كنت مفتونا
                بكيفية تحويل المكونات البسيطة إلى أطباق لذيذة تبهج الجميع.</p>

              <p className='text-gray-500 text-l'>-  قررت تحويل شغفي إلى مهنة بعد حصولي على شهادة في الطهي من معهد الطهي السعودي.</p>
              <p className='text-gray-500 text-l my-5'>-  عملت في عدة مطاعم مرموقة في الرياض حيث صقلت مهاراتي وتعلمت تقنيات جديدة.</p>
              <p className='text-gray-500 text-l'>- اليوم، أقدم وجبات منزلية تحافظ على الأصالة مع إضافة لمساتي الخاصة. أؤمن بأن الطعام الجيد يجمع الناس
                ويخلق ذكريات جميلة.</p>
            </div>

            <img src={"../../../../public/برجر.png"} className='h-75 w-100' alt="" />
            <img src={"../../../../public/بيتزا.png"} className='h-75 w-100' alt="" />


          </div>

        </div>
      </div>
    </div>
  )
}

export default ChiefStory