const PasswordSetting = () => {
    return(
        <>
            <div className="bg-white p-4 rounded-xl shadow-md my-4">
            <p className="font-bold mb-4">تغير كلمة المرور</p>
            <form action="">
            <div className=" w-full mb-4 ">
                        <label className="block mb-2 text-sm text-gray-500">كلمة المرور الحالية</label>
                        <input type="password" id="oldPassword" className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="ادخل كلمة المرور الحالية" required />
                    </div>
                    <div className=" w-full mb-4 ">
                        <label className="block mb-2 text-sm text-gray-500">كلمة المرور الجديدة</label>
                        <input type="password" id="newPassword" className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="ادخل كلمة المرور الجديدة" required />
                    </div>
                    <div className=" w-full mb-4 ">
                        <label className="block mb-2 text-sm text-gray-500">تاكيد كلمة المرور الجديدة</label>
                        <input type="password" id="confirmPassword" className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" placeholder="قم بتاكيد كلمة المرور الجديدة" required />
                    </div>
                    <div className="w-full text-left mb-6 ">
                        <button className="btn px-3 py-2 bg-[#F97316] rounded-2xl text-white">تغير كلمة المرور</button>
                    </div>
            </form>


            </div>

        </>
    )
}
export default PasswordSetting;