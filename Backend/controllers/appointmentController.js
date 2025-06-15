const Appointment = require('../models/Appointment');
const asyncHandler = require('express-async-handler');

const createAppointment = asyncHandler(async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ success: true, appointment });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const getAppointments = asyncHandler(async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @desc    Update appointment contacted status
// @route   PUT /api/appointments/:id/contacted
// @access  Private (Admin)
const updateAppointmentContactStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { contactedOnline } = req.body;

  console.log(`Received update request for appointment ID: ${id}`);
  console.log(`New contactedOnline status: ${contactedOnline}`);

  const appointment = await Appointment.findById(id);

  if (appointment) {
    appointment.contactedOnline = contactedOnline;

    const updatedAppointment = await appointment.save();
    console.log('Appointment updated successfully:', updatedAppointment);
    res.json(updatedAppointment);
  } else {
    res.status(404);
    throw new Error('Appointment not found');
  }
});

// @desc    Get appointment statistics for dashboard
// @route   GET /api/appointments/stats
// @access  Private (Admin)
const getAppointmentStatistics = asyncHandler(async (req, res) => {
  const totalAppointments = await Appointment.countDocuments({});
  const dealtWithAppointments = await Appointment.countDocuments({ contactedOnline: true });

  res.json({
    totalAppointments,
    dealtWithAppointments,
  });
});

module.exports = {
  createAppointment,
  getAppointments,
  updateAppointmentContactStatus,
  getAppointmentStatistics,
}; 