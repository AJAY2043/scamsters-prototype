import React, { useState, useEffect } from 'react';
import hero1_img from "../Assets/hero-img.jpg";
import hero2_img from "../Assets/img-1.jpg";
import hero3_img from "../Assets/img-2.jpg";
import './Hero.css';

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const images = [hero1_img, hero2_img, hero3_img];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, [images.length]);

  return (
    <div className="hero">
      <div className="carousel-container">
        <img src={images[current]} alt={`Slide ${current + 1}`} className="carousel-img" />
      </div>
      <div className="hero-taglines">
        <p>Scamsters - Our dream is to see a scam-free society.</p>
        <p>"Together, we can fight on scams and fraud."</p>
        <p>"Stay vigilant, stay safe."</p>
      </div>
    </div>
  );
};

export default Hero;
