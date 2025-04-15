const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  type: { type: String, required: true },
  count: { type: Number, required: true }
});

module.exports = mongoose.model('Table', tableSchema);
