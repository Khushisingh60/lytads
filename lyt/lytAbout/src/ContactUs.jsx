import React, { useState } from 'react';

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Import icons from react-icons

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-custom-image1 bg-cover bg-center bg-fixed">
      <div className="container mx-auto px-4 py-8  rounded-lg">
        <div className="text-center mb-3">
          <h1 className="text-6xl font-bold text-pink-500">Contact Us</h1>
        </div>
        <div className="text-white p-6 rounded-lg shadow-lg mb-6">
          <p className='text-2xl font-semibold text-center text-white'>
            Please contact us and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
       
          <div className="md:w-1/2 bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400"
                    placeholder="Name"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400"
                    placeholder="Email ID"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400"
                    placeholder="Your Phone No."
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400"
                  placeholder="Write Your Message Here"
                  required
                ></textarea>
              </div>

              <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-md">
                Submit
              </button>
            </form>
          </div>

         
          <div className="md:w-1/2 flex flex-col gap-6 text-white">
            <div className="flex items-center gap-4 text-xl">
              <FaMapMarkerAlt className="text-3xl text-blue-500" />
              <p>
                91 Springboard Lotus Star, Marol MIDC, Andheri(E), Mumbai Maharashtra 400069
              </p>
            </div>
            <div className="flex items-center gap-4 text-xl">
              <FaEnvelope className="text-3xl text-blue-500" />
              <p>hello@wrap2earn.com</p>
            </div>
            <div className="flex items-center gap-4 text-xl">
              <FaPhoneAlt className="text-3xl text-blue-500" />
              <p>+91-7869878623</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
