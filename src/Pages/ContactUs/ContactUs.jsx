import React from "react";
import {
  faEnvelope,
  faLocationDot,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faSnapchat,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  return (
    <div>
      {/* Contact Our Team */}
      <div className="w-full text-center bg-[#FFEDD5] py-6 px-8 rounded-lg">
        <h3 className="text-xl font-bold text-[#1F2937] mb-2">
          HandBiet تواصل مع فريق
        </h3>
        <p className="text-[#4B5563] text-sm">
          نحن هنا لمساعدتك! سواء كان لديك استفسار، اقتراح أو أي سؤال، فريقنا
          سعيد بالتواصل معك
        </p>
      </div>

      {/* Send Message */}
      <div
        className="container mx-auto mt-6 mb-4 px-4 flex flex-col items-center gap-6 lg:flex-row"
        dir="rtl"
      >
        <div className="w-full border p-6 rounded-2xl bg-white">
          <h3 className="font-bold text-2xl text-[#1F2937] mb-6">
            أرسل رسالتك
          </h3>
          <form action="">
            <div className="flex gap-4 mb-6">
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <img
                    src="/public/ContactUs/name.png"
                    alt="Logo"
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-5"
                  />
                  <input
                    type="text"
                    id="name"
                    className="w-full pr-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                    placeholder="ادخل اسمك"
                    required
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  البريد الالكتروني
                </label>
                <div className="relative">
                  <img
                    src="/public/ContactUs/email.png"
                    alt="Logo"
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4"
                  />
                  <input
                    type="email"
                    id="email"
                    className="w-full pr-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                    placeholder="ادخل بريدك الالكتروني"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-6 w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                الموضوع
              </label>
              <div className="relative">
                <img
                  src="/public/ContactUs/subject.png"
                  alt="Logo"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4"
                />
                <input
                  type="text"
                  id="subject"
                  className="w-full pr-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                  placeholder="موضوع الرسالة"
                  required
                />
              </div>
            </div>
            <div className="mb-6 w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                الرسالة
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  rows="4"
                  className="w-full ps-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                  placeholder="ادخل رسالتك هنا..."
                  required
                ></textarea>
                <img
                  src="/public/ContactUs/message.png"
                  alt="Logo"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4"
                />
              </div>
            </div>
            <div className="mt-10 w-full">
              <button className="w-full btn bg-orange-500 text-white py-4 rounded-2xl flex items-center justify-center gap-2">
                إرسال الرسالة
                <img
                  src="/public/ContactUs/send.png"
                  alt="Send Icon"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </form>
        </div>

        {/*Contact Information  */}

        <div className="w-full p-6 border rounded-2xl bg-white">
          <h3 className="font-bold text-2xl text-[#1F2937] mb-4">
            معلومات التواصل
          </h3>
          <p className="mb-6 text-[#4B5563]">
            نرحب بتواصلك معنا في أي وقت. فريق الدعم لدينا متاح على مدار الساعة
            للاجابة على استفساراتك ومساعدتك في أي مشكلة تواجهك.
          </p>
          <form>
            <div className="flex items-center gap-4 my-4 bg-[#FFEDD5] p-4 rounded-lg">
              <FontAwesomeIcon
                className="text-amber-600 p-4 rounded-4xl bg-[#f974163d]"
                icon={faPhoneFlip}
              />
              <div>
                <h4 className="font-bold text-[#1F2937]">اتصل بنا</h4>
                <p className="text-[#4B5563]">0123456789</p>
                <p className="text-[#4B5563]">
                  من الاحد الي الخميس - 8 صباحا -5 مساء
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 my-4 bg-[#FFEDD5] p-4 rounded-lg">
              <FontAwesomeIcon
                className="text-amber-600 p-4 rounded-4xl bg-[#f974163d]"
                icon={faEnvelope}
              />
              <div>
                <h4 className="font-bold text-[#1F2937]"> البريد الالكتروني</h4>
                <p className="text-[#4B5563]">info@handbiet.com</p>
                <p className="text-[#4B5563]">support@handbiet.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 my-4 bg-[#FFEDD5] p-4 rounded-lg">
              <FontAwesomeIcon
                className="text-amber-600 p-4 rounded-4xl bg-[#f974163d]"
                icon={faLocationDot}
              />
              <div>
                <h4 className="font-bold text-[#1F2937]"> العنوان </h4>
                <p className="text-[#4B5563]">اسيوط - مصر</p>
                <p className="text-[#4B5563]">
                  المكتب الرئيسي: شارع الاسكندرية، القاهرة
                </p>
              </div>
            </div>
            <p className="font-bold text-[#1F2937] mb-6">
              تابعنا على وسائل التواصل
            </p>
            <div>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 bg-[#F9F9F9] rounded-3xl p-3"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 bg-[#F9F9F9] rounded-3xl p-3"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 bg-[#F9F9F9] rounded-3xl p-3"
              >
                <FontAwesomeIcon icon={faSnapchat} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 bg-[#F9F9F9] rounded-3xl p-3"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Frequently Questions */}

      <div className="w-full text-center mt-12">
        <h2 className="text-3xl font-bold text-[#1F2937] mb-2">
          الأسئلة الشائعة
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>

        <div className="block bg-white border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="text-lg font-bold text-[#1F2937]">
            كيف يمكنني التواصل مع خدمة العملاء؟
          </h3>
        </div>

        <div className="block bg-white border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="text-lg font-bold text-[#1F2937]">
            ما هي أوقات عمل خدمة العملاء؟
          </h3>
        </div>

        <div className="block bg-white border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="text-lg font-bold text-[#1F2937]">
            كيف يمكنني تقديم شكوى أو اقتراح؟
          </h3>
        </div>

        <div className="block bg-white border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="text-lg font-bold text-[#1F2937]">
            هل لديكم فروع في مدن أخرى غير اسيوط؟
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
