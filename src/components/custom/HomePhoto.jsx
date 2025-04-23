import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

// import{}



const HomePhoto = () => {
    return (
        <>
            <div className="bg-[url('/Ammar.png')] h-120 bg-cover bg-center flex flex-col justify-center pr-5 lg:pr-30 " dir='rtl'>
                <h1 className='text-white font-extrabold bottom-120 right-45 text-5xl m-3'> طعم المنزل بلمسة احترافية </h1>
                <p className='text-white font-medium m-5'> اكتشف أفضل الوجبات المنزلية المعدة بأيدي طهاه محليين موهوبين في منطقتك </p>



                <div className="flex  ">
                    <div className="flex items-center border border-gray-300 rounded-3xl pr-2 bg-white shadow-sm">
                        {/* Search Icon */}
                        {/* Input */}
                        <input
                            dir='rtl'
                            type="text"
                            placeholder="ابحث عن وجبة او طعام "
                            className="flex-grow outline-none px-2 text-gray-700 w-60 md:w-100 lg:w-120 "
                        />

                        {/* Button */}
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600 ">
                            بحث

                        </button>

                    </div>
                </div>



            </div>
        </>
    )
}

export default HomePhoto

