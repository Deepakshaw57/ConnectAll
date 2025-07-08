import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Login form values:', form);

      try {
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      email: form.email,
      password: form.password
    });

      // ✅ Store token and user data
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      alert('Login successful!');
      navigate('/home');
    } catch (err) {
      console.error('Login error:', err.response?.data);
      const errorMsg = err.response?.data?.error || 'Login failed';
      alert(errorMsg);

      // ✅ Redirect to register if user not found
      if (errorMsg.toLowerCase().includes('not registered')) {
        navigate('/register');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <h2>Login to ConnectAll</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>

        {/* ✅ Register link added inside the component */}
        <p className="register-link">
          Don’t have an account?{' '}
          <span onClick={() => navigate('/register')} style={{ color: 'blue', cursor: 'pointer' }}>
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
