// import { Link } from "react-router-dom";
// import React, { useState } from 'react';
import { useState, useEffect } from 'react';
import styles from '../CSS/home.module.css';
import HomeData from '../components/HomeData';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleSuccess } from '../Errorhandle';

const HeroSection = () => {
  //login functinality
  
  //end login function
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 4; // Total number of slides
  let autoplayInterval = null;

  // Function to move to a specific slide
  const moveToSlide = (index) => {
    setCurrentIndex(index);
  };
  // 1+1%4

  // Function to start autoplay
  const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000); // Change slide every 3 seconds
  };

  // Function to stop autoplay
  const stopAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  };

  // Set up autoplay when component mounts
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay(); // Clean up interval on component unmount
  }, []);

  // Indicators click event handler
  const handleIndicatorClick = (index) => {
    stopAutoplay();
    moveToSlide(index);
    startAutoplay();
  };


  return (
    <>

      <div className={styles.body}>
        {/* Slider container */}
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <img
              src="/images/9.jpg"
              alt="Slide 1"
              className={`${styles.slide} ${currentIndex === 0 ? styles.active : ''}`}
            />
            <img
              src="/images/12.jpg"
              alt="Slide 2"
              className={`${styles.slide} ${currentIndex === 1 ? styles.active : ''}`}
            />
            <img
              src="/images/13.jpg"
              alt="Slide 3"
              className={`${styles.slide} ${currentIndex === 2 ? styles.active : ''}`}
            />
            <img
              src="/images/6.jpg"
              alt="Slide 4"
              className={`${styles.slide} ${currentIndex === 3 ? styles.active : ''}`}
            />
          </div>
          <div className={styles.indicators}>
            {[...Array(slideCount)].map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${currentIndex === index ? styles.active : ''}`}
                onClick={() => handleIndicatorClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <HomeData />
      </div>
      {/* //logout function */}
     
    </>
  );
};

export default HeroSection;
