import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full py-12 px-6 flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/public/About Us/kitchen.png"
            alt="About Us"
            className="w-[752px] h-[450.34px] rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-right md:w-1/2">
          <h1 className="text-3xl font-bold text-[#000000] mb-4">
            قصة حب تبدأ من المطبخ
          </h1>
          <p className="text-lg text-[#4B5563] mb-2">HandBiet</p>
          <p className="text-lg text-[#4B5563] mb-2">
            ليست مجرد منصة طعام، بل هي جسر يربط بين شغف الطهاة المنزليين وذائقة محبي
            الأكل الأصيل. نؤمن بأن كل وجبة تحمل قصة، وكل طاهٍ يحمل إرثاً
          </p>
          <div className="mt-6 flex space-x-4 rtl:space-x-reverse justify-end">
            <a
              href="#"
              className="bg-white border-2 border-[#F97316] text-[#F97316] font-bold py-2 px-6 rounded-full hover:bg-gray-100"
            >
              انضم إلينا
            </a>
            <a
              href="#"
              className="bg-[#F97316] text-white font-bold py-2 px-6 rounded-full hover:bg-[#e2620f]"
            >
              تصفح الطهاة
            </a>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="w-full text-center mt-12">
        <h2 className="text-2xl font-bold text-[#1F2937] mb-2">قصتنا</h2>
        <div className="w-16 h-1 bg-[#F97316] mx-auto mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
             {/* Vision Section */}
             <div className="flex flex-col items-center md:w-1/3">
            <img
              src="/public/About Us/vision.png"
              alt="Vision Logo"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold text-[#1F2937] mb-2">الرؤية</h3>
            <p className="text-[#4B5563] text-sm text-center">
              نطمح لأن نكون المنصة الرائدة في تمكين الطهاة المنزليين 
            </p>
            <p className="text-[#4B5563] text-sm text-center">ونقل
            الأصالة من المطابخ المنزلية إلى موائد السعودية</p>
          </div>

          {/* Launch Section */}
          <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0">
            <img
              src="/public/About Us/launch.png"
              alt="Launch Logo"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold text-[#1F2937] mb-2">الانطلاق</h3>
            <p className="text-[#4B5563] text-sm text-center">
              اطلقنا النسخة التجريبية عام 2020 فى مصر مع 12 طاهيا منزليا.
            </p>
            <p className="text-[#4B5563] text-sm text-center" >              ونمت اليوم لتشمل اكثر من 500 طاه فى 8 مدن مصرية
            </p>
          </div>

       
          {/* Idea Section */}
          <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0">
            <img
              src="/public/About Us/idea.png"
              alt="Idea Logo"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold text-[#1F2937] mb-2">الفكرة</h3>
            <p className="text-[#4B5563] text-sm text-center">
              بدأت الفكرة عام 2018
              عندما لاحظ المؤسسون صعوبة العثور على وجبات منزلية أصيلة مع تزايد الاعتماد
              على خدمات التوصيل التقليدية
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-12 px-6 flex flex-col md:flex-row items-center">
 

  {/* Text Section */}
  <div className="text-right md:w-1/2">
    <h1 className="text-3xl font-bold text-[#1F2937] mb-4">رسالتنا</h1>

    <p className="text-lg text-[#4B5563] mb-4">
      
      نرى أن الطعام الجيد يبدأ بشغف الطاهي وليس بمعدات المطبخ الفاخرة.
       نعمل على
      تمكين المواهب الطهوية المنزلية وتوفير مصدر دخل عادل لهم مع الحفاظ على أصالة
      وصفاتهم
    </p>
    <div className="w-full py-12 px-6 bg-[#f9741625] ">
    <h2 className="text-2xl font-bold text-[#F97316] mb-2">شعارنا</h2>
    <p className="text-lg text-[#4B5563]">
      "كل وجبة تحمل قصة.. كل طاهٍ يحمل إرثاً"
    </p>
    </div>
    
  </div>

   {/* Image Section */}
   <div className="md:w-1/2 mt-8 md:mt-0">
    <img
      src="/public/About Us/message.png"
      alt="About Us"
      className="w-[752px] h-[450.34px] rounded-lg"
    />
  </div>
</div>
      
      {/* Our Values Section */}
      <div className="w-full text-center mt-12">
        <h2 className="text-2xl font-bold text-[#1F2937] mb-2">قيمنا</h2>
        <div className="w-16 h-1 bg-[#F97316] mx-auto mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:w-1/3">
            <div className="flex items-center mb-4">
              
              <h3 className="text-xl font-bold text-[#1F2937]">الشغف</h3>
              <img
                src="/public/About Us/vision.png"
                alt="Vision Logo"
                className="w-16 h-16 mr-2"
              />
            </div>
            <p className="text-[#4B5563] text-sm text-center">
            نعمل بشغف لنكون جسراً بين حب الطهي 
            </p>
            <p className="text-[#4B5563] text-sm text-center">وحب الطعام، لأن الشغف هو سر النكهة المميزة</p>
          </div>

          <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              
              <h3 className="text-xl font-bold text-[#1F2937]">الثقة</h3>
              <img
                src="/public/About Us/trust.png"
                alt="Trust Logo"
                className="w-16 h-16 mr-2"
              />
            </div>
            <p className="text-[#4B5563] text-sm text-center">
              نحرص على أعلى معايير السلامة الغذائية 
            </p>
            <p className="text-[#4B5563] text-sm text-center">وشفافية التقييمات لضمان ثقة العملاء</p>
          </div>

          <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
            
              <h3 className="text-xl font-bold text-[#1F2937]">المجتمع</h3>
              <img
                src="/public/About Us/community.png"
                alt="Community Logo"
                className="w-16 h-16 mr-2"
              />
            </div>
            <p className="text-[#4B5563] text-sm text-center">
              نؤمن بدورنا في بناء مجتمع طهوي متكامل 
            </p>
            <p className="text-[#4B5563] text-sm text-center">يدعم المواهب المحلية ويحفظ التراث الغذائى</p>
          </div>

          <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              
              <h3 className="text-xl font-bold text-[#1F2937]">الأصالة</h3>
              <img
                src="/public/About Us/auth.png"
                alt="Authenticity Logo"
                className="w-16 h-16 mr-2"
              />
            </div>
            <p className="text-[#4B5563] text-sm text-center">
              نحافظ على أصالة الوصفات المنزلية 
            </p>
            <p className="text-[#4B5563] text-sm text-center">ونرفض المساومة على الجودة أو النكهة التقليدية</p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="w-full text-center mt-12">
        <h2 className="text-2xl font-bold text-[#1F2937] mb-8">فريقنا</h2>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
  
  {/* Khaled */}
  <div className="flex flex-col items-center md:w-1/4">
            <img
              src="/public/About Us/khaled.png"
              alt="Khaled Al-Harbi"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-[#1F2937] mb-2">خالد الحربي</h3>
            <h4 className="text-lg font-bold text-[#F97316] mb-2">مدير الجودة</h4>
            <p className="text-[#4B5563] text-sm text-center">
              طاهٍ محترف سابق، يشرف على معايير 
            </p>
            <p className="text-[#4B5563] text-sm text-center">الجودة وبرامج تدريب الطهاة</p>
          </div>

          {/* Noura */}
          <div className="flex flex-col items-center md:w-1/4">
            <img
              src="/public/About Us/noura.png"
              alt="Noora Al-Fahad"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-[#1F2937] mb-2">نورة الفهد</h3>
            <h4 className="text-lg font-bold text-[#F97316] mb-2">مديرة التسويق</h4>
            <p className="text-[#4B5563] text-sm text-center">
              خبيرة تسويق رقمي، تقود جهودنا 
            </p>
            <p className="text-[#4B5563] text-sm text-center"> لنشر ثقافة الطعام المنزلي الأصيل</p>
          </div>

 {/* Sara */}
 <div className="flex flex-col items-center md:w-1/4">
            <img
              src="/public/About Us/sara.png"
              alt="Sara Al-Nasser"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-[#1F2937] mb-2">سارة الناصر</h3>
            <h4 className="text-lg font-bold text-[#F97316] mb-2">مديرة العمليات</h4>
            <p className="text-[#4B5563] text-sm text-center">
              خبيرة في إدارة المشاريع والخدمات اللوجستية 
            </p>
            <p className="text-[#4B5563] text-sm text-center"> تكرس وقتها لضبط جودة الخدمة</p>
          </div>

           {/* Ahmed */}
           <div className="flex flex-col items-center md:w-1/4">
            <img
              src="/public/About Us/ahmed.png"
              alt="Ahmed El-Saeed"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-[#1F2937] mb-2">أحمد السعيد</h3>
            <h4 className="text-lg font-bold text-[#F97316] mb-2">المؤسس والرئيس التنفيذي</h4>
            <p className="text-[#4B5563] text-sm text-center">
              خبير تقنى ومطور برمجيات
            </p>
            <p className="text-[#4B5563] text-sm text-center">               أسس الموقع لربط شغفه بالتكنولوجيا والطعام
            </p>
          </div>
        </div>
      </div>

<br />
      {/* Join our community Section */}
      
      <div className="w-full h-[270px] bg-[#f97416] flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold text-[#FFFFFF] mb-4">
        انضم إلى مجتمعنا        </h1>
        <p className="text-lg text-[#FFFFFF] mb-6">
        هى بيتك HandBiet .سواء كنت طاهياً منزلياً تبحث عن منصة لعرض موهبتك، أو محباً للطعام تبحث عن نكهات اصيلة      </p>
        <div className="mt-6 flex space-x-4 rtl:space-x-reverse justify-center">
        <a
    href="#"
    className="flex items-center justify-center bg-[#F97316] text-[#FFFFFF] font-bold py-2 px-6 rounded-full border-2 border-[#FFFFFF] hover:bg-[#e2620f]"
  >
    سجل كعميل
  </a>
  <a
    href="#"
    className="flex items-center justify-center bg-[#FFFFFF] text-[#F97316] font-bold py-2 px-6 rounded-full border-2 border-[#FFFFFF] hover:bg-gray-200"
  >
    انضم كطاهى
  </a>

</div>
      </div>
      
    </div>
  );
};

export default AboutUs;