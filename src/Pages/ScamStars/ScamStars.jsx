import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Scamstars.css'
import scamstersData from '../../Components/Data/scamsters.json'
import scamstar_img from '../../Components/Assets/scamstar-img.jpg'

const ScamStars = () => {
  const [scamsters, setScamsters] = useState([]);

  useEffect(() => {
    setScamsters(scamstersData); // Set scamsters data from JSON file
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <img src={scamstar_img} alt="ScamStars" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to ScamStars</h1>
          <p>Learn about the notorious scamsters around you</p>
        </div>
      </section>

      <h3>National ScamStars Here</h3>
      <div className="scamsters-container">
        {scamsters.map((scamster) => (
          <div key={scamster.id} className="scamster-card">
            <img src={scamster.image} alt={scamster.name} className="scamster-img" />
            <h2>{scamster.name}</h2>
            <p><strong>Age:</strong> {scamster.age}</p>
            <p><strong>Location:</strong> {scamster.location}</p>
            <p><strong>Scam Type:</strong> {scamster.scamType}</p>
            <p><strong>Scam Worth:</strong> {scamster.scamWorth}</p>
            <p><strong>Description:</strong> {scamster.description}</p>
            <p><strong>Victims:</strong> {scamster.victims}</p>
            <p><strong>Partners:</strong> {scamster.partners}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ScamStars;
