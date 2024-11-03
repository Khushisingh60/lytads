import React, { useRef, useEffect, useState } from 'react';

function StatsSection({ clients, adplays, displayHours, statsRef }) {
  return (
    <section className="py-16 px-6 bg-gray-100" ref={statsRef}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-blue-600">{clients}</h2>
          <p className="text-lg text-gray-700">Total Clients</p>
        </div>
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-blue-600">
            {adplays.toLocaleString()}
          </h2>
          <p className="text-lg text-gray-700">Total Adplays</p>
        </div>
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-blue-600">
            {displayHours.toLocaleString()}
          </h2>
          <p className="text-lg text-gray-700">Total Display Hours</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
