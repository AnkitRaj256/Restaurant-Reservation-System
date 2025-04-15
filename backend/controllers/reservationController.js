const Reservation = require('../models/Reservation');
const Table = require('../models/Table');

exports.createReservation = async (req, res) => {
  const { date, time, type, count, email, phone } = req.body;

  const table = await Table.findOne({ type });

  if (!table || table.count < count) {
    return res.status(400).json({ error: 'Not enough tables available' });
  }

  const reservation = new Reservation({ date, time, type, count, email, phone });
  await reservation.save();

  table.count -= count;
  await table.save();

  res.json({ success: true, reservation });
};

