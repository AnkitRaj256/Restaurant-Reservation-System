const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: String,
  date: String,
  time: String,
  type: String,
  count: Number,
  email: String,
  phone: String,
});

module.exports = mongoose.model('Reservation', reservationSchema);
