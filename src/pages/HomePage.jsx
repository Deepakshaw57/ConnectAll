import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import { Link, useNavigate } from 'react-router-dom';
import ProfileSidebar from '../pages/ProfileSidebar';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showJoinDropdown, setShowJoinDropdown] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [activePlanet, setActivePlanet] = useState(null);
  const [expandedPlanet, setExpandedPlanet] = useState(null);
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const dp = user?.dp || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector('.stars');
      if (!starsContainer) return;

      starsContainer.innerHTML = '';

      for (let i = 0; i < 2000; i++) { // Increased number of stars
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        starsContainer.appendChild(star);
      }
    };
    
    const createAsteroids = () => {
      const container = document.querySelector('.asteroid-field');
      if (!container) return;
      
      container.innerHTML = '';
      
      for (let i = 0; i < 50; i++) {
        const asteroid = document.createElement('div');
        asteroid.className = `asteroid asteroid-${i % 5}`;
        asteroid.style.left = `${Math.random() * 100}%`;
        asteroid.style.top = `${Math.random() * 100}%`;
        asteroid.style.animationDelay = `${Math.random() * 20}s`;
        container.appendChild(asteroid);
      }
    };

    const createShootingStar = () => {
      const container = document.querySelector('.milky-way-galaxy');
      if (!container) return;
      
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.left = `${Math.random() * 20}%`;
      shootingStar.style.top = `${Math.random() * 20}%`;
      
      container.appendChild(shootingStar);
      
      setTimeout(() => {
        if (shootingStar.parentNode) {
          shootingStar.parentNode.removeChild(shootingStar);
        }
      }, 2000);
    };

    createStars();
    createAsteroids();
    const shootingStarInterval = setInterval(createShootingStar, 3000);

    return () => {
      clearInterval(shootingStarInterval);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.log("Audio play failed:", error));
    }
    setMusicPlaying(!musicPlaying);
  };

  const toggleChat = () => {
    setChatOpen(prev => !prev);
  };

  const toggleJoinDropdown = () => {
    setShowJoinDropdown(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  const planets = [
    {
      name: "Home",
      path: "/",
      color: "#4a90e2",
      size: "60px",
      orbit: 1,
      texture: "mercury.png",
      description: "Return to the main page",
      content: {
        title: "Welcome to AlumniConnect",
        description: "Your portal to connect with alumni and students",
        features: ["Networking", "Mentorship", "Career Guidance"]
      }
    },
    {
      name: "About Us",
      path: "AboutPage.jsx",
      color: "#ff8c00",
      size: "80px",
      orbit: 2,
      texture: "venus.png",
      description: "Learn about our mission",
      content: {
        title: "About AlumniConnect",
        description: "Bridging the gap between students and alumni",
        features: ["Our Story", "Mission & Vision", "Team Members"]
      }
    },
    {
      name: "Events",
      path: "",
      color: "#c1440e",
      size: "70px",
      orbit: 3,
      texture: "Earth.png",
      description: "Discover upcoming events",
      content: {
        title: "Events & Activities",
        description: "Join our community events and networking sessions",
        features: ["Workshops", "Webinars", "Networking Events"]
      }
    },
    {
      name: "Branches",
      path: "BranchesPage.jsx",
      color: "#e6a971",
      size: "100px",
      orbit: 4,
      texture: "mars.png",
      description: "Explore our branches",
      content: {
        title: "Our Branches",
        description: "Find alumni connections across different locations",
        features: ["Global Network", "Local Chapters", "Regional Events"]
      }
    },
    {
      name: "Mentors",
      path: "/mentors",
      color: "#8b4513",
      size: "150px",
      orbit: 5,
      texture: "saturn.png",
      description: "Connect with mentors",
      content: {
        title: "Mentorship Program",
        description: "Get guidance from experienced alumni",
        features: ["One-on-One Mentoring", "Career Advice", "Skill Development"]
      }
    },
    {
      name: "Career",
      path: "CareerGuidance.jsx",
      color: "#4682b4",
      size: "100px",
      orbit: 6,
      texture: "neptune.jpeg",
      description: "Career guidance resources",
      content: {
        title: "Career Development",
        description: "Advance your career with our resources",
        features: ["Job Portal", "Resume Building", "Interview Prep"]
      }
    }
  ];

  return (
    <div className="galaxy-container" ref={containerRef}>
      
      {/* Background music */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2021/10/25/audio_172d7dec90.mp3?filename=space-ambience-2-193700.mp3"
      />
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      {/* 3D Milky Way Galaxy Background - Full Screen */}
      <div className="milky-way-galaxy">
        <div className="galaxy-core-3d">
          <div className="core-glow-3d"></div>
          <div className="spiral-arms-3d">
            <div className="spiral-arm-3d arm-1-3d"></div>
            <div className="spiral-arm-3d arm-2-3d"></div>
            <div className="spiral-arm-3d arm-3-3d"></div>
            <div className="spiral-arm-3d arm-4-3d"></div>
          </div>
        </div>
        
        {/* Stars */}
        <div className="stars"></div>
        
        {/* Nebula Clouds */}
        <div className="nebula-clouds-3d">
          <div className="nebula-3d nebula-1-3d"></div>
          <div className="nebula-3d nebula-2-3d"></div>
          <div className="nebula-3d nebula-3-3d"></div>
        </div>
        
        {/* Asteroid Field */}
        <div className="asteroid-field"></div>
        
        {/* 3D Solar System - Centered */}
        {/* 3D Solar System - Positioned above content sections but behind hero */}
<div className="solar-system-3d">
  {planets.map((planet, index) => (
    <div
      key={index}
      className={`orbit-3d orbit-${planet.orbit}-3d`}
      style={{
        animationDuration: `${20 + planet.orbit * 4}s`,
        width: `${planet.orbit * 100 + 150}px`,
        height: `${planet.orbit * 100 + 150}px`
      }}
    >
      <div
        className={`planet-3d ${expandedPlanet === index ? 'expanded' : ''}`}
        style={{
          width: planet.size,
          height: planet.size,
          backgroundImage: `url(${planet.texture})`,
          boxShadow: `0 0 30px ${planet.color}, 0 0 60px ${planet.color}, inset 0 0 20px rgba(0,0,0,0.7)`
        }}
        onClick={() => setExpandedPlanet(expandedPlanet === index ? null : index)}
        onMouseEnter={() => setActivePlanet(index)}
        onMouseLeave={() => setActivePlanet(null)}
      >
        <span className="planet-tooltip-3d">{planet.name}</span>
        <div className="planet-glow-3d"></div>
        <div className="planet-atmosphere-3d"></div>
        <div className="planet-ring"></div>
        
        {/* Expanded Content */}
        {expandedPlanet === index && (
          <div className="planet-content">
            <h3>{planet.content.title}</h3>
            <p>{planet.content.description}</p>
            <ul>
              {planet.content.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button 
              className="explore-btn"
              onClick={() => navigate(planet.path)}
            >
              Explore {planet.name}
            </button>
          </div>
        )}
      </div>
    </div>
  ))}
</div>

{/* Central Sun */}
<div className="sun-3d">
  <div className="sun-glow"></div>
  <div className="sun-core"></div>
  <div className="sun-corona"></div>
</div>
        {/* Space Dust */}
        <div className="space-dust"></div>
      </div>
      
      

      {/* Navigation Bar */}
      <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-logo" onClick={() => navigate('/')}>
           
          </div>
<div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/events" className="nav-link">Events</Link>
      <Link to="/branches" className="nav-link">Branches</Link>
      <Link to="/mentors" className="nav-link">Mentors</Link>
      <Link to="/career" className="nav-link">Career</Link>
      <Link to="/blogs" className="nav-link">Blogs</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </div>
    

          <div className="nav-actions">
            <button className="create-event-btn" onClick={() => navigate('/create-event')}>
              <i className="fas fa-plus"></i> Create Event
            </button>
            
            <div className="profile-container">
              <img src={dp} alt="User Profile" className="profile-dp" onClick={() => setIsSidebarOpen(true)} />
            </div>
            
            <div className="join-dropdown-container">
              <button className="join-btn" onClick={toggleJoinDropdown}>
                Join Us <i className="fas fa-caret-down"></i>
              </button>
              {showJoinDropdown && (
                <div className="join-dropdown">
                  <button onClick={() => navigate('/student-signin')}>
                    <i className="fas fa-user-graduate"></i> Sign In as Student
                  </button>
                  <button onClick={() => navigate('/alumni-signin')}>
                    <i className="fas fa-briefcase"></i> Sign In as Alumni
                  </button>
                  <button className="logout-btn" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content - Overlay on Galaxy */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="logo-3d-container">
            <div className="logo-3d">
              <span className="letter">A</span>
              <span className="letter">l</span>
              <span className="letter">u</span>
              <span className="letter">m</span>
              <span className="letter">n</span>
              <span className="letter">i</span>
              <span className="letter">C</span>
              <span className="letter">o</span>
              <span className="letter">n</span>
              <span className="letter">n</span>
              <span className="letter">e</span>
              <span className="letter">c</span>
              <span className="letter">t</span>
              <span className="letter">.</span>
            </div>
          </div>
          <p className="hero-subtitle">
            The premier platform connecting students with alumni for mentorship and career guidance since 2023
          </p>
          <div className="hero-buttons">
            <button className="cta-button" onClick={() => navigate('/register')}>
              <i className="fas fa-rocket"></i> Join Our Network
            </button>
            <button className="secondary-button" onClick={toggleChat}>
              <i className="fas fa-comments"></i> Chat Assistant
            </button>
          </div>
        </div>
        
        {/* Floating Astronaut */}
        <div className="astronaut-float">
          <div className="astronaut">
            <div className="helmet">
              <div className="visor"></div>
            </div>
            <div className="body"></div>
            <div className="arm left"></div>
            <div className="arm right"></div>
            <div className="leg left"></div>
            <div className="leg right"></div>
          </div>
        </div>
      </div>

      {/* Music control */}
      <button className="music-toggle-3d" onClick={toggleMusic}>
        <i className={musicPlaying ? "fas fa-volume-up" : "fas fa-volume-mute"}></i>
        <span className="music-tooltip-3d">{musicPlaying ? "Mute" : "Play"} Space Ambience</span>
      </button>

      {/* Social Media Sidebar */}
      <div className="social-sidebar">
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" title="Chat on WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" title="Connect on LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon twitter" title="Follow on Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon facebook" title="Like on Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/help" className="social-icon help" title="Get Help">
          <i className="fas fa-question"></i>
        </a>
      </div>

      {/* Content Sections with 3D effect */}
      <div className="content-sections">
        <section id="about" className="section-container-3d">
          <div className="section-content">
            <h2>About AlumniConnect</h2>
            <p>
              AlumniConnect is an innovative platform designed to bridge the gap
              between current students and alumni from the same institutions.
            </p>

            <div className="about-cards-3d">
              <div className="about-card-3d">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-content">
                      <div className="card-icon">
                        <i className="fas fa-bullseye"></i>
                      </div>
                      <h3>Our Mission</h3>
                      <div className="card-hover-hint">
                        <i className="fas fa-mouse-pointer"></i> Hover to explore
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="card-content">
                      <p>
                         At ConnectAll, we're revolutionizing the way engineering education connects across generations. 
    We believe that every student deserves access to the wisdom and experience of those who have 
    walked the path before them.
                      </p>
                      <button className="card-action-btn">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="about-card-3d">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-content">
                      <div className="card-icon">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <h3>How It Works</h3>
                      <div className="card-hover-hint">
                        <i className="fas fa-mouse-pointer"></i> Hover to explore
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="card-content">
                      <p>
                        Students connect with alumni from their college to get
                        personalized advice and guidance.
                      </p>
                      <button className="card-action-btn">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="about-card-3d">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-content">
                      <div className="card-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <h3>Why It Matters</h3>
                      <div className="card-hover-hint">
                        <i className="fas fa-mouse-pointer"></i> Hover to explore
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="card-content">
                      <p>
                        Students often lack real-world perspective about their field.
                        We create a trusted space for mentorship.
                      </p>
                      <button className="card-action-btn">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="stats-section-3d">
          <div className="stats-container">
            <div className="stat-item-3d">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-number">5000+</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-item-3d">
              <div className="stat-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="stat-number">2000+</div>
              <div className="stat-label">Engaged Alumni</div>
            </div>
            <div className="stat-item-3d">
              <div className="stat-icon">
                <i className="fas fa-university"></i>
              </div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Colleges</div>
            </div>
            <div className="stat-item-3d">
              <div className="stat-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="stat-number">85%</div>
              <div className="stat-label">Report Better Clarity</div>
            </div>
          </div>
        </section>

        {/* Events Gallery Section */}
        <section className="events-gallery-section-3d">
          <h2 className="section-title">Our Recent College Events</h2>
          <p className="section-subtitle">See what's happening across our network of colleges</p>
          
          <div className="events-gallery-container-3d">
            <div className="events-track">
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
                }
              ].map(event => (
                <div key={event.id} className="event-card-3d">
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
            className="view-all-events-btn-3d"
            onClick={() => navigate('/events')}
          >
            View All Events <i className="fas fa-arrow-right"></i>
          </button>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section-3d">
          <div className="section-content">
            <h2>Success Stories</h2>
            <div className="testimonials-grid-3d">
              <div className="testimonial-card-3d">
                <div className="testimonial-content">
                  <p>
                    "AlumniConnect helped me find a mentor from my own college who guided
                    me through my final year projects. This platform is a game-changer!"
                  </p>
                  <div className="testimonial-author">
                    - Rohan Sharma, Computer Science Graduate
                  </div>
                </div>
              </div>
              <div className="testimonial-card-3d">
                <div className="testimonial-content">
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
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-3d">
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
      
      {/* Profile Sidebar */}
      {isSidebarOpen && (
        <ProfileSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}

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
    </div>
  );
};

export default HomePage;