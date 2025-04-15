const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Login route
router.post('/login', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user || user.password !== password || user.name !== name) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

// Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'User already exists' });
  
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

// Get all registered users
router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users); // Send users to frontend
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


module.exports = router;
