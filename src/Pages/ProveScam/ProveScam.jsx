import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './ProveScam.css'; // Import your CSS file

const ProveScam = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    proof: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send to a backend or API
    console.log('Proof submitted:', formData);
    // Clear form or show a confirmation message
  };

  return (
    <>
      <Navbar />
      <div className="prove-scam-container">
        <h1>Prove a Scam</h1>
        <p>
          If you have proof of a scam, please provide the details below. Your information will be kept confidential, and you may be eligible for a reward for valid submissions.
        </p>
        <h2>Rewards:</h2>
        <ul>
          <li>Up to $500 for verified scam proofs</li>
          <li>Recognition on our platform</li>
          <li>Additional benefits for top contributors</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Your Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Your Phone Number (optional):
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Description of the Scam:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Upload Proof:
            <input
              type="file"
              name="proof"
              onChange={handleChange}
              accept="image/*,application/pdf"
              required
            />
          </label>
          <button type="submit">Submit Proof</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ProveScam;
