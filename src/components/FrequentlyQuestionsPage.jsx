import React from "react";

const FrequentlyQuestionsPage = () => {
  return (
    <div className="w-full text-center mt-12">
      <h2 className="text-3xl font-bold text-[#1F2937] mb-4">أسئلة شائعة</h2>
      <p className="text-lg text-[#4B5563] mb-6">
        إجابات على أكثر الأسئلة التي تردنا من الطهاة الجدد
      </p>
      <br />
      {/* Question 1 */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#1F2937] mb-2">
          ؟ HandBiet ما هى متطلبات الانضمام الى
        </h3>
        <p className="text-[#4B5563] text-sm">
          تحتاج إلى أن تكون مقيمًا في المملكة العربية السعودية، وأن تمتلك مهارات
          طهي جيدة، وأن تكون قادرًا على إعداد وجبات بجودة عالية. كما نحتاج إلى
          بعض المستندات الرسمية للتحقق من هويتك
        </p>
      </div>
      <hr className="my-6 border-t border-gray-300 w-full" />

      {/* Question 2 */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#1F2937] mb-2">
          كيف يتم تحديد سعر الوجبات؟
        </h3>
        <p className="text-[#4B5563] text-sm">
          أنت من يحدد سعر وجباتك بناءً على تكلفة المكونات والوقت والجهد المبذول.
          سنقدم لك نصائح لتسعير وجباتك بشكل مناسب بناءً على أسعار السوق وجودة
          وجباتك
        </p>
      </div>
      <hr className="my-6 border-t border-gray-300 w-full" />

      {/* Question 3 */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#1F2937] mb-2">
          كيف ومتى أستلم أرباحي؟
        </h3>
        <p className="text-[#4B5563] text-sm">
          يتم تحويل الأرباح إلى حسابك البنكي بشكل أسبوعي بعد خصم رسوم الخدمة
          البسيطة. يمكنك تتبع جميع عمليات البيع والأرباح من خلال لوحة التحكم
          الخاصة بك
        </p>
      </div>
      <hr className="my-6 border-t border-gray-300 w-full" />

      {/* Question 4 */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#1F2937] mb-2">
          هل هناك حد لعدد الوجبات التي يمكنني بيعها؟
        </h3>
        <p className="text-[#4B5563] text-sm">
          لا يوجد حد أقصى! يمكنك بيع أي عدد من الوجبات حسب قدرتك. ننصحك بالبدء
          بعدد معقول ثم زيادته تدريجيًا مع نمو قاعدة عملائك
        </p>
      </div>
    </div>
  );
};

export default FrequentlyQuestionsPage;
