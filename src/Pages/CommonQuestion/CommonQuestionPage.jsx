import {
  faCartShopping,
  faCreditCard,
  faIdCard,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import CommonQuestionAlert from "../../components/CommonQuesAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuestionSearch from "./Components/QuestionSearch";
import AccordingQues from "./Components/AccordingQues";

const CommonQuestionPage = () => {
  return (
    <>
      <CommonQuestionAlert show={false} />
      <QuestionSearch />
      <div className="container mx-auto " dir="rtl">
        <div className="w-full flex items-start justify-start bg-[#F9F9F9] py-5 px-5 ">
          <aside className="w-1/3 py-5 px-5 bg-white rounded-2xl">
            <h3 className="font-bold text-xl"> تصفح حسب الفئة</h3>
            <br />
            <ul className="">
              <li
                className={
                  "py-4 text-xl text-white rounded-sm " +
                  (true ? "bg-amber-500 ps-3" : "")
                }
              >
                <a href="#orders"> جميع الاسئلة</a>
              </li>
              <li className="py-4 text-xl ">
                <a href="#payment">
                  <FontAwesomeIcon className="me-3" icon={faCartShopping} />{" "}
                  الطلب والتوصيل
                </a>
              </li>
              <li className="py-4 text-xl ">
                <a href="#delivery">
                  <FontAwesomeIcon className="me-3" icon={faCreditCard} /> الدفع
                  والفاتورة{" "}
                </a>
              </li>
              <li className="py-4 text-xl ">
                <a href="#contact">
                  <FontAwesomeIcon className="me-5" icon={faUtensils} />
                  للطهاة
                </a>
              </li>
              <li className="py-4 text-xl ">
                <a href="#contact">
                  <FontAwesomeIcon className="me-3" icon={faIdCard} />
                  الحساب والاعدادات{" "}
                </a>
              </li>
              <li className="py-4 text-xl ">
                <a href="#contact">
                  <FontAwesomeIcon className="me-3" icon={faShieldHalved} />{" "}
                  السلامة والجودة{" "}
                </a>
              </li>
            </ul>
            <hr />
            <p className="py-4 font-bold">لا تجد اجابتك؟</p>
            <p>
              يمكنك التواصل مع فريق الدعم لدينا وسنسعد{" "}
              <span className="block mt-4">بمساعدتك</span>
            </p>
            <button className="btn py-3 px-3 mt-2 bg-amber-600 rounded-lg">
              تواصل معنا الان
            </button>
          </aside>
          <main className="w-2/3 pb-5 px-5">
            <AccordingQues showTitle={true} />
            <AccordingQues showTitle={true} />
            <AccordingQues showTitle={true} />
          </main>
        </div>
      </div>
      <CommonQuestionAlert show={true} />
    </>
  );
};
export default CommonQuestionPage;

{
  /* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */
}
