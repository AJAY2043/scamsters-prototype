import React from 'react';
import './Testimonals.css';

const Testimonals = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amit misra",
      text: "This service helped me avoid a major scam. Highly recommended!",
      location: "Mumbai, India",
    },
    {
      id: 2,
      name: "Ajay Reddy",
      text: "Thanks to ScamSters, I was able to recover my lost funds. Excellent support!",
      location: "Guntur, India",
    },
    {
      id: 3,
      name: "Rahul Sharma",
      text: "A valuable resource for staying informed about scams. Keep up the good work!",
      location: "Bangalore, India",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-location">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonals;
