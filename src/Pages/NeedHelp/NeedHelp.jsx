import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './NeedHelp.css'; // Import your CSS file

const NeedHelp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send to a backend or API
    console.log('Help request submitted:', formData);
    // Clear form or show a confirmation message
  };

  return (
    <>
      <Navbar />
      <div className="need-help-container">
        <h1>Need Help?</h1>
        <p>
          We're here to assist you with any questions or issues you may have. 
          Whether you need help with our website, have encountered a problem, or need 
          assistance related to scams, our team is here to support you.
        </p>

        <section className="help-categories">
          <h2>Help Categories</h2>
          <ul>
            <li><strong>General Support:</strong> For general inquiries and assistance.</li>
            <li><strong>Technical Support:</strong> For issues related to using our website or app.</li>
            <li><strong>Scam Reporting:</strong> Steps on how to report a scam or suspicious activity.</li>
            <li><strong>Legal Assistance:</strong> Information on seeking legal help if affected by a scam.</li>
          </ul>
        </section>

        <section className="contact-form">
          <h2>Contact Us</h2>
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
            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="resources">
          <h2>Resources</h2>
          <p>Visit our <strong>FAQ</strong> page for more information. You can also reach out to our customer service team via email at <a href="mailto:support@example.com">support@scamsters.com</a>.</p>
        </section>

        <section className="emergency-contacts">
          <h2>Emergency Contacts</h2>
          <p>If you require immediate assistance, please contact our emergency help line at <strong>+91 8881288867</strong> or email us at <a href="mailto:emergency@example.com">emergency@scamsters.com</a>.</p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default NeedHelp;
