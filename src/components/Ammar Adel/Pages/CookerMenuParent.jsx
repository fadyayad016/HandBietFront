import React from 'react'
import CookerMenu  from '../Components/CookerMenu'
import SideMenu from '../Components/SideMenu'
import SideMenuBottom from '../Components/SideMenuBottom'
import PopupModaledit from '../Components/PopupModaledit'


const CookerMenuParent = () => {
    return (
        <>
        <div className="bg-gray-100 h-full  mx-auto max-w-7xl  grid grid-cols-6" dir='rtl'> 


<div className='col-span-1 hidden md:block ' > <SideMenu /></div>
<div className='col-span-6   md:hidden'> <SideMenuBottom /></div>
            
         <div className='col-span-5 w-105 md:w-full'> <CookerMenu />
         </div>   
            </div>
        </>
    )
}

export default CookerMenuParent