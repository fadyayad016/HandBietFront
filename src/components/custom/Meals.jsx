import React from "react";
import Header from "../custom/HomePageComponents/Header";
import Footer from "../custom/HomePageComponents/Footer";

const Meals = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center justify-center bg-[#FFEDD5] py-10 px-5">
        <div className="relative w-full max-w-lg mx-auto">
          <textarea
            placeholder=".... ابحث عن وجبة، طبق، أو مكون"
            className="w-full p-2 pr-4 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-right"
          />
          <img
            src="/public/Meals/search.png"
            alt="Logo"
            className="absolute inset-y-0 left-0 w-10 h-10 my-auto ml-3 cursor-pointer"
          />
        </div>
      </div>

      <div className="container mx-auto px-5 py-10 flex flex-row-reverse">

        {/* Sidebar */}
        <aside className="w-1/4 bg-white border border-gray-300 rounded-lg p-4">
          <div className="flex flex-col items-end mb-6">
            <h3 className="text-black font-bold mb-4 text-right">نطاق السعر</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 ml-auto">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: "50%" }} 
              ></div>
            </div>
            <div className="flex justify-between w-full mt-2 text-gray-500 text-sm">
            <span>0 ر.س</span>
              <span>200 ر.س</span>
            </div>
          </div>

          {/* نوع المطبخ */}
          <h3 className="text-black font-bold mb-4 text-right">نوع المطبخ</h3>
          <div className="space-y-2 mb-6 text-right">
            <label className="flex items-center justify-end">
              <span>سعودي</span>
              <input type="radio" name="cuisine" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>خليجي</span>
              <input type="radio" name="cuisine" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>عربي</span>
              <input type="radio" name="cuisine" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>آسيوي</span>
              <input type="radio" name="cuisine" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>غربي</span>
              <input type="radio" name="cuisine" className="ml-2" />
            </label>
          </div>

          {/* الاحتياجات الغذائية */}
          <h3 className="text-black font-bold mb-4 text-right">الاحتياجات الغذائية</h3>
          <div className="space-y-2 mb-6 text-right">
            <label className="flex items-center justify-end">
              <span>حلال</span>
              <input type="radio" name="diet" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>نباتي</span>
              <input type="radio" name="diet" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>خالي من الغلوتين</span>
              <input type="radio" name="diet" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>خالي من الألبان</span>
              <input type="radio" name="diet" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>قليل الكربوهيدرات</span>
              <input type="radio" name="diet" className="ml-2" />
            </label>
          </div>

          {/* نوع الوجبة */}
          <h3 className="text-black font-bold mb-4 text-right">نوع الوجبة</h3>
          <div className="space-y-2 mb-6 text-right">
            <label className="flex items-center justify-end">
              <span>فطور</span>
              <input type="radio" name="mealType" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>غداء</span>
              <input type="radio" name="mealType" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>عشاء</span>
              <input type="radio" name="mealType" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>حلويات</span>
              <input type="radio" name="mealType" className="ml-2" />
            </label>
            <label className="flex items-center justify-end">
              <span>مقبلات</span>
              <input type="radio" name="mealType" className="ml-2" />
            </label>
          </div>

          <a
            href="#"
            className="block text-center bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 mb-4"
          >
            تطبيق الفلاتر
          </a>
          <a
            href="#"
            className="block text-center text-orange-500 font-bold"
          >
            إعادة تعيين
          </a>
        </aside>

        {/* Main Content */}
        <div className="w-3/4 pr-5">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <a
                href="#"
                className="flex items-center text-black-500 font-bold border border-white-500 rounded-lg px-3 py-1 hover:bg-orange-500 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>              <span>الأكثر شهرة</span>

              </a>
              <span className="text-gray-500 ml-2">: ترتيب حسب</span>
            </div>
            <h2 className="text-2xl font-bold text-black">الوجبات المتاحة</h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <img
                src="/public/Meals/منسف.png"
                alt="كبسة دجاج"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-500 font-bold">ر.س 85</span>
                <h3 className="text-black font-bold"> منسف أردني</h3>
              </div>
              <p className="text-gray-500 mb-2 text-right">
              منسف تقليدي مع لحم ضأن وجميد وخبز شراك
                          </p>
              <div className="flex items-center justify-end">
                <div className="flex text-orange-500">
                  <span className="text-gray-500 ml-2">(76)</span>
                  <span>☆★★★★</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <img
                src="/public/Meals/شاورما.png"
                alt="كبسة دجاج"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-500 font-bold">ر.س 65</span>
                <h3 className="text-black font-bold">شاورما لحم </h3>
              </div>
              <p className="text-gray-500 mb-2 text-right">
              شاورما لحم مشوي مع خبز بيتا وخضار طازجة            </p>
              <div className="flex items-center justify-end">
                <div className="flex text-orange-500">
                  <span className="text-gray-500 ml-2">(94)</span>
                  <span>★★★★★</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <img
                src="/public/Meals/كبسة.png"
                alt="كبسة دجاج"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-500 font-bold">ر.س 75</span>
                <h3 className="text-black font-bold">كبسة دجاج</h3>
              </div>
              <p className="text-gray-500 mb-2 text-right">
                كبسة دجاج تقليدية مع أرز بسمتي وخلطة توابل مميزة
              </p>
              <div className="flex items-center justify-end">
                <div class="flex text-orange-500">
                  <span class="text-gray-500 ml-2">(128)</span>
                  <span>☆★★★★</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <img
                src="/public/Meals/كنافة.png"
                alt="كبسة دجاج"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-500 font-bold">ر.س 55</span>
                <h3 className="text-black font-bold">  كنافة بالقشطة</h3>
              </div>
              <p className="text-gray-500 mb-2 text-right">
              كنافة نابلسية تقليدية مع قشطة طازجة
                                      </p>
              <div className="flex items-center justify-end">
                <div className="flex text-orange-500">
                  <span className="text-gray-500 ml-2">(143)</span>
                  <span>★★★★★</span>
                </div>
              </div>
            </div>

  {/* Card 5 */}
  <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <img
                src="/public/Meals/بيتزا.png"
                alt="كبسة دجاج"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-500 font-bold">ر.س 70</span>
                <h3 className="text-black font-bold">بيتزا بيتية </h3>
              </div>
              <p className="text-gray-500 mb-2 text-right">
              بيتزا محضرة يدوياً مع صلصة طماطم طازجة
              </p>
              <div className="flex items-center justify-end">
                <div className="flex text-orange-500">
                  <span className="text-gray-500 ml-2">(87)</span>
                  <span>☆★★★★</span>
                </div>
              </div>
            </div>

  {/* Card 6 */}

            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <img
                src="/public/Meals/سلطة.png"
                alt="كبسة دجاج"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-500 font-bold">ر.س 45</span>
                <h3 className="text-black font-bold"> سلطة يونانية</h3>
              </div>
              <p className="text-gray-500 mb-2 text-right">
              سلطة يونانية طازجة مع جبنة فيتا وزيتون
                          </p>
              <div className="flex items-center justify-end">
                <div className="flex text-orange-500">
                  <span className="text-gray-500 ml-2">(112)</span>
                  <span>★★★★★</span>
                </div>
              </div>
            </div>

          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-10">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7-7-7" />
              </svg>
            </a>

            <a
              href="#"
              className="mx-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white transition"
            >
              1
            </a>
            <a
              href="#"
              className="mx-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white transition"
            >
              2
            </a>
            <a
              href="#"
              className="mx-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white transition"
            >
              3
            </a>
            <a
              href="#"
              className="mx-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white transition"
            >
              4
            </a>
            <a
              href="#"
              className="mx-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white transition"
            >
              5
            </a>
            <a
              href="#"
              className="mx-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white transition"
            >
              6
            </a>
            <a
              href="#"
              className="mx-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white transition"
            >
              7
            </a>
            <a
              href="#"
              className="mx-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white transition"
            >
              8
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg text-gray-500 hover:bg-orange-500 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Meals;