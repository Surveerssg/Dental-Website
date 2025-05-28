const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  gender: String,
  contact: String,
  date: String,
  time: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment; 