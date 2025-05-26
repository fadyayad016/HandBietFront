import image from '../../../../public/طاهية منزلية.png';
const WhyJoinTop = () => {
    return(
        <div className="w-full bg-[#FB923C] pt-8">
            <div className="container mx-auto flex flex-col-reverse items-center lg:flex-row lg:items-center  " dir='rtl'>
                <div className='w-full  p-4 px-6'>
                    <h1 className="text-4xl font-bold text-white mb-8">حوّل شغفك بالطهي إلى مصدر دخل</h1>
                    <p className="text-white mt-4">انضم الي مجتمع HandBiet  وابدأ بيع وجباتك المنزلية لمحبي الطعام الأصيل في مدينتك. نحن <span className='block mt-2'>نوفر لك المنصة والتسويق والدعم اللوجستي.</span></p>
                    <div className="mt-8 flex gap-4 justify-center lg:justify-start" >
                    <button className='btn cursor-pointer bg-white text-[#F97316] border-2 border-[#F97316] px-2 py-3 rounded-xl'>سجل الان مجانا</button>
                    <button className='btn cursor-pointer bg-[#FB923C] text-white border-2 border-white px-2 py-3 rounded-xl' >تعرف علي المزيد</button>
                    </div>

                </div>
                <div className='w-full'>
                    <img className='w-full' src={ image} alt="" />
                </div>
            </div>
        </div>
    )
}
export default WhyJoinTop;