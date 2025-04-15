const Table = require('../models/Table');

exports.getTables = async (req, res) => {
  const tables = await Table.find();
  res.json(tables);
};

exports.updateTables = async (req, res) => {
  const { type, count } = req.body;
  const existing = await Table.findOne({ type });

  if (existing) {
    existing.count = count;
    await existing.save();
    return res.json(existing);
  }

  const newTable = new Table({ type, count });
  await newTable.save();
  res.json(newTable);
};
