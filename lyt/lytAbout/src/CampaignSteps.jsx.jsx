// Import your images
import icon1 from './4.webp';
import icon2 from './2.webp';
import icon3 from './3.webp';

import Advertiser from './Advertiser';
import React from 'react';

const CampaignSteps = () => {
    return (
        <div className="bg-violet-600 text-white p-8">
            <div className="text-center mb-12">
                <h1 className="text-pink-600 text-4xl font-bold">Your First Campaign Is Just</h1>
                <h1 className="text-pink-600 text-4xl font-bold">Three Steps Away!</h1>
            </div>
            <div className="flex justify-around flex-wrap">
                <div className="flex flex-col items-center text-white-400 mx-6 mb-8">
                    <img src={icon1} alt="Step 1" className="w-25 h-25 mb-3"/>
                    <p className="text-center text-lg">Select your campaign budget & duration</p>
                </div>
                <div className="flex flex-col items-center text-white-400 mx-6 mb-8">
                    <img src={icon2} alt="Step 2" className="w-25 h-25 mb-3"/>
                    <p className="text-center text-lg">Define your campaign parameter & upload your creative</p>
                </div>
                <div className="flex flex-col items-center text-white-400 mx-6 mb-8">
                    <img src={icon3} alt="Step 3" className="w-25 h-25 mb-3"/>
                    <p className="text-center text-lg">Mark progress</p>
                </div>
            </div>



            
            <div className="flex items-center justify-center ">
              <button
                onClick={() => {<Advertiser/>}}
                className="p-3 bg-pink-500 text-white rounded hover:bg-pink-600"
              >
              Get Started
              </button>
            </div>
        </div>
    );
};

export default CampaignSteps;


