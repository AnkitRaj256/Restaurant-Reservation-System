const express = require('express');
const router = express.Router();
const Owner = require('../models/Owner');

// Register/Login Owner (for now we'll treat as login or register)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    let owner = await Owner.findOne({ email });

    if (!owner) {
      // Register new owner
      owner = new Owner({ email, password });
      await owner.save();
      return res.status(201).json({ message: 'Registered successfully', owner });
    }

    if (owner.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.json({ message: 'Login successful', owner });
  } catch (err) {
    console.error('Owner login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
