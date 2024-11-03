
import React from 'react';
import photo3 from './management.webp';
import { FaLinkedin } from "react-icons/fa";
const ManagementTeam = () => {
  return (
    <div className="h-1/2 flex flex-col bg-white">
      <div className="w-full h-1/6 flex justify-center items-center">
        <h1 className="text-4xl mt-12 text-pink-500 font-bold"> Management Team</h1>
      </div>
      <div className="w-3/4 h-3/4 flex flex-wrap ml-56 mt-0 justify-center ">
        <div className="w-1/4 h-1/2 flex flex-col  p-10">
        <img src={photo3} alt="Photo 3" className="w-64 h-64 object-cover border-solid border-8 shadow-inner shadow-gray-800 opacity-100 border-black bg-violet-800 rounded-full" />
          <div className="flex pl-28">
            <a href="(link unavailable)" target="_blank">
             <FaLinkedin className='bg-white size-8 text-blue-700 rounded-xl mt-2' />
            </a>
          </div>
          <div className='ml-20'>
          <p className="text-2xl font-bold">Name 1</p>
          <p className="text-xl">Position 1</p>
          </div>
        </div>
        <div className="w-1/4 h-1/2 flex flex-col items-center border-solid border-3 border-black p-10">
        <img src={photo3} alt="Photo 3" className="w-64 h-64 object-cover  border-solid border-8 shadow-inner shadow-gray-800 opacity-100 border-black bg-violet-800 rounded-full" />
          <div className="flex justify-center items-center">
            <a href="(link unavailable)" target="_blank">
             <FaLinkedin className='bg-white size-8 text-blue-700 rounded-xl mt-2' />
            </a>
          </div>
          <p className="text-2xl font-bold">Name 2</p>
          <p className="text-xl">Position 2</p>
        </div>
        <div className="w-1/4 h-1/2 flex flex-col items-center p-10">
          <img src={photo3} alt="Photo 3" className="w-64 h-64 object-cover border-solid border-8 shadow-inner shadow-gray-800 opacity-100 border-black bg-violet-800 rounded-full" />
          <div className="flex justify-center items-center">
            <a href="(link unavailable)" target="_blank">
             <FaLinkedin className='bg-white size-8 text-blue-700 rounded-xl mt-2' />
            </a>
          </div>
          <p className="text-2xl font-bold">Name 3</p>
          <p className="text-xl">Position 3</p>
        </div>
        <div className="w-1/4 h-1/2 flex flex-col items-center p-10">
        <img src={photo3} alt="Photo 3" className="w-64 h-64 object-cover border-solid border-8 shadow-inner shadow-gray-800 opacity-100 border-black bg-violet-800 rounded-full" />
          <div className="flex justify-center items-center">
            <a href="(link unavailable)" target="_blank">
             <FaLinkedin className='bg-white size-8 text-blue-700 rounded-xl mt-2' />
            </a>
          </div>
          <p className="text-2xl font-bold">Name 4</p>
          <p className="text-xl">Position 4</p>
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;



