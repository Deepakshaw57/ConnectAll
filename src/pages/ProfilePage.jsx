import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProfilePage.css';

const ProfilePage = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/login');
    } else {
      setForm(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(
        `http://localhost:5000/api/auth/update/${form.id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert('Profile updated!');
    } catch (err) {
      console.error('Update Error:', err);
      alert('Update failed');
    }
  };

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <form onSubmit={handleUpdate}>
        <input name="firstName" value={form.firstName || ''} onChange={handleChange} />
        <input name="lastName" value={form.lastName || ''} onChange={handleChange} />
        <input name="college" value={form.college || ''} onChange={handleChange} />
        <input name="branch" value={form.branch || ''} onChange={handleChange} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
