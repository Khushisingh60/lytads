// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaPlayCircle } from "react-icons/fa";
// import axios from "axios";
// import CampaignSteps from "./CampaignSteps.jsx";
// import AdvertiserForm from "./AdvertiserForm.jsx";
// import videoAd from "./video-lytads.mp4";

// const Advertiser = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showVideo, setShowVideo] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userType, setUserType] = useState("advertiser");
//   const [userData, setUserData] = useState({
//     email: "",
//     name: "",
//     company_name: "",
//     phone: "",
//     password: "",
//     license_number: "",
//   });
//   const [userId, setUserId] = useState(null);
//   const [error, setError] = useState(null);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [verificationMessage, setVerificationMessage] = useState("");
//   const videoRef = useRef(null);

//   const openVideo = () => {
//     setShowVideo(true);
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     console.log("Before API call:", isAuthenticated, userId);
//     try {
//       const response =  await axios.post("http://localhost:5000/api/login", {
//         advertiser_contact_info: userData.phone,
//         advertiser_password: userData.password,
//       });

//       console.log("API response:", response);
//       console.log(response.status);
//       console.log(response.data.advertiser.advertiser_id);
      

//       if (response.status === 200 && response.data.advertiser.advertiser_id) {
//         setIsAuthenticated(true);
//         setUserId(response.data.advertiser.advertiser_id);
//         console.log("User is authenticated:", isAuthenticated);
//       }
//       console.log("user is not updated")
//     } catch (error) {
//       console.error("Error during login:", error);
//       setError(
//         error.response?.data?.message || "Login failed. Please try again."
//       );
//     }
//   };

//   useEffect(() => {
//     console.log("isAuthenticated updated:", isAuthenticated);
//     console.log("userId updated:", userId);
//   }, [isAuthenticated, userId]); // Logs state changes

//   const handleSendOtp = async () => {
//     setError(null);
//     try {
//       const response = await axios.post("http://localhost:5000/api/send-otp", {
//         email: userData.email,
//       });
//       if (response.status === 200) {
//         setOtpSent(true);
//         setVerificationMessage(
//           "OTP sent successfully. Please check your email."
//         );
//       }
//     } catch (error) {
//       console.error(
//         "Error sending OTP:",
//         error.response ? error.response.data : error.message
//       );
//       setError(
//         error.response?.data?.message || "Failed to send OTP. Please try again."
//       );
//     }
//   };

//   const handleVerifyOtp = async () => {
//     setError(null);
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/verify-otp",
//         { email: userData.email, otp }
//       );
//       if (response.status === 200) {
//         setOtpVerified(true);
//         setVerificationMessage("OTP verified successfully.");
//       } else {
//         setError("Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       console.error(
//         "Error verifying OTP:",
//         error.response ? error.response.data : error.message
//       );
//       setError(error.response?.data?.message || "OTP verification failed.");
//     }
//   };

//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     if (!otpVerified) {
//       setError("Please verify your email first.");
//       return;
//     }

//     const { email, name, company_name, phone, password } = userData;
//     if (!email || !name || !company_name || !phone || !password) {
//       setError("All fields are required.");
//       return;
//     }

//     setError(null);
//     try {
//       const endpoint =
//         userType === "advertiser"
//           ? "http://localhost:5000/api/advertiser"
//           : "http://localhost:5000/api/driver/signup";

//       const payload = {
//         ...userData,
//         advertiser_email: userData.email,
//         advertiser_name: userData.name,
//         advertiser_contact_info: userData.phone,
//         advertiser_company: userData.company_name,
//         advertiser_password: userData.password,
//         license_number:
//           userType === "driver" ? userData.license_number : undefined,
//       };

//       const response = await axios.post(endpoint, payload);
//       if (response.status === 201) {
//         setIsAuthenticated(true);
//         setUserId(
//           userType === "advertiser"
//             ? response.data.advertiserId
//             : response.data.driverId
//         );
//       }
//     } catch (error) {
//       console.error(
//         "Error during registration:",
//         error.response ? error.response.data : error.message
//       );
//       setError(
//         error.response?.data?.message ||
//           "Registration failed. Please try again."
//       );
//     }
//   };

//   return (
//     <>
//       <div className="relative min-h-screen bg-custom-image1 bg-gray-100 bg-cover bg-no-repeat">
//         <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

