const express = require('express');
const router = express.Router();
const Table = require('../models/Table');

// GET all table types with their counts
router.get('/all', async (req, res) => {
    try {
      const tables = await Table.find();
      const formatted = {};
      tables.forEach(t => {
        formatted[t.type] = t.count;
      });
      res.json(formatted);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch table data' });
    }
  });

// Update table count
router.put('/:type', async (req, res) => {
  try {
    const updated = await Table.findOneAndUpdate(
      { type: req.params.type },
      { count: req.body.count },
      { new: true, upsert: true } // upsert: create if not exists
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
