import React, { useState, useEffect } from 'react';
import img1 from "./1.webp";
import img2 from "./Hyperargeted.webp";
import img3 from "./smart.webp";
import img4 from "./unmatched.webp";




const Sec3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const timeoutIdBottom = setTimeout(() => {
      setIsBottomVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutIdBottom);
    };
  }, []);

  return (
    <div className="h-auto mt-36 flex flex-col bg-violet-600">
    <div className="flex justify-center items-center h-2/3">
      <div className={`w-1/2 h-full mt-20 flex justify-start items-center transition-transform duration-1000 ease-out transform ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="ml-24 text-4xl font-bold text-white">
          <p className='text-3xl font-bold'>Make the most of your<br/> advertising budget.</p>
        </div>
      </div>
      <div className={`w-1/2 h-full mt-20 flex justify-end items-center transition-transform duration-1000 ease-out transform ${isVisible ? 'translate-x-0' : 'translate-x-full'}`} style={{ perspective: '1000px' }}>

      <div className={`transition-transform duration-1000 ease-out transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="mr-24 text-white">
              <p className='text-xl'>LytAds is street-level digital screen media platform. We install best in class LED Screens on top of taxis and rideshare vehicles to deliver dynamic content for brands based on real-time triggers like location, time of day & week, weather, events, and other insights from third party integrations..</p>
            </div>
          </div>
        </div>
      </div>

      {isBottomVisible && (
        <div className="w-full h-1/3 mt-20 mb-24 flex flex-wrap justify-center items-center gap-4">
          <div className="w-1/6 h-auto flex flex-col items-center p-2">
            <img src={img1} alt="Easy Money" className="w-48 h-48 object-cover" />
            <p className="text-white text-center text-2xl font-bold mt-2">Scale & Coverage</p>
          </div>
          <div className="w-1/4 h-auto flex flex-col items-center p-2">
            <img src={img2} alt="No Extra Driving" className="w-48 h-48 object-cover" />
            <p className="text-white text-center text-2xl font-bold mt-2">Hypertargeted, Dynamic Content Delivery</p>
          </div>
          <div className="w-1/4 h-auto flex flex-col items-center p-2">
            <img src={img3} alt="Quick Installation" className="w-48 h-48 object-cover" />
            <p className="text-white text-center text-2xl font-bold mt-2">Smart Analytics and Reporting</p>
          </div>
          <div className="w-1/4 h-auto flex flex-col items-center p-2">
            <img src={img4} alt="Quick Installation" className="w-48 h-48 object-cover" />
            <p className="text-white text-center text-2xl font-bold mt-2">Unmatched Screen Resolution</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sec3;
