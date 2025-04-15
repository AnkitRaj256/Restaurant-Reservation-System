const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation'); // <-- This must be correct

// POST: /api/reservation/book
router.post('/book', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(200).json({ message: 'Reservation successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save reservation' });
  }
});

// GET: /api/reservations
router.get('/reservations', async (req, res) => {
    try {
      const reservations = await Reservation.find().sort({ date: 1 });
      res.status(200).json(reservations);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch reservations' });
    }
  });
  
// DELETE reservation by ID
router.delete('/delete/:id', async (req, res) => {
    try {
      const deleted = await Reservation.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Reservation not found' });
      res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete reservation' });
    }
  });
  
module.exports = router;
