import React, { useState, useEffect } from 'react';
import image2 from "./ds-bg-0.webp"
const Sec2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="h-1/2  flex ">
      <div
        className={`w-1/2 h-full  flex mt-20 transition-transform duration-1000 ease-out transform ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
        >
          <div className="ml-16   text-black pr-16">
           
            <p><h1 className='text-violet-700 text-3xl font-bold'>The world is not stationary, so why should your ads be?</h1>
            
<h2 className=' text-black text-2xl mt-2'>LytAds is using technology to modernize Out of home advertising by adding high-resolution smart screens mounted on top
     of public transport vehicles.</h2>
    

<h2 className=' text-black text-2xl mt-2 '>Our high-impact advertising media platform gives brands a cost effective and eye catching way to reach and engage with a
 range of diverse target audiences, throughout the city.</h2>
 <button className='bg-pink-600 text-white text-2xl  mt-4 p-1 rounded-xl pl-5 pr-5'>Learn More</button></p>
 
          </div>
        </div>
        <div
          className={`w-1/2 h-full flex mt-20 transition-transform duration-1000 ease-out transform ${
            isVisible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <img
            src={image2}
            alt="Right Image"
            className="object-cover w-full h-1/2 pr-1 pl-1 "
          />
        </div>
      </div>
);
};

export default Sec2;

  