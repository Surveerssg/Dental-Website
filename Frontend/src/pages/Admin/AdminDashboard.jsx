import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ totalAppointments: 0, dealtWithAppointments: 0 });
  const [loadingStats, setLoadingStats] = useState(true);
  const [statsError, setStatsError] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get('/api/appointments/stats', config);
        setStats(response.data);
      } catch (err) {
        setStatsError(err.response?.data?.message || err.message || 'Failed to fetch statistics.');
      } finally {
        setLoadingStats(false);
      }
    };

    // Fetch stats only if on the dashboard index route
    if (window.location.pathname === '/admin/dashboard' || window.location.pathname === '/admin/dashboard/') {
      fetchStats();
    } else {
      setLoadingStats(false); // If not on the dashboard index, no need to fetch stats
    }
  }, [window.location.pathname]); // Re-fetch if path changes within dashboard

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <NavLink
                to="/admin/dashboard"
                end
                className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/admin/dashboard/appointments"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                }
              >
                Appointments
              </NavLink>
            </li>
            <li className="mb-2">
              <button
                onClick={handleLogout}
                className="w-full text-left py-2 px-4 rounded hover:bg-gray-700"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50 lg:px-8 lg:py-12">
        {window.location.pathname === '/admin/dashboard' || window.location.pathname === '/admin/dashboard/' ? (
          loadingStats ? (
            <div className="text-center py-8">Loading dashboard statistics...</div>
          ) : statsError ? (
            <div className="text-center py-8 text-red-500">Error: {statsError}</div>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-8 text-gray-800">Welcome to the Admin Dashboard!</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Total Appointments Card */}
                <div className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Total Appointments</h3>
                  <p className="text-3xl font-bold text-blue-600">{stats.totalAppointments}</p>
                </div>
                {/* Dealt With Appointments Card */}
                <div className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Dealt With Appointments</h3>
                  <p className="text-3xl font-bold text-green-600">{stats.dealtWithAppointments}</p>
                </div>
                {/* Remaining Pending Appointments Card */}
                <div className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Pending Appointments</h3>
                  <p className="text-3xl font-bold text-orange-500">{stats.totalAppointments - stats.dealtWithAppointments}</p>
                </div>
              </div>
            </>
          )
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 