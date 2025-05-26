import { Spinner } from "flowbite-react";
import React from "react";
import CustemSpinner from "./CustemSpinner";
// import styles from "./Loading.module.css";
export default function Loading() {
  return (
    <div
      className={`text-center flex flex-col justify-center items-center h-screen`}
    >
      <h1 className="text-3xl font-bold text-orange-500 mb-8">
        Loading Your Content
      </h1>
      <CustemSpinner />

      {/* Pulse Dot Animation */}
      {/* <div className="flex justify-center space-x-4 mb-12 ">
        <div
          className={"w-4 h-4 bg-orange-400 rounded-full " + styles.loading}
          style={{ animationDelay: "0s" }}
        />
        <div
          className={"w-4 h-4 bg-orange-400 rounded-full " + styles.loading}
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className={"w-4 h-4 bg-orange-400 rounded-full " + styles.loading}
          style={{ animationDelay: "0.4s" }}
        />
      </div> */}
      {/* Bouncing Orbs */}
      {/* <div className="flex justify-center space-x-4 mb-12">
        <div
          className="w-6 h-6 bg-orange-500 rounded-full "
          style={{ animationDelay: "0s", animationName: "bounce" }}
        />
        <div
          className="w-6 h-6 bg-orange-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        />
        <div
          className="w-6 h-6 bg-orange-300 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="w-6 h-6 bg-orange-200 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        />
      </div> */}
      {/* Rotating Sun */}
      {/* <div className="relative w-24 h-24 mx-auto mb-12">
        <div
          className="absolute inset-0 rounded-full bg-orange-500 animate-spin"
          style={{ animationDuration: "2s" }}
        />
        <div
          className="absolute inset-2 rounded-full bg-orange-400 animate-spin"
          style={{ animationDuration: "3s", animationDirection: "reverse" }}
        />
        <div
          className="absolute inset-4 rounded-full bg-orange-300 animate-spin"
          style={{ animationDuration: "4s" }}
        />
      </div> */}
      {/* Wave Animation */}
      {/* <div className="flex justify-center space-x-1 mb-12">
        <div
          className="w-2 h-8 bg-orange-500 rounded-full animate-wave"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="w-2 h-8 bg-orange-500 rounded-full animate-wave"
          style={{ animationDelay: "0.1s" }}
        />
        <div
          className="w-2 h-8 bg-orange-500 rounded-full animate-wave"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="w-2 h-8 bg-orange-500 rounded-full animate-wave"
          style={{ animationDelay: "0.3s" }}
        />
        <div
          className="w-2 h-8 bg-orange-500 rounded-full animate-wave"
          style={{ animationDelay: "0.4s" }}
        />
      </div> */}
      {/* Progress Bar */}
      {/* <div className="w-64 h-3 bg-gray-700 rounded-full overflow-hidden mx-auto mb-8">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-progress"
          style={{ width: "0%" }}
        />
      </div> */}
      <p className="text-orange-800 mt-5">
        Please wait while we prepare your experience...
      </p>
    </div>
  );
}
