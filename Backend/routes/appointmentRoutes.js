const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments } = require('../controllers/appointmentController');

router.route('/api/appointments')
  .post(createAppointment)
  .get(getAppointments);

module.exports = router; 