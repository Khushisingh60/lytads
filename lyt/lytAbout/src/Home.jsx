import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import VideoModal from './VideoModal';
import FormSection from './FormSection';
import Sec2 from './Sec2';
import Sec3 from './Sec3';

function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [startCounting, setStartCounting] = useState(false);
  const [clients, setClients] = useState(0);
  const [adplays, setAdplays] = useState(0);
  const [displayHours, setDisplayHours] = useState(0);
  const [isRegister, setIsRegister] = useState(false);
  const statsRef = useRef(null);
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

  const openVideo = () => setIsVideoOpen(true);

  const closeVideo = () => {
    setIsVideoOpen(false);
    const video = document.getElementById('video-player');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStartCounting(true);
          }, 100);
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateCount = (end, setValue) => {
    let start = 0;
    const duration = 3000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setValue(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    if (startCounting) {
      animateCount(100, setClients);
      animateCount(218110720, setAdplays);
      animateCount(604848, setDisplayHours);
    }
  }, [startCounting]);

  return (
    <>
      <HeroSection openVideo={openVideo} />
      <StatsSection
        clients={clients}
        adplays={adplays}
        displayHours={displayHours}
        statsRef={statsRef}
      />
      <Sec2/>
      <Sec3/>
      <VideoModal isVideoOpen={isVideoOpen} closeVideo={closeVideo} />
      <FormSection
  userType="advertiser" // or "driver"
  isRegister={isRegister}
  userData={advertiser} // or driver data, based on the userType
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  setIsRegister={setIsRegister}
/>
    </>
  );
}

export default Home;
