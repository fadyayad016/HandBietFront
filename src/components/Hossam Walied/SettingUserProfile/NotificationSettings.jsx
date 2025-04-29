import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
const NotificationSettings = () => {
const [switch1, setSwitch1] = useState(true);

    return (
        <>
            <div className="bg-white p-4 rounded-xl shadow-md my-4">
                <p className="font-bold mb-4">اعدادات الاشعارات</p>
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-lg">تحديثات الطلبات</p>
                        <p className="text-sm text-gray-500">اشعارات حول حالة طلباتك وتوصيلها</p>
                    </div>
                    <ToggleSwitch color="yellow" checked={switch1} onChange={setSwitch1}
/>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-lg">العروض الترويجية</p>
                        <p className="text-sm text-gray-500">اشعارات حول العروض والخصومات</p>
                    </div>
                    <ToggleSwitch color="yellow" checked={switch1} onChange={setSwitch1} />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-lg">طهاة جدد</p>
                        <p className="text-sm text-gray-500">اشعارات حول الطهاة الجدد في المنصة</p>
                    </div>
                    <ToggleSwitch color="yellow" checked={switch1} onChange={setSwitch1} />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-lg">اشعارات SMS</p>
                        <p className="text-sm text-gray-500">تلقي اشعارات مهمة عبر الرسائل النصية</p>
                    </div>
                    <ToggleSwitch color="yellow" checked={switch1} onChange={setSwitch1} />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-lg">اشعارات البريد الالكتروني</p>
                        <p className="text-sm text-gray-500">تلقي ملخص اسبوعي عن الطلبات والعروض عبر البريد الالكتروني</p>
                    </div>
                    <ToggleSwitch color="yellow" checked={switch1} onChange={setSwitch1} />
                </div>
                <div className="w-full text-left mb-6 ">
                    <button className="btn px-3 py-2 bg-[#F97316] text-white rounded-2xl">حفظ التغيرات</button>
                </div>
            </div>

        </>
    )
}
export default NotificationSettings;