import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import scamstersData from '../../Components/Data/Localscamers.json';
import './LocalScamers.css';
import local_scamer_img from '../../Components/Assets/localscamers-img.jpg';

const LocalScamers = () => {
  const [scamsters, setScamsters] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setScamsters(scamstersData);
  }, []);

  // Filter scamsters based on the selected location
  const filteredScamsters = locationFilter
    ? scamsters.filter(scamster => scamster.location.toLowerCase().includes(locationFilter.toLowerCase()))
    : scamsters;

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: `url(${local_scamer_img})` }}>
        <h1>Welcome to Local Scamsters</h1>
        <p>Beware of local scammers in your area</p>
      </div>

      <center>
        <button onClick={() => navigate('/registerscam')} className="add-scammer-button">
          Add a new Scammer
        </button>
      </center>

      <div className="filter-section">
        <label>Filter by Location: </label>
        <input
          type="text"
          placeholder="Enter location"
          value={locationFilter}
          onChange={e => setLocationFilter(e.target.value)}
        />
      </div>

      <div className="scamsters-container">
        {filteredScamsters.map(scamster => (
          <div key={scamster.id} className="scamster-card">
            <img src={scamster.image} alt={scamster.name} className="scamster-img" />
            <h2>{scamster.name}</h2>
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

export default LocalScamers;
