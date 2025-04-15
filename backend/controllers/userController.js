const User = require('../models/User');

exports.login = async (req, res) => {
  const { email, phone } = req.body;
  let user = await User.findOne({ email });

  if (!user) {
    user = new User({ email, phone });
    await user.save();
  }

  res.json(user);
};
