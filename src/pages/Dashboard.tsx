import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';

const Dashboard: React.FC = () => {
  const [rooms, setRooms] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error } = await supabase.from('rooms').select('*');
      if (error) console.error('Error fetching rooms:', error.message);
      else setRooms(data || []);
    };
    fetchRooms();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">IoT Hotel Energy Dashboard</h1>
        <button onClick={handleLogout} className="btn-secondary">Logout</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold text-gray-700">Total Rooms</h3>
          <p className="text-2xl text-blue-600">{rooms.length}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold text-gray-700">Alerts Today</h3>
          <p className="text-2xl text-red-600">2</p> {/* Placeholder */}
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold text-gray-700">Energy Used</h3>
          <p className="text-2xl text-green-600">145.6 kWh</p> {/* Placeholder */}
        </div>
      </div>

      <div className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Room List</h2>
        <ul className="divide-y divide-gray-200">
          {rooms.map((room) => (
            <li key={room.id} className="py-2">Room {room.room_number} — {room.location}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
