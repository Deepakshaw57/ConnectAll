import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/all')
      .then(res => setUsers(res.data))
      .catch(() => alert('Failed to load users'));
  }, []);

  return (
    <div>
      <h2>All Registered Users</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>College</th><th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.college}</td>
              <td>{user.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
