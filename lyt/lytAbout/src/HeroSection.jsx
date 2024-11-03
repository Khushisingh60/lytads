import React from 'react';
import { PlayIcon } from '@heroicons/react/solid';
function HeroSection({ openVideo }) {
  return (
    <div className="relative mx-auto w-full max-w-7xl">
      
      <div className="bg-custom-image bg-cover bg-center w-auto h-screen"></div>

      
      <div className="absolute inset-0 flex justify-start mx-10 mt-56 text-white font-serif">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">'Lyting' up City Streets</h1>
          <p className="text-lg">
            with digital Screen advertising <br /> that is always relevant
          </p>
        </div>
      </div>

     
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          className="text-pink-500 text-6xl bg-white rounded-full p-4 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-pink-200 focus:outline-none relative z-10"
          onClick={openVideo}
          aria-label="Play Video"
        >
         <PlayIcon className="h-12 w-12 text-pink-500" />
        </button>
    
        <div className="absolute rounded-full w-24 h-24 bg-pink-500 opacity-30 animate-ping z-0"></div>
      </div>
    </div>
  );
}

export default HeroSection;
