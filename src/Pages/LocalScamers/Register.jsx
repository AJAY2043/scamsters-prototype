import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './Register.css'

const RegisterScamers = () => {
  const [newScammer, setNewScammer] = useState({
    name: '',
    age: '',
    gender: '',
    location: '',
    scamType: '',
    scamWorth: '',
    description: '',
    victims: '',
    partners: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle saving the new scammer to the JSON or backend
    console.log('New scammer registered:', newScammer);
  };

  const handleChange = (e) => {
    setNewScammer({ ...newScammer, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Navbar/>
    <div className="register-scammer">
      <h2>Register a New Scammer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br/>
        <input type="number" name="age" placeholder="Age" onChange={handleChange} /><br/>
        <input type="text" name="gender" placeholder="Gender" onChange={handleChange} /><br/>
        <input type="text" name="location" placeholder="Location" onChange={handleChange} /><br/>
        <input type="text" name="scamType" placeholder="Scam Type" onChange={handleChange} /><br/>
        <input type="text" name="scamWorth" placeholder="Scam Worth" onChange={handleChange} /><br/>
        <input type="text" name="description" placeholder="Description" onChange={handleChange} /><br/>
        <input type="number" name="victims" placeholder="Number of Victims" onChange={handleChange} /><br/>
        <input type="text" name="partners" placeholder="Partners" onChange={handleChange} /><br/>
        <button type="submit">Register Scammer</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default RegisterScamers;
