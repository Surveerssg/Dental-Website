import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(`${config.apiBaseUrl}/api/appointments`, axiosConfig);
        setAppointments(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch appointments.');
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  const handleContactStatusChange = async (id, currentStatus) => {
    setUpdateError(null);
    try {
      const token = localStorage.getItem('adminToken');
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        `${config.apiBaseUrl}/api/appointments/${id}/contacted`,
        { contactedOnline: !currentStatus },
        axiosConfig
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((app) =>
          app._id === id ? { ...app, contactedOnline: response.data.contactedOnline } : app
        )
      );
    } catch (err) {
      setUpdateError(err.response?.data?.message || err.message || 'Failed to update contact status.');
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading appointments...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">All Appointments</h2>
      {!Array.isArray(appointments) || appointments.length === 0 ? (
        <p className="text-gray-600">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Time</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Service</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Message</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contacted</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(appointments) && appointments.map((appointment) => (
                <tr key={appointment._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{appointment.name}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{appointment.email}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{appointment.phone}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{new Date(appointment.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{appointment.time}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{appointment.service}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{appointment.message}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
                    <input
                      type="checkbox"
                      checked={appointment.contactedOnline}
                      onChange={() => handleContactStatusChange(appointment._id, appointment.contactedOnline)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AppointmentsList; 