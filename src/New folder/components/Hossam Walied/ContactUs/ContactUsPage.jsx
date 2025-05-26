import { faComment, faEnvelope, faLocationDot, faPaperPlane, faPen, faPhoneFlip, faUser } from "@fortawesome/free-solid-svg-icons";
import CommonQuesAlert from "../CommonQuestionPage/CommonQuesAlert";
// import Header from "../HomePageComponents/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSnapchat, faSquareXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Header from "../../custom/HomePageComponents/Header";

const ContactUsPage = () => {
    const header = "تواصل مع فريق HandBiet";
    const content = "نحن هنا لمساعدتك سواء كان لديك استفسار حول طلبك الحالي، أو تحتاج إلى مساعدة في استخدام التطبيق، أو لديك اقتراحات لتحسين خدماتنا. فريق الدعم لدينا متاح على مدار الساعة للرد على استفساراتك ومساعدتك في أي مشكلة قد تواجهها. لا تتردد في التواصل معنا عبر القنوات المتاحة أدناه."
    return (
        <div className=" bg-[#F9F9F9]">
            <Header />
            <CommonQuesAlert show={false} header={header} content={content} />

            <div className="container mx-auto mt-6 mb-4 px-4 flex flex-col items-center gap-6 lg:flex-row" dir="rtl">
                <div className="w-full border p-6 rounded-2xl bg-white">
                    <h3 className="font-bold text-2xl mb-6">ارسل رسالتك</h3>
                    <form action="">
                        <div className="flex gap-4 mb-6 ">
                            <div className=" w-1/2 ">
                                <label className="block mb-2 text-sm font-medium text-gray-900">الاسم الكامل</label>
                                <div className="relative">
                                    <input type="text" id="name" className="w-full ps-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="ادخل الاسم" required />
                                    <FontAwesomeIcon className="absolute top-1/2 start-2 transform -translate-y-1/2 text-gray-400" icon={faUser} />
                                </div>
                            </div>
                            <div className="w-1/2 ">
                                <label className="block mb-2 text-sm font-medium text-gray-900">البريد الالكتروني</label>
                                <div className="relative">
                                    <input type="email" id="name" className="w-full ps-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="ادخل بريدك الالكتروني" required />
                                    <FontAwesomeIcon className="absolute top-1/2 start-2 transform -translate-y-1/2 text-gray-400" icon={faEnvelope} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900">الموضوع</label>
                            <div className="relative">
                                <input type="email" id="name" className="w-full ps-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="موضوع الرسالة" required />
                                <FontAwesomeIcon className="absolute top-1/2 start-2 transform -translate-y-1/2 text-gray-400" icon={faPen} />
                            </div>
                        </div>
                        <div className="mb-6 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900">الرسالة</label>
                            <div className="relative">
                                <textarea id="message" rows="4" className="w-full ps-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="اكتب رسالتك هنا..." required></textarea>
                                <FontAwesomeIcon className="absolute top-1/2 start-2 transform -translate-y-1/2 text-gray-400" icon={faComment} />
                            </div>
                        </div>
                        <div className="mt-10 w-full">
                            <button className="w-full btn bg-amber-500 text-white py-4 rounded-2xl">ارسال الرسالة<FontAwesomeIcon icon={faPaperPlane} /></button>
                        </div>
                    </form>

                </div>


                <div className="w-full p-6 rounded-2xl bg-white">
                    <h3 className="font-bold text-2xl mb-4">معلومات التواصل</h3>
                    <p className="mb-6">نرحب بتواصلك معنا في اي وقتز فريق الدعم لدينا متاح على مدار الساعة للرد على استفساراتك ومساعدتك في أي مشكلة قد تواجهها.</p>
                    <div className="flex items-center gap-4 my-4 bg-amber-200 p-4 rounded-lg">
                        <FontAwesomeIcon className="text-amber-600 p-4 rounded-4xl bg-amber-400 " icon={faPhoneFlip} />
                        <div>
                            <h4 className="font-bold">اتصل بنا</h4>
                            <p className="text-gray-800">011 234 567 89</p>
                            <p className="text-gray-800">من الاحد الي الخميس 8 صباحا-5 مساء</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 my-4 bg-amber-200 p-4 rounded-lg">
                        <FontAwesomeIcon className="text-amber-600 p-4 rounded-4xl bg-amber-400 " icon={faEnvelope} />
                        <div>
                            <h4 className="font-bold">البريد الالكتروني</h4>
                            <p className="text-gray-800">info@handbiet.com</p>
                            <p className="text-gray-800">support@handbiet.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 my-4 bg-amber-200 p-4 rounded-lg">
                        <FontAwesomeIcon className="text-amber-600 p-4 rounded-4xl bg-amber-400 " icon={faLocationDot} />
                        <div>
                            <h4 className="font-bold">العنوان</h4>
                            <p className="text-gray-800">الرياض-المملكة العربية السعودية</p>
                            <p className="text-gray-800">المكتب الرئيسي: شارع الملك فهد برج النخيل</p>
                        </div>
                    </div>
                    <p className="font-bold mb-6">تابعنا علي وسائل التواصل</p>
                    <div>
                        <a href="#" className="mx-2 bg-[#F9F9F9] rounded-3xl p-3"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                        <a href="#" className="mx-2 bg-[#F9F9F9] rounded-3xl p-3"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="mx-2 bg-[#F9F9F9] rounded-3xl p-3"><FontAwesomeIcon icon={faSnapchat} /></a>
                        <a href="#" className="mx-2 bg-[#F9F9F9] rounded-3xl p-3"><FontAwesomeIcon icon={faTiktok} /></a>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default ContactUsPage;