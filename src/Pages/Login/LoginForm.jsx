import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faTwitter,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink, useNavigate } from "react-router";
import { useLoginMutation, useGetUserQuery } from "../../features/api/authApi";
import CustemSpinner from "../../components/CustemSpinner";
import { useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";

export default function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error, isSuccess }] = useLoginMutation();

  const navigate = useNavigate();
  const { user, accessToken } = useSelector((state) => state.auth);
  // Call the hook at the top level
  const getUserQuery = useGetUserQuery(undefined, {
    skip: !localStorage.getItem("accessToken"),
  });

  useEffect(() => {
    if (user) {
      console.log("user", user);
      toast.success("You are logged in!", {
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
      navigate("/");
    }
  }, [user, accessToken]);
  const handleLogin = async () => {
    if (!userEmail || !password) {
      toast.error("Please enter email and password", {
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
    try {
      const response = await login({
        email: userEmail,
        password: password,
      }).unwrap();

      console.log("Login successful:", response);
    } catch (err) {
      console.error("Login failed:", err);
      toast.error(err.data.message, {
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
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* {isLoading && <div>Loading...</div>} */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 text-right">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          !مرحباً بعودتك
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          سجل الدخول للوصول إلى حسابك
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                onChange={(e) => setUserEmail(e.target.value)}
                dir="rtl"
                placeholder="example@example.com"
                className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-md placeholder-right"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center mb-1 text-sm">
              <a href="#" className="text-orange-500 hover:underline text-sm">
                هل نسيت كلمة المرور؟
              </a>
              <label className="text-gray-700">كلمة المرور</label>
            </div>
            <div className="relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="password"
                dir="rtl"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-md placeholder-right"
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-end text-sm text-gray-600">
            <label className="ml-2">تذكرني</label>
            <input type="checkbox" className="ml-2" />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleLogin}
            type="button"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <CustemSpinner size={4} />
            ) : (
              <>
                <FontAwesomeIcon icon={faSignInAlt} />
                <span>تسجيل الدخول</span>
              </>
            )}
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
          ليس لديك حساب؟
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-medium"
                : "text-orange-500 font-medium"
            }
          >
            إنشاء حساب جديد
          </NavLink>
        </p>
      </div>
    </div>
  );
}
