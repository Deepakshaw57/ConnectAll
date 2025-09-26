import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Space Background with Stars */}
      <div className="space-background">
        <div className="stars"></div>
        <div className="stars-small"></div>
        <div className="stars-tiny"></div>
      </div>

      <header className="about-header glass-header">
        <div className="title">
          <h1>ConnectAll</h1>
          <p>Bridge Between Students and Alumni</p>
        </div>
        <div className="header-buttons">
          <button className="signin-btn glass-btn" onClick={() => alert('Sign In Modal Here')}>
            Sign In
          </button>
        </div>
      </header>

      <nav className="about-nav glass-nav">
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#colleges">Colleges</a>
        <a href="#team">Our Team</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="container">
        <section id="about" className="hero glass-hero">
          <h1>About ConnectAll</h1>
          <p>Connecting the past, present, and future of engineering education in India</p>
        </section>

        <div className="card glass-card">
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
          <div className="about-card glass-card">
            <h3>Our Vision</h3>
            <p>
              To create the most comprehensive network of engineering students and alumni in India.
            </p>
          </div>
          <div className="about-card glass-card">
            <h3>How We Help Students</h3>
            <ul>
              <li>Get career guidance from alumni in your field</li>
              <li>Learn about industry trends and expectations</li>
              <li>Find mentors for academic and professional growth</li>
              <li>Discover internship and job opportunities</li>
            </ul>
          </div>
          <div className="about-card glass-card">
            <h3>How We Help Alumni</h3>
            <ul>
              <li>Reconnect with your alma mater</li>
              <li>Share your expertise with the next generation</li>
              <li>Find talented students for internships/jobs</li>
              <li>Expand your professional network</li>
            </ul>
          </div>
        </div>
        <div className="card">
  <h2>Why Choose ConnectAll?</h2>
  <div className="features-grid">
    <div className="feature-item">
      <div className="feature-icon">🚀</div>
      <h4>Direct Alumni Access</h4>
      <p>Connect directly with alumni from your college and branch who are working in your dream companies</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon">💡</div>
      <h4>Personalized Guidance</h4>
      <p>Get tailored advice based on your specific career goals, skills, and aspirations</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon">🌐</div>
      <h4>Industry Insights</h4>
      <p>Stay updated with latest industry trends, salary expectations, and skill requirements</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon">🤝</div>
      <h4>Networking Opportunities</h4>
      <p>Build meaningful professional relationships that can last throughout your career</p>
    </div>
  </div>
</div>
<div className="card">
  <h2>How It Works</h2>
  <div className="process-steps">
    <div className="process-step">
      <div className="step-number">1</div>
      <h4>Create Your Profile</h4>
      <p>Sign up and create a detailed profile highlighting your skills, interests, and goals</p>
    </div>
    <div className="process-step">
      <div className="step-number">2</div>
      <h4>Find Your Match</h4>
      <p>Our AI-powered system matches you with relevant alumni based on your profile</p>
    </div>
    <div className="process-step">
      <div className="step-number">3</div>
      <h4>Connect & Learn</h4>
      <p>Schedule sessions, ask questions, and get personalized guidance</p>
    </div>
    <div className="process-step">
      <div className="step-number">4</div>
      <h4>Grow Together</h4>
      <p>Build lasting relationships and continue your professional development journey</p>
    </div>
  </div>
</div>

<div className="card">
  <h2>Join Our Growing Community</h2>
  <p>
    Whether you're a student looking for guidance or an alumni willing to give back, 
    ConnectAll provides the perfect platform to bridge the gap between academic learning 
    and real-world success.
  </p>
  <div className="cta-buttons">
    <Link to="/register" className="cta-button primary">Join as Student</Link>
    <Link to="/alumni-register" className="cta-button secondary">Join as Alumni</Link>
  </div>
