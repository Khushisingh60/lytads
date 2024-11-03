import React, { useEffect, useState } from 'react';
import myImage from './2cb27106-731d-11ef-b283-0242ac110002.jpeg';

const B1 = () => {
  

  return (
    <div className="relative h-1/2 my-1 mb-0 ">
      <div className="w-full h-full">
        <img
          src={myImage}
          alt="About Us"
          className="object-cover w-full h-full"
          style={{
            filter: 'brightness(1.1) contrast(1.2)', 
          }}
        />
      </div>
      <div className="absolute inset-0 pb-56 pl-24 flex  ">
        <h1
          className={`text-5xl  mt-52 text-white }`}>
          Blogs
        </h1>
      </div>
     
    </div>
  );
};

export default B1;
