import React from 'react';

function FormSection({
  userType,
  isRegister,
  userData,
  handleChange,
  handleSubmit,
  setIsRegister,
}) {
  const isAdvertiser = userType === 'advertiser';
  const isDriver = userType === 'driver';

  return (
    <section className="h-screen w-screen bg-gray-100">
     <div className=" h-screen w-screen bg-custom-image1 bg-cover bg-center ">
  

        <div className="max-w-md mx-6 max-h-90 bg-black bg-opacity-50 p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-pink-500 text-center mb-4">
            {isRegister
              ? isAdvertiser
                ? 'Be seen in all the right places.'
                : 'Driver Registration'
              : 'Welcome back!'}
          </h2>
          <p className="text-lg text-center mb-8 text-white">
            {isRegister
              ? isAdvertiser
                ? 'Give your brand the visibility it deserves!'
                : 'Join our network of drivers!'
              : isDriver
              ? 'Login to your driver account'
              : 'Start Advertising Today!'}
          </p>
          <div className="p-8 rounded-lg">
            <form onSubmit={handleSubmit}>
              {isRegister ? (
                <>
                 
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="Email*"
                      required
                    />
                  </div>
                  {isAdvertiser ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-group mb-6">
                        <input
                          type="text"
                          name="name"
                          value={userData.name}
                          onChange={handleChange}
                          className="w-full p-2 border rounded-md"
                          placeholder="Full Name*"
                          required
                        />
                      </div>
                      <div className="form-group mb-6">
                        <input
                          type="text"
                          name="company_name"
                          value={userData.company_name}
                          onChange={handleChange}
                          className="w-full p-2 border rounded-md"
                          placeholder="Company Name*"
                          required
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      
                      <div className="form-group mb-6">
                        <input
                          type="text"
                          name="license_number"
                          value={userData.license_number}
                          onChange={handleChange}
                          className="w-full p-2 border rounded-md"
                          placeholder="License Number*"
                          required
                        />
                      </div>
                    </>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group mb-6">
                      <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        pattern="[0-9]{10}"
                        placeholder="Phone No.*"
                        required
                      />
                    </div>
                    <div className="form-group mb-6">
                      <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Password*"
                        required
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-6 rounded-md"
                    >
                      {isAdvertiser ? 'Register as Advertiser' : 'Register as Driver'}
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    <p
                      className="cursor-pointer text-blue-500"
                      onClick={() => setIsRegister(false)}
                    >
                      Already registered? Login
                    </p>
                  </div>
                </>
              ) : (
                <>
                 
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group mb-6">
                      <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Phone No.*"
                        required
                      />
                    </div>
                    <div className="form-group mb-6">
                      <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Password*"
                        required
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-6 rounded-md"
                    >
                      Login
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    <p
                      className="cursor-pointer text-blue-500"
                      onClick={() => setIsRegister(true)}
                    >
                      New User? Register
                    </p>
                  </div>
                </>
              )}
              <div className="text-center mt-4">
                <p className="text-gray-600">
                  By registering you agree to our{' '}
                  <a href="/advertiser-tnc" className="text-blue-500">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-blue-500">
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