</div> 

        <section id="colleges" className="college-list">
          <h2 className="glass-text">Partner Colleges</h2>
          <p className="glass-text">
            We currently support students and alumni from these prestigious engineering institutions across India:
          </p>

          {/* IITs Section */}
          <div className="college-category">
            <h3 className="glass-text">Indian Institutes of Technology (IITs)</h3>
            <div className="college-grid">
              {[
                {
                  name: "IIT Bombay",
                  location: "Mumbai, Maharashtra",
                  img: "https://wallpaperaccess.com/full/8410990.jpg",
                  alumniCount: "https://acr.iitbombay.org/stay-connected/#comm"
                },
                {
                  name: "IIT Delhi",
                  location: "New Delhi",
                  img: "https://wallpaperaccess.com/full/8411095.jpg",
                  alumniCount: "12,500+"
                },
                {
                  name: "IIT Madras",
                  location: "Chennai, Tamil Nadu",
                  img: "https://tse2.mm.bing.net/th/id/OIP.8AIRgycPTL6jgoTjkC4SYgHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
                  alumniCount: "13,200+"
                }
              ].map((college, index) => (
                <div className="college-item glass-card" key={index}>
                  <img src={college.img} alt={college.name} className="college-img" />
                  <div className="college-info">
                    <h4>{college.name}</h4>
                    <p>{college.location}</p>
                    <Link 
                      to={`/colleges/${college.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="college-details-link glass-link"
                    >
                      View {college.alumniCount} Alumni Network & Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NITs Section */}
          <div className="college-category">
            <h3 className="glass-text">National Institutes of Technology (NITs)</h3>
            <div className="college-grid">
              {[
                {
                  name: "NIT Kurukshetra",
                  location: "Haryana",
                  img: "https://images.collegedunia.com/public/college_data/images/appImage/22485_SETH_APP.jpg?h=250&w=1000&mode=crop",
                  alumniCount: "8,500+"
                },
                {
                  name: "NIT Surathkal",
                  location: "Karnataka",
                  img: "https://img.jagranjosh.com/images/2022/April/1442022/118282133_3209429542466983_2931716677706882742_n.jpg",
                  alumniCount: "9,200+"
                },
                {
                  name: "NIT Durgapur",
                  location: "Durgapur, West Bengal",
                  img: "https://img.jagranjosh.com/imported/images/E/Articles/NIT-Durgapur.jpg",
                  alumniCount: "7,800+"
                },
                {
                  name: "NIT Delhi",
                  location: "Delhi",
                  img: "https://tse1.mm.bing.net/th/id/OIP.lIGTT0w56Obun4V97e1kGwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
                  alumniCount: "6,500+"
                }
              ].map((college, index) => (
                <div className="college-item glass-card" key={index}>
                  <img src={college.img} alt={college.name} className="college-img" />
                  <div className="college-info">
                    <h4>{college.name}</h4>
                    <p>{college.location}</p>
                    <Link 
                      to={`/colleges/${college.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="college-details-link glass-link"
                    >
                      View {college.alumniCount} Alumni Network & Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IIITs Section */}
          <div className="college-category">
            <h3 className="glass-text">IIITs and Other Premier Institutions</h3>
            <div className="college-grid">
              {[
                {
                  name: "IIIT Hyderabad",
                  location: "Hyderabad, Telangana",
                  img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                  alumniCount: "5,600+"
                },
                {
                  name: "IIIT Allahabad",
                  location: "Allahabad, Uttar Pradesh",
                  img: "https://images.shiksha.com/mediadata/images/articles/1644994436phpSQUiNh.jpeg",
                  alumniCount: "4,900+"
                },
                {
                  name: "UEM Kolkata",
                  location: "Kolkata, West Bengal",
                  img: "https://mba.icnn.in/wp-content/uploads/2021/09/uem-kolkata-1.png",
                  alumniCount: "3,200+"
                }
              ].map((college, index) => (
                <div className="college-item glass-card" key={index}>
                  <img src={college.img} alt={college.name} className="college-img" />
                  <div className="college-info">
                    <h4>{college.name}</h4>
                    <p>{college.location}</p>
                    <Link 
                      to={`/colleges/${college.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="college-details-link glass-link"
                    >
                      View {college.alumniCount} Alumni Network & Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="team-section">
          <div className="card glass-card">
            <h2>Our Team</h2>
            <p>The passionate people behind ConnectAll who are working to transform engineering education in India</p>
            <div className="team-grid">
              <div className="team-member glass-card">
                <div className="member-image-container glass-image">
                  <img src="My love.jpg" alt="Pragya Shree" className="team-photo" />
                  <a href="https://www.linkedin.com/in/pragya-shree-013271279/" className="linkedin-link glass-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="linkedin-icon" />
                  </a>
                </div>
                <h4>Pragya Shree</h4>
                <p>Founder & CEO</p>
                <p>UEM</p>
              </div>
              <div className="team-member glass-card">
                <div className="member-image-container glass-image">
                  <img src="deepak.jpg" alt="Deepak Kumar" className="team-photo" />
                  <a href="https://www.linkedin.com/in/deepak-kumar-129a84339/" className="linkedin-link glass-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="linkedin-icon" />
                  </a>
                </div>
                <h4>Deepak Kumar</h4>
                <p>CO-Founder</p>
                <p>UEM</p>
              </div>
              <div className="team-member glass-card">
                <div className="member-image-container glass-image">
                  <img src="harsh.jpg" alt="Harsh Gaurav" className="team-photo" />
                  <a href="https://www.linkedin.com/in/harsh-gaurav-156928370/" className="linkedin-link glass-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="linkedin-icon" />
                  </a>
                </div>
                <h4>Harsh Gaurav</h4>
                <p>Marketing Lead</p>
                <p>UEM</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer glass-footer">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} ConnectAll. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;