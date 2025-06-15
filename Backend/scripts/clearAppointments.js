const mongoose = require('mongoose');
const Appointment = require('../models/Appointment');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..' , '.env') });

const clearAppointments = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for clearing appointments.');

    const result = await Appointment.deleteMany({});
    console.log(`${result.deletedCount} appointments deleted.`);

    mongoose.connection.close();
    console.log('MongoDB connection closed.');

  } catch (error) {
    console.error('Error clearing appointments:', error);
    mongoose.connection.close();
  }
};

clearAppointments(); 