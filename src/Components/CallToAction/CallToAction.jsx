import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <div className="cta-section">
      <h2 className="cta-title">Don't Miss Out!</h2>
      <p className="cta-text">Join our community to stay updated on the latest scams and how to protect yourself.</p>
      <a href="#signup" className="cta-button">Sign Up Now</a>
    </div>
  );
}

export default CallToAction;
