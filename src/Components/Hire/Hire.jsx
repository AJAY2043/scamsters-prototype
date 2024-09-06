import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HireData from '../Data/hireData.json'; // Importing the JSON data
import { useNavigate } from 'react-router-dom'; // To navigate to the registration page
import './Hire.css';

const Hire = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register'); // Redirect to the register page
  };

  return (
    <>
      <Navbar />
      <div className="hire-container">
        <div className="hire-btn">
          <button onClick={handleRegisterClick}>Register and Get Hired</button>
        </div>
        <div className="hire-list">
          {HireData.map((person) => (
            <div key={person.id} className="hire-card">
              <img src={`/images/${person.image}`} alt={person.category} />
              <div className="hire-info">
                <h3>{person.name}</h3>
                <p><strong>Category:</strong> {person.category}</p>
                <p><strong>Age:</strong> {person.age}</p>
                <p><strong>Experience:</strong> {person.experience}</p>
                <p><strong>Charges:</strong> {person.charges}</p>
                <p><strong>Mobile:</strong> {person.mobile}</p>
                <p><strong>Email:</strong> {person.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hire;
