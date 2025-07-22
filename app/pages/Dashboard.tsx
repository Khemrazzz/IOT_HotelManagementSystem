export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl p-5 shadow">
          <p className="text-gray-500">Rooms</p>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow">
          <p className="text-gray-500">Devices</p>
          <p className="text-2xl font-bold">34</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow">
          <p className="text-gray-500">Total Energy Usage</p>
          <p className="text-2xl font-bold">245 kWh</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow">
          <p className="text-gray-500">Active Alerts</p>
          <p className="text-2xl font-bold">3</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow">
          <h2 className="text-lg font-semibold mb-4">Rooms</h2>
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr><th>Room</th><th>Status</th><th>Energy</th></tr>
            </thead>
            <tbody>
              <tr className="border-t"><td>101</td><td>Occupied</td><td>15.2 kWh</td></tr>
              <tr className="border-t"><td>102</td><td>Vacant</td><td>8.7 kWh</td></tr>
              <tr className="border-t"><td>103</td><td>Occupied</td><td>12.5 kWh</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-xl p-5 shadow">
          <h2 className="text-lg font-semibold mb-4">Devices</h2>
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr><th>Device</th><th>Room</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr className="border-t"><td>Light</td><td>101</td><td>On</td></tr>
              <tr className="border-t"><td>Smart Plug</td><td>101</td><td>Off</td></tr>
              <tr className="border-t"><td>TV</td><td>103</td><td>On</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
