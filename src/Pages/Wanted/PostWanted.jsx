import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './PostWanted.css'; // Import your CSS file

const PostWanted = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    wantedBy: '',
    affiliation: '',
    scamDescription: '',
    reward: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to server)
    console.log('Submitted data:', formData);
    // You might want to navigate or show a success message after submission
  };

  return (
    <>
      <Navbar />
      <div className="post-wanted-container">
        <h1>Post Wanted Person Details</h1>
        <p>
          If you have information about a person who should be listed as wanted, please fill out the form below. 
          All submissions are reviewed and kept confidential.
        </p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="number" 
            name="age" 
            placeholder="Age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="gender" 
            placeholder="Gender" 
            value={formData.gender} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="wantedBy" 
            placeholder="Wanted By" 
            value={formData.wantedBy} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="affiliation" 
            placeholder="Affiliation" 
            value={formData.affiliation} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="scamDescription" 
            placeholder="Scam Description" 
            value={formData.scamDescription} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="reward" 
            placeholder="Reward" 
            value={formData.reward} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PostWanted;
