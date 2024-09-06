import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import wantedData from '../../Components/Data/wantedData.json';
import './Wanted.css'; // Import your CSS file

const Wanted = () => {
  const [wantedMembers, setWantedMembers] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    setWantedMembers(wantedData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="wanted-container">
        <h1>Wanted</h1>
        <p>
          We are actively seeking information on these individuals who are wanted for various crimes. 
          If you have any information, please contact us. All tips are confidential and rewards are available.
        </p>
        <button onClick={() => navigate('/postwanted')} className="post-wanted-btn">
          Post Your Wanted Person Details
        </button>
        <div className="wanted-cards">
          {wantedMembers.map(member => (
            <div key={member.id} className="wanted-card">
              <h2>{member.name}</h2>
              <p><strong>Age:</strong> {member.age}</p>
              <p><strong>Gender:</strong> {member.gender}</p>
              <p><strong>Wanted By:</strong> {member.wantedBy}</p>
              <p><strong>Affiliation:</strong> {member.affiliation}</p>
              <p><strong>Scam Description:</strong> {member.scamDescription}</p>
              <p><strong>Reward:</strong> {member.reward}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wanted;
