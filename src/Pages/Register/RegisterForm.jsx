import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUtensils,
  faEnvelope,
  faLock,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faTwitter,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { Bounce, toast } from "react-toastify";
import { useRegisterMutation } from "../../features/api/authApi";
import { useNavigate } from "react-router";

export default function RegisterForm() {
  const [accountType, setAccountType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerPost, { isLoading, error, isSuccess }] = useRegisterMutation();
  const navigator = useNavigate();

  const handleRegister = () => {
    // Handle registration logic here
    console.log("Account Type:", accountType);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Confirm Password:", confirmPassword);
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    registerPost({
      role: accountType,
      email,
      password,
      firstName,
      lastName,
    })
      .unwrap()
      .then(() => {
        toast.success("Registration successful!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        navigator("/login");
      })
      .catch((error) => {
        toast.error(JSON.stringify(error.data.error), {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
          أنشئ حسابك الآن
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          اختر نوع الحساب المناسب لك
        </p>

        {/* Account Type Selection */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setAccountType("cook")}
            className={`flex flex-col items-center w-1/2 py-4 rounded-lg border ${
              accountType === "cook"
                ? "border-orange-500 bg-orange-50"
                : "border-gray-300"
            } mx-1`}
          >
            <FontAwesomeIcon
              icon={faUtensils}
              className="text-orange-500 text-2xl mb-2"
            />
            <span className="text-sm font-medium">طاهي منزلي</span>
            <span className="text-xs text-gray-500">بيع وجباتك المنزلية</span>
          </button>
          <button
            onClick={() => setAccountType("customer")}
            className={`flex flex-col items-center w-1/2 py-4 rounded-lg border ${
              accountType === "customer"
                ? "border-orange-500 bg-orange-50"
                : "border-gray-300"
            } mx-1`}
          >
            <FontAwesomeIcon
              icon={faUser}
              className="text-orange-500 text-2xl mb-2"
            />
            <span className="text-sm font-medium">عميل</span>
            <span className="text-xs text-gray-500">
              أطلب وجبات منزلية لذيذة
            </span>
          </button>
        </div>

        {/* Form Inputs */}
        <form className="space-y-4 text-right">
          {/* first Name and last Name  */}

          <div className="flex space-x-4">
            <div>
              <p className="text-sm text-gray-700 mb-2">الاسم الاخير</p>
              <input
                type="text"
                dir="rtl"
                placeholder="ادخل الاسم الاخير"
                className="w-full p-3 border border-gray-300 rounded-md placeholder-right"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <p className="text-sm text-gray-700 mb-2">الاسم الاول</p>
              <input
                type="text"
                dir="rtl"
                placeholder="ادخل الاسم الاول"
                className="w-full p-3 border border-gray-300 rounded-md placeholder-right"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm text-gray-700 mb-2">البريد الالكتروني</p>
            <div className="relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute right-3 top-3 text-gray-400"
              />
              <input
                type="email"
                dir="rtl"
                placeholder="example@example.com"
                className="w-full p-3 pr-10 border border-gray-300 rounded-md placeholder-right"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <p className="text-sm text-gray-700 mb-2">كلمة المرور</p>
            <div className="relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute right-3 top-3 text-gray-400"
              />
              <input
                type="password"
                placeholder="••••••••"
                dir="rtl"
                className="w-full p-3 pr-10 border border-gray-300 rounded-md placeholder-right"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <p className="text-sm text-gray-700 mb-2">تأكيد كلمة المرور</p>
            <div className="relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute right-3 top-3 text-gray-400"
              />
              <input
                type="password"
                dir="rtl"
                placeholder="••••••••"
                className="w-full p-3 pr-10 border border-gray-300 rounded-md placeholder-right"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Terms and Checkbox */}
          <div className="flex items-center justify-end text-sm text-gray-600">
            <label className="ml-2">
              أوافق على{" "}
              <span className="text-orange-500">
                الشروط والأحكام وسياسة الخصوصية
              </span>
            </label>
            <input type="checkbox" className="ml-2" />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>إنشاء حساب</span>
          </button>

          {/* Social Logins */}
          <div className="text-center text-sm text-gray-500 my-4">
            أو سجل الدخول باستخدام
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
              <FontAwesomeIcon icon={faApple} className="text-xl" />
            </button>
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-xl text-blue-500"
              />
            </button>
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-xl text-red-500"
              />
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-6 text-gray-700">
          لديك حساب بالفعل؟{" "}
          <a href="/login" className="text-orange-500 font-medium">
            سجل الدخول
          </a>
        </p>
      </div>
    </div>
  );
}
