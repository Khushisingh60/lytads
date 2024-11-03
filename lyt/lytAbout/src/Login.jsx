import React from 'react'
import { useState } from 'react';
import FormSection from './FormSection';
function Login() {
 
  const [isRegister, setIsRegister] = useState(false);
  const [advertiser, setAdvertiser] = useState({
    email: '',
    name: '',
    company_name: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdvertiser({ ...advertiser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      console.log('Register Advertiser:', advertiser);
    } else {
      console.log('Login Advertiser:', advertiser);
    }
  };

  return (
    <>
     <FormSection
  userType="advertiser" // or "driver"
  isRegister={isRegister}
  userData={advertiser} // or driver data, based on the userType
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  setIsRegister={setIsRegister} />
    </>
  )
}

export default Login