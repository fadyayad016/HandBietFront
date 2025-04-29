const CommonQuesAlert =({show})=>{
    return(
        <div className="w-full flex flex-col items-center justify-center bg-amber-300 py-15 px-5">
            <h2 className="font-bold text-4xl mb-4">الاسئلة الشائعة</h2>
            <p className="text-xl text-center">لديك استفسار؟ ربما وجدنا لك الاجابة هنا. تصفح الاسئلة الشائعة او ابحث عن سؤالك المحدد.</p>
            {show?<button className="btn py-3 px-3 mt-2 bg-amber-600 rounded-lg">تواصل معنا الان</button>:""}
        </div>
    )
}
export default CommonQuesAlert;