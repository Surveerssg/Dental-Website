const mongoose = require('mongoose');
const Admin = require('../models/adminModel');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..' , '.env') });

const createDefaultAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for admin creation.');

    const adminExists = await Admin.findOne({ username: 'admin' });

    if (adminExists) {
      console.log('Default admin user already exists.');
      mongoose.connection.close();
      return;
    }

    const admin = await Admin.create({
      username: 'admin',
      password: 'Sarabpreet@2106',
      role: 'admin',
    });

    console.log(`Admin user created: ${admin.username}`);
    mongoose.connection.close();

  } catch (error) {
    console.error('Error creating default admin:', error);
    mongoose.connection.close();
  }
};

createDefaultAdmin(); 