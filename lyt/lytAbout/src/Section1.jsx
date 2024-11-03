import React, { useEffect, useState } from 'react';
import myImage from './Driver3.png';

const Section1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500); 

    return () => clearTimeout(timeoutId);
  }, [myImage]);

  return (
    <>
    <div className="relative h-1/2 my-1 mb-0">
      {/* Container for the image and overlay */}
      <div className="relative w-full h-full">
        <img
          src={myImage}
          alt="About Us"
          className="object-cover w-full h-full"
          style={{
            filter: 'brightness(0.5) contrast(1.1)', // Dim the image
          }}
        />
        {/* Optional: Overlay to further dim the image */}
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Text container positioned on the left side */}
      <div className="absolute inset-0 flex items-center pl-24">
        <h1
          className={`text-4xl font-bold text-white transition-transform duration-1000 ease-out transform ${
            isVisible ? '-translate-y-1' : 'translate-y-full'
          }`}
          style={{
            transformOrigin: 'center',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Enhance text visibility
          }}
        >
          'Lyt' Up Your Drive<br />
          and Earn!
        </h1>
      </div>
    </div>
    
    </>
  );
};

export default Section1;
