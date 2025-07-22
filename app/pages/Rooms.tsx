export default function Rooms() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Rooms</h1>
        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded">Add Room</button>
      </div>
      <div className="bg-white rounded-xl p-5 shadow">
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500">
            <tr><th>Room Number</th><th>Type</th><th>Status</th><th>Energy Usage</th></tr>
          </thead>
          <tbody>
            <tr className="border-t"><td>101</td><td>Deluxe</td><td><span className="text-green-600 font-semibold">Occupied</span></td><td>15.2 kWh</td></tr>
            <tr className="border-t"><td>102</td><td>Standard</td><td><span className="text-yellow-600 font-semibold">Vacant</span></td><td>8.7 kWh</td></tr>
            <tr className="border-t"><td>103</td><td>Suite</td><td><span className="text-green-600 font-semibold">Occupied</span></td><td>12.5 kWh</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
