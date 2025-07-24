import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerGuidance.css';

const CareerGuidance = () => {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const toggleSubscriptionModal = () => {
    setShowSubscriptionModal(prev => !prev);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    // Here you would typically integrate with a payment gateway
    alert(`You've selected the ${plan.duration} plan for ₹${plan.price}. Payment integration would go here.`);
    setShowSubscriptionModal(false);
  };

  const subscriptionPlans = [
    { duration: "5 minutes", price: 10, features: ["Quick career question", "Basic guidance"] },
    { duration: "15 minutes", price: 25, features: ["Detailed discussion", "Resume review"] },
    { duration: "30 minutes", price: 45, features: ["In-depth session", "Career path planning", "Interview prep"] },
    { duration: "60 minutes", price: 80, features: ["Comprehensive guidance", "Personalized roadmap", "Follow-up email"] }
  ];

  return (
    <div className="career-guidance-page">
      <div className="career-header">
        <h1>Career Guidance Services</h1>
        <p>Get expert advice from alumni in your field of interest</p>
      </div>

      <div className="services-container">
        <div className="service-card">
          <div className="service-content">
            <h2>One-on-One Mentorship</h2>
            <p>
              Connect directly with experienced alumni who can provide personalized 
              guidance tailored to your career goals and aspirations.
            </p>
            <button 
              className="book-now-btn"
              onClick={toggleSubscriptionModal}
            >
              Book Now
            </button>
          </div>
          <div className="service-image">
            <img 
              src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Mentorship" 
            />
          </div>
        </div>

        <div className="service-card reverse">
          <div className="service-image">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Resume Review" 
            />
          </div>
          <div className="service-content">
            <h2>Resume Review</h2>
            <p>
              Get your resume reviewed by professionals working in your target 
              industry. Receive actionable feedback to make your application stand out.
            </p>
            <button 
              className="book-now-btn"
              onClick={toggleSubscriptionModal}
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="service-card">
          <div className="service-content">
            <h2>Mock Interviews</h2>
            <p>
              Practice interviews with alumni from top companies. Receive detailed 
              feedback on your performance and areas for improvement.
            </p>
            <button 
              className="book-now-btn"
              onClick={toggleSubscriptionModal}
            >
              Book Now
            </button>
          </div>
          <div className="service-image">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Mock Interview" 
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "The mock interview service helped me land my dream job at Google. 
              My alumni interviewer gave me exactly the kind of tough questions I 
              needed to prepare for."
            </p>
            <div className="testimonial-author">
              - Ankit Verma, Software Engineer at Google
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              "My resume was getting no responses. After the alumni review, I 
              started getting interview calls within a week. The difference was 
              incredible!"
            </p>
            <div className="testimonial-author">
              - Priya Singh, Marketing Professional
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Modal (same as before) */}
      {showSubscriptionModal && (
        <div className="subscription-modal-overlay">
          <div className="subscription-modal">
            <button 
              className="close-modal-btn"
              onClick={toggleSubscriptionModal}
            >
              &times;
            </button>
            <h3>Choose Your Session Duration</h3>
            <p>Select the time that fits your needs</p>
            
            <div className="subscription-plans">
              {subscriptionPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`subscription-plan ${selectedPlan?.duration === plan.duration ? 'selected' : ''}`}
                  onClick={() => handlePlanSelect(plan)}
                >
                  <h4>{plan.duration}</h4>
                  <div className="plan-price">₹{plan.price}</div>
                  <ul className="plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="payment-options">
              <h4>Payment Methods</h4>
              <div className="payment-methods">
                <div className="payment-method">
                  <i className="fab fa-cc-paypal"></i>
                  <span>PayPal</span>
                </div>
                <div className="payment-method">
                  <i className="fab fa-cc-stripe"></i>
                  <span>Stripe</span>
                </div>
                <div className="payment-method">
                  <i className="fas fa-credit-card"></i>
                  <span>Credit Card</span>
                </div>
                <div className="payment-method">
                  <i className="fas fa-university"></i>
                  <span>UPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerGuidance;