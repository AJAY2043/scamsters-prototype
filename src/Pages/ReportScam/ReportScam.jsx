import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './ReportScam.css'; // Import your CSS file

const ReportScam = () => {
  const [formData, setFormData] = useState({
    scammerName: '',
    scamDescription: '',
    scamDate: '',
    contactDetails: '',
    evidence: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send to a backend or API
    console.log('Report submitted:', formData);
    // Clear form or show a confirmation message
  };

  return (
    <>
      <Navbar />
      <div className="report-scam-container">
        <h1>Report a Scam</h1>
        <p>If you've been scammed or have information about a scam, please fill out the form below. Your report helps us combat scams and protect others.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Scammer's Name:
            <input
              type="text"
              name="scammerName"
              value={formData.scammerName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description of Scam:
            <textarea
              name="scamDescription"
              value={formData.scamDescription}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date and Time of Scam:
            <input
              type="datetime-local"
              name="scamDate"
              value={formData.scamDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Contact Details of Scammer:
            <input
              type="text"
              name="contactDetails"
              value={formData.contactDetails}
              onChange={handleChange}
            />
          </label>
          <label>
            Evidence (optional):
            <input
              type="file"
              name="evidence"
              onChange={(e) => setFormData({ ...formData, evidence: e.target.files[0] })}
            />
          </label>
          <label>
            Location of Scam:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit Report</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ReportScam;
