import React, { useState } from 'react';
import './RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

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

// ✅ Store token and user
localStorage.setItem('token', res.data.token);
localStorage.setItem('user', JSON.stringify(res.data.user));

alert('Registration successful!');
navigate('/home'); // redirect to homepage

    } catch (error) {
      alert('Registration failed: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="registration-wrapper">
      <header>
        <div className="title">
          <h1>ConnectAll</h1>
          <p>Bridge Between Students and Alumni</p>
        </div>
        <div className="header-buttons">
          <button className="signin-btn" onClick={() => alert('Sign In modal coming soon')}>Sign In</button>
        </div>
      </header>

      <div className="home">
        <Link to="/" className="back-button">Back to Home</Link>
      </div>

      <div className="registration-page active">
        <div className="registration-container">
          <div className="registration-header">
            <h2>Join ConnectAll</h2>
            <p>Create your student account in minutes</p>
          </div>

          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your college email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="college">College Name</label>
                <input
                  type="text"
                  name="college"
                  placeholder="Enter your college name"
                  required
                  value={form.college}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
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
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
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
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  required
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="register-btn">Create Account</button>

            <div className="login-link">
              Already have an account?{" "}
              <span onClick={() => alert('Show Sign In Modal')} className="login-link-a">
                Sign In
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
