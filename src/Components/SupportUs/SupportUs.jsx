import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './SupportUs.css'; // Import the CSS for styling

const SupportUs = () => {
  return (
    <>
      <Navbar/>
      <div className="supportus-container">
        <div className="supportus-header">
          <h2>Support Us in Our Mission</h2>
          <p>Your contribution, big or small, can make a huge difference in helping us combat fraud and protect society.</p>
        </div>

        <div className="supportus-options">
          {/* Section for Financial Support */}
          <div className="supportus-section financial-support">
            <h3>Support Us Financially</h3>
            <p>If you'd like to help fund our efforts, you can donate through the following platforms:</p>
            <div className="payment-methods">
              <div className="payment-option">
                <i className="fa-brands fa-google-pay"></i>
                <p>GPay: 8881288867</p>
              </div>
              <div className="payment-option">
                <i className="fa-brands fa-phonepe"></i>
                <p>PhonePe: 8881288867</p>
              </div>
            </div>
          </div>

          {/* Section for Technical Support */}
          <div className="supportus-section technical-support">
            <h3>Become a Technical Contributor</h3>
            <p>Are you skilled in web or app development? You can help by developing and improving our platform.</p>
            <div className="tech-contributors">
              <ul>
                <li>Website Development</li>
                <li>App Development</li>
                <li>Mentorship and Guidance</li>
                <li>Technical Troubleshooting</li>
              </ul>
            </div>
          </div>

          {/* Section for Strategic Support */}
          <div className="supportus-section strategic-support">
            <h3>Help Us Make Connections</h3>
            <p>If you can connect us with government officials or influential figures who can assist us, we’d greatly appreciate your help.</p>
            <div className="appointment-support">
              <p>Make appointments with government officials or other stakeholders to further our mission.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SupportUs;
