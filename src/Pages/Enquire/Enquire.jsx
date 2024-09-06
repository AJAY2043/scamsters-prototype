import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Enquire.css'

const Enquire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send to a backend or API
    console.log('Inquiry submitted:', formData);
    // Clear form or show a confirmation message
  };

  return (
    <>
      <Navbar />
      <div className="enquire-container">
        <h1>Enquire with Us</h1>
        <p>
          You can enquire about any company, person, or business here. All your inquiries are confidential, and your details will not be revealed during the process.
        </p>
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
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Enquire;
