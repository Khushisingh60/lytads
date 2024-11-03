import React, { useEffect, useState } from 'react';
import myImage from './2cb27106-731d-11ef-b283-0242ac110002.jpeg';
import Sec2 from './Sec2';
const Sec1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500); 

    return () => clearTimeout(timeoutId);
  }, [myImage]);

  return (
    <div className="relative h-screen my-1 mb-0 ">
      <div className="w-full h-1/2">
        <img
          src={myImage}
          alt="About Us"
          className="object-cover w-full h-full"
          style={{
            filter: 'brightness(1.1) contrast(1.2)', 
          }}
        />
      </div>
      <div className="absolute inset-0 pb-72 pl-24 flex  ">
        <h1
          className={`text-4xl font-bold mt-32 text-white transition-transform duration-1000 ease-out transform ${
            isVisible ? '-translate-y-1' : 'translate-y-full'
          }`}
          style={{ transformOrigin: 'center' }}
        >
          About Us
        </h1>
      </div>
      <Sec2/>
    </div>
  );
};

export default Sec1;
