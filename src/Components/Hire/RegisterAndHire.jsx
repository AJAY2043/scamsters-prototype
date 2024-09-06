import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './RegisterAndHire.css'; // Import the CSS for styling

const RegisterAndHire = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    age: '',
    experience: '',
    charges: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission goes here
    console.log('Form submitted', formData);
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <h2>Register and Get Hired</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category (e.g., Lawyer, Detective)"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Your Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="experience"
            placeholder="Experience (e.g., 5 years)"
            value={formData.experience}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="charges"
            placeholder="Charges (e.g., ₹5000/hour)"
            value={formData.charges}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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

export default RegisterAndHire;
