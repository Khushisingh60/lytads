// src/components/Advertiser/OtpVerification.jsx
import React from 'react';

const OtpVerification = ({ email, otp, handleChange, handleVerifyOtp, error }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-pink-500">Verify OTP</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form className="space-y-4" onSubmit={handleVerifyOtp}>
        <div className="flex space-x-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleChange}
            disabled
            className="flex-1 p-2 border-b-2 border-transparent bg-gray-300 text-gray-500 focus:border-white focus:outline-none"
          />
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            required
            value={otp}
            onChange={handleChange}
            className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Verify OTP
        </button>
      </form>
    </>
  );
};

export default OtpVerification;
