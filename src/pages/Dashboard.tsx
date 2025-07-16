import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient';

interface Room {
  id: number;
  room_number: string;
  location: string;
}

const Dashboard: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error } = await supabase.from('rooms').select('*');
      if (error) {
        console.error('Error fetching rooms:', error.message);
      } else {
        setRooms(data as Room[]);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Hotel Room Dashboard</h1>
      {rooms.length > 0 ? (
        <ul className="space-y-2">
          {rooms.map((room) => (
            <li key={room.id} className="bg-white p-4 rounded shadow">
              Room {room.room_number} — {room.location}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No rooms found in database.</p>
      )}
    </div>
  );
};

export default Dashboard;
