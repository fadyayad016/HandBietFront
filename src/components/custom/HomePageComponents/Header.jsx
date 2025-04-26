import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Section*/}
                <div className="flex items-center space-x-4">
                <a
                        href="#"
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    >
                        سجل الآن
                    </a>
                    <a
                        href="#"
                        className="text-black hover:text-orange-500 font-medium"
                    >
                        تسجيل الدخول
                    </a>
             
                </div>

                {/* Middle Section */}
                <nav className="flex space-x-6">
                <a href="#" className="text-black hover:text-orange-500">
                        تواصل معنا
                    </a>
                    <a href="#" className="text-black hover:text-orange-500">
                        كيف يعمل
                    </a>
                    <a href="#" className="text-black hover:text-orange-500">
                        الطهاة
                    </a>
                    <a href="#" className="text-black hover:text-orange-500">
                        الوجبات
                    </a>
                    <a href="#" className="text-black hover:text-orange-500">
                        الرئيسية
                    </a>
                  
                  
                   
                </nav>

                {/* Right Section */}
                
                <div className="flex items-center">
                <span className="text-orange-500 text-xl font-bold ml-2">
                        HandBiet
                    </span>
                    <img
                        src="/public/Header/icon cover.png"
                        alt="HandBiet Logo"
                        className="w-10 h-10"
                    />
                  
                </div>
            </div>
        </header>
    );
};

export default Header;