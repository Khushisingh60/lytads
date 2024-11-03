import { useState } from 'react'

import './App.css'
import Section1 from './Section1'
import Section2 from './Section2'
import FormSection1 from './FormSection1'


function Driver() {
  
  const [isRegister,setIsRegister ]=useState(false);
  const [userType, setUserType] = useState('driver'); 
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    company_name: '',
    license_number: '',
    phone: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      console.log(`Register ${userType.charAt(0).toUpperCase() + userType.slice(1)}:`, userData);
    } else {
      console.log(`Login ${userType.charAt(0).toUpperCase() + userType.slice(1)}:`, userData);
    }
  };
 
  return (
    <>
      
      <Section1/>
      <Section2/>
      <FormSection1
        userType={userType}
        isRegister={isRegister}
        userData={userData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setIsRegister={setIsRegister}
      />
    </>
  )
}

export default Driver;