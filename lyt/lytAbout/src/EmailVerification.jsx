// src/components/Advertiser/EmailVerification.jsx
import React from 'react';

const EmailVerification = ({ email, handleChange, handleSendOtp, error }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-pink-500">Register as Advertiser</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form className="space-y-4" onSubmit={handleSendOtp}>
        <div className="flex space-x-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleChange}
            className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Send OTP
        </button>
      </form>
    </>
  );
};

export default EmailVerification;