//         {!isAuthenticated && (
//           <div className="absolute top-0 left-0 h-full flex items-center pl-4 sm:pl-8 z-20">
//             <div className="w-full max-w-md bg-black bg-opacity-50 p-4 sm:p-8 rounded-lg shadow-md border border-red-500 z-30">
//               <h2 className="text-2xl font-semibold mb-4 text-pink-500 text-center">
//                 {isLogin ? "Welcome back!" : "Start Advertising Today!"}
//               </h2>
//               {error && (
//                 <p className="text-red-500 text-center mb-4">{error}</p>
//               )}
//               {verificationMessage && (
//                 <p className="text-green-500 text-center mb-4">
//                   {verificationMessage}
//                 </p>
//               )}
//               <form
//                 className="space-y-4"
//                 onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}
//               >
//                 {isLogin ? (
//                   <div className="flex space-x-2">
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Phone No."
//                       required
//                       value={userData.phone}
//                       onChange={handleChange}
//                       className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
//                     />
//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       required
//                       value={userData.password}
//                       onChange={handleChange}
//                       className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
//                     />
//                   </div>
//                 ) : (
//                   <>
//                     <div className="flex space-x-2">
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         required
//                         value={userData.email}
//                         onChange={handleChange}
//                         className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
//                       />
//                       {!otpSent && (
//                         <button
//                           type="button"
//                           onClick={handleSendOtp}
//                           className="p-2 bg-blue-500 text-white rounded"
//                         >
//                           Send OTP
//                         </button>
//                       )}
//                     </div>
//                     {otpSent && (
//                       <div className="flex space-x-2 mt-2">
//                         <input
//                           type="text"
//                           name="otp"
//                           placeholder="Enter OTP"
//                           value={otp}
//                           onChange={(e) => setOtp(e.target.value)}
//                           className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
//                         />
//                         <button
//                           type="button"
//                           onClick={handleVerifyOtp}
//                           className="p-2 bg-green-500 text-white rounded"
//                         >
//                           Verify OTP
//                         </button>
//                       </div>
//                     )}
//                     {otpVerified && (
//                       <>
//                         <div className="flex space-x-2">
//                           <input
//                             type="text"
//                             name="name"
//                             placeholder="Full Name"
//                             required
//                             value={userData.name}
//                             onChange={handleChange}
//                             className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
//                           />
//                           <input
//                             type="text"
//                             name="company_name"
//                             placeholder="Company Name"
//                             required
//                             value={userData.company_name}
//                             onChange={handleChange}
//                             className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
//                           />
//                         </div>
//                         <div className="flex space-x-2">
//                           <input
//                             type="tel"
//                             name="phone"
//                             placeholder="Phone No."
//                             required
//                             value={userData.phone}
//                             onChange={handleChange}
//                             className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
//                           />
//                           <input
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             required
//                             value={userData.password}
//                             onChange={handleChange}
//                             className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
//                           />
//                         </div>
//                       </>
//                     )}
//                   </>
//                 )}
//                 <button
//                   type="submit"
//                   className="w-full p-2 bg-pink-500 text-white rounded mt-4"
//                 >
//                   {isLogin ? "Log In" : "Register"}
//                 </button>
//               </form>
//               <p
//                 className="text-center text-pink-500 mt-4 cursor-pointer"
//                 onClick={() => setIsLogin(!isLogin)}
//               >
//                 {isLogin
//                   ? "Don't have an account? Register here"
//                   : "Already have an account? Log in here"}
//               </p>
//             </div>
//           </div>
//         )}

//         {showVideo && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-40">
//             <video
//               ref={videoRef}
//               src={videoAd}
//               controls
//               className="w-full sm:w-3/4 lg:w-1/2"
//             />
//           </div>
//         )}

//         <div className="absolute bottom-4 right-4 text-pink-500 text-4xl cursor-pointer z-20">
//           <FaPlayCircle onClick={openVideo} />
//         </div>
//       </div>

//       {isAuthenticated && userId ?(
//         <div>
//           <CampaignSteps />
//           <AdvertiserForm userId={userId} />
//         </div>
//       ):(
//         console.log("there is some error")
//       )}
//     </>
//   );
// };

// export default Advertiser;

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import axios from "axios";
import CampaignSteps from "./CampaignSteps.jsx";
import AdvertiserForm from "./AdvertiserForm.jsx";
import videoAd from "./video-lytads.mp4";

