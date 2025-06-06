import React from 'react'
import { Button, Checkbox, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const PopupModaledit = ({ get , set }) => {


     const [fileName, setFileName] = useState("No file selected");
    
      const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
          setFileName(e.target.files[0].name);
        } else {
          setFileName("لم يتم اختيار أي صورة");
        }
    }
  return (
    <>

     <Modal show={get} size="md" popup onClose={() => set(false)}     dir="rtl">
            <ModalHeader className="" />
            <ModalBody  >
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">تعديل الوجبة  <br />
                <small className="font-light text-sm"> قم بتحديث تفاصيل وجبتك حسب الحاجة   </small>
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email">اسم الوجبة </Label>
                  </div>
                  <TextInput id="email" type="text" required 
                  value={'بيتزا من عند الشيخ محمد '} />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password">السعر</Label>
                  </div>
                  <TextInput id="password" type="number"   required 
                  value={'599'} />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="textar">وصف الوجبة</Label>
                  </div>
                  <textarea  className="w-90 h-50   bg-gray-200 p-2 rounded-xl"  id="textar" value={'بيتزا حكاية من عند الشيخ محمد '}  required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ing">المكونات</Label>
                  </div>
                  <TextInput id="ing" type="text" required  className="w-50 inline-block"  value={'شوية عجين وفراخ '}/>
                  <span className="bg-[#f97316] text-white m-2 p-1 rounded-lg  cursor-pointer"> <FontAwesomeIcon icon={faPlus}  className=" me-1 " /> </span>
                </div>
    
                
                
                
    
                <div className="flex justify-between">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ing"> وقت التحضير (دقيقة) </Label>
                  </div>
                  <TextInput id="ing" type="text" required  className="w-30 inline-block" value={'30'} />
                  </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ing">وقت الطهي (دقيقة)</Label>
                  </div>
                  <TextInput id="ing" type="text" required  className="w-30 inline-block" value={'20 '}/>
                  </div>
                  
                </div>
    
              

                <p className='font-extrabold text-2xl mb-0'> صور الوجبة </p>
                <p> الصور الحالية </p>
                
                <div className="relative inline-block">
  <img
    src="باستا.png"
    alt="بيتزا"
    className="w-90 h-50 rounded-lg"
  />
  <span
                  class={`absolute top-2 left-0 bg-amber-600 text-white text-xs font-medium me-2 px-2.5 py-1.5 rounded-full`}
                >
                  رئيسية <FontAwesomeIcon icon={faCrown} />
                </span>
  <button
    className="absolute bottom-2 left-2 bg-amber-50 px-3 py-1 rounded shadow text-red-600 cursor-pointer hover:bg-red-200 "
  >
    حذف <FontAwesomeIcon icon={faTrashCan} />

  </button>
  <button
    className="absolute bottom-2 right-2 bg-amber-50 px-3 py-1 rounded shadow text-amber-600  cursor-pointer hover:bg-amber-200     "
  >
        تعيين كرئيسية <FontAwesomeIcon icon={faCrown} />

  </button>
  
</div>
                <div className="relative inline-block">
  <img
    src="باستا.png"
    alt="بيتزا"
    className="w-90 h-50 rounded-lg"
  />
 
  <button
    className="absolute bottom-2 left-2 bg-amber-50 px-3 py-1 rounded shadow text-red-600 cursor-pointer hover:bg-red-200 "
  >
    حذف <FontAwesomeIcon icon={faTrashCan} />

  </button>
  <button
    className="absolute bottom-2 right-2 bg-amber-50 px-3 py-1 rounded shadow text-amber-600  cursor-pointer hover:bg-amber-200     "
  >
        تعيين كرئيسية <FontAwesomeIcon icon={faCrown} />

  </button>
  
</div>
                <div className="relative inline-block">
  <img
    src="باستا.png"
    alt="بيتزا"
    className="w-90 h-50 rounded-lg"
  />
  
  <button
    className="absolute bottom-2 left-2 bg-amber-50 px-3 py-1 rounded shadow text-red-600 cursor-pointer hover:bg-red-200 "
  >
    حذف <FontAwesomeIcon icon={faTrashCan} />

  </button>
  <button
    className="absolute bottom-2 right-2 bg-amber-50 px-3 py-1 rounded shadow text-amber-600  cursor-pointer hover:bg-amber-200     "
  >
        تعيين كرئيسية <FontAwesomeIcon icon={faCrown} />

  </button>
  
</div>

                
                

                
                
                 <div className="w-full max-w-md mx-auto p-4 border-2 border-dashed border-gray-300 rounded-2xl shadow-sm bg-white">
          <label className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="w-full text-center py-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition">
              <span className="text-sm text-gray-600">اضغط لإضافة صورة جديدة للوجبة  </span>
            </div>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <p className="text-sm text-gray-500 italic">{fileName}</p>
          </label>
        </div>
    
        <div>
                  <div className="mb-2 block">
                    <Label htmlFor="textar">معلومات إضافية </Label>
                  </div>
                  <textarea  className="w-90 h-50 bg-gray-200 p-2 rounded-xl"  id="textar" placeholder="أي معلومات إضافية تريد مشاركتها  مثل التحضير والتخزين ..إلخ"  required />
                </div>
    
    
    
                
    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">نوع الوجبة </h3>
    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center ps-3">
                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#f97316] dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">فطور  </label>
            </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center ps-3">
                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"    />
                <label for="horizontal-list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" >غداء</label>
            </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center ps-3">
                <input id="horizontal-list-radio-military" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label for="horizontal-list-radio-military" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">عشاء</label>
            </div>
        </li>
        <li class="w-full dark:border-gray-600">
            <div class="flex items-center ps-3">
                <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-amber-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label for="horizontal-list-radio-passport" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">حلويات</label>
            </div>
        </li>
    </ul>
    
    
    
    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">حالة الوجبة </h3>
    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center ps-3">
                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">متوفرة  </label>
            </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center ps-3">
                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label for="horizontal-list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">غير متوفرة</label>
            </div>
        </li>
        
    </ul>
    
    
    
    
                <div className="w-full">
                  <Button className="bg-[#f97316] hover:bg-amber-600 cursor-pointer">حفظ التعديلات </Button>
                </div>
                {/* <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?&nbsp;
                  <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                    Create account
                  </a>
                </div> */}
              </div>
            </ModalBody>
          </Modal>
    </>
  )
}

export default PopupModaledit