
import React, { useState, useEffect } from 'react';

import img2 from "./Money.gif";
import img3 from "./Time.gif";
import img4 from "./Installment.gif";

const Section2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const timeoutIdBottom = setTimeout(() => {
      setIsBottomVisible(true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutIdBottom);
    };
  }, []);

  return (
    <div className="h-1/2 flex  
     flex-col bg-[#3b1f9f]">
      <div className="flex  h-2/3">
        <div
          className={`w-1/2 h-full flex justify-start items-center transition-transform duration-1000 ease-out transform ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="ml-24 text-4xl font-bold text-pink-500">
          <p className="text-3xl mt-40 font-bold whitespace-nowrap overflow-hidden text-ellipsis text- ">
            Earn More For The Kilometers You Drive.
           </p>

          </div>
        </div>
        <div
          className={`w-1/2 h-full flex  transition-transform duration-1000 ease-out transform ${
            isVisible ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="mr-24 mt-36  ml-10 text-white font-black" >
            <p className="text-xl">
            LytAds gives rideshare car owners a way to earn additional income by simply installing digital screens atop their vehicles and driving the way they already do!

              Sign up as a driver or car owner and get paid for every kilometer you drive, with no added effort!
            </p>
          </div>
        </div>
      </div>
      {isBottomVisible && (
         <div className="w-full h-1/3 mt-20 flex flex-wrap justify-center items-center gap-4">
         <div className="w-1/6 h-auto flex flex-col items-center p-2">
           <img src={img2} alt="Image 2" className="w-48 h-48   object-cover" />
           <p className="text-white text-center font-bold mt-2">Easy Money</p>
         </div>
         <div className="w-1/4 h-auto flex flex-col items-center p-2">
           <img src={img3} alt="Image 3" className="w-48 h-48 object-cover" />
           <p className="text-white text-center font-bold mt-2">No Extra Driving</p>
         </div>
         <div className="w-1/4 h-auto flex flex-col items-center p-2">
           <img src={img4} alt="Image 4" className="w-48 h-48 object-cover" />
           <p className="text-white text-center font-bold mt-2">Quick Installation</p>
         </div>
       </div>
      )}
    </div>
  );
};

export default Section2;
