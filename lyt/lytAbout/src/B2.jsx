import React, { useState, useEffect } from 'react';
import image2 from "./Blog.jpg"
const B2 = () => {
  

  

  return (
    <div className="h-1/2  flex   ">
        <div
          className={` w-1/2 h-full ml-32  flex mt-20 '-translate-x-full`}
        >
          <img
            src={image2}
            alt="Right Image"
            className="object-cover w-full h-1/2 pr-1 pl-1 "
          />
        </div>
      <div
        className={`w-1/2 h-full flex mt-20 mr-32 translate-x-full' }`} >
              <div className="ml-16    text-black pr-16">
            <h1 className='text-black text-3xl font-bold'>Benefits of Taxi-Top Advertisement Management System</h1>
         <br/>
           
            <p className=' text-black text-2xl'>A Taxi Top Advertisement Management System enhances advertising visibility through dynamic, high-impact ads displayed on taxis. It offers cost-effective, targeted marketing for advertisers, while providing taxi operators with additional revenue and easy ad management. </p>

          </div>
        </div>
        
      </div>
);
};

export default B2;

  