import React from "react";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Button, Checkbox, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import { useState } from "react";
import PopupModelAdd from "./PopupModelAdd";
import PopupModaledit from "./PopupModaledit";

// import PopupModaledit from "./PopupModaledit";

const CookerMenu = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const handleAdd = () => {
    setOpenModal(true);
  };
  const handleEdit = () => {
    setOpenModalEdit(true);
  };

  return (
    <>
      <div className=" max-w-6xl  " dir="rtl">
        <div className="m-4 bg-gray-100 flex  justify-between items-center h-15  ">
          <span className="  text-md font-bold   lg:font-extrabold lg:text-2xl m-4 ">
            {" "}
            إدارة الوجبات <br />
            <small className="text-sm pt-0 font-light">
              قائمة بجميع وجباتك المتاحة للطلب{" "}
            </small>{" "}
          </span>

          <a
            // onClick={() => setOpenModal(true)}
            onClick={handleAdd}
            class="text-white bg-[#f97316] hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-sm text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
          >
            {" "}
            + إضافة وجبة جديدة{" "}
          </a>
        </div>
        <div
          className="grid  items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pe-8 "
          dir="rtl"
        >
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              class="w-full  hover:bg-[#f1efef] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ms-5"
            >
              <a href="#" className="relative">
                <img
                  class=" rounded-t-lg w-full h-48 object-cover "
                  src="باستا.png"
                  alt="product image"
                />
                <span
                  class={`absolute top-2 left-0 bg-amber-600 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full`}
                >
                  الاكثر طلبا {index}
                </span>
              </a>
              <div class="px-5 pb-5 pt-4 ">
                <a href="#" className="flex items-center justify-between">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    بيتزا شديدة المنظر{" "}
                  </h5>
                  <span class="text-md font-bold text-[#f97316] dark:text-white">
                    $599
                  </span>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-0">
                    بيتزا حكاية من عند الشيف محماااد
                  </span>
                </div>
                <div class="flex items-center  justify-between ">
                  <label class="inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <span class="m-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      الحالة
                    </span>

                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                  </label>
                  {/* div of del edit icons */}
                  <div className="flex items-center justify-between  mb-5">
                    <a
                      href="#"
                      onClick={handleEdit}
                      className="   focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-2 py-0.2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        class="w-6 h-6 text-blue-600 hover:text-blue-900 dark:text-white "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                        />
                      </svg>
                    </a>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="cursor-pointer hover:text-red-800 text-red-500 "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className=" w-95   md:w-85  h-90 border-2 border-dotted border-gray-600  hover:bg-gray-200 mb-20   ms-5  md:mb-5 md:ms-5 mt-2 rounded-2xl flex flex-col items-center  justify-center">
            <p className=" bg-amber-300 size-15 rounded-4xl text-center cursor-pointer ">
              {" "}
              <FontAwesomeIcon
                icon={faPlus}
                className=" text-[#F97316] pt-3.5 text-3xl "
              />
            </p>
            <br />
            <p className="font-extrabold text-2xl text-center">
              إضافة وجبة جديدة
              <br />
              <small className="font-light text-lg">
                {" "}
                انقر هنا لإضافة وجبة جديدة إلى قائمتك{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
      <PopupModelAdd getter={openModal} setter={setOpenModal} />

      <PopupModaledit get={openModalEdit} set={setOpenModalEdit} />
    </>
  );
};

export default CookerMenu;
