import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <header>
        <div className="title">
          <h1>ConnectAll</h1>
          <p>Bridge Between Students and Alumni</p>
        </div>
        <div className="header-buttons">
          <button className="signin-btn" onClick={() => alert('Sign In Modal Here')}>Sign In</button>
        </div>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#colleges">Colleges</a>
        <a href="#team">Our Team</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="container">
        <section id="about" className="hero">
          <h1>About ConnectAll</h1>
          <p>Connecting the past, present, and future of engineering education in India</p>
        </section>

        <div className="card">
          <h2>Our Story</h2>
          <p>
            ConnectAll was founded in 2023 with a simple mission: to bridge the gap
            between current engineering students and alumni from the same institutions.
          </p>
          <p>
            ConnectAll solves problems by creating a trusted platform for knowledge exchange,
            mentorship, and networking.
          </p>
        </div>

        <div className="about-section">
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To create the most comprehensive network of engineering students and alumni in India.
            </p>
          </div>
          <div className="about-card">
            <h3>How We Help Students</h3>
            <ul>
              <li>Get career guidance from alumni in your field</li>
              <li>Learn about industry trends and expectations</li>
              <li>Find mentors for academic and professional growth</li>
              <li>Discover internship and job opportunities</li>
            </ul>
          </div>
          <div className="about-card">
            <h3>How We Help Alumni</h3>
            <ul>
              <li>Reconnect with your alma mater</li>
              <li>Share your expertise with the next generation</li>
              <li>Find talented students for internships/jobs</li>
              <li>Expand your professional network</li>
            </ul>
          </div>
        </div>

        <section id="colleges" className="college-list">
          <h2>Partner Colleges</h2>
          <p>
            We currently support students and alumni from these prestigious engineering institutions across India:
          </p>

          <div className="college-category">
            <h3>Indian Institutes of Technology (IITs)</h3>
            <div className="college-grid">
              <div className="college-item">
                <img src="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f" alt="IIT Bombay" className="college-img" />
                <div className="college-info">
                  <h4>IIT Bombay</h4>
                  <p>Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="college-item">
                <img src="https://images.unsplash.com/photo-1589998059171-988d887df646" alt="IIT Delhi" className="college-img" />
                <div className="college-info">
                  <h4>IIT Delhi</h4>
                  <p>New Delhi</p>
                </div>
              </div>
              <div className="college-item">
                <img src="https://images.unsplash.com/photo-1562774053-701939374585" alt="IIT Madras" className="college-img" />
                <div className="college-info">
                  <h4>IIT Madras</h4>
                  <p>Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="college-category">
            <h3>National Institutes of Technology (NITs)</h3>
            <div className="college-grid">
              <div className="college-item">
                <img src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24" alt="NIT Trichy" className="college-img" />
                <div className="college-info">
                  <h4>NIT Trichy</h4>
                  <p>Tamil Nadu</p>
                </div>
              </div>
              <div className="college-item">
                <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7" alt="NIT Surathkal" className="college-img" />
                <div className="college-info">
                  <h4>NIT Surathkal</h4>
                  <p>Karnataka</p>
                </div>
              </div>
              <div className="college-item">
                <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="NIT Warangal" class="college-img" />
                <div className="college-info">
                  <h4>NIT Warangal</h4>
                  <p>Warangal, Telangana</p>
                </div>
              </div>
              <div className="college-item">
                <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="NIT Rourkela" class="college-img" />
                <div className="college-info">
                  <h4>NIT Rourkela</h4>
                  <p>Rourkela, Odisha</p>
                </div>
              </div>
            </div>
          </div>

           <div className="college-category">
            <h3>IIITs and Other Premier Institutions</h3>
            <div className="college-grid">
              <div className="college-item">
                <img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="IIIT Hyderabad" class="college-img" />
                <div className="college-info">
                  <h4>IIIT Hyderabad</h4>
                  <p>Hyderabad, Telangana</p>
                </div>
              </div>
              <div className="college-item">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="IIIT Bangalore" class="college-img" />
                <div className="college-info">
                  <h4>IIIT Allahabad</h4>
                  <p>Allahabad , Uttar Pradesh</p>
                </div>
              </div>
              <div className="college-item">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="BITS Pilani" class="college-img" />
                <div className="college-info">
                  <h4>BITS Pilani</h4>
                  <p>Pilani, Rajasthan</p>
                </div>
              </div>
               </div>
          </div>

        </section>


        <section id="team" className="team-section">
          <div className="card">
            <h2>Our Team</h2>
            <p>The passionate people behind ConnectAll who are working to transform engineering education in India</p>
            <div className="team-grid">
              <div className="team-member">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rahul Sharma" className="team-photo" />
                <h4>Rahul Sharma</h4>
                <p>Founder & CEO</p>
                <p>IIT Bombay Alumnus</p>
              </div>
              <div className="team-member">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya Patel" className="team-photo" />
                <h4>Priya Patel</h4>
                <p>CTO</p>
                <p>IIIT Hyderabad Alumna</p>
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

export default AboutPage;
