import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link, useNavigate } from 'react-router-dom';
import ProfileSidebar from '../pages/ProfileSidebar';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showJoinDropdown, setShowJoinDropdown] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const dp = user?.dp || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const toggleChat = () => {
    setChatOpen(prev => !prev);
  };

  const toggleJoinDropdown = () => {
    setShowJoinDropdown(prev => !prev);
  };

  return (
    <div className="home-container">
      <div className="social-sidebar">
        <a 
          href="https://wa.me/yourphonenumber" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon whatsapp"
          title="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a 
          href="https://linkedin.com/company/yourcompany" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon linkedin"
          title="Connect on LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a 
          href="https://twitter.com/yourhandle" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon twitter"
          title="Follow on Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a 
          href="https://facebook.com/yourpage" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon facebook"
          title="Like on Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a 
          href="/help" 
          className="social-icon help"
          title="Get Help"
        >
          <i className="fas fa-question"></i>
        </a>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        
        {/* Navigation Bar - Transparent until scrolled */}
        <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-content">
            <div className="nav-logo" onClick={() => navigate('/')}>
              <img 
                src="connectall.png" 
                alt="Alumni Connect Logo" 
                className="logo-img" 
              />
              <div className="logo-text">
                <span>ConnectAll</span>
                <small>Bridging Students and Alumni</small>
              </div>
            </div>

            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About Us</Link>

              <Link to="/events" className="nav-link">Events</Link>
              <Link to="/branches" className="nav-link">Branches</Link>
              <Link to="/mentors" className="nav-link">Mentors</Link>
              <Link to="/career" className="nav-link">Career Guidance</Link>
            </div>

            <div className="nav-actions">
              
              <button 
                className="create-event-btn" 
                onClick={() => navigate('/create-event')}
              >
                Create Event
              </button>
              <div className="join-dropdown-container">
                <button className="join-btn" onClick={toggleJoinDropdown}>
                  Join Us ▼
                </button>
                {showJoinDropdown && (
                  <div className="join-dropdown">
                    <button 
                      className="dropdown-item" 
                      onClick={() => navigate('/student-signin')}
                    >
                      Sign In as Student
                    </button>
                    <button 
                      className="dropdown-item" 
                      onClick={() => navigate('/alumni-signin')}
                    >
                      Sign In as Alumni
                    </button>
                    <button 
                      className="dropdown-item logout-btn"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                    <div className="profile-container">
                <img
                  src={dp}
                  alt="User DP"
                  className="profile-dp"
                  onClick={() => setIsSidebarOpen(true)}
                />
              </div>
                  </div>
                  
                )}
                
              </div>
            </div>
          </div>
          
            
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>AlumniConnect</h1>
          <p className="hero-subtitle">
            The premier platform connecting students with alumni for mentorship and career guidance since 2023
          </p>
          <div className="hero-buttons">
            <button 
              className="cta-button" 
              onClick={() => navigate('/register')}
            >
              Join Our Network
            </button>
            <button 
              className="secondary-button"
              onClick={toggleChat}
            >
              Chat Assistant 💬
            </button>
          </div>
        </div>
      </div>

      

      {/* Chatbot */}
      <div className={`chat-box ${chatOpen ? 'active' : ''}`}>
        <div className="chat-header">
          <h3>AlumniConnect Assistant</h3>
          <button className="close-chat" onClick={toggleChat}>&times;</button>
        </div>
        <div className="chat-body">
          <div className="message ai-message">
            Hi there! I'm your AlumniConnect assistant. How can I help you today?
          </div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your question here..." />
          <button className="send-btn">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="section-content">
          <h2>About AlumniConnect</h2>
          <p>
            AlumniConnect is an innovative platform designed to bridge the gap
            between current students and alumni from the same institutions.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To create meaningful connections that foster knowledge sharing,
                mentorship, and career growth.
              </p>
            </div>
            <div className="about-card">
              <h3>How It Works</h3>
              <p>
                Students connect with alumni from their college to get
                personalized advice and guidance.
              </p>
            </div>
            <div className="about-card">
              <h3>Why It Matters</h3>
              <p>
                Students often lack real-world perspective about their field.
                We create a trusted space for mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <img 
              src="https://images.unsplash.com/photo-1654172501173-1d20f2fad942?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Active Students" 
              className="stat-image"
            />
            <div className="stat-number">5000+</div>
            <div className="stat-label">Active Students</div>
          </div>
          <div className="stat-item">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Engaged Alumni" 
              className="stat-image"
            />
            <div className="stat-number">2000+</div>
            <div className="stat-label">Engaged Alumni</div>
          </div>
          <div className="stat-item">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Colleges" 
              className="stat-image"
            />
            <div className="stat-number">100+</div>
            <div className="stat-label">Colleges</div>
          </div>
          <div className="stat-item">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Better Clarity" 
              className="stat-image"
            />
            <div className="stat-number">85%</div>
            <div className="stat-label">Report Better Clarity</div>
          </div>
        </div>
      </section>

      {/* New Events Gallery Section */}
      <section className="events-gallery-section">
        <h2 className="section-title">Our Recent College Events</h2>
        <p className="section-subtitle">See what's happening across our network of colleges</p>
        
        <div className="events-gallery-container">
          <div className="events-track">
            {/* First set of events */}
            {[
              {
                id: 1,
                title: "Tech Symposium 2023",
                college: "IIT Bombay",
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              {
                id: 2,
                title: "Alumni Meet",
                college: "NIT Trichy",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              {
                id: 3,
                title: "Career Fair",
                college: "BITS Pilani",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              {
                id: 4,
                title: "Hackathon",
                college: "IIIT Hyderabad",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              {
                id: 5,
                title: "Cultural Fest",
                college: "DTU Delhi",
                image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              // Duplicate for seamless looping
              {
                id: 6,
                title: "Tech Symposium 2023",
                college: "IIT Bombay",
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              {
                id: 7,
                title: "Alumni Meet",
                college: "NIT Trichy",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              {
                id: 8,
                title: "Career Fair",
                college: "BITS Pilani",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
             
            ].map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image-container">
                  <img src={event.image} alt={event.title} className="event-image" />
                  <div className="event-overlay">
                    <h3>{event.title}</h3>
                    <p>{event.college}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="view-all-events-btn"
          onClick={() => navigate('/events')}
        >
          View All Events
        </button>
      </section>

      {/* Keep all your existing code below this exactly the same */}
      {/* Testimonials Section */}
      <section id="testimonials" className="section-container"></section>

      {/* Testimonials */}
      <section id="testimonials" className="section-container">
        <div className="section-content">
          <h2>Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>
                "AlumniConnect helped me find a mentor from my own college who guided
                me through my final year projects. This platform is a game-changer!"
              </p>
              <div className="testimonial-author">
                - Rohan Sharma, Computer Science Graduate
              </div>
            </div>
            <div className="testimonial-card">
              <p>
                "As an alumni, I love giving back to my alma mater. The structured
                mentorship program makes it easy to guide students."
              </p>
              <div className="testimonial-author">
                - Priya Patel, Senior Software Engineer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} AlumniConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;