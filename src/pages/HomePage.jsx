import React, { useState } from 'react';
import './HomePage.css';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (!user) {
  navigate('/login');
  return null;
}


  const toggleChat = () => setChatOpen(!chatOpen);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <header>
        <div className="title">
          <h1>ConnectAll</h1>
          <p>Bridge Between Students and Alumni</p>
        </div>
        <div className="header-buttons">
          {user ? (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="signin-btn" onClick={() => navigate('/login')}>
              Sign In
            </button>
          )}
          <button className="chat-btn" onClick={toggleChat}>
            <i className="fas fa-comment-dots"></i>
            <span className="badge">1</span>
          </button>
        </div>
      </header>

      {/* ✅ Welcome User */}
      {user && (
        <div className="welcome-box">
          <h2>Welcome, {user.firstName} {user.lastName}!</h2>
          <p><strong>College:</strong> {user.college}</p>
          <p><strong>Branch:</strong> {user.branch}</p>
        </div>
      )}

      <div className={`chat-box ${chatOpen ? 'active' : ''}`}>
        <div className="chat-header">
          <h3>ConnectAll Assistant</h3>
          <button className="close-chat" onClick={toggleChat}>&times;</button>
        </div>
        <div className="chat-body">
          <div className="message ai-message">
            Hi there! I'm your ConnectAll assistant. How can I help you today?
          </div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your question here..." />
          <button className="send-btn">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      <nav>
        <a href="#home">Home</a>
        <Link to="/about">About</Link>
        <a href="#events">Events</a>
        <Link to="/branches">Branch</Link>
        <a href="#mentors">Mentors</a>
        <a href="#career">Career Guidance</a>
      </nav>

      <div className="container">
        <section id="home" className="hero">
          <h1>Connecting Students with Alumni for Brighter Futures</h1>
          <p>
            Get real insights about your college experience, career paths, and
            industry trends from those who've walked the path before you.
          </p>
          <button className="cta-button" onClick={() => navigate('/register')}>
            Join Our Network
          </button>
        </section>

        <section id="about">
          <div className="card">
            <h2>About ConnectAll</h2>
            <p>
              ConnectAll is an innovative platform designed to bridge the gap
              between current engineering students and alumni from the same
              institutions.
            </p>
          </div>

          <div className="about-section">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To create meaningful connections between students and alumni that
                foster knowledge sharing, mentorship, and career growth.
              </p>
            </div>
            <div className="about-card">
              <h3>How It Works</h3>
              <p>
                Students can connect with alumni from their own college and
                department to get personalized advice.
              </p>
            </div>
            <div className="about-card">
              <h3>Why It Matters</h3>
              <p>
                College students often lack real-world perspective about their
                field. ConnectAll creates a trusted space for mentorship.
              </p>
            </div>
          </div>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Engaged Alumni</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Colleges</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">85%</div>
              <div className="stat-label">Report Better Clarity</div>
            </div>
          </div>

          <div className="testimonials">
            <h2>Success Stories</h2>
            <div className="testimonial">
              <p>
                "ConnectAll helped me find a mentor from my own college who guided
                me through my final year projects. This platform is a game-changer!"
              </p>
              <div className="testimonial-author">
                - Rohan Sharma, Computer Science Graduate
              </div>
            </div>
            <div className="testimonial">
              <p>
                "As an alumni, I love giving back to my alma mater. The structured
                mentorship program makes it easy."
              </p>
              <div className="testimonial-author">
                - Priya Patel, Senior Software Engineer
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="footer">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} ConnectAll. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
