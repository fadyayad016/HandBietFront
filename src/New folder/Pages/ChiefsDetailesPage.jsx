import React from 'react'

import ChiefMeals from '../components/custom/ChiefsDetailes/ChiefMeals'
import ChiefName from '../components/custom/ChiefsDetailes/ChiefName'
import CustomerRating from '../components/custom/ChiefsDetailes/CustomerRating'
import ChiefStory from '../components/custom/ChiefsDetailes/ChiefStory'

const ChiefsDetailesPage = () => {
  return (
    <div dir='rtl' className="px-4 sm:px-6 lg:px-8 my-5 bg-[#f8f8f8]">
        <ChiefName/>
        <ChiefMeals/>
        <CustomerRating/>
        <ChiefStory/>
    </div>
  )
}

export default ChiefsDetailesPage