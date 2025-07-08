const express = require('express');
const router = express.Router();

// ✅ Import all controller functions in one line
const {
  register,
  login,
  updateProfile,
  getAllUsers
} = require('../controllers/authController');

// ✅ Define routes
router.post('/register', register);
router.post('/login', login);
router.put('/update/:id', updateProfile);   // For profile updates
router.get('/all', getAllUsers);            // For admin to get all users

module.exports = router;