const Advertiser = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState("advertiser");
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    company_name: "",
    phone: "",
    password: "",
    license_number: "",
  });
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const videoRef = useRef(null);

  const openVideo = () => {
    setShowVideo(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    console.log("Before API call:", isAuthenticated, userId);

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        advertiser_contact_info: userData.phone,
        advertiser_password: userData.password,
      });

      console.log("API response:", response);
      console.log(response.status);
      console.log(response.data.advertiser.advertiser_id);

      // If login is successful, update the states
      if (response.status === 200 && response.data.advertiser.advertiser_id) {
        setIsAuthenticated(true);
        setUserId(response.data.advertiser.advertiser_id);
        console.log("User is authenticated:", isAuthenticated);
      } else {
        setError("Invalid credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  useEffect(() => {
    console.log("isAuthenticated updated:", isAuthenticated);
    console.log("userId updated:", userId);
  }, [isAuthenticated, userId]);

  const handleSendOtp = async () => {
    setError(null);
    try {
      const response = await axios.post("http://localhost:5000/api/send-otp", {
        email: userData.email,
      });
      if (response.status === 200) {
        setOtpSent(true);
        setVerificationMessage(
          "OTP sent successfully. Please check your email."
        );
      }
    } catch (error) {
      console.error(
        "Error sending OTP:",
        error.response ? error.response.data : error.message
      );
      setError(
        error.response?.data?.message || "Failed to send OTP. Please try again."
      );
    }
  };

  const handleVerifyOtp = async () => {
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/verify-otp",
        { email: userData.email, otp }
      );
      if (response.status === 200) {
        setOtpVerified(true);
        setVerificationMessage("OTP verified successfully.");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error(
        "Error verifying OTP:",
        error.response ? error.response.data : error.message
      );
      setError(error.response?.data?.message || "OTP verification failed.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      setError("Please verify your email first.");
      return;
    }

    const { email, name, company_name, phone, password } = userData;
    if (!email || !name || !company_name || !phone || !password) {
      setError("All fields are required.");
      return;
    }

    setError(null);
    try {
      const endpoint =
        userType === "advertiser"
          ? "http://localhost:5000/api/advertiser"
          : "http://localhost:5000/api/driver/signup";

      const payload = {
        ...userData,
        advertiser_email: userData.email,
        advertiser_name: userData.name,
        advertiser_contact_info: userData.phone,
        advertiser_company: userData.company_name,
        advertiser_password: userData.password,
        license_number:
          userType === "driver" ? userData.license_number : undefined,
      };

      const response = await axios.post(endpoint, payload);
      if (response.status === 201) {
        setIsAuthenticated(true);
        setUserId(
          userType === "advertiser"
            ? response.data.advertiserId
            : response.data.driverId
        );
      }
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response ? error.response.data : error.message
      );
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <>
      <div className="relative min-h-screen bg-custom-image1 bg-gray-100 bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        {/* Login and Register Form */}
        {!isAuthenticated && (
          <div className="absolute top-0 left-0 h-full flex items-center pl-4 sm:pl-8 z-20">
            <div className="w-full max-w-md bg-black bg-opacity-50 p-4 sm:p-8 rounded-lg shadow-md border border-red-500 z-30">
              <h2 className="text-2xl font-semibold mb-4 text-pink-500 text-center">
                {isLogin ? "Welcome back!" : "Start Advertising Today!"}
              </h2>
              {error && (
                <p className="text-red-500 text-center mb-4">{error}</p>
              )}
              {verificationMessage && (
                <p className="text-green-500 text-center mb-4">
                  {verificationMessage}
                </p>
              )}
              <form
                className="space-y-4"
                onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}
              >
                {isLogin ? (
                  <div className="flex space-x-2">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone No."
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
                ) : (
                  <>
                    <div className="flex space-x-2">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={userData.email}
                        onChange={handleChange}
                        className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
                      />
                      {!otpSent && (
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          className="p-2 bg-blue-500 text-white rounded"
                        >
                          Send OTP
                        </button>
                      )}
                    </div>
                    {otpSent && (
                      <div className="flex space-x-2 mt-2">
                        <input
                          type="text"
                          name="otp"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="flex-1 p-2 border-b-2 border-transparent bg-transparent text-white focus:border-white focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={handleVerifyOtp}
                          className="p-2 bg-green-500 text-white rounded"
                        >
                          Verify OTP
                        </button>
                      </div>
                    )}
                    {otpVerified && (
                      <>
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
                            placeholder="Phone No."
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
                      </>
                    )}
                  </>
                )}

                <div className="flex justify-center space-x-4">
                  <button
                    type="submit"
                    className="p-2 bg-pink-500 text-white rounded"
                  >
                    {isLogin ? "Login" : "Register"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="p-2 bg-gray-500 text-white rounded"
                  >
                    {isLogin ? "New user? Sign Up" : "Already a member? Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Video Section */}
        {showVideo && (
          <div className="absolute inset-0 flex justify-center items-center z-20">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src={videoAd} type="video/mp4" />
            </video>
          </div>
        )}

        {/* Advertiser Form */}
        {isAuthenticated && userId && <AdvertiserForm userId={userId} />}
      </div>
    </>
  );
};

export default Advertiser;

