import React, { useState, useEffect } from 'react';
import './RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    college: '',
    branch: '',
    password: '',
    confirmPassword: '',
  });
  const [animationStage, setAnimationStage] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const animationSequence = [
      { stage: 1, delay: 1000 },  // Spaceship enters from deep space
      { stage: 2, delay: 2000 },  // Spaceship flies to center
      { stage: 3, delay: 1500 },  // Beam down form
      { stage: 4, delay: 1000 },  // Form materializes
      { stage: 5, delay: 500 }    // Spaceship exits
    ];

    const timers = animationSequence.map((step, index) => {
      const cumulativeDelay = animationSequence.slice(0, index).reduce((sum, s) => sum + s.delay, 0);
      return setTimeout(() => {
        setAnimationStage(step.stage);
        if (step.stage === 4) setShowForm(true);
      }, cumulativeDelay);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert('Registration successful!');
      navigate('/home');
    } catch (error) {
      alert('Registration failed: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="registration-wrapper">
      {/* Space Background */}
      <div className="space-background">
        <div className="stars"></div>
        <div className="stars-small"></div>
        <div className="stars-tiny"></div>
        <div className="nebula"></div>
        <div className="distant-planets"></div>
      </div>

      {/* Animated Spaceship */}
      <motion.div 
        className={`spaceship-container stage-${animationStage}`}
        initial={{ x: -1000, y: -500, rotate: -45 }}
        animate={{
          x: animationStage >= 2 ? 0 : -1000,
          y: animationStage >= 2 ? 0 : -500,
          rotate: animationStage >= 2 ? 0 : -45,
          scale: animationStage >= 2 ? 1 : 0.5
        }}
        transition={{ 
          type: "spring", 
          stiffness: animationStage >= 2 ? 50 : 30,
          damping: 15,
          duration: 2 
        }}
      >
        <div className="spaceship">
          {/* Spaceship Body */}
          <div className="spaceship-body">
            <div className="spaceship-cockpit">
              <div className="cockpit-glow"></div>
            </div>
            <div className="spaceship-wing left"></div>
            <div className="spaceship-wing right"></div>
            <div className="spaceship-engine">
              <div className="engine-flame"></div>
            </div>
          </div>
          
          {/* Transport Beam */}
          <AnimatePresence>
            {animationStage >= 3 && (
              <motion.div
                className="transport-beam"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ scaleY: 0, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="beam-particle-1"></div>
                <div className="beam-particle-2"></div>
                <div className="beam-particle-3"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form being transported */}
          <AnimatePresence>
            {animationStage >= 3 && (
              <motion.div
                className="form-transport"
                initial={{ y: -100, opacity: 0, scale: 0.5 }}
                animate={{ y: 300, opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                onAnimationComplete={() => setShowForm(true)}
              >
                <div className="floating-form">
                  <div className="form-glow"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Flight Trail */}
        <div className="flight-trail"></div>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <div className="title">
          <h1>ConnectAll</h1>
          <p>Bridge Between Students and Alumni</p>
        </div>
        <div className="header-buttons">
          <button className="signin-btn" onClick={() => navigate('/login')}>
            Sign In
          </button>
        </div>
      </motion.header>

      {/* Back Button */}
      <motion.div 
        className="home"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <Link to="/" className="back-button">← Back to Home</Link>
      </motion.div>

      {/* Registration Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="registration-form-container"
            initial={{ y: 500, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20,
              duration: 1.5 
            }}
          >
            <motion.div 
              className="registration-container glass-card"
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="registration-header">
                <motion.h2
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  Join ConnectAll
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Your interstellar registration form has arrived!
                </motion.p>
              </div>

              <motion.form 
                className="registration-form"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <motion.div 
                    className="form-group"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.7 }}
                  >
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </motion.div>
                  <motion.div 
                    className="form-group"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="form-group"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.9 }}
                >
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your college email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </motion.div>

                <div className="form-row">
                  <motion.div 
                    className="form-group"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.0 }}
                  >
                    <label htmlFor="college">College Name</label>
                    <input
                      type="text"
                      name="college"
                      placeholder="Enter your college name"
                      required
                      value={form.college}
                      onChange={handleChange}
                    />
                  </motion.div>
                  <motion.div 
                    className="form-group"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.1 }}
                  >
                    <label htmlFor="branch">Branch</label>
                    <select
                      name="branch"
                      required
                      value={form.branch}
                      onChange={handleChange}
                    >
                      <option value="">Select your branch</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Civil">Civil</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Other">Other</option>
                    </select>
                  </motion.div>
                </div>

                <div className="form-row">
                  <motion.div 
                    className="form-group"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.2 }}
                  >
                    <label htmlFor="password">Create Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="At least 8 characters"
                      required
                      minLength="8"
                      value={form.password}
                      onChange={handleChange}
                    />
                  </motion.div>
                  <motion.div 
                    className="form-group"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.3 }}
                  >
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      required
                      value={form.confirmPassword}
                      onChange={handleChange}
                    />
                  </motion.div>
                </div>

                <motion.button 
                  type="submit" 
                  className="register-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  Create Account
                </motion.button>

                <motion.div 
                  className="login-link"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.7 }}
                >
                  Already have an account?{" "}
                  <span onClick={() => navigate('/login')} className="login-link-a">
                    Sign In
                  </span>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Space Dust Particles */}
      <div className="space-dust">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="dust-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 7}s`
          }}></div>
        ))}
      </div>
    </div>
  );
};

export default RegisterPage;