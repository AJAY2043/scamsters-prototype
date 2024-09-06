import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import helplinesData from '../Data/helplinesData.json'; // Import the JSON file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './HelpLines.css';

const HelpLines = () => {
  const [helplines, setHelplines] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');

  useEffect(() => {
    setHelplines(helplinesData);
  }, []);

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const filteredHelplines = locationFilter
    ? helplines.filter((helpline) => helpline.address.toLowerCase().includes(locationFilter.toLowerCase()))
    : helplines;

  return (
    <>
      <Navbar />
      <div className="helplines-container">
        <h1>Emergency Helplines</h1>
        <p>Here is the list of important emergency contact numbers and email addresses.</p>

        <div className="filter-container">
          <label htmlFor="location">Filter by Location:</label>
          <select id="location" value={locationFilter} onChange={handleLocationChange}>
            <option value="">All Locations</option>
            <option value="TS">Telangana</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Vijayawada">Vijayawada</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="helplines-list">
          {filteredHelplines.map((helpline) => (
            <div key={helpline.id} className="helpline-card">
              <h3>{helpline.name}</h3>
              <p><strong>Role:</strong> {helpline.role}</p>
              <p><strong>Category:</strong> {helpline.category}</p>
              <p><strong>Gender:</strong> {helpline.gender}</p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> {helpline.mobile}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> {helpline.email}
              </p>
              <p><strong>Address:</strong> {helpline.address}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpLines;
