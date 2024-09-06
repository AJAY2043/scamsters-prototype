import React, { useState } from 'react';
import './FAQ.css';
import downarrow from '../Assets/dropdown_icon.png'; // Ensure this path is correct

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is ScamSters?",
      answer: "ScamSters is a platform dedicated to providing information and alerts about various types of scams happening in India and beyond."
    },
    {
      question: "How can I report a scam?",
      answer: "You can report a scam by contacting us through our website's 'Report Scam' section, or by directly sending us an email with the details of the scam."
    },
    {
      question: "How do I stay updated on the latest scams?",
      answer: "You can stay updated by subscribing to our newsletter, following us on social media, or checking our 'Latest Scam Alerts' section regularly."
    },
    {
      question: "Are the scam alerts verified?",
      answer: "Yes, we verify all scam alerts through multiple sources to ensure accuracy before publishing them on our platform."
    }
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="accordion-container">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-button ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <img
                src={downarrow}
                alt="Toggle"
                className={`accordion-icon ${activeIndex === index ? 'rotate' : ''}`}
              />
            </button>
            <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
