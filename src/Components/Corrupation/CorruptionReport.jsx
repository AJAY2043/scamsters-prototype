import React, { useState } from 'react';
import './CorruptionReport.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const CorruptionReport = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    amount: '',
    reason: '',
    place: '',
    officeCode: '',
    department: '',
    proof: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, proof: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a backend)
    console.log('Form data:', formData);
  };

  return (
    <>
    <Navbar/>
    <div className="corruption-report-section">
      <h1 className="corruption-title">Report Corruption</h1>
      <p className="corruption-description">
        Corruption undermines the integrity of our society. Here, you can report incidents of corruption anonymously or with your details. Below is some information about anti-corruption laws in India.
      </p>

      <div className="corruption-laws">
        <h2 className="laws-title">Anti-Corruption Laws in India</h2>
        <ul className="laws-list">
          <li>Prevention of Corruption Act, 1988</li>
          <li>Lokpal and Lokayuktas Act, 2013</li>
          <li>Whistle Blowers Protection Act, 2014</li>
        </ul>
      </div>

      <form className="corruption-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Demanded Amount (INR):</label>
          <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea id="reason" name="reason" value={formData.reason} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="place">Place:</label>
          <input type="text" id="place" name="place" value={formData.place} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="officeCode">Office Code or Name:</label>
          <input type="text" id="officeCode" name="officeCode" value={formData.officeCode} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" name="department" value={formData.department} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="proof">Any Proof (Optional):</label>
          <input type="file" id="proof" name="proof" onChange={handleFileChange} />
        </div>
        <button type="submit" className="submit-btn">Submit Report</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default CorruptionReport;
