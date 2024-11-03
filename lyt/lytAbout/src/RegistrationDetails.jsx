// src/components/Advertiser/RegistrationDetails.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationDetails = ({
  userData,
  handleChange,
  handleRegisterSubmit,
  error,
}) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-pink-500">Complete Registration</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form className="space-y-4" onSubmit={handleRegisterSubmit}>
        <div className="flex space-x-2">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={userData.name}
            onChange={handleChange}
            className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
          />
          <input
            type="text"
            name="company_name"
            placeholder="Company Name"
            required
            value={userData.company_name}
            onChange={handleChange}
            className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
          />
        </div>
        <div className="flex space-x-2">
          <input
            type="tel"
            name="phone"
            placeholder="Phone No. (e.g., 7777047784)"
            required
            value={userData.phone}
            onChange={handleChange}
            className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={userData.password}
            onChange={handleChange}
            className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Register
        </button>
      </form>
      <p
        onClick={() => {
          // Implement navigation back to login if needed
        }}
        className="text-blue-300 cursor-pointer mt-4 text-center"
      >
        Already Registered? Login
      </p>
      <p className="mt-4 text-center text-white">
        By registering you agree to{' '}
        <Link to="/terms&conditions" className="text-blue-300 hover:underline">
          Terms & Conditions
        </Link>{' '}
        &{' '}
        <Link to="/privacyPolicy" className="text-blue-300 hover:underline">
          Privacy Policy
        </Link>
      </p>
    </>
  );
};

export default RegistrationDetails;
