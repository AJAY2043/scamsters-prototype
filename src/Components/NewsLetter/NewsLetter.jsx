import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter-section">
      <h2 className="newsletter-title">Stay Updated!</h2>
      <p className="newsletter-text">Subscribe to our newsletter to get the latest updates on scams and how to protect yourself.</p>
      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email address" className="newsletter-input" />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
