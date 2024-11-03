
import About from './About';
import Blogs from'./Blogs'
import Home from './Home';
import Layout from './Layout';
import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import Login from './Login';
import ContactUs from './ContactUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Advertiser from './Advertiser';
import Driver from './Driver';
import AdvertiserForm from './AdvertiserForm';
import Payment from './Payment';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/About',
          element: <About />
        },
        {
          path: '/Advertiser',
          element: <Advertiser />
        },
        {
          path:'/AdvertiserForm',
          element:<AdvertiserForm/>
        },
        {
          path: '/Driver',
          element: <Driver />
        },
        {
          path: '/Blog',
          element: <Blogs/>
        },
        {
          path: '/Contact',
          element: <ContactUs />
        },
        {
          path: '/Login',
          element: <Login setIsLoggedIn={setIsLoggedIn} />
        },
       
        {
          path:'/Payment',
          element:<Payment/>
        }
        
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
  
    </>
  );
};
export default App;