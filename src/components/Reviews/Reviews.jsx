import React from 'react';
import CardSlider from '../../helpers/CardSlider/CardSlider';

const Reviews = () => {
  return (
    <section id='Reviews' className='ReviewContainer p-6 h-full w-full backdrop-blur-sm bg-gray-700/20 mb-2 flex flex-col items-center justify-center'>
      <div className="RevHeading w-full text-center text-gradient font-lora lg:text-6xl text-4xl my-4">What Our Client Says</div>
        <div className="RevSlider w-full">
          <CardSlider/>
        </div>
    </section>
  )
}

export default Reviews;