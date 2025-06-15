const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments, updateAppointmentContactStatus, getAppointmentStatistics } = require('../controllers/appointmentController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/api/appointments')
  .post(createAppointment)
  .get(protect, admin, getAppointments);

router.route('/api/appointments/:id/contacted')
  .put(protect, admin, updateAppointmentContactStatus);

router.route('/api/appointments/stats')
  .get(protect, admin, getAppointmentStatistics);

module.exports = router; 