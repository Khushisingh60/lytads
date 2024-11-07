import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdvertiserForm = ({ advertiserId }) => {
  console.log('AdvertiserForm is being rendered');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [slots, setSlots] = useState(Array(4).fill(false)); // 4 slots
  const [contentType, setContentType] = useState('image');
  const [contentFile, setContentFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSlots, setShowSlots] = useState(false); // State to toggle slot dropdown
  const navigate = useNavigate();

  useEffect(() => {
    validateDates();
  }, [startDate, endDate]);

  const validateDates = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const differenceInTime = end.getTime() - start.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      if (differenceInDays < 10) {
        setErrorMessage('End date must be at least 10 days after the start date.');
      } else {
        setErrorMessage('');
      }
    }
  };

  const handleSlotChange = (index) => {
    const newSlots = [...slots];
    newSlots[index] = !newSlots[index];
    setSlots(newSlots);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('File selected:', file);
  
    if (contentType === 'video') {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = function () {
        window.URL.revokeObjectURL(video.src);
        const duration = video.duration;
        console.log('Video duration:', duration);
        if (duration > 90) {
          setErrorMessage('Video must be less than 1 minute 30 seconds.');
          setContentFile(null);
        } else {
          setErrorMessage('');
          setContentFile(file);
        }
      };
      video.src = URL.createObjectURL(file);
    } else {
      setErrorMessage('');
      setContentFile(file);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    if (errorMessage) {
      alert('Please correct the errors before submitting');
      return;
    }

    // Calculate total amount (assuming each slot costs $100)
    const totalAmount = slots.filter((slot) => slot).length * 100;

    // Navigate to payment page and pass totalAmount
    navigate('/payment', { state: { totalAmount } });
  };

  return (
    <div
      className="min-h-screen bg-custom-image1 bg-gray-100 flex items-center justify-center bg-cover bg-no-repeat"
      style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }} // Ensures form is clickable
    >
      <div className="w-full flex justify-start pl-12">
        <div className="w-full max-w-md bg-black bg-opacity-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-pink-500">Create Advertisement</h2>
          <form onSubmit={handleSubmit}>
            {/* Advertiser ID */}
            <div className="mb-4">
              <label className="block text-white">Advertiser ID:</label>
              <input
                type="text"
                value={advertiserId}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-transparent text-white"
              />
            </div>

            {/* Start and End Dates */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-white">Start Date:</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-white">End Date:</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-transparent text-white"
                />
                {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
              </div>
            </div>

            {/* Content Type and Upload */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-white">Content Type:</label>
                <select
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-transparent text-white"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
              <div>
                <label className="block text-white">
                  Upload {contentType === 'video' ? 'Video' : 'Image'}:
                </label>
                <input
                  type="file"
                  accept={contentType === 'video' ? 'video/*' : 'image/*'}
                  onChange={handleFileChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-transparent text-white"
                />
              </div>
            </div>

            {/* Slots */}
            <div className="mb-4">
              <label className="block text-white">Slots:</label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full bg-white text-gray-500 py-2 px-4 rounded-md shadow-md focus:outline-none"
                  onClick={() => setShowSlots(!showSlots)}
                >
                  {showSlots ? 'Hide Slots' : 'Show Slots'}
                </button>
                {showSlots && (
                  <div className="bg-gray-800 p-4 mt-2 rounded-md shadow-md">
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        'Slot 1 (00:00-06:00)',
                        'Slot 2 (06:00-12:00)',
                        'Slot 3 (12:00-18:00)',
                        'Slot 4 (18:00-24:00)',
                      ].map((slot, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={slots[index]}
                            onChange={() => handleSlotChange(index)}
                            className="mr-2"
                          />
                          <label className="text-white">{slot}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Submit Advertisement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserForm;
