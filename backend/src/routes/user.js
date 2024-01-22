// src/routes/user.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

// Protected route: Fetch user details
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    // Access the authenticated user's ID from req.user
    const userId = req.user.userId;

    // Fetch user details from the database
    const user = await User.findById(userId);

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
