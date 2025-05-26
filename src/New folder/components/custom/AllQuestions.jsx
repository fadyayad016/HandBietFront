import React, { useState } from "react";
import { faCartShopping, faCreditCard, faIdCard, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../custom/HomePageComponents/Header";
import Footer from "../custom/HomePageComponents/Footer";

const AllQuestions = ({ show }) => {
  const [active, setActive] = useState("#orders"); 
  const [openQuestion, setOpenQuestion] = useState(null); 

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index); 
  };

  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center justify-center bg-[#FFEDD5] py-15 px-5">
        <h2 className="font-bold text-[#1F2937] text-4xl mb-4">الأسئلة الشائعة</h2>
        <p className="text-xl text-[#757575] text-center">
          لديك استفسار؟ ربما وجدنا لك الاجابة هنا. تصفح الاسئلة الشائعة او ابحث عن سؤالك المحدد
        </p>
      </div>

      <div className="relative mt-6 w-full max-w-lg mx-auto">
        <input
          type="text"
          placeholder=".... ابحث في الأسئلة الشائعة"
          className="w-full p-4 pr-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-right"
        />
        <img
          src="/public/All Questions/search.png"
          alt="Logo"
          className="absolute inset-y-0 left-0 w-6 h-6 my-auto ml-3 cursor-pointer"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      <div className="container mx-auto" dir="rtl">
        <div className="w-full flex items-start justify-start bg-[#F9F9F9] py-5 px-5">
          <aside className="w-1/3 py-5 px-5 bg-white rounded-2xl">
            <h3 className="font-bold text-[#1F2937] text-2xl">تصفح حسب الفئة</h3>
            <br />
            <ul>
              <li
                className={
                  "py-4 text-xl rounded-sm ps-3 " +
                  (active === "#orders" ? "bg-orange-500 text-white" : "text-black")
                }
                onClick={() => setActive("#orders")}
              >
                <a href="#orders">جميع الاسئلة</a>
              </li>
              <li
                className={
                  "py-4 text-xl rounded-sm ps-3 " +
                  (active === "#payment" ? "bg-orange-500 text-white" : "text-black")
                }
                onClick={() => setActive("#payment")}
              >
                <a href="#payment">
                  <FontAwesomeIcon className="me-3" icon={faCartShopping} /> الطلب والتوصيل
                </a>
              </li>
              <li
                className={
                  "py-4 text-xl rounded-sm ps-3 " +
                  (active === "#delivery" ? "bg-orange-500 text-white" : "text-black")
                }
                onClick={() => setActive("#delivery")}
              >
                <a href="#delivery">
                  <FontAwesomeIcon className="me-3" icon={faCreditCard} /> الدفع والفاتورة
                </a>
              </li>
              <li
                className={
                  "py-4 text-xl rounded-sm ps-3 " +
                  (active === "#contact" ? "bg-orange-500 text-white" : "text-black")
                }
                onClick={() => setActive("#contact")}
              >
                <a href="#contact">
                  <FontAwesomeIcon className="me-5" icon={faUtensils} /> للطهاة
                </a>
              </li>
              <li
                className={
                  "py-4 text-xl rounded-sm ps-3 " +
                  (active === "#settings" ? "bg-orange-500 text-white" : "text-black")
                }
                onClick={() => setActive("#settings")}
              >
                <a href="#settings">
                  <FontAwesomeIcon className="me-3" icon={faIdCard} /> الحساب والاعدادات
                </a>
              </li>
              <li
                className={
                  "py-4 text-xl rounded-sm ps-3 " +
                  (active === "#safety" ? "bg-orange-500 text-white" : "text-black")
                }
                onClick={() => setActive("#safety")}
              >
                <a href="#safety">
                  <FontAwesomeIcon className="me-3" icon={faShieldHalved} /> السلامة والجودة
                </a>
              </li>
            </ul>
            <hr />
            <p className="py-4 font-bold">لا تجد اجابتك؟</p>
            <p className="text-[#757575]">
              يمكنك التواصل مع فريق الدعم لدينا وسنسعد بمساعدتك
            </p>
            <div>
              <button
                onClick={() => (window.location.href = "/ContactUs")}
                className="btn py-3 px-3 mt-2 bg-orange-500 rounded-lg"
              >
                اتصل بنا
              </button>
            </div>
          </aside>
          <div className="w-2/3 py-5 px-5">
          
            {/* الطلب والتوصيل */}
            <h3 className="font-bold text-[#1F2937] text-2xl mb-4">الطلب والتوصيل</h3>
            <div className="space-y-4">
              {[
                { question: "كيف يمكنني تقديم طلب على HandBiet؟", answer: "يمكنك تقديم طلب من خلال التطبيق أو الموقع." },
                { question: "ما هي مناطق التوصيل المتاحة؟", answer: "نقوم بالتوصيل إلى جميع المناطق الرئيسية." },
                { question: "كم تستغرق عملية التوصيل؟", answer: "عادةً ما تستغرق عملية التوصيل من 30 إلى 60 دقيقة." },
                { question: "هل يمكنني تعديل طلبي بعد تقديمه؟", answer: "نعم، يمكنك تعديل الطلب قبل بدء التحضير." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-4 bg-white"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleQuestion(index)}
                  >
                    <p className="text-gray-700">{item.question}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`w-6 h-6 text-orange-500 transform ${
                        openQuestion === index ? "rotate-90" : ""
                      }`}
                      style={{
                        backgroundColor: "#FFF3E0", 
                        borderRadius: "50%",
                        padding: "4px", 
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {openQuestion === index && (
                    <p className="mt-2 text-gray-500">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>

            {/* الدفع والفوترة */}
            <h3 className="font-bold text-[#1F2937] text-2xl mt-8 mb-4">الدفع والفوترة</h3>
            <div className="space-y-4">
              {[
                { question: "ما هي وسائل الدفع المتاحة؟", answer: "نقبل الدفع نقدًا أو عبر البطاقات الائتمانية." },
                { question: "هل توجد رسوم إضافية على الطلبات؟", answer: "لا توجد رسوم إضافية على الطلبات." },
                { question: "كيف يمكنني الحصول على فاتورة ضريبية؟", answer: "يمكنك طلب الفاتورة من خلال التطبيق." },
              ].map((item, index) => (
                <div
                  key={index + 4}
                  className="border border-gray-300 rounded-lg p-4 bg-white"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleQuestion(index + 4)}
                  >
                    <p className="text-gray-700">{item.question}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`w-6 h-6 text-orange-500 transform ${
                        openQuestion === index + 4 ? "rotate-90" : ""
                      }`}
                      style={{
                        backgroundColor: "#FFF3E0", 
                        borderRadius: "50%", 
                        padding: "4px", 
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {openQuestion === index + 4 && (
                    <p className="mt-2 text-gray-500">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>

            {/* للطهاة */}
            <h3 className="font-bold text-[#1F2937] text-2xl mt-8 mb-4">للطهاة</h3>
            <div className="space-y-4">
              {[
                { question: "كيف يمكنني الانضمام كطاهٍ في HandBiet؟", answer: "يمكنك التسجيل عبر الموقع الرسمي واتباع الخطوات المطلوبة." },
                { question: "كيف يتم تحديد أسعار الوجبات؟", answer: "يتم تحديد الأسعار بناءً على المكونات وتكاليف التحضير." },
                { question: "كيف ومتى أحصل على مستحقاتي المالية؟", answer: "يتم تحويل المستحقات المالية بشكل دوري إلى حسابك البنكي." },
              ].map((item, index) => (
                <div
                  key={index + 8}
                  className="border border-gray-300 rounded-lg p-4 bg-white"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleQuestion(index + 8)}
                  >
                    <p className="text-gray-700">{item.question}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`w-6 h-6 text-orange-500 transform ${
                        openQuestion === index + 8 ? "rotate-90" : ""
                      }`}
                      style={{
                        backgroundColor: "#FFF3E0", 
                        borderRadius: "50%",
                        padding: "4px", 
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {openQuestion === index + 8 && (
                    <p className="mt-2 text-gray-500">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>

            {/* الحساب والإعدادات */}
            <h3 className="font-bold text-[#1F2937] text-2xl mt-8 mb-4">الحساب والإعدادات</h3>
            <div className="space-y-4">
              {[
                { question: "كيف يمكنني استعادة كلمة المرور؟", answer: "يمكنك استعادة كلمة المرور من خلال النقر على خيار 'نسيت كلمة المرور' في صفحة تسجيل الدخول." },
                { question: "كيف يمكنني تحديث معلومات حسابي؟", answer: "يمكنك تحديث معلومات حسابك من خلال صفحة الإعدادات في التطبيق." },
                { question: "كيف يمكنني حذف حسابي؟", answer: "يمكنك طلب حذف الحساب من خلال التواصل مع فريق الدعم الفني." },
              ].map((item, index) => (
                <div
                  key={index + 11} 
                  className="border border-gray-300 rounded-lg p-4 bg-white"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleQuestion(index + 11)}
                  >
                    <p className="text-gray-700">{item.question}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`w-6 h-6 text-orange-500 transform ${
                        openQuestion === index + 11 ? "rotate-90" : ""
                      }`}
                      style={{
                        backgroundColor: "#FFF3E0",
                        borderRadius: "50%", 
                        padding: "4px", 
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {openQuestion === index + 11 && (
                    <p className="mt-2 text-gray-500">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>

            {/* السلامة والجودة */}
            <h3 className="font-bold text-[#1F2937] text-2xl mt-8 mb-4">السلامة والجودة</h3>
            <div className="space-y-4">
              {[
                { question: "ما هي إجراءات السلامة المتبعة لضمان جودة الوجبات؟", answer: "نلتزم بأعلى معايير الجودة والسلامة لضمان تقديم وجبات آمنة وصحية." },
                { question: "ماذا أفعل إذا لم تكن الوجبة كما هو متوقع؟", answer: "يمكنك التواصل مع فريق الدعم الفني لحل المشكلة واسترداد المبلغ إذا لزم الأمر." },
                { question: "كيف يتم التعامل مع الحساسية الغذائية؟", answer: "نحرص على توفير معلومات واضحة عن المكونات لتجنب أي حساسية غذائية." },
              ].map((item, index) => (
                <div
                  key={index + 14} 
                  className="border border-gray-300 rounded-lg p-4 bg-white"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleQuestion(index + 14)}
                  >
                    <p className="text-gray-700">{item.question}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`w-6 h-6 text-orange-500 transform ${
                        openQuestion === index + 14 ? "rotate-90" : ""
                      }`}
                      style={{
                        backgroundColor: "#FFF3E0", 
                        borderRadius: "50%", 
                        padding: "4px", 
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {openQuestion === index + 14 && (
                    <p className="mt-2 text-gray-500">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center bg-[#FFEDD5] py-15 px-5">
        <h2 className="font-bold text-[#1F2937] text-2xl mb-4"> لا زلت لديك أسئلة؟</h2>
        <p className="text-xl text-[#757575] text-center">
          فريق الدعم لدينا متاح على مدار الساعة للإجابة على جميع استفساراتك ومساعدتك في أي مشكلة تواجهك
        </p>
        <a
          href="/ContactUs"
          className="mt-4 flex items-center justify-center py-3 px-6 bg-orange-500 text-white text-lg font-bold rounded-lg hover:bg-orange-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5 ml-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          تواصل معنا الآن
        </a>
      </div>
      <Footer />
    </>
  );
};

export default AllQuestions;