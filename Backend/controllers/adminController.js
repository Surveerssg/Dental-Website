const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const Admin = require('../models/adminModel');

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      username: admin.username,
      role: admin.role,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid username or password');
  }
});

module.exports = { loginAdmin }; 